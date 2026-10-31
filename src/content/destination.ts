/**
 * Khankharkhet content collections.
 *
 * Routes render these objects and nothing harder-coded about the place.
 * A future CMS, gallery admin or booking service can replace this module
 * without rewriting the interface. Status fields mark what is safe to publish.
 *
 * provenance
 * - brief: destination name, place and positioning supplied for this site
 * - profile: Travel of Uttarakhand / Act of Khankrakhet organisation profile
 * - record: public peak databases (figures differ; not a site survey)
 * - placeholder: editable slot — not a travel fact
 */

export type Provenance = "brief" | "profile" | "record" | "placeholder";

export const identity = {
  name: "Khankharkhet",
  title: "Khankharkhet Eco-Adventure Tourism Destination",
  positioning:
    "A hidden Himalayan destination for eco-tourism and adventure travel.",
  place: "Narayanbagarh Block, Badhan Patti, Chamoli, Uttarakhand, India",
  block: "Narayanbagarh Block",
  patti: "Badhan Patti",
  district: "Chamoli",
  state: "Uttarakhand",
  country: "India",
  spellingNote:
    "The destination brief spells the name Khankharkhet. The organisation profile spells the initiative Khankrakhet. Public peak records use Khankrakhet. Each spelling is kept where it was printed.",
};

export const organisation = {
  name: "Travel of Uttarakhand",
  initiative: "Act of Khankrakhet — Mission 120",
  kind: "Eco adventure tourism company",
  base: "Gopeshwar, Chamoli, Uttarakhand",
  lead: "Veer Singh",
  mission: "120 days of travel, learning and service across Uttarakhand.",
  stance: [
    "Responsible, eco-friendly adventure tourism in the Himalayas.",
    "Connecting travellers with rural mountain life and local culture.",
    "Creating livelihood opportunities for village communities.",
  ],
  style: [
    "Small groups, local guides and homestay-based journeys.",
    "Slow travel that respects nature and village life.",
    "Customised itineraries for families, students and adventure seekers.",
  ],
  office: "Near Petrol Pump, Simli, Karnaprayag, Chamoli, Uttarakhand",
  phones: [
    { display: "92582 26771", tel: "+919258226771", whatsapp: true },
    { display: "84750 42429", tel: "+918475042429", whatsapp: false },
  ],
  socials: [
    {
      label: "Facebook",
      value: "Veer Singh (Owner)",
      href: null as string | null,
      note: "Name as printed. A page link was not supplied.",
    },
    {
      label: "Instagram",
      value: "Travel of Uttarakhand",
      href: null as string | null,
      note: "Name as printed. A profile link was not supplied.",
    },
    {
      label: "YouTube",
      value: "@GarhDarshan Uttarakhand",
      href: "https://www.youtube.com/results?search_query=GarhDarshan+Uttarakhand",
      note: "Handle as printed. This opens a YouTube search, not a confirmed channel address.",
    },
  ],
};

export const peakRecord = {
  spelling: "Khankrakhet",
  elevations: [
    { source: "HiiKER", metres: "about 3,045 m" },
    { source: "PeakVisor", metres: "about 3,068 m" },
  ],
  prominence: "PeakVisor lists prominence at about 914 m.",
  coordinates: {
    label: "PeakVisor",
    lat: 30.049428,
    lng: 79.394514,
  },
  alternate: "HiiKER lists the summit near 30.05° N, 79.39° E.",
  caution:
    "These figures come from public peak databases and do not agree exactly. They are not a survey of a village centre, trailhead or parking point for Narayanbagarh Block or Badhan Patti.",
};

export const gallery = [
  {
    id: "dawn-ridge",
    src: "/media/hero.jpg",
    width: 1600,
    height: 900,
    theme: "Ridge",
    alt: "Atmospheric photograph of a pine ridge and sunlit snow peaks at dawn.",
  },
  {
    id: "meadow",
    src: "/media/meadow.jpg",
    width: 1600,
    height: 900,
    theme: "Meadow",
    alt: "Atmospheric photograph of a high green meadow with distant snow peaks.",
  },
  {
    id: "forest",
    src: "/media/forest.jpg",
    width: 1600,
    height: 1067,
    theme: "Forest",
    alt: "Atmospheric photograph of a mossy mountain forest and a narrow footpath.",
  },
  {
    id: "river",
    src: "/media/river.jpg",
    width: 1600,
    height: 900,
    theme: "Water",
    alt: "Atmospheric photograph of a turquoise river in a steep forested gorge.",
  },
  {
    id: "winter",
    src: "/media/winter.jpg",
    width: 1600,
    height: 900,
    theme: "Winter",
    alt: "Atmospheric photograph of a snow-covered ridge above dark conifer forest.",
  },
  {
    id: "village",
    src: "/media/village.jpg",
    width: 1600,
    height: 1200,
    theme: "Village",
    alt: "Atmospheric photograph of distant stone houses on terraced mountain slopes.",
  },
  {
    id: "night",
    src: "/media/night.jpg",
    width: 1600,
    height: 900,
    theme: "Night",
    alt: "Atmospheric photograph of a small lit tent in a meadow under stars.",
  },
  {
    id: "path",
    src: "/media/ridge.jpg",
    width: 1152,
    height: 1728,
    theme: "Ridge",
    alt: "Atmospheric vertical photograph of a grassy ridge path and snow peaks.",
  },
] as const;

