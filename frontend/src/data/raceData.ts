export interface RaceStat {
  label: string;
  value: string;
  subtext: string;
}

export interface CheerStation {
  mile: number;
  neighborhood: string;
  location: string;
  vibe: string;
  amenities: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  neighborhood: string;
  year: string;
  category: 'race-day' | 'cheer-squad' | 'finish-line' | 'community';
}

export interface HistoryMilestone {
  year: string;
  title: string;
  summary: string;
  details: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'About 26.TRUE' | 'Course & Route' | 'Registration & Bibs' | 'Cheer Squads & Volunteers';
}

export const raceData = {
  general: {
    name: "26.TRUE",
    shortName: "26.TRUE",
    tagline: "Our City. Our Way.",
    organizer: "PIONEERS Run Crew",
    description: "26.TRUE is an untimed, community-first marathon and half marathon created by PIONEERS Run Crew to celebrate the culture, energy, and rich neighborhoods of Boston that the traditional marathon route bypasses.",
    date: "2026-10-18T07:00:00-04:00",
    displayDate: "Sunday, October 18, 2026",
    location: "City of Boston, MA",
    neighborhoodsList: [
      "Roxbury",
      "Dorchester",
      "Mattapan",
      "Jamaica Plain",
      "Hyde Park",
      "South End",
    ],
    registrationUrl: "https://runsignup.com",
    registrationStatus: "Registration Opening Soon",
    registrationPrice: "Community Accessible Pricing",
    charityPartner: "PIONEERS Run Crew Foundation",
    contactEmail: "info@26true.com",
    volunteerEmail: "volunteer@26true.com",
  },
  
  announcement: {
    active: true,
    badge: "26.TRUE 2026",
    message: "26.TRUE 2026 course and registration details dropping soon. Follow along as we prepare to take over the city.",
    linkText: "Stay Updated",
    linkUrl: "#newsletter",
  },

  stats: [
    {
      label: "Race Distances",
      value: "26.2 & 13.1",
      subtext: "Full Marathon & Half Marathon options",
    },
    {
      label: "City Footprint",
      value: "100% Boston",
      subtext: "Entirely within city limits & historic neighborhoods",
    },
    {
      label: "Timing Format",
      value: "Untimed",
      subtext: "No chip timing or cutoff pressure — purely about the culture",
    },
    {
      label: "Cheer Squads",
      value: "Citywide",
      subtext: "Block parties, DJs, and live hype squads across the course",
    },
  ] as RaceStat[],

  pillars: [
    {
      title: "Our City, Our Way",
      description: "Unlike suburban-to-downtown courses, 26.TRUE stays right inside Boston. We run through Roxbury, Dorchester, Mattapan, and Jamaica Plain — centering the vibrant communities that make this city breathe.",
      icon: "map-pin",
      accent: "#d4ff00",
    },
    {
      title: "Untimed & Community-Driven",
      description: "No clock chasing, no chip mats, and no stress. Whether you run 3 hours or 6 hours, we move together. Every runner gets cheered with the same thunderous energy from start to finish.",
      icon: "heart",
      accent: "#3fd4a4",
    },
    {
      title: "Culture, DJs & Block Parties",
      description: "The course is lined with grassroots cheer zones featuring live DJs, brass horns, local cookouts, and community leaders holding down the blocks to push you through every mile.",
      icon: "music",
      accent: "#d4ff00",
    },
    {
      title: "Founded by PIONEERS",
      description: "Built in 2021 by PIONEERS Run Crew, Boston's premier Black- and Brown-led running community. As the crew says: 'You can't be what you can't see.'",
      icon: "users",
      accent: "#3fd4a4",
    },
  ],

  historyMilestones: [
    {
      year: "2017",
      title: "The Birth of PIONEERS Run Crew",
      summary: "Founded as Boston's first Black- and Brown-led running crew to carve out space and representation in endurance running.",
      details: "PIONEERS Run Crew began with a clear purpose: to bridge the gap in distance running, diversify the sport, and provide an empowering, inclusive space for athletes of color across Greater Boston.",
    },
    {
      year: "2021",
      title: "The First 26.TRUE Is Born",
      summary: "When the traditional marathon moved virtual during COVID-19, PIONEERS chose to build their own 26.2.",
      details: "Rather than running 26.2 miles through Hopkinton and western suburbs, the crew mapped out an entirely new route through Roxbury, Dorchester, and Mattapan. The inaugural 26.TRUE proved that the heart of Boston’s running spirit lives in its neighborhood streets.",
    },
    {
      year: "2022–2023",
      title: "'The Real Boston Marathon'",
      summary: "Civic recognition and exponential growth across running crews nationwide.",
      details: "Boston Mayor Michelle Wu celebrated 26.TRUE as 'the real Boston Marathon' for how genuinely it reflects the city's diversity. Crews from New York, Chicago, Philadelphia, and Atlanta traveled to Boston to celebrate the movement.",
    },
    {
      year: "2024–2026",
      title: "The Tradition Continues",
      summary: "Expanding to full and half marathon distances with thousands of supporters lining the streets.",
      details: "Now an essential cornerstone of Boston’s athletic and cultural calendar, 26.TRUE unites hundreds of runners, dozens of community partners, and thousands of spectators in an unforgettable celebration of resilience, culture, and unity.",
    },
  ] as HistoryMilestone[],

  course: {
    tagline: "Through The Heart of Boston's Historic Neighborhoods",
    neighborhoods: [
      { name: "Roxbury", highlight: "Malcolm X Park, Nubian Square, Shelburne Community Center" },
      { name: "Dorchester", highlight: "Dorchester Ave corridor, Franklin Park, Town Field" },
      { name: "Mattapan", highlight: "River Street, Blue Hill Ave, Mattapan Square" },
      { name: "Jamaica Plain", highlight: "Southwest Corridor Park, Centre Street, Jamaica Pond" },
      { name: "Hyde Park", highlight: "Cleary Square, Mother Brook, Truman Parkway" },
      { name: "South End", highlight: "Columbus Ave, Community Gardens, Historic Brownstones" },
    ],
    cheerStations: [
      {
        mile: 3.5,
        neighborhood: "Roxbury",
        location: "Malcolm X Park Plaza",
        vibe: "Opening Mile Hype & Drumline",
        amenities: ["Water", "Electrolytes", "Music", "Cheer Squad"],
      },
      {
        mile: 7.2,
        neighborhood: "Dorchester",
        location: "Town Field Park",
        vibe: "Afrobeats & Caribbean Brass",
        amenities: ["Water", "Bananas & Oranges", "First Aid"],
      },
      {
        mile: 11.0,
        neighborhood: "Mattapan",
        location: "Mattapan Square / River St",
        vibe: "Community BBQ & DJ Set",
        amenities: ["Water", "Electrolytes", "Energy Chews", "Restrooms"],
      },
      {
        mile: 13.1,
        neighborhood: "Franklin Park",
        location: "Playstead Halfway Checkpoint",
        vibe: "Halfway Celebration & Crew Handoffs",
        amenities: ["Water", "Drop Bags", "Medical", "Half Marathon Finish"],
      },
      {
        mile: 17.5,
        neighborhood: "Hyde Park",
        location: "Cleary Square Crossing",
        vibe: "Local Businesses & Youth Cheer Crews",
        amenities: ["Water", "Electrolytes", "Sponges"],
      },
      {
        mile: 21.0,
        neighborhood: "Jamaica Plain",
        location: "Southwest Corridor / Green St",
        vibe: "The Wall Breakers Hype Tunnel",
        amenities: ["Water", "Ice Sponges", "High Fives", "Energy Gels"],
      },
      {
        mile: 24.5,
        neighborhood: "South End",
        location: "Columbus Ave & Mass Ave",
        vibe: "The Final Push DJ Stage",
        amenities: ["Water", "Crowd Noise", "Cold Towels"],
      },
      {
        mile: 26.2,
        neighborhood: "Roxbury / Finish Village",
        location: "Shelburne Community Center Park",
        vibe: "Epic Finish Line Block Party & Cookout",
        amenities: ["Finisher Medals", "Food Trucks", "Live DJ", "Recovery Zone"],
      },
    ] as CheerStation[],
  },

  gallery: [
    {
      id: "photo-1",
      src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
      alt: "Runners in motion through Boston streets",
      caption: "Taking up space: Runners hitting the pavement as the morning sun breaks over Roxbury.",
      neighborhood: "Roxbury",
      year: "2024",
      category: "race-day",
    },
    {
      id: "photo-2",
      src: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=1200&q=80",
      alt: "Cheer squad celebrating runners with horns and banners",
      caption: "Unmatched energy: The Dorchester cheer squad holding down the corner with drums, horns, and pure love.",
      neighborhood: "Dorchester",
      year: "2024",
      category: "cheer-squad",
    },
    {
      id: "photo-3",
      src: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
      alt: "PIONEERS Run Crew athletes pacing together",
      caption: "Strength in numbers: PIONEERS Run Crew members locking into stride along Franklin Park.",
      neighborhood: "Franklin Park",
      year: "2023",
      category: "community",
    },
    {
      id: "photo-4",
      src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
      alt: "Emotional finish line embrace",
      caption: "Tears and triumph: Crossing the 26.TRUE finish line surrounded by family, crew, and city.",
      neighborhood: "Roxbury",
      year: "2024",
      category: "finish-line",
    },
    {
      id: "photo-5",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
      alt: "Athletes warming up before sunrise",
      caption: "Race morning quiet: Pre-race breath and fellowship before the journey begins.",
      neighborhood: "Malcolm X Park",
      year: "2023",
      category: "race-day",
    },
    {
      id: "photo-6",
      src: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
      alt: "High fives along the spectator route",
      caption: "Every neighborhood shows love: High fives and cold sponges in the heat of Mile 20.",
      neighborhood: "Mattapan",
      year: "2024",
      category: "cheer-squad",
    },
    {
      id: "photo-7",
      src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
      alt: "Runner celebrating on the final straightaway",
      caption: "26.2 miles our way: Reclaiming the streets of Boston one stride at a time.",
      neighborhood: "South End",
      year: "2023",
      category: "finish-line",
    },
    {
      id: "photo-8",
      src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
      alt: "Community block party at the finish line",
      caption: "The celebration continues: DJs, dancing, food, and community fellowship at the finish festival.",
      neighborhood: "Roxbury",
      year: "2024",
      category: "community",
    },
  ] as GalleryImage[],

  faqs: [
    {
      category: "About 26.TRUE",
      question: "Is 26.TRUE a timed or certified race?",
      answer: "No. 26.TRUE is an untimed, community-centered marathon and half marathon. We do not use timing chips, bib corrals, or strict time cutoffs. The event is intentionally built around collective support, representation, and celebrating the culture of our city.",
    },
    {
      category: "About 26.TRUE",
      question: "Who organizes 26.TRUE?",
      answer: "26.TRUE was founded and is organized by PIONEERS Run Crew, Boston's premier Black- and Brown-led running community established in 2017. The event is powered by dozens of passionate volunteers, local run crews, and community partners.",
    },
    {
      category: "Course & Route",
      question: "What route and neighborhoods does 26.TRUE cover?",
      answer: "The course stays 100% within the city limits of Boston. The route winds through Roxbury, Dorchester, Mattapan, Hyde Park, Jamaica Plain, and the South End, highlighting iconic cultural landmarks like Malcolm X Park, Franklin Park, and Nubian Square.",
    },
    {
      category: "Course & Route",
      question: "Can I run the Half Marathon instead of the Full?",
      answer: "Yes! 26.TRUE offers both the full 26.2-mile marathon and a 13.1-mile half marathon route. Both distances start together and experience the unforgettable neighborhood cheer energy.",
    },
    {
      category: "Course & Route",
      question: "Are there aid stations along the course?",
      answer: "Yes. Community-run cheer and aid stations are stationed throughout the route providing water, electrolytes, fruit, energy snacks, medical first aid, and incredible DJ energy.",
    },
    {
      category: "Registration & Bibs",
      question: "How does packet and bib pickup work?",
      answer: "There is no corporate expo. Registered runners will receive detailed instructions via email on community-hosted bib pickup locations and dates in the week leading up to race weekend.",
    },
    {
      category: "Cheer Squads & Volunteers",
      question: "How can I volunteer or set up a cheer station?",
      answer: "Community cheer stations and volunteer squads are the heartbeat of 26.TRUE! Whether you want to hand out water, DJ a corner, take photos, or bring a drumline, we want you involved. Reach out to volunteer@26true.com to join a crew.",
    },
    {
      category: "Cheer Squads & Volunteers",
      question: "Where are the best spots for spectators?",
      answer: "Top spectator hubs include Malcolm X Park (Mile 3.5), Town Field in Dorchester (Mile 7.2), Mattapan Square (Mile 11), Franklin Park Playstead (Mile 13.1), and the Southwest Corridor at Green Street in JP (Mile 21).",
    },
  ] as FaqItem[],
};
