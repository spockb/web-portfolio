// Renders AUDIO_TRACKS (see tracks-data.js) into custom, accessible players.
// Cards whose audio file 404s (i.e. not uploaded yet) fall back to a
// "Sample coming soon" state instead of showing a broken control.

function formatTrackTime(seconds) {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function buildTrackCard(track) {
  const card = document.createElement('div')
  card.className = 'track-card'
  card.dataset.trackId = track.id

  const head = document.createElement('div')
  head.className = 'track-card__head'

  const title = document.createElement('h3')
  title.className = 'track-card__title'
  title.textContent = track.title
  head.appendChild(title)

  let toggleBefore, toggleAfter
  if (track.type === 'before-after') {
    const toggleGroup = document.createElement('div')
    toggleGroup.className = 'track-card__toggle'
    toggleGroup.setAttribute('role', 'group')
    toggleGroup.setAttribute('aria-label', `${track.title} version`)

    toggleBefore = document.createElement('button')
    toggleBefore.type = 'button'
    toggleBefore.className = 'track-toggle-btn track-toggle-btn--active'
    toggleBefore.textContent = 'Before'
    toggleBefore.setAttribute('aria-pressed', 'true')

    toggleAfter = document.createElement('button')
    toggleAfter.type = 'button'
    toggleAfter.className = 'track-toggle-btn'
    toggleAfter.textContent = 'After'
    toggleAfter.setAttribute('aria-pressed', 'false')

    toggleGroup.appendChild(toggleBefore)
    toggleGroup.appendChild(toggleAfter)
    head.appendChild(toggleGroup)
  }

  card.appendChild(head)

  const player = document.createElement('div')
  player.className = 'track-card__player'

  const playBtn = document.createElement('button')
  playBtn.type = 'button'
  playBtn.className = 'track-play-btn'
  playBtn.setAttribute('aria-label', `Play ${track.title}`)
  playBtn.textContent = '▶'

  const progress = document.createElement('input')
  progress.type = 'range'
  progress.className = 'track-progress'
  progress.min = '0'
  progress.max = '100'
  progress.value = '0'
  progress.step = '0.1'
  progress.setAttribute('aria-label', `Seek ${track.title}`)

  const timeEl = document.createElement('span')
  timeEl.className = 'track-time'
  timeEl.textContent = '0:00 / 0:00'

  player.appendChild(playBtn)
  player.appendChild(progress)
  player.appendChild(timeEl)
  card.appendChild(player)

  const status = document.createElement('p')
  status.className = 'track-card__status'
  status.setAttribute('aria-live', 'polite')
  card.appendChild(status)

  const audio = new Audio()
  audio.preload = 'metadata'
  let currentVariant = 'before'
  let isPlaying = false
  let isSeeking = false
  let unavailable = false

  const markUnavailable = () => {
    if (unavailable) return
    unavailable = true
    card.classList.add('track-card--unavailable')
    playBtn.disabled = true
    progress.disabled = true
    if (toggleBefore) toggleBefore.disabled = true
    if (toggleAfter) toggleAfter.disabled = true
    status.textContent = 'Sample coming soon'
  }

  audio.addEventListener('error', markUnavailable)
  audio.src = track.type === 'before-after' ? track.before : track.src

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(markUnavailable)
    }
  })

  audio.addEventListener('play', () => {
    isPlaying = true
    playBtn.textContent = '⏸'
    playBtn.setAttribute('aria-label', `Pause ${track.title}`)
  })
  ;['pause', 'ended'].forEach((evt) =>
    audio.addEventListener(evt, () => {
      isPlaying = false
      playBtn.textContent = '▶'
      playBtn.setAttribute('aria-label', `Play ${track.title}`)
    })
  )

  audio.addEventListener('loadedmetadata', () => {
    progress.max = String(audio.duration || 0)
    timeEl.textContent = `${formatTrackTime(0)} / ${formatTrackTime(audio.duration)}`
  })

  audio.addEventListener('timeupdate', () => {
    if (!isSeeking) progress.value = String(audio.currentTime)
    timeEl.textContent = `${formatTrackTime(audio.currentTime)} / ${formatTrackTime(audio.duration)}`
  })

  progress.addEventListener('input', () => {
    isSeeking = true
  })
  progress.addEventListener('change', () => {
    audio.currentTime = Number(progress.value)
    isSeeking = false
  })

  if (track.type === 'before-after') {
    const switchVariant = (variant) => {
      if (variant === currentVariant || unavailable) return
      const wasPlaying = isPlaying
      const resumeAt = audio.currentTime
      currentVariant = variant
      audio.src = variant === 'before' ? track.before : track.after
      audio.currentTime = resumeAt
      if (wasPlaying) audio.play().catch(markUnavailable)

      toggleBefore.classList.toggle('track-toggle-btn--active', variant === 'before')
      toggleAfter.classList.toggle('track-toggle-btn--active', variant === 'after')
      toggleBefore.setAttribute('aria-pressed', String(variant === 'before'))
      toggleAfter.setAttribute('aria-pressed', String(variant === 'after'))
      status.textContent = `Now playing: ${variant === 'before' ? 'Before' : 'After'}`
    }

    toggleBefore.addEventListener('click', () => switchVariant('before'))
    toggleAfter.addEventListener('click', () => switchVariant('after'))
  }

  return card
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tracks')
  if (!container || typeof AUDIO_TRACKS === 'undefined') return
  AUDIO_TRACKS.forEach((track) => {
    container.appendChild(buildTrackCard(track))
  })
})