export const visualNote =
  "Atmospheric Himalayan studies for layout only. They are not verified photographs or footage of Khankharkhet. Replace them with on-site pictures when a gallery is confirmed.";

export type ExperienceGroup =
  | "Trails"
  | "Water"
  | "Rock & heritage"
  | "Learning"
  | "Gathering";

export const experiences: {
  id: string;
  name: string;
  group: ExperienceGroup;
  summary: string;
}[] = [
  {
    id: "trekking",
    name: "Trekking",
    group: "Trails",
    summary:
      "The profile describes trekking on Himalayan trails, from easy walks to high passes. Distance, grade and season for Khankharkhet itself were not published.",
  },
  {
    id: "hiking",
    name: "Hiking",
    group: "Trails",
    summary:
      "Hiking is named beside trekking. No separate trail note for this destination was supplied.",
  },
  {
    id: "rafting",
    name: "Rafting",
    group: "Water",
    summary:
      "Rafting is listed, with a written note on winter runs on the Upper Alaknanda. That note places the base at Devilbagar, not at Khankharkhet.",
  },
  {
    id: "kayaking",
    name: "Kayaking",
    group: "Water",
    summary:
      "Kayaking is named in the adventure list. A launch, season and price were not supplied.",
  },
  {
    id: "climbing",
    name: "Rock climbing",
    group: "Rock & heritage",
    summary:
      "Rock climbing is named, and the outdoor learning programme includes basic rock climbing and bouldering training. No crag guide was supplied.",
  },
  {
    id: "heritage",
    name: "Heritage tourism",
    group: "Rock & heritage",
    summary:
      "Heritage tourism is named in the adventure list. A monument or village inventory for Khankharkhet was not supplied.",
  },
  {
    id: "camping",
    name: "Camping",
    group: "Learning",
    summary:
      "Camping under the stars, and camping with a bonfire, are named. A campsite at Khankharkhet is not confirmed.",
  },
  {
    id: "navigation",
    name: "Navigation",
    group: "Learning",
    summary: "Named in the outdoor learning programme. No syllabus was supplied.",
  },
  {
    id: "route-marking",
    name: "Route marking",
    group: "Learning",
    summary: "Named in the outdoor learning programme. No field manual was supplied.",
  },
  {
    id: "yoga",
    name: "Yoga and meditation",
    group: "Gathering",
    summary:
      "The profile describes yoga in Himalayan surroundings, plus meditation and mindfulness retreats. A venue and timetable were not supplied.",
  },
  {
    id: "fitness",
    name: "Fitness training camp",
    group: "Learning",
    summary: "Named in the outdoor learning programme. Dates and capacity were not supplied.",
  },
  {
    id: "wildlife",
    name: "Wildlife photography",
    group: "Learning",
    summary:
      "Named in the outdoor learning programme. Species lists and hide locations were not supplied.",
  },
  {
    id: "culture",
    name: "Village gatherings",
    group: "Gathering",
    summary:
      "The profile describes community time with village groups, cultural evenings, local food and folk traditions. A calendar was not supplied.",
  },
];

export const learningProgramme = [
  "Camping (bonfire)",
  "Navigation",
  "Basic rock climbing / bouldering training",
  "Route marking",
  "Yoga / meditation",
  "Fitness training camp",
  "Recreational games",
  "Wildlife photography",
];

export const learners = [
  "School and college groups.",
  "Corporate teams looking for off-site learning.",
  "Families and individuals who want to learn from the mountains.",
];

export const journeys = [
  "Char Dham Yatra",
  "Panch Kedar",
  "Kartik Swami",
  "Valley of Flowers (Chamoli)",
  "Daraya Bugyal",
  "Benital",
  "Deoria Tal",
];

export const raftingNote = {
  title: "River rafting on the Alaknanda",
  kicker: "Published regional note — not a Khankharkhet facility",
  body: "Winter rafting on the Upper Alaknanda is described as a calmer yet thrilling run, with Grade II–III rapids, clear winter water, forested slopes and rugged mountain faces. The profile presents it for people who want the rush of rafting without wilder water.",
  base: "Devilbagar, 15 km from Karnprayag towards Chamoli.",
  access:
    "Taxis are described as easily available from Karnprayag and Gopeshwar. The profile says premium tourism-department lodging is available near the river.",
  stayName: "Alaknanda Adventure Resort and Rafting Camp",
  stayAddress: "NH-07, Badrinath highway, Dewali, bagar, Girsu, Uttarakhand 246446",
};

