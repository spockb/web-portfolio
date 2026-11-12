// One place for business facts. Change them here and every page updates.

export const site = {
  name: 'Garrett Spach',
  brand: 'Garrett Spach Audio Post',
  descriptor: 'Audio Post',
  url: 'https://garrettspach.com',
  email: 'garrettspach@gmail.com',
  linkedin: 'https://www.linkedin.com/in/garrettspach/',
  spotify: 'https://open.spotify.com/artist/45eOANIj1vvkt8olH7Zh71',
  location: 'Remote, United States',
  tagline: 'Audio editing, repair, mixing and mastering for spoken audio',
  description:
    'Remote audio editing, repair, mixing and mastering for YouTube shows, podcasts, guided meditations and courses. 250+ episodes engineered, 200M+ views.',
  turnaround: '2–5 business days',
  revisions:
    'Yes. Send your notes and I will keep revising until you are happy with how it sounds. That covers changes to the work we agreed on. New material or a re-cut of the edit is quoted separately.',
};

export const stats = [
  { value: '250+', label: 'episodes engineered' },
  { value: '200M+', label: 'views and downloads' },
  { value: '2–5 days', label: 'typical turnaround' },
];

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/work/', label: 'Work' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
];

export const tools = ['Pro Tools', 'iZotope RX', 'Ableton Live', 'Reaper', 'Adobe Audition'];

export const process = [
  {
    title: 'Send the files',
    body: 'Fill in the quote form and share your raw audio or an export from your edit. A short clip and a few notes are enough to start.',
  },
  {
    title: 'Get a flat quote',
    body: 'I listen, tell you what is fixable, and send one fixed price for the recording, the episode or the series. No hourly surprises.',
  },
  {
    title: 'Repair and mix',
    body: `Cleanup, editing, music and effects where needed, then a master at the right loudness for your platform. Typical turnaround is ${site.turnaround}.`,
  },
  {
    title: 'Review and deliver',
    body: 'You get finished files ready to upload or drop into your edit, plus stems if you need them. Send notes and I revise until you are happy with it.',
  },
];

// Placeholders are shown in development only and are left out of production
// builds, so nothing fake can go live by accident. Replace with real quotes
// and set placeholder to false.
export const testimonials = [
  {
    quote: 'Placeholder. A short quote from Noel Miller about the audio before and after, and what the handoff is like.',
    name: 'Noel Miller',
    role: 'Creator, Subjects and Hot Laps',
    placeholder: true,
  },
  {
    quote: 'Placeholder. A short quote from a producer or editor at TMG Studios about turnaround and reliability.',
    name: 'Name',
    role: 'Producer, TMG Studios',
    placeholder: true,
  },
];

// Put files in public/audio/ and fill in before/after paths, e.g.
// before: '/audio/hotlaps-wind-before.mp3'. Entries without both files are
// shown in development only.
export const beforeAfter = [
  {
    title: 'Wind on a moving go-kart',
    source: 'Hot Laps',
    note: 'Lavalier mics at speed, constant wind and engine noise.',
    before: '',
    after: '',
  },
  {
    title: 'Big room, lots of reverb',
    source: 'Subjects',
    note: 'A group of guests in a large space, every mic hearing every voice.',
    before: '',
    after: '',
  },
  {
    title: 'Loud, hectic room',
    source: 'Subjects',
    note: 'Overlapping speakers at very different volumes.',
    before: '',
    after: '',
  },
];

export const homeFaqs = [
  {
    q: 'What kinds of projects do you take?',
    a: 'Anything built around a voice. Most of my credits are YouTube shows and podcasts, and the same work applies to guided meditations, courses, narration and one-off recordings such as a pitch video or an interview. If you are not sure it fits, ask.',
  },
  {
    q: 'Do you edit the content, or only the audio?',
    a: 'Only the audio. Audio editing means cleaning up each mic, removing bumps, clicks and noise, and tidying people talking over each other. Choosing what stays in and cutting for length stays with you or your editor.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes, everything is remote. You send files by Dropbox, Google Drive, Frame.io or whatever your team already uses, and I deliver the same way. I am based in the United States and work with clients anywhere.',
  },
  {
    q: 'How fast is the turnaround?',
    a: `Usually ${site.turnaround} from the day I receive files. Rush jobs are available when the schedule allows, so mention your deadline in the quote form.`,
  },
  {
    q: 'Can you fix audio that was recorded badly?',
    a: 'Usually, yes. Wind, room echo, mic bleed, hum, clipping and clothing rustle are all things I repair regularly. Send a clip and I will listen for free and tell you honestly what will improve and by how much before you pay for anything.',
  },
  {
    q: 'What files do you need?',
    a: 'Ideally each microphone on its own track, either as separate WAV files or an AAF or OMF export from Premiere, Resolve or Final Cut, plus a reference video. If all you have is one file, I can still work with it.',
  },
  {
    q: 'How does pricing work?',
    a: 'You get a flat price based on length, number of mics and the condition of the recording. Starting prices are on the pricing page, and ongoing shows and series get a lower rate.',
  },
];
