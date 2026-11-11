export interface RaceStat {
  label: string;
  value: string;
  subtext: string;
}

export interface AidStation {
  mile: number;
  location: string;
  amenities: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  description: string;
}

export interface ScheduleDay {
  date: string;
  dayOfWeek: string;
  events: ScheduleEvent[];
}

export interface Sponsor {
  name: string;
  tier: 'title' | 'gold' | 'silver' | 'community';
  url: string;
  tagline?: string;
  logoText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Registration' | 'Race Day Logistics' | 'Course & Rules' | 'Spectators & Volunteers';
}

export const raceData = {
  general: {
    name: "26True Marathon",
    shortName: "26True",
    tagline: "The Purest 26.2. No Gimmicks. Just Grit & Community.",
    description: "26True is an authentic, runner-first marathon and half marathon built by distance runners for the running community. Fast, scenic, USATF-certified, and focused entirely on the runner experience.",
    date: "2026-10-18T07:00:00-04:00",
    displayDate: "Sunday, October 18, 2026",
    location: "Riverfront Park & Scenic Parkway",
    cityState: "Boston, MA",
    registrationUrl: "https://runsignup.com",
    registrationStatus: "Early Bird Open",
    registrationPrice: "$115 Marathon / $85 Half",
    priceIncreaseDate: "May 1, 2026",
    charityPartner: "Youth Running & Track Foundation 501(c)(3)",
    contactEmail: "info@26true.com",
    volunteerEmail: "volunteer@26true.com",
    sponsorEmail: "sponsors@26true.com",
  },
  
  announcement: {
    active: true,
    badge: "Registration Live",
    message: "Early bird pricing is active! The first 500 bibs include exclusive custom technical running socks.",
    linkText: "Claim Your Bib",
    linkUrl: "#register",
  },

  stats: [
    {
      label: "Course Distance",
      value: "26.2 & 13.1",
      subtext: "USATF Certified & Boston Qualifier (BQ)",
    },
    {
      label: "Net Elevation",
      value: "-140 ft",
      subtext: "Fast, gentle rolling net downhill course",
    },
    {
      label: "Aid Stations",
      value: "13 Stations",
      subtext: "Fully stocked every 1.5–2 miles with Nuun & Maurten",
    },
    {
      label: "Field Limit",
      value: "3,500",
      subtext: "Capped to avoid bottlenecking and congestion",
    },
  ] as RaceStat[],

  highlights: [
    {
      title: "Boston Qualifier Certified",
      description: "Accurately measured and USATF sanctioned with chip timing checkpoints at 10K, Halfway, 30K, and Finish.",
      icon: "trophy",
    },
    {
      title: "Pacer Teams in Every Corral",
      description: "Dedicated sub-3:00 through 5:30 pacer groups leading even-split pacing strategies all the way home.",
      icon: "users",
    },
    {
      title: "Runner-First Support",
      description: "Maurten Gel 100 stations, Nuun Endurance hydration, medical squads, and ice sponges in the late miles.",
      icon: "heart-pulse",
    },
    {
      title: "Legendary Finish Festival",
      description: "Custom heavyweight finisher medal, warm post-race meal, local craft beer garden, and physical recovery tents.",
      icon: "sparkles",
    },
  ],

  course: {
    usatfCert: "MA26001RN",
    surface: "100% Closed Paved Roads",
    cutoffTime: "6 Hours 00 Minutes (13:44/mile pace)",
    startLocation: "Riverfront Commons (Grand Ave & River Rd)",
    finishLocation: "Heritage Amphitheater Park",
    elevationGain: "380 ft",
    elevationLoss: "520 ft",
    gpxDownloadUrl: "#download-gpx",
    aidStations: [
      { mile: 2.2, location: "North Canal Bridge", amenities: ["Water", "Nuun Endurance"] },
      { mile: 4.5, location: "Memorial Park Turnaround", amenities: ["Water", "Nuun Endurance", "Restrooms"] },
      { mile: 6.8, location: "Old Mill Crossing", amenities: ["Water", "Nuun Endurance", "Maurten Gel 100"] },
      { mile: 9.1, location: "Pine Ridge Overlook", amenities: ["Water", "Nuun Endurance", "First Aid", "Restrooms"] },
      { mile: 11.4, location: "East Campus Boulevard", amenities: ["Water", "Nuun Endurance", "Maurten Gel 100"] },
      { mile: 13.1, location: "Halfway Checkpoint (Civic Center)", amenities: ["Water", "Nuun", "Medical", "Drop Bags"] },
      { mile: 15.3, location: "South Parkway Mile 15", amenities: ["Water", "Nuun", "Maurten Gel 100", "Oranges & Bananas"] },
      { mile: 17.5, location: "Valley Creek Bridge", amenities: ["Water", "Nuun", "Pickle Juice", "First Aid"] },
      { mile: 19.8, location: "Highland Woods Entrance", amenities: ["Water", "Nuun", "Maurten Gel 100 (Caff)"] },
      { mile: 21.5, location: "The 'True Grit' Cheer Tunnel", amenities: ["Water", "Nuun", "Ice Sponges", "Crowd Hype"] },
      { mile: 23.2, location: "Harbor Boulevard Overpass", amenities: ["Water", "Nuun", "Maurten Gel 100", "Restrooms"] },
      { mile: 25.0, location: "Final Mile Marker (Beacon St)", amenities: ["Water", "Nuun", "Cold Sponges"] },
    ] as AidStation[],
  },

  scheduleDays: [
    {
      date: "Friday, October 16, 2026",
      dayOfWeek: "Friday",
      events: [
        {
          time: "1:00 PM – 7:00 PM",
          title: "Runner Expo & Packet Pickup",
          location: "Riverfront Convention Hall, Hall A",
          description: "Pick up your bib, timing chip, technical race shirt, and gear bag. Photo ID required. Official merchandise available.",
        },
        {
          time: "5:30 PM",
          title: "First-Timer & Course Strategy Panel",
          location: "Expo Main Stage",
          description: "Meet the pacer captains and race director for pacing strategies, course breakdown, and weather review.",
        },
      ],
    },
    {
      date: "Saturday, October 17, 2026",
      dayOfWeek: "Saturday",
      events: [
        {
          time: "8:00 AM – 9:00 AM",
          title: "Community 5K Shakeout Run",
          location: "Heritage Park Plaza",
          description: "Free, easy 3-mile shakeout run hosted by local running clubs. Coffee and light refreshments provided.",
        },
        {
          time: "10:00 AM – 5:00 PM",
          title: "Final Packet Pickup & Expo",
          location: "Riverfront Convention Hall, Hall A",
          description: "Final opportunity to pick up your bib. Note: There is NO race morning packet pickup.",
        },
      ],
    },
    {
      date: "Sunday, October 18, 2026",
      dayOfWeek: "Race Day",
      events: [
        {
          time: "5:15 AM",
          title: "Shuttles & Gear Check Open",
          location: "Grand Avenue Staging Area",
          description: "Free runner parking shuttles begin running from designated satellite parking lots.",
        },
        {
          time: "6:40 AM",
          title: "Corrals Close & National Anthem",
          location: "Start Line, Riverfront Commons",
          description: "All runners must be inside their assigned starting corral.",
        },
        {
          time: "7:00 AM",
          title: "26True Marathon Wave 1 Start",
          location: "Start Line",
          description: "Wheelchair, Handcycle, and Corral A & B.",
        },
        {
          time: "7:15 AM",
          title: "26True Marathon Wave 2 Start",
          location: "Start Line",
          description: "Corrals C, D & E.",
        },
        {
          time: "7:45 AM",
          title: "26True Half Marathon Start",
          location: "Start Line",
          description: "All Half Marathon corrals.",
        },
        {
          time: "10:30 AM",
          title: "Overall & Age Group Awards",
          location: "Heritage Amphitheater Stage",
          description: "Top 3 overall men, women, and non-binary athletes, followed by masters and age group podium presentations.",
        },
        {
          time: "1:30 PM",
          title: "Official Finish Line Course Closure",
          location: "Heritage Amphitheater Park",
          description: "Celebrating our final marathon finishers. The post-race festival continues until 3:00 PM.",
        },
      ],
    },
  ] as ScheduleDay[],

  sponsors: [
    {
      name: "Apex Performance Running",
      tier: "title",
      url: "https://example.com",
      tagline: "Official Footwear & Technical Apparel Partner",
      logoText: "APEX RUNNING",
    },
    {
      name: "Riverfront Health Network",
      tier: "title",
      url: "https://example.com",
      tagline: "Official Sports Medicine & Medical Support",
      logoText: "RIVERFRONT HEALTH",
    },
    {
      name: "Nuun Hydration",
      tier: "gold",
      url: "https://example.com",
      tagline: "Official On-Course Electrolyte Drink",
      logoText: "NUUN HYDRATION",
    },
    {
      name: "Maurten",
      tier: "gold",
      url: "https://example.com",
      tagline: "Official On-Course Energy Hydrogel",
      logoText: "MAURTEN",
    },
    {
      name: "Beacon Community Bank",
      tier: "gold",
      url: "https://example.com",
      tagline: "Community Youth Running Sponsor",
      logoText: "BEACON BANK",
    },
    {
      name: "True Grit Brewing Co.",
      tier: "community",
      url: "https://example.com",
      tagline: "Finisher Beer Garden Partner",
      logoText: "TRUE GRIT BREWING",
    },
    {
      name: "Pioneer Physical Therapy",
      tier: "community",
      url: "https://example.com",
      tagline: "Finish Line Recovery Tent",
      logoText: "PIONEER PT",
    },
    {
      name: "City Sports Commission",
      tier: "community",
      url: "https://example.com",
      tagline: "Host City Partner",
      logoText: "CITY SPORTS COMMISSION",
    },
  ] as Sponsor[],

  faqs: [
    {
      category: "Registration",
      question: "Can I transfer my bib or defer to next year?",
      answer: "Yes. You may transfer your bib to another runner through your RunSignup account until September 15, 2026 for a $15 processing fee. Deferrals to the 2027 edition are allowed until August 31, 2026. After September 15, all bib sales are final.",
    },
    {
      category: "Registration",
      question: "Can I switch between the Marathon and the Half Marathon?",
      answer: "Yes, provided the distance you are switching into has not reached its field cap. You will pay the difference if upgrading from the Half to the Full, or can switch down to the Half with no refund of the price difference.",
    },
    {
      category: "Race Day Logistics",
      question: "Is there race day bib pickup?",
      answer: "No. All runners must pick up their packet at the Health & Fitness Expo on Friday (1 PM–7 PM) or Saturday (10 AM–5 PM). If you cannot attend in person, a friend or family member may pick up your packet with a copy of your photo ID and confirmation email.",
    },
    {
      category: "Race Day Logistics",
      question: "Is gear check available on race morning?",
      answer: "Yes. Secure gear check will be available in the start village from 5:15 AM to 6:30 AM. You must use the clear plastic bag provided at packet pickup. Checked bags will be safely transported directly to the finish festival gear pickup area.",
    },
    {
      category: "Course & Rules",
      question: "What is the official course time limit?",
      answer: "The course has a strict 6-hour time limit (13:44 per mile pace) from the moment the final wave crosses the starting mat. After 1:15 PM, city roadways will reopen and runners behind pace will be directed to sidewalks or offered shuttle pickup.",
    },
    {
      category: "Course & Rules",
      question: "Are headphones, strollers, or dogs permitted on the course?",
      answer: "Bone-conduction headphones (e.g. Shokz) are strongly recommended so you can hear course marshals and medical personnel. Standard headphones are permitted but must be kept at low volume. For safety reasons, baby strollers, pets, roller skates, and unauthorized pacing bicycles are strictly prohibited.",
    },
    {
      category: "Spectators & Volunteers",
      question: "Where are the best spots for spectators to cheer?",
      answer: "The best spectator locations are Mile 4.5 (Memorial Park, easy parking), Mile 13.1 (Civic Center halfway festival), Mile 21.5 (The 'True Grit' Tunnel with live DJ and brass band), and the final straightaway at Heritage Amphitheater Park.",
    },
    {
      category: "Spectators & Volunteers",
      question: "How can I volunteer for race weekend?",
      answer: "We welcome over 600 volunteers each year! Positions include water stop crews, finish medal distribution, gear check, course marshaling, and expo registration. All volunteers receive an exclusive crew jacket, meal pass, and guaranteed discounted entry for next year's race.",
    },
  ] as FaqItem[],
};