export const safety = [
  "Experienced local guides who know the mountains.",
  "Eco-friendly practices: leave no trace, support local.",
  "Routes planned for season, weather and group ability.",
];

export const rural = {
  vocal: [
    "Promoting local products, handicrafts and village enterprises.",
    "Homestays run by local families — income stays in the village.",
    "Showcasing Garhwali culture, cuisine and traditions to visitors.",
  ],
  skills: [
    "Training youth in guiding, hospitality and tourism services.",
    "Supporting women-led and community-led enterprises.",
    "Reverse migration: making village life economically viable.",
  ],
};

export const educationExcerpt = {
  quote: "Learning is the easiest when it is not enforced.",
  body: "The profile describes outdoor education as experiential learning: adventure, environmental awareness, and life skills practised outside. It says the organisation wants that approach for Uttarakhand, and that time outdoors can support physical, mental and emotional health. No programme dates are attached.",
};

export const highlights: {
  id: string;
  title: string;
  body: string;
  status: Provenance;
  href: "/story" | "/visit" | "/community" | "/explore" | "/plan" | "/faq";
}[] = [
  {
    id: "place",
    title: "Narayanbagarh Block, Badhan Patti",
    body: "The destination identity supplied for this site. Chamoli district, Uttarakhand, India. A street-level description was not included.",
    status: "brief",
    href: "/story",
  },
  {
    id: "summit",
    title: "A summit on public record",
    body: "Peak databases list Khankrakhet in Chamoli, with elevation reported around 3,045 m and 3,068 m depending on the source.",
    status: "record",
    href: "/visit",
  },
  {
    id: "mission",
    title: "Mission 120",
    body: "The organisation’s stated mission is 120 days of travel, learning and service across Uttarakhand, led by Veer Singh.",
    status: "profile",
    href: "/community",
  },
  {
    id: "routes",
    title: "Regional journeys they publish",
    body: "Char Dham, Panch Kedar, Kartik Swami, Valley of Flowers (Chamoli), Daraya Bugyal, Benital and Deoria Tal. These are listed journeys, not sites confirmed inside Khankharkhet.",
    status: "profile",
    href: "/explore",
  },
  {
    id: "trailhead",
    title: "Trailhead and walking time",
    body: "Replace this card when a host confirms where people actually start walking, how long it takes, and in which season.",
    status: "placeholder",
    href: "/plan",
  },
  {
    id: "stay",
    title: "Where to stay on the ridge",
    body: "Homestays are a stated travel style. A room, camp or house list for Khankharkhet was not supplied. Devilbagar lodging belongs to the rafting note.",
    status: "placeholder",
    href: "/plan",
  },
  {
    id: "season",
    title: "Season and closure",
    body: "No opening calendar was supplied. Ask before you promise a date to a group.",
    status: "placeholder",
    href: "/faq",
  },
  {
    id: "village",
    title: "Badhan Patti village visits",
    body: "The profile speaks of village life, culture and livelihood. Named hosts, workshops and visiting rules for this patti are still to be written.",
    status: "placeholder",
    href: "/community",
  },
];

export const frames = [
  {
    id: "learning-stay",
    title: "A short learning stay",
    summary:
      "A draft shape only. Nights, distances and what is included are placeholders until a host confirms them.",
    days: [
      {
        label: "Day 1",
        title: "Arrive and meet",
        body: "Placeholder. Replace with the confirmed meeting point, approach from Narayanbagarh Block, and first night.",
      },
      {
        label: "Day 2",
        title: "Learn outside",
        body: "Placeholder. Choose from the published learning list — camping, navigation, basic climbing, yoga — only after a guide confirms it.",
      },
      {
        label: "Day 3",
        title: "Leave slowly",
        body: "Placeholder. The profile says pick-up and drop can be arranged. The timetable is not published.",
      },
    ],
  },
  {
    id: "regional",
    title: "A regional eco journey",
    summary:
      "A drafting frame for travellers who want Khankharkhet plus a journey the organisation already names. This is not a package and has no price.",
    days: [
      {
        label: "Thread",
        title: "Begin with the destination",
        body: "Placeholder. Write the confirmed days at Khankharkhet before adding anything else.",
      },
      {
        label: "Thread",
        title: "Add one published journey",
        body: "Choose one name from the eco-tourism list — for example Deoria Tal, Benital or a pilgrim route — and replace this line with a real plan.",
      },
      {
        label: "Thread",
        title: "Keep the group small",
        body: "The stated style is small groups, local guides and slow travel. Group size limits were not numbered in the profile.",
      },
    ],
  },
];

