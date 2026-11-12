export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  // 'job' is a service by the work done; 'format' is a page for one type of project.
  kind: 'job' | 'format';
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  // ASSUMPTION: starting prices are suggestions. Confirm before launch.
  priceFrom: number;
  priceUnit: string;
  includes: string[];
  problems: { title: string; body: string }[];
  priceFactors: string[];
  faqs: Faq[];
  work: string[];
}

export const services: Service[] = [
  {
    slug: 'youtube-show-audio-post',
    kind: 'format',
    name: 'YouTube show audio post',
    short:
      'Full mix to picture for multi-mic shows: dialogue cleanup, mic-by-mic editing, music, sound effects and a master ready for upload.',
    metaTitle: 'YouTube Show Audio Post & Mixing',
    metaDescription:
      'Audio post-production for YouTube series and video podcasts. Multi-lav dialogue cleanup, music and SFX mixed to picture. 2–5 day turnaround.',
    h1: 'Audio post for YouTube shows',
    intro:
      'Your editor cuts the picture. I make it sound like a real production: every voice clear, the room under control, music and effects sitting where they should, and a master that holds up on phones, TVs and headphones.',
    priceFrom: 450,
    priceUnit: 'per episode',
    includes: [
      'Dialogue cleanup and noise reduction on every mic',
      'Dialogue editing by hand, so only the right mics are open',
      'Level matching between speakers and scenes',
      'Music and sound effects mixed to picture',
      'Additional sound effects and music where the cut needs them',
      'Master at YouTube loudness, checked on small speakers',
      'Mix file synced to your timeline, stems on request',
    ],
    problems: [
      {
        title: 'Four or more people, every mic hearing everyone',
        body: 'Lav mics on a group pick up each other. Left alone you get a hollow, phasey sound. Automatic tools cut words off or pump. I go through the conversation by hand and decide which mics stay open, so it sounds natural.',
      },
      {
        title: 'Big rooms and echo',
        body: 'Warehouses and large sets put reverb on every voice. I remove the room from the dialogue without leaving it thin or robotic.',
      },
      {
        title: 'Shoots that are loud, fast and outdoors',
        body: 'Wind, engines, crowds and people talking over each other at different volumes. I get each voice clear and even while keeping the energy of the moment.',
      },
    ],
    priceFactors: [
      'Runtime of the episode',
      'Number of microphones',
      'Recording conditions (room, wind, background noise)',
      'How much music and sound design is needed',
      'Turnaround time',
    ],
    faqs: [
      {
        q: 'What should my editor send?',
        a: 'An AAF or OMF export from Premiere, Resolve or Final Cut with each mic on its own track and handles on the clips, plus a reference video with burned-in timecode. If that is not possible, separate WAV files per mic and a reference video work too.',
      },
      {
        q: 'Can you add music and sound effects, or only mix what is there?',
        a: 'Both. I mix what your editor has placed and add effects, ambience or music where the cut needs it. I also compose original themes and cues if you want a sound that belongs to your show.',
      },
      {
        q: 'What loudness do you master to?',
        a: 'For YouTube I deliver around -14 LUFS integrated with controlled true peaks, which is what the platform normalizes to. If your show also goes out as an audio podcast I can deliver a second master at podcast loudness.',
      },
      {
        q: 'Do you work with a show every week?',
        a: 'Yes. Most of my work is ongoing series. Recurring shows get a set delivery schedule and a lower per-episode rate.',
      },
    ],
    work: ['subjects', 'hot-laps'],
  },
  {
    slug: 'podcast-editing-mixing',
    kind: 'format',
    name: 'Podcast audio editing and mixing',
    short:
      'Clean, even, professional-sounding episodes delivered on schedule, for audio and video podcasts.',
    metaTitle: 'Podcast Audio Editing, Mixing & Mastering',
    metaDescription:
      'Podcast audio editing, mixing and mastering by an engineer with 250+ episodes for TMG Studios. Mic cleanup, noise removal and level matching.',
    h1: 'Podcast audio editing, mixing and mastering',
    intro:
      'I spent three years as the in-house engineer at TMG Studios mixing every show on the network, then kept going as a contractor. Your episode gets the same treatment: clean voices, consistent levels, and a master that meets platform specs every time.',
    priceFrom: 150,
    priceUnit: 'per episode',
    includes: [
      'Audio editing: mic bleed, bumps, coughs and clicks cleaned up',
      'Noise, hum and room cleanup',
      'Level matching between hosts and guests',
      'EQ and compression tuned to each voice',
      'Removal of clicks, plosives and harsh sibilance',
      'Intro, outro, music and ad breaks mixed in',
      'Master at podcast loudness (-16 LUFS stereo)',
      'WAV and MP3 delivery, ready to upload',
    ],
    problems: [
      {
        title: 'One host is loud, the guest is quiet',
        body: 'Listeners should never reach for the volume. I even out every speaker so the episode plays at one comfortable level.',
      },
      {
        title: 'Remote guests on bad connections',
        body: 'Laptop mics, echoey kitchens and call compression. I clean up what the recording gave you and match it to the host as closely as it will go.',
      },
      {
        title: 'Every episode sounds a bit different',
        body: 'I build a session template for your show so the sound stays consistent from episode to episode, whoever recorded it.',
      },
    ],
    priceFactors: [
      'Runtime of the episode',
      'Number of speakers and mics',
      'Condition of the recording',
      'Episodes per month',
    ],
    faqs: [
      {
        q: 'Do you edit content too?',
        a: 'No. I edit the audio, not the content: cleaning up each mic, removing noises and fixing levels. Deciding what stays in the episode and cutting it for length stays with you or your editor, and I work on the finished cut.',
      },
      {
        q: 'Can you handle a video podcast?',
        a: 'Yes. I mix to your video edit and deliver audio that lines up with your timeline, with a separate master for audio platforms if you publish in both places.',
      },
      {
        q: 'What format should I send?',
        a: 'One WAV file per speaker is best. If you recorded with Riverside, Zencastr or SquadCast, send the separate tracks they give you. A single mixed file also works, with less room for repair.',
      },
      {
        q: 'Do you offer monthly rates?',
        a: 'Yes. Shows that commit to four or more episodes a month get a lower per-episode rate and a fixed delivery day.',
      },
    ],
    work: ['tmg-studios'],
  },
  {
    slug: 'audio-repair',
    kind: 'job',
    name: 'Audio repair and noise removal',
    short:
      'Rescue for any voice recording with wind, echo, background noise, hum, clipping or rustle, when recording it again is not an option.',
    metaTitle: 'Audio Repair & Noise Removal Service',
    metaDescription:
      'Fix wind noise, echo, background noise, hum and clipping in videos, podcasts, interviews and voice recordings. Send a clip for a free assessment.',
    h1: 'Audio repair and noise removal',
    intro:
      'The recording is done and the audio has a problem. It might be an interview, a pitch video, a podcast or a voiceover. Before you scrap it or record again, send me a clip. Most of what sounds ruined can be brought back to clear, natural speech.',
    priceFrom: 100,
    priceUnit: 'minimum per project',
    includes: [
      'Wind and handling noise removal',
      'De-reverb for echoey rooms',
      'Mic bleed and crosstalk cleanup',
      'Hum, buzz and hiss removal',
      'Repair of clipped and distorted peaks',
      'Clothing rustle and lav bump cleanup',
      'A free, honest assessment of what is fixable before you commit',
    ],
    problems: [
      {
        title: 'Wind across the microphones',
        body: 'Low rumble and gusts that bury the voice. I separate speech from wind and rebuild what the gusts covered, as on an interview series filmed on a moving go-kart.',
      },
      {
        title: 'Too much room',
        body: 'Reverb makes dialogue tiring to listen to and hard to understand. De-reverb done carefully pulls the voice forward and keeps it human.',
      },
      {
        title: 'One-click AI cleanup made it worse',
        body: 'Automatic enhancers can leave voices watery or swallow the ends of words. I use the same class of tools by hand, a little at a time, and stop before the artifacts start.',
      },
    ],
    priceFactors: [
      'Length of the material',
      'How severe the problem is',
      'Number of separate mics or files',
      'Turnaround time',
    ],
    faqs: [
      {
        q: 'Can every recording be saved?',
        a: 'No, and I will tell you when it cannot. Heavy clipping across a whole take or a voice completely buried under music has limits. Send a sample first and I will tell you what to expect.',
      },
      {
        q: 'What do you use?',
        a: 'Mostly iZotope RX and Pro Tools, combined with manual editing. The tools matter less than knowing how far to push them before the voice stops sounding like a person.',
      },
      {
        q: 'Can you repair a single clip?',
        a: 'Yes. One-off repairs are welcome, from a single interview answer or a short business video to a full episode. There is a small project minimum.',
      },
      {
        q: 'How should I send the audio?',
        a: 'Send the original recording, not an export that has already been processed or compressed. Untouched files give the best results.',
      },
    ],
    work: ['hot-laps', 'subjects'],
  },
  {
    slug: 'audio-editing-mixing-mastering',
    kind: 'job',
    name: 'Audio editing, mixing and mastering',
    short:
      'Mics cleaned up and edited, voices balanced, music in place, and a master at the right loudness for wherever it is going. For one recording or a whole series.',
    metaTitle: 'Audio Editing, Mixing & Mastering Service',
    metaDescription:
      'Audio editing, mixing and mastering for podcasts, YouTube shows, meditations, courses and narration. Clean mics, even levels, 2–5 day turnaround.',
    h1: 'Audio editing, mixing and mastering',
    intro:
      'You have a recording that is basically fine and needs to sound finished. I edit the audio mic by mic, balance every voice, sit the music and effects where they belong, and master it to the loudness your platform expects.',
    priceFrom: 150,
    priceUnit: 'per episode or recording',
    includes: [
      'Audio editing: mics muted when nobody is speaking into them, bumps, coughs and clicks removed, overlaps tidied',
      'Light cleanup of noise, hum and room sound',
      'Level matching between speakers and sections',
      'EQ and compression tuned to each voice',
      'Removal of clicks, plosives and harsh sibilance',
      'Music, ambience and effects balanced under the voice',
      'Master at the loudness your platform expects',
      'Delivery in the formats you need, ready to upload',
    ],
    problems: [
      {
        title: 'It sounds homemade',
        body: 'The content is good and the audio gives it away: thin voices, uneven volume, music that is too loud or too quiet. A proper mix makes it sound like it was made on purpose.',
      },
      {
        title: 'Listeners keep adjusting the volume',
        body: 'Quiet passages, loud laughs, one speaker far from the mic. I even everything out so it plays at one comfortable level from start to finish.',
      },
      {
        title: 'Different platforms, different requirements',
        body: 'YouTube, podcast apps and audiobook stores all expect different loudness. I master for where the audio is going so the platform does not turn it down or reject it.',
      },
    ],
    priceFactors: [
      'Length of the recording',
      'Number of speakers and mics',
      'Condition of the recording',
      'How much music and sound design is involved',
      'How many recordings are in the project',
    ],
    faqs: [
      {
        q: 'What is the difference between editing, mixing and mastering?',
        a: 'Audio editing is cleaning up the recording itself: deciding which mics are open, cutting out bumps and noises, tidying overlaps. Mixing is balancing the parts: each voice, the music, the effects. Mastering is the final pass so it is the right loudness and sounds good on phones, earbuds, cars and speakers. For spoken audio I do all three as one job.',
      },
      {
        q: 'Do you edit the content as well?',
        a: 'No. I edit the audio, not the content. Choosing what stays in, cutting for length and removing tangents stays with you or your editor, and I work on the finished cut.',
      },
      {
        q: 'What kinds of projects do you take?',
        a: 'Anything built around a voice: podcasts, YouTube shows, guided meditations, online courses, narration, interviews and business videos.',
      },
      {
        q: 'My recording has real problems. Is this the right service?',
        a: 'If there is heavy wind, echo or background noise, it needs repair before it can be mixed. Send a clip and I will tell you which it is. Repair and mixing can be quoted together as one price.',
      },
      {
        q: 'What should I send?',
        a: 'The original, unprocessed recordings, with each voice and each piece of music as its own file if you have them that way. A single combined file also works, with less room to adjust the balance.',
      },
    ],
    work: ['tmg-studios', 'subjects'],
  },
  {
    slug: 'sound-design-music',
    kind: 'job',
    name: 'Sound design and original music',
    short:
      'Themes, intros, stingers, ambiences and effects made for your show, from a producer with 200M+ streams.',
    metaTitle: 'Sound Design & Original Music for Shows',
    metaDescription:
      'Original theme music, intros, stingers and sound design for podcasts, YouTube shows and video, from a producer with 200M+ streams.',
    h1: 'Sound design and original music',
    intro:
      'A show people recognize with their eyes closed. I write themes and build sound palettes that fit your identity, so you are not picking through the same stock library as everyone else.',
    priceFrom: 500,
    priceUnit: 'per theme or sound package',
    includes: [
      'Original theme and intro music',
      'Stingers, transitions and bumpers',
      'Background ambiences and beds',
      'Custom sound effects',
      'Scoring to picture for trailers and short films',
      'Alternate lengths and stems for your editor',
    ],
    problems: [
      {
        title: 'Stock music that sounds like stock music',
        body: 'Library tracks turn up on a hundred other channels. An original theme is yours alone and can be cut into every length your editor needs.',
      },
      {
        title: 'A show with a world to build',
        body: 'For Company Lot I composed music, effects and ambiences to match a dystopian setting, and built retro sci-fi sound assets for the TMG Podcast brand.',
      },
      {
        title: 'Music and dialogue fighting each other',
        body: 'Because I mix dialogue for a living, I write music that leaves space for the voice.',
      },
    ],
    priceFactors: [
      'Number and length of pieces',
      'Scoring to picture versus standalone themes',
      'Number of alternate versions and stems',
      'How the music will be used',
    ],
    faqs: [
      {
        q: 'Who owns the music?',
        a: 'Usage is agreed up front and written into the quote. For most shows that means a license to use the music across your episodes and promotion without ongoing fees.',
      },
      {
        q: 'What styles do you write?',
        a: 'My production work runs from hip-hop to metal, and my show work from comedy podcast themes to dystopian sci-fi. Send references for what you have in mind.',
      },
      {
        q: 'Can you match the sound of an existing show?',
        a: 'I can write in the same spirit and energy as a reference without copying it, and I can extend an existing sound palette with new pieces that fit.',
      },
    ],
    work: ['company-lot', 'tmg-studios'],
  },
  {
    slug: 'guided-meditation-narration',
    kind: 'format',
    name: 'Guided meditation and narration',
    short:
      'Quiet, close, distraction-free voice recordings: meditations, courses, audiobooks and voiceover, cleaned up and mastered.',
    metaTitle: 'Guided Meditation & Narration Audio Mixing',
    metaDescription:
      'Cleanup, mixing and mastering for guided meditations, courses, audiobooks and voiceover. Noise and mouth-click removal, music balanced under the voice.',
    h1: 'Audio for guided meditations and narration',
    intro:
      'When the whole product is one voice in someone\'s headphones, every small flaw is audible: a click, a breath, a hiss in the pauses. I clean up the recording, balance any music or ambience under the voice, and master the full set so every track matches.',
    priceFrom: 100,
    priceUnit: 'minimum per project',
    includes: [
      'Background noise and hiss removal, including in the silences',
      'Mouth clicks, plosives and harsh sibilance removed',
      'Breaths reduced or removed to taste',
      'A warm, even voice level from start to finish',
      'Music, ambience or tones balanced under the voice',
      'Matching loudness across every track in a series',
      'Masters in the formats your app, course platform or store requires',
    ],
    problems: [
      {
        title: 'Noise you only notice in the quiet parts',
        body: 'Meditations and narration have long pauses, and that is where room noise, hiss and computer fans show up. I clean the gaps without making the silence sound cut out.',
      },
      {
        title: 'Clicks, breaths and pops',
        body: 'A close microphone picks up every mouth sound. I remove them by hand so the voice stays natural and nothing pulls the listener out.',
      },
      {
        title: 'Tracks that do not match each other',
        body: 'Recorded on different days, a set of tracks ends up at different volumes and tones. I master them as a set so the whole series sounds like one session.',
      },
    ],
    priceFactors: [
      'Total length of the recordings',
      'Number of tracks or chapters',
      'Condition of the recording and the room',
      'Whether music or ambience needs to be mixed in',
      'Delivery requirements of your platform',
    ],
    faqs: [
      {
        q: 'I recorded at home. Can it still sound professional?',
        a: 'Usually, yes. A decent microphone in a quiet, soft room gives me plenty to work with. Send a short clip and I will tell you what to expect, and what to change before you record the rest.',
      },
      {
        q: 'Can you mix my voice with music or ambient sound?',
        a: 'Yes. Send the voice and the music as separate files and I will balance them so the voice stays clear and the music supports it. I can also compose original music or ambience for the series.',
      },
      {
        q: 'Can you master to audiobook or app requirements?',
        a: 'Yes. Tell me where the audio will be published and send their specification if they have one, and I will deliver files that meet it.',
      },
      {
        q: 'How is a series priced?',
        a: 'By total length and the condition of the recordings, as one flat price for the whole set. Send one track as a sample and I will quote the rest from it.',
      },
    ],
    work: [],
  },
];

export const jobs = services.filter((s) => s.kind === 'job');
export const formats = services.filter((s) => s.kind === 'format');

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
