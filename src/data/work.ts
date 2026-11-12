export interface Video {
  id: string;
  title: string;
  start?: number;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  role: string;
  summary: string;
  metaDescription: string;
  challenge: string;
  approach: string[];
  tags: string[];
  videos: Video[];
  services: string[];
  featured: boolean;
}

export const work: CaseStudy[] = [
  {
    slug: 'subjects',
    title: 'Subjects',
    client: 'Noel Miller',
    role: 'Dialogue edit, mix and master to picture',
    summary:
      'A YouTube series that puts four or more people in a room for interviews and activities. Multi-lav mixing in large, lively spaces.',
    metaDescription:
      'Case study: audio post for Noel Miller’s YouTube series Subjects. Multi-lav dialogue editing, de-reverb, music and SFX mixing, and mastering to picture.',
    challenge:
      'Every episode has four or more guests on lavalier mics, plus the host, moving through interviews and group exercises. In a large room each mic picks up reverb and everyone else’s voice. In a loud, hectic session people talk over each other at very different volumes.',
    approach: [
      'Dialogue de-reverb to take the size of the room off each voice without thinning it out.',
      'Mic-by-mic editing by hand: opening and closing each lav through the conversation, and knowing when to leave a second mic open so reactions and overlaps still feel natural. Automatic mixers can do this, but they often miss words and sound unnatural.',
      'Level matching across very different voices so nobody jumps out or disappears.',
      'Mixing the music and sound effects from the edit, adding more where the cut needs it.',
      'Mastering to video for YouTube.',
    ],
    tags: ['Multi-lav', 'De-reverb', 'Mix to picture', 'Sound effects'],
    videos: [
      { id: 'dwQJQjxs_8s', title: '4 Astrologers VS Real Murder Cases' },
      { id: 'XwJHpMdrxEQ', title: 'I Tested Gen Z’s Basic Computer Skills' },
    ],
    services: ['youtube-show-audio-post', 'audio-repair'],
    featured: true,
  },
  {
    slug: 'hot-laps',
    title: 'Hot Laps',
    client: 'Noel Miller',
    role: 'Dialogue repair and mix',
    summary:
      'An interview series filmed on a fast-moving go-kart. Multiple lav mics, heavy wind and engine noise.',
    metaDescription:
      'Case study: removing wind and engine noise from multi-lav interviews filmed on a moving go-kart for Noel Miller’s Hot Laps, featuring Daniel Ricciardo.',
    challenge:
      'The interview happens at speed, outdoors, on a go-kart. Wind hits every lav mic and there is constant background noise underneath the conversation. Each voice still has to be clear and audible, and it has to sound like people talking, not like processed audio.',
    approach: [
      'Wind and background noise reduction on each mic, pushed only as far as the voice stays natural.',
      'Balancing multiple lav mics so every line is clear whoever is speaking.',
      'Keeping enough of the track and engine in the mix that the setting still feels real.',
    ],
    tags: ['Wind noise', 'Multi-lav', 'Dialogue repair'],
    videos: [{ id: 'nAImeTDv4lc', title: 'Daniel Ricciardo Trips Balls with Noel Miller on Hot Laps' }],
    services: ['audio-repair', 'youtube-show-audio-post'],
    featured: true,
  },
  {
    slug: 'tmg-studios',
    title: 'TMG Studios',
    client: 'TMG Studios, Los Angeles',
    role: 'In-house engineer 2018–2021, contract specialist since',
    summary:
      'Engineer for every show on the network: 250+ episodes and more than 200 million combined views and downloads.',
    metaDescription:
      'Case study: 250+ podcast episodes mixed, mastered and repaired for TMG Studios, including TMG Podcast. 200M+ combined views and downloads.',
    challenge:
      'A growing podcast network publishing several shows every week needs every episode to sound consistent and go out on time, whoever was in the room and however the recording went.',
    approach: [
      'Engineered every show on the network: TMG Podcast, TMG Love Island, Trillionaire Mindset, and Brooke and Connor Make A Podcast.',
      'Mixed, mastered and repaired 250+ episodes in Pro Tools and iZotope RX.',
      'Wrote the TMG Podcast intro music and scored an original short film for the network.',
    ],
    tags: ['Podcast mixing', 'Mastering', 'Theme music'],
    videos: [
      { id: 'ZkBwSFQBJM8', title: 'TMG Love Island Special Ep. 1: dialogue mixing' },
      { id: '-0N-s2GpSnc', title: 'TMG Podcast: intro music', start: 149 },
    ],
    services: ['podcast-editing-mixing', 'sound-design-music'],
    featured: true,
  },
  {
    slug: 'company-lot',
    title: 'Company Lot',
    client: 'Noel Miller',
    role: 'Original music and sound design',
    summary:
      'Original music, sound effects and background ambiences composed for a show with a dystopian identity.',
    metaDescription:
      'Case study: original music, sound effects and ambiences for Noel Miller’s Company Lot, plus retro sci-fi sound assets for the TMG Podcast brand.',
    challenge:
      'Company Lot needed a sound world of its own: music, effects and ambience that tell you where you are before anyone speaks.',
    approach: [
      'Composed original music to match the show’s dystopian identity.',
      'Designed sound effects and background ambiences for the setting.',
      'Built retro sci-fi sound assets for the TMG Podcast brand.',
    ],
    tags: ['Original music', 'Sound design', 'Trailer'],
    videos: [{ id: 'Ri7L4T6oU2w', title: 'Company Lot: trailer music and sound design' }],
    services: ['sound-design-music'],
    featured: false,
  },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug)!;