export const planChecks = [
  {
    id: "meet",
    label: "Confirm the meeting point in Narayanbagarh Block or Badhan Patti.",
  },
  {
    id: "pin",
    label: "Ask whether the public summit pin is the right approach, or only a mountain record.",
  },
  {
    id: "stay",
    label: "Ask what lodging exists. Do not assume a homestay or camp is open.",
  },
  {
    id: "season",
    label: "Ask which season, weather and group ability the route is planned for.",
  },
  {
    id: "include",
    label: "Ask what is included. No rate card was published.",
  },
  {
    id: "transfer",
    label: "Ask about pick-up and drop. The profile says the service is available.",
  },
  {
    id: "guide",
    label: "Ask who guides, in which language, and how large the group may be.",
  },
];

export const faqs: { id: string; q: string; a: string; status: "answered" | "placeholder" }[] = [
  {
    id: "where",
    q: "Where is Khankharkhet?",
    a: "This site presents it as an eco-adventure destination in Narayanbagarh Block, Badhan Patti, Chamoli, Uttarakhand, India. Public records also list a summit spelled Khankrakhet in Chamoli. Those two descriptions should be confirmed with the hosts before travel.",
    status: "answered",
  },
  {
    id: "height",
    q: "How high is the summit?",
    a: "Sources disagree. HiiKER lists about 3,045 m. PeakVisor lists about 3,068 m, with prominence about 914 m. Treat both as database figures, not a site survey.",
    status: "answered",
  },
  {
    id: "who",
    q: "Who looks after visits?",
    a: "The supplied organisation profile is Travel of Uttarakhand, based in Gopeshwar and led by Veer Singh, under the initiative Act of Khankrakhet — Mission 120.",
    status: "answered",
  },
  {
    id: "contact",
    q: "How do we make contact?",
    a: "The profile prints 92582 26771 and 84750 42429, Near Petrol Pump, Simli, Karnaprayag, Chamoli. Facebook is named as Veer Singh (Owner), Instagram as Travel of Uttarakhand, and YouTube as @GarhDarshan Uttarakhand. Web addresses for Facebook and Instagram were not supplied.",
    status: "answered",
  },
  {
    id: "price",
    q: "What does a journey cost?",
    a: "No price, tax or inclusion list was supplied. This site will not invent one. Ask when you enquire, and replace this answer when a rate card exists.",
    status: "placeholder",
  },
  {
    id: "stay",
    q: "Is there a place to stay?",
    a: "The profile describes homestay-based journeys as a style, and names Alaknanda Adventure Resort and Rafting Camp at Devilbagar for the rafting base. It does not list accommodation at Khankharkhet. On-site lodging is unconfirmed.",
    status: "placeholder",
  },
  {
    id: "reach",
    q: "How do we get there by road?",
    a: "A driving route, kilometre count and bus timetable for Narayanbagarh Block were not supplied. Do not treat the summit pin as a driving destination.",
    status: "placeholder",
  },
  {
    id: "season",
    q: "When is it open?",
    a: "An opening season was not published. The profile says routes are planned for season, weather and group ability. Confirm dates before you travel.",
    status: "placeholder",
  },
  {
    id: "groups",
    q: "Can a school or a team come?",
    a: "The outdoor learning pages invite school and college groups, corporate teams, and families and individuals. Programme dates are not listed.",
    status: "answered",
  },
  {
    id: "pack",
    q: "What should we carry?",
    a: "A packing list was not supplied. Ask the hosts once the season and the nights are confirmed.",
    status: "placeholder",
  },
];

export const chapters = [
  { index: "01", href: "/story", label: "Story", line: "Place, spelling and the people who wrote the profile." },
  { index: "02", href: "/experiences", label: "Experiences", line: "Only the activities the profile actually names." },
  { index: "03", href: "/gallery", label: "Gallery", line: "Atmospheric studies, ready for real photographs." },
  { index: "04", href: "/explore", label: "Explore", line: "What is known, and the field notes still open." },
  { index: "05", href: "/plan", label: "Plan", line: "Draft days, a checklist, and no invented prices." },
  { index: "06", href: "/community", label: "Community", line: "Livelihood, learning and leave-no-trace." },
  { index: "07", href: "/visit", label: "Visit", line: "A cautious map and the printed phone numbers." },
  { index: "08", href: "/faq", label: "Questions", line: "Answers where we have them. Gaps where we do not." },
];

export const collections = {
  identity,
  organisation,
  peakRecord,
  gallery,
  experiences,
  journeys,
  highlights,
  frames,
  faqs,
};
