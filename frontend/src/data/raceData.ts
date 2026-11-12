export interface RaceStat {
  label: string;
  value: string;
  subtext: string;
}

export interface CheerZone {
  number: number;
  neighborhood: string;
  location: string;
  mile: string;
  vibe: string;
  amenities: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  photographer?: string;
  neighborhood: string;
  year: string;
  category: '26true' | 'pioneers' | 'cheer-squad' | 'finish-line';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface HistoryGrowthYear {
  year: string;
  date: string;
  stats: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  order?: number;
  showOnHome?: boolean;
}

export interface PillarItem {
  title: string;
  description: string;
  icon?: string;
  accent?: string;
  linkUrl?: string;
  linkLabel?: string;
}

export const raceData = {
  general: {
    name: "26.TRUE",
    shortName: "26.TRUE",
    tagline: "Our City. Our Way.",
    edition: "Year Seven — 2027",
    organizer: "PIONEERS Run Crew",
    description: "Established in 2021 by the leaders of PIONEERS Run Crew, 26.TRUE is a celebration of running and of Boston’s diverse neighborhoods and people. The only permitted marathon and half marathon courses running entirely within Boston city limits.",
    
    // Countdown targets:
    registrationOpenDate: "2026-11-20T08:00:00-05:00", // Friday, Nov 20, 2026 @ 8:00 AM EST
    registrationDisplayDate: "Friday, November 20, 2026 at 8:00 AM EST",
    
    raceDate: "2027-04-17T07:00:00-04:00", // Saturday, April 17, 2027 @ 7:00 AM EDT
    raceDisplayDate: "Saturday, April 17, 2027 at 7:00 AM EDT",
    
    location: "City of Boston, MA",
    neighborhoodsList: [
      "Jamaica Plain",
      "Roxbury",
      "Mattapan",
      "Dorchester",
    ],
    registrationUrl: "https://www.movemint.cc/events/Uwj1WJY",
    registrationStatus: "Opens Friday, Nov 20 @ 8 AM EST",
    fieldCaps: {
      marathon: 200,
      marathonFirstTimers: 50,
      halfMarathon: 300,
      halfMarathonFirstTimers: 75,
      waves: 5,
      waveStrategy: "Reverse Wave Start — back of the pack, slower paced runners start first so all finish together",
    },
    coaches: [
      {
        name: "Trish Moran",
        role: "Certified Run Coach",
        note: "Leading free half & full marathon training plans for our 2027 cohort",
      },
      {
        name: "Lindsey Thorne-Bingham",
        role: "Certified Run Coach",
        note: "Leading free half & full marathon training plans for our 2027 cohort",
      },
    ],
    contactEmail: "info@26true.com",
    volunteerEmail: "volunteer@26true.com",
  },
  
  announcement: {
    active: true,
    badge: "2027 Registration",
    message: "Registration for the 2027 Marathon & Half Marathon opens Friday, November 20, 2026 at 8:00 AM EST!",
    linkText: "Get Ready",
    linkUrl: "#event-info",
  },

  stats: [
    {
      label: "Course Distance",
      value: "26.2 & 13.1",
      subtext: "Only permitted courses running 100% inside Boston city limits",
    },
    {
      label: "2027 Field Cap",
      value: "500 Runners",
      subtext: "200 full marathoners (50 first-timers) + 300 half (75 first-timers)",
    },
    {
      label: "Timing Format",
      value: "Untimed",
      subtext: "Reverse wave start — celebrating every pace and background",
    },
    {
      label: "Cheer Zones",
      value: "6 Major Zones",
      subtext: "Stationed every 2–3 miles: 'If you're not running, you're cheering'",
    },
  ] as RaceStat[],

  pillars: [
    {
      title: "Our City, Our Way",
      description: "Unlike suburban-to-downtown courses that bypass Boston's neighborhoods, 26.TRUE stays 100% inside city limits through Jamaica Plain, Roxbury, Mattapan, and Dorchester.",
      icon: "map-pin",
      accent: "#d4ff00",
      linkUrl: "/history",
      linkLabel: "Read the history",
    },
    {
      title: "Untimed & Inclusive",
      description: "No clock chasing, no cutoffs, and no elitism. We run in 5 reverse waves with slower paced runners starting first, creating a collective, unified finish line celebration.",
      icon: "heart",
      accent: "#3fd4a4",
      linkUrl: "/course",
      linkLabel: "Explore the course",
    },
    {
      title: "6 Energized Cheer Zones",
      description: "Hosted by local running clubs, organizations, and brand partners every 2–3 miles with hydration, nutrition, brass horns, live DJs, and thunderous community support.",
      icon: "music",
      accent: "#d4ff00",
      linkUrl: "/course",
      linkLabel: "Explore cheer zones",
    },
    {
      title: "Founded by PIONEERS",
      description: "Established in 2021 by PIONEERS Run Crew, a Dorchester-based running community of over 900 active members and 12,000 followers dedicated to equity and representation in running.",
      icon: "users",
      accent: "#3fd4a4",
      linkUrl: "/history",
      linkLabel: "Read the history",
    },
  ] as PillarItem[],

  testimonials: [
    {
      quote: "As a back of the pack runner, I had the same support and experience as the first finishers. Breaking the ribbon like I was the first finisher was an experience I'll never forget.",
      author: "2026 Marathon Finisher",
      role: "Back of the Pack Runner",
    },
    {
      quote: "The cheer stations were giving me so much energy! Overall such a great crowd of runners, seeing people smile and encourage each other all the way! I really enjoyed that the field was so much more diverse and fun than any other events I have participated in.",
      author: "2026 Finisher",
      role: "First-Time Marathoner",
    },
    {
      quote: "It was mind blowing to watch runners coming off the half marathon and immediately checking in to volunteer, or any of the runners who crossed the finish line and immediately hit the dance floor. It's such a beloved community!",
      author: "2026 Volunteer",
      role: "Finish Line Crew",
    },
    {
      quote: "I LOVED that half the field of runners for both the half and marathon were people tackling the distance for the first time. It was so heartwarming to see people do this! This is the people's race in Boston.",
      author: "2026 Volunteer",
      role: "Cheer Zone Captain",
    },
  ] as Testimonial[],

  growthYears: [
    {
      year: "2021",
      date: "October 9, 2021",
      stats: "44 Registrants • 30 Finishers",
      highlight: "The inaugural 26.TRUE. Proving that the heart and soul of Boston distance running lives in neighborhood streets.",
    },
    {
      year: "2022",
      date: "April 16, 2022",
      stats: "30 Registrants • 28 Finishers",
      highlight: "Establishing the Patriots' Day weekend tradition on the Saturday before the commercial marathon.",
    },
    {
      year: "2023",
      date: "April 15, 2023",
      stats: "86 Registrants • 72 Finishers",
      highlight: "Rapid word-of-mouth momentum across run crews nationwide.",
    },
    {
      year: "2024",
      date: "April 13, 2024",
      stats: "200 Registrants • 161 Finishers",
      highlight: "Expanded field welcoming crews from NYC, Philly, Chicago, and Atlanta.",
    },
    {
      year: "2025",
      date: "April 19, 2025",
      stats: "276 Registrants • 100 First-Time Marathoners • 216 Finishers",
      highlight: "Built the signature 6-zone cheer station network along the course.",
    },
    {
      year: "2026",
      date: "April 18, 2026",
      stats: "187 Marathon (43 first-timers, 158 finishers) + 333 Half Marathon (55 first-timers, 207 finishers)",
      highlight: "Introduced the Half Marathon distance — community asked and it sold out in 36 hours!",
    },
    {
      year: "2027",
      date: "April 17, 2027",
      stats: "500 Capped Field: 200 Marathon (50 first-timers) + 300 Half (75 first-timers)",
      highlight: "Year Seven. Prioritizing quality over quantity, free coaching training plans, and five reverse waves.",
    },
  ] as HistoryGrowthYear[],

  course: {
    tagline: "100% Within Boston City Limits",
    googleMapsEmbedUrl: "https://www.google.com/maps/d/embed?mid=1eDX5xEsRifVGnlh3n2erNBIGduJH_NI&femb=1&ll=42.307675691093294%2C-71.09063&z=14",
    googleMapsViewerUrl: "https://www.google.com/maps/d/viewer?mid=1eDX5xEsRifVGnlh3n2erNBIGduJH_NI&femb=1&ll=42.307675691093294%2C-71.09063&z=14",
    stravaRouteUrl: "https://www.strava.com/routes/3422576664774367756",
    
    neighborhoods: [
      { 
        name: "Jamaica Plain", 
        highlight: "Southwest Corridor path, Green Street, Centre Street, Jamaica Pond",
        description: "Lush parkways and community cheer squads lining the paved paths.",
      },
      { 
        name: "Roxbury", 
        highlight: "Malcolm X Park, Nubian Square, Shelburne Community Center",
        description: "The historic cultural heartbeat of Boston with drumlines and vibrant energy.",
      },
      { 
        name: "Mattapan", 
        highlight: "Mattapan Square, River Street, Blue Hill Ave corridor",
        description: "High-energy community celebration with local DJs and neighborhood pride.",
      },
      { 
        name: "Dorchester", 
        highlight: "Franklin Park Playstead, Town Field, Dorchester Ave",
        description: "Boston's largest neighborhood, home base of PIONEERS Run Crew, and the iconic Franklin Park stretch.",
      },
    ],

    cheerZones: [
      {
        number: 1,
        neighborhood: "Roxbury",
        location: "Malcolm X Park Plaza",
        mile: "Mile 3.5",
        vibe: "Opening Hype, Live Drumline & Brass",
        amenities: ["Hydration", "Electrolytes", "Bells & Noise Makers", "Safety Support"],
      },
      {
        number: 2,
        neighborhood: "Dorchester",
        location: "Town Field Park",
        mile: "Mile 7.5",
        vibe: "Afrobeats, Caribbean Sounds & Fruit Fuel",
        amenities: ["Water", "Electrolytes", "Bananas & Oranges", "First Aid"],
      },
      {
        number: 3,
        neighborhood: "Mattapan",
        location: "Mattapan Square / River St",
        mile: "Mile 11.2",
        vibe: "Community BBQ & Live DJ Power Boost",
        amenities: ["Hydration", "Energy Chews", "Restrooms", "Hype Squad"],
      },
      {
        number: 4,
        neighborhood: "Dorchester / Franklin Park",
        location: "Franklin Park Playstead Halfway Hub",
        mile: "Mile 13.1",
        vibe: "Halfway Celebration, Crew Handoffs & Half Finish",
        amenities: ["Water", "Nuun", "Medical Tent", "Drop Bags", "Half Marathon Finish"],
      },
      {
        number: 5,
        neighborhood: "Jamaica Plain",
        location: "Southwest Corridor / Green St",
        mile: "Mile 20.5",
        vibe: "The Wall Breakers Hype Tunnel & Sponges",
        amenities: ["Cold Sponges", "Energy Gels", "High Fives", "Community DJ"],
      },
      {
        number: 6,
        neighborhood: "Roxbury / Finish Line",
        location: "Shelburne Community Center Park",
        mile: "Mile 26.2",
        vibe: "The Celebratory Finish Line Block Party",
        amenities: ["Finisher Medals", "Finisher Jackets", "Post-Race Meal", "Live DJ & Dance Floor"],
      },
    ] as CheerZone[],
  },

  gallery: [
    {
      id: "photo-1",
      src: "/images/photos/web/1Q7A3679.jpg",
      alt: "26.TRUE runners pacing through Boston streets",
      caption: "Our City. Our Way: 26.TRUE runners in rhythm touring Boston's neighborhood corridors.",
      photographer: "Official 26.TRUE Photography",
      neighborhood: "Jamaica Plain",
      year: "2026",
      category: "26true",
    },
    {
      id: "photo-2",
      src: "/images/photos/web/26true2026©CharlotteTuminelli-3075.jpg",
      alt: "Runners smiling and celebrating on course",
      caption: "Collective joy: Smiles, encouragement, and high energy across the field.",
      photographer: "Charlotte Tuminelli",
      neighborhood: "Roxbury",
      year: "2026",
      category: "26true",
    },
    {
      id: "photo-3",
      src: "/images/photos/web/20260418_26.True Marathon_@ShotByEK-187.JPG",
      alt: "Runner in focus capturing grit and power",
      caption: "Pure grit: Athletes claiming space and conquering the distance on their own terms.",
      photographer: "@ShotByEK",
      neighborhood: "Mattapan",
      year: "2026",
      category: "26true",
    },
    {
      id: "photo-4",
      src: "/images/photos/web/562A8170.jpg",
      alt: "PIONEERS Run Crew community gathering",
      caption: "You can't be what you can't see: PIONEERS Run Crew standing strong together in Dorchester.",
      photographer: "PIONEERS Run Crew",
      neighborhood: "Dorchester",
      year: "2026",
      category: "pioneers",
    },
    {
      id: "photo-5",
      src: "/images/photos/web/1Q7A3259.jpg",
      alt: "Athletes crossing the streets with crowd cheering",
      caption: "If you're not running, you're cheering: Neighborhood residents turning out for every runner.",
      photographer: "Official 26.TRUE Photography",
      neighborhood: "Dorchester",
      year: "2026",
      category: "cheer-squad",
    },
    {
      id: "photo-6",
      src: "/images/photos/web/26true2026©CharlotteTuminelli-3129.jpg",
      alt: "Celebration at the finish line",
      caption: "Breaking the ribbon: Every runner celebrated like a champion at the Shelburne finish line.",
      photographer: "Charlotte Tuminelli",
      neighborhood: "Roxbury",
      year: "2026",
      category: "finish-line",
    },
    {
      id: "photo-7",
      src: "/images/photos/web/562A6072.jpg",
      alt: "PIONEERS Run Crew members celebrating post-run",
      caption: "Community, belonging, and connection: PIONEERS Run Crew celebrating post-run fellowship.",
      photographer: "PIONEERS Run Crew",
      neighborhood: "Dorchester",
      year: "2026",
      category: "pioneers",
    },
  ] as GalleryImage[],

  faqs: [
    {
      category: "About 26.TRUE",
      question: "What is 26.TRUE and how is it different?",
      answer: "Established in 2021 by the leaders of PIONEERS Run Crew, 26.TRUE is an untimed celebration of distance running and of Boston's diverse neighborhoods and people. It is not a competitive race that centers elitism and the fastest, fittest runners. It is the only permitted marathon and half marathon that runs 100% entirely within Boston city limits through Jamaica Plain, Roxbury, Mattapan, and Dorchester.",
    },
    {
      category: "About 26.TRUE",
      question: "What is the reverse wave start?",
      answer: "We run in five distinct waves, with our 'back of the pack', slower paced runners starting first! This reverse start structure ensures that faster and slower runners converge towards the finish line at similar times, allowing everyone to celebrate together at the epic finish festival.",
    },
    {
      category: "Registration & 2027 Cohort",
      question: "When does registration open for 2027?",
      answer: "Registration opens on Friday, November 20, 2026 at 8:00 AM EST! The 2026 half marathon sold out in just 36 hours, so we recommend registering promptly when the portal goes live.",
    },
    {
      category: "Registration & 2027 Cohort",
      question: "How many spots are available?",
      answer: "We prioritize quality over quantity and are intentional about growth. For 2027, the field is capped at 500 total runners: 200 full marathoners (prioritizing 50 first-timers) and 300 half-marathoners (prioritizing 75 first-timers).",
    },
    {
      category: "Registration & 2027 Cohort",
      question: "Are training plans provided?",
      answer: "Yes! We have partnered with two phenomenal certified run coaches from our community — Trish Moran and Lindsey Thorne-Bingham — to develop comprehensive half and full marathon distance training plans. We are thrilled to offer this as a 100% free resource for our 2027 cohort.",
    },
    {
      category: "Course & Route",
      question: "What neighborhoods does the 26.TRUE course tour?",
      answer: "The course runs entirely through the geographic heart of Boston, showcasing the beautiful, historic neighborhoods of Jamaica Plain, Roxbury, Mattapan, and Dorchester.",
    },
    {
      category: "Course & Route",
      question: "Where can I view the exact course map and Strava route?",
      answer: "You can explore the interactive Google Map and Strava route on our Course page! The map outlines all turn-by-turn streets and the 6 designated Cheer Zones.",
    },
    {
      category: "Cheer Zones & Volunteers",
      question: "What are Cheer Zones and where are they located?",
      answer: "Our mantra is: 'If you're not running, you're cheering!' We have 6 official Cheer Zones placed every 2–3 miles along the course, hosted by local running clubs, community organizations, and brand partners. They supply hydration, nutrition, brass horns, live DJs, and safety support.",
    },
    {
      category: "Cheer Zones & Volunteers",
      question: "How can I volunteer or host a cheer zone?",
      answer: "We need over 100 passionate volunteers each year for water support, cheer zones, course marshaling, and finish line celebrations. Reach out to volunteer@26true.com to join the crew!",
    },
  ] as FaqItem[],
};
