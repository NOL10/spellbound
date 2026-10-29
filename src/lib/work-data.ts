import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

// Google Drive image URLs from spreadsheet
const DRIVE_IMAGES = {
  greysouldrive: "https://drive.google.com/uc?export=view&id=1NynGVoxLPAmm4QGzBjCeLMRtk0tFBajV",
  nannasnegroni: "https://drive.google.com/uc?export=view&id=1kNXv3OOUMMQ1-oYyz9ZupF0wWCKl1nDE",
  donnacucina: "https://drive.google.com/uc?export=view&id=1DTNX9ladfI4U8W3BBYuxsgW6VEX9bTJT",
  donnasummer: "https://drive.google.com/uc?export=view&id=1GXMrvcFoX8DcGP3CPRIrXvRk0XASCvWq",
  thelakehouse: "https://drive.google.com/uc?export=view&id=1PoRNZANqoTn-GrkiRTM_MBgqNQc3VdMv",
  rara: "https://drive.google.com/uc?export=view&id=1sEjiUDjHBgTNVfmzaOulO9q-Hbd2ol5g",
  monik: "https://drive.google.com/uc?export=view&id=1ZIfPNoKPyMYLIKtiRtG85zyLjtdbcbuY",
  chaitanyathane: "https://drive.google.com/uc?export=view&id=16fniaYDHMyMWaEVoFu5vO89ofFcpmOzN",
  mrdaahmedabad: "https://drive.google.com/uc?export=view&id=1Ab-l60Ce5Mih4qbdm1ndVIiCojm3ZZ-D",
  ciu: "https://drive.google.com/uc?export=view&id=1-pBz58L1S00eLz_X36sFBhm4z-vYYgWq",
};

export interface WorkProject {
  id: string;
  slug: string;
  img: string;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  year: string;
  challenge: string;
  approach: string;
  impact: {
    title: string;
    description: string;
    metrics?: Array<{ value: string; label: string }>;
  };
  gallery: string[];
}

export const workProjects: WorkProject[] = [
  {
    id: "1",
    slug: "rara",
    img: DRIVE_IMAGES.rara,
    title: "RARA",
    client: "RARA",
    industry: "Fashion & Design",
    tags: ["Public Relations", "Branding"],
    year: "2025",
    challenge:
      "RARA needed to establish itself as a distinctive luxury fashion brand with a strong retainer partnership. The challenge was maintaining consistent brand narrative and communication across all touchpoints.",
    approach:
      "We developed a comprehensive retainer-based strategy focused on continuous brand storytelling, media relations, and strategic communications. Our approach emphasized consistent quality across all platforms and touchpoints.",
    impact: {
      title: "Established strong brand presence",
      description:
        "RARA strengthened its market position through strategic communications and media coverage, building a loyal customer base through consistent brand messaging.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "15+", label: "Media features" },
        { value: "Premium", label: "Brand positioning" },
      ],
    },
    gallery: [DRIVE_IMAGES.rara, DRIVE_IMAGES.rara, DRIVE_IMAGES.rara],
  },
  {
    id: "2",
    slug: "donna-cucina",
    img: DRIVE_IMAGES.donnacucina,
    title: "Donna Cucina",
    client: "Donna Cucina",
    industry: "Hospitality & F&B",
    tags: ["Media Coverage", "Events", "PR"],
    year: "2025",
    challenge:
      "Donna Cucina needed to build awareness and credibility as a premium dining destination. The challenge was creating buzz and establishing the restaurant as a must-visit culinary experience.",
    approach:
      "We executed a multi-channel strategy combining media coverage and blogger hosting events. Our approach focused on experiential marketing and building community through curated dining experiences.",
    impact: {
      title: "Established dining destination",
      description:
        "Donna Cucina became recognized as a premium dining destination through strategic media placements and engaging blogger partnerships.",
      metrics: [
        { value: "25+", label: "Media features" },
        { value: "50+", label: "Blogger events hosted" },
        { value: "85%", label: "Booking capacity" },
      ],
    },
    gallery: [DRIVE_IMAGES.donnacucina, DRIVE_IMAGES.donnacucina, DRIVE_IMAGES.donnacucina],
  },
  {
    id: "3",
    slug: "donna-cucina-summer-festival",
    img: DRIVE_IMAGES.donnasummer,
    title: "Donna Cucina — Summer Festival",
    client: "Donna Cucina",
    industry: "Hospitality & Events",
    tags: ["Events", "Content", "PR"],
    year: "2025",
    challenge:
      "Launch a seasonal dining experience that would stand out in a competitive market. The challenge was creating exclusivity and cultural relevance around a limited-time concept.",
    approach:
      "We designed a comprehensive event strategy emphasizing the Italian summer theme. Through curated media coverage, influencer partnerships, and immersive experiences, we positioned this as a cultural moment.",
    impact: {
      title: "Landmark seasonal event",
      description:
        "The summer festival became one of the season's most anticipated dining experiences, creating organic buzz and establishing Donna Cucina as an experiential dining innovator.",
      metrics: [
        { value: "120+", label: "Media mentions" },
        { value: "2.3M+", label: "Social impressions" },
        { value: "92%", label: "Sold out" },
      ],
    },
    gallery: [DRIVE_IMAGES.donnasummer, DRIVE_IMAGES.donnasummer, DRIVE_IMAGES.donnasummer],
  },
  {
    id: "4",
    slug: "the-lakehouse-amanora",
    img: DRIVE_IMAGES.thelakehouse,
    title: "The Lakehouse, Amanora",
    client: "The Lakehouse",
    industry: "Hospitality & Luxury",
    tags: ["PR", "Media Coverage", "Branding"],
    year: "2024",
    challenge:
      "Introduce a refined waterfront dining concept to Pune's luxury market. The challenge was positioning the venue as an exclusive destination while building media credibility.",
    approach:
      "We executed a luxury hospitality narrative emphasizing the unique waterfront setting and curated experiences. Through strategic media placements and influencer partnerships, we established The Lakehouse as a landmark destination.",
    impact: {
      title: "Recognized luxury destination",
      description:
        "The Lakehouse quickly became Pune's premier dining destination, featured in major hospitality and lifestyle publications across India.",
      metrics: [
        { value: "30+", label: "Major media features" },
        { value: "4.8/5", label: "Average rating" },
        { value: "Booked out", label: "Status" },
      ],
    },
    gallery: [DRIVE_IMAGES.thelakehouse, DRIVE_IMAGES.thelakehouse, DRIVE_IMAGES.thelakehouse],
  },
  {
    id: "5",
    slug: "nanna-negroni",
    img: DRIVE_IMAGES.nannasnegroni,
    title: "Nanna's Negroni",
    client: "Nanna's Negroni",
    industry: "F&B & Hospitality",
    tags: ["Media Coverage", "HNI Events", "PR"],
    year: "2024",
    challenge:
      "Launch a distinctive dining and beverage destination in a competitive market. The challenge was building brand recognition and attracting high-net-worth individuals.",
    approach:
      "We positioned Nanna's Negroni through exclusive media coverage and curated HNI hosting events. Our strategy emphasized the venue's unique offering and cultural significance as a gathering space.",
    impact: {
      title: "Established as destination experience",
      description:
        "Nanna's Negroni quickly gained recognition as a must-visit destination among discerning diners and influencers, establishing itself as a cultural gathering space.",
      metrics: [
        { value: "20+", label: "Media features" },
        { value: "15+", label: "HNI events hosted" },
        { value: "85%", label: "Regular clientele" },
      ],
    },
    gallery: [DRIVE_IMAGES.nannasnegroni, DRIVE_IMAGES.nannasnegroni, DRIVE_IMAGES.nannasnegroni],
  },
  {
    id: "6",
    slug: "grey-soul-coffee",
    img: DRIVE_IMAGES.greysouldrive,
    title: "Grey Soul Coffee Roasters",
    client: "Grey Soul",
    industry: "F&B & Specialty Coffee",
    tags: ["Media Coverage", "PR", "Retainer"],
    year: "2024",
    challenge:
      "Establish credibility as a specialty coffee roaster in India's emerging specialty coffee market. The challenge was building community among coffee enthusiasts and food writers.",
    approach:
      "We positioned Grey Soul as educators and custodians of coffee craft through a retainer-based partnership. Our strategy focused on media relations, thought leadership content, and community building.",
    impact: {
      title: "Established specialty coffee authority",
      description:
        "Grey Soul became recognized as a reference point in India's specialty coffee movement, attracting partnerships with cafés and building a passionate community.",
      metrics: [
        { value: "18+", label: "Editorial features" },
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "12k", label: "Engaged community" },
      ],
    },
    gallery: [DRIVE_IMAGES.greysouldrive, DRIVE_IMAGES.greysouldrive, DRIVE_IMAGES.greysouldrive],
  },
  {
    id: "7",
    slug: "jamba-juice",
    img: work2,
    title: "Jamba Juice",
    client: "Jamba Juice",
    industry: "F&B & Beverages",
    tags: ["Blogger Hosting", "Social", "Content"],
    year: "2024",
    challenge:
      "Build brand awareness and engagement through influencer and blogger partnerships. The challenge was creating authentic connections with content creators.",
    approach:
      "We executed a blogger hosting strategy that created authentic content opportunities. Our approach focused on experiential marketing through curated blogger events and partnerships.",
    impact: {
      title: "Built engaged influencer network",
      description:
        "Jamba Juice developed strong relationships with food and lifestyle bloggers, creating organic content and building community awareness.",
      metrics: [
        { value: "50+", label: "Blogger partnerships" },
        { value: "500k+", label: "Organic reach" },
        { value: "6.5%", label: "Engagement rate" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "8",
    slug: "moni-k",
    img: DRIVE_IMAGES.monik,
    title: "Moni K",
    client: "Moni K",
    industry: "Fashion & Branding",
    tags: ["PR", "Branding", "Retainer"],
    year: "2024",
    challenge:
      "Establish a distinctive personal brand in the luxury fashion space. The challenge was building brand narrative and media presence.",
    approach:
      "We developed a comprehensive retainer-based branding strategy focusing on media relations, influencer partnerships, and thought leadership positioning.",
    impact: {
      title: "Built luxury brand presence",
      description:
        "Moni K established itself as a distinctive voice in luxury fashion through strategic media placements and community engagement.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "12+", label: "Media features" },
        { value: "8k", label: "Engaged followers" },
      ],
    },
    gallery: [DRIVE_IMAGES.monik, DRIVE_IMAGES.monik, DRIVE_IMAGES.monik],
  },
  {
    id: "9",
    slug: "rever-by-riddhi",
    img: work3,
    title: "Rever by Riddhi",
    client: "Rever by Riddhi",
    industry: "Luxury Retail",
    tags: ["Social", "Content", "Retainer"],
    year: "2024",
    challenge:
      "Build authentic community and engagement in the luxury lifestyle space. The challenge was maintaining consistent brand presence and authentic voice.",
    approach:
      "We developed a social-first retainer strategy centered on community building and authentic engagement. Our approach emphasized quality over quantity in content creation.",
    impact: {
      title: "Built engaged luxury community",
      description:
        "Rever established itself as a trusted luxury lifestyle brand with an engaged, loyal community of followers.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "8.2%", label: "Engagement rate" },
        { value: "5k", label: "Engaged followers" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "10",
    slug: "jacobi-chocolatier",
    img: work4,
    title: "Jakobi Chocolatier",
    client: "Jacobi",
    industry: "Artisanal F&B",
    tags: ["PR", "Craft", "Retainer"],
    year: "2024",
    challenge:
      "Establish credibility as an artisanal chocolatier in a mass-market dominated space. The challenge was communicating authentic craftsmanship.",
    approach:
      "We positioned Jakobi as a custodian of chocolate craft through a retainer-based partnership. Our strategy focused on storytelling around process, ingredients, and artisanal excellence.",
    impact: {
      title: "Recognized as genuine artisan",
      description:
        "Jakobi gained recognition among food critics and discerning consumers as a reference point for artisanal chocolate craft.",
      metrics: [
        { value: "22", label: "Editorial features" },
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "60%", label: "Repeat rate" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "11",
    slug: "chaitanya-thane",
    img: DRIVE_IMAGES.chaitanyathane,
    title: "Chaitanya Thane",
    client: "Chaitanya Thane",
    industry: "Real Estate & Hospitality",
    tags: ["PR", "Media Coverage", "Branding"],
    year: "2024",
    challenge:
      "Build brand awareness for a luxury real estate and hospitality project. The challenge was positioning as a lifestyle destination.",
    approach:
      "We executed a comprehensive media and PR strategy emphasizing lifestyle and luxury positioning. Through strategic partnerships and media placements, we built credibility.",
    impact: {
      title: "Established luxury positioning",
      description:
        "Chaitanya Thane gained recognition as a premium lifestyle destination through strategic media coverage and partnerships.",
      metrics: [
        { value: "15+", label: "Media features" },
        { value: "8k+", label: "Qualified leads" },
        { value: "Premium", label: "Segment" },
      ],
    },
    gallery: [DRIVE_IMAGES.chaitanyathane, DRIVE_IMAGES.chaitanyathane, DRIVE_IMAGES.chaitanyathane],
  },
  {
    id: "12",
    slug: "mrda-ahmedabad",
    img: DRIVE_IMAGES.mrdaahmedabad,
    title: "MRDA Ahmedabad",
    client: "MRDA Ahmedabad",
    industry: "Real Estate & Development",
    tags: ["PR", "Media Coverage", "Branding"],
    year: "2024",
    challenge:
      "Build credibility and awareness for a real estate development project. The challenge was establishing thought leadership in urban development.",
    approach:
      "We developed a strategic PR campaign emphasizing innovation and sustainability. Through media relations and thought leadership positioning, we built authority.",
    impact: {
      title: "Built development authority",
      description:
        "MRDA gained recognition as a credible development partner through strategic media presence and thought leadership.",
      metrics: [
        { value: "12+", label: "Media features" },
        { value: "10k+", label: "Awareness reach" },
        { value: "Strong", label: "Brand perception" },
      ],
    },
    gallery: [DRIVE_IMAGES.mrdaahmedabad, DRIVE_IMAGES.mrdaahmedabad, DRIVE_IMAGES.mrdaahmedabad],
  },
  {
    id: "13",
    slug: "ciu",
    img: DRIVE_IMAGES.ciu,
    title: "CIU (Chennai)",
    client: "CIU",
    industry: "Community & Events",
    tags: ["Events", "Community", "PR"],
    year: "2024",
    challenge:
      "Build community engagement and event awareness. The challenge was creating meaningful connections among members.",
    approach:
      "We executed a community-focused strategy emphasizing event creation and member engagement. Our approach focused on building network value.",
    impact: {
      title: "Built active community",
      description:
        "CIU established itself as a vibrant community gathering space through successful events and strategic communication.",
      metrics: [
        { value: "20+", label: "Events hosted" },
        { value: "500+", label: "Active members" },
        { value: "85%", label: "Engagement rate" },
      ],
    },
    gallery: [DRIVE_IMAGES.ciu, DRIVE_IMAGES.ciu, DRIVE_IMAGES.ciu],
  },
  {
    id: "14",
    slug: "blackberrys",
    img: work1,
    title: "Blackberrys",
    client: "Blackberrys",
    industry: "Fashion & Apparel",
    tags: ["Social", "Content", "PR"],
    year: "2024",
    challenge:
      "Reposition brand in a crowded apparel market and appeal to contemporary consumers. The challenge was building design-forward narrative.",
    approach:
      "We developed a multi-channel strategy emphasizing design innovation. Through social content, influencer partnerships, and media coverage, we built brand relevance.",
    impact: {
      title: "Strengthened brand positioning",
      description:
        "Blackberrys successfully repositioned itself as a design-forward brand with growing community engagement.",
      metrics: [
        { value: "25k+", label: "Social followers" },
        { value: "6.5%", label: "Engagement rate" },
        { value: "15+", label: "Media features" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "15",
    slug: "729-grams-coffee",
    img: work1,
    title: "729 Grams Coffee",
    client: "729",
    industry: "F&B & Specialty Coffee",
    tags: ["PR", "Branding", "Retainer"],
    year: "2024",
    challenge:
      "Build brand awareness and credibility in specialty coffee space. The challenge was positioning among discerning coffee consumers.",
    approach:
      "We executed a retainer-based strategy focusing on media relations and community building. Our approach emphasized craft and quality storytelling.",
    impact: {
      title: "Established coffee authority",
      description:
        "729 became recognized as a quality-focused specialty coffee brand through strategic media presence and community engagement.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "10+", label: "Media features" },
        { value: "8k", label: "Engaged community" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "16",
    slug: "reema-avalani",
    img: work2,
    title: "Reema Avalani",
    client: "Reema Avalani",
    industry: "Personal Branding",
    tags: ["Media Coverage", "Content Writing"],
    year: "2024",
    challenge:
      "Build personal brand presence and establish thought leadership. The challenge was creating compelling narratives around expertise and vision.",
    approach:
      "We executed a comprehensive media and content strategy emphasizing authentic storytelling. Through media coverage and curated content, we established personal brand authority.",
    impact: {
      title: "Built strong personal brand",
      description:
        "Reema Avalani established herself as a recognized voice through strategic media placements and engaging content.",
      metrics: [
        { value: "12+", label: "Media features" },
        { value: "20+", label: "Content pieces" },
        { value: "Strong", label: "Brand presence" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "17",
    slug: "husna-rahman",
    img: work3,
    title: "Husna Rahman",
    client: "Husna Rahman",
    industry: "Content & Creative",
    tags: ["Content Writing", "Media Coverage"],
    year: "2024",
    challenge:
      "Establish credibility and visibility as a content creator and creative professional. The challenge was building a distinctive voice.",
    approach:
      "We developed a content-driven strategy with strategic media placements and thought leadership positioning. Our approach focused on authentic storytelling and consistent communication.",
    impact: {
      title: "Established creative authority",
      description:
        "Husna Rahman built recognition as a talented content creator through media features and high-quality content creation.",
      metrics: [
        { value: "15+", label: "Media mentions" },
        { value: "25+", label: "Content projects" },
        { value: "Growing", label: "Audience" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "18",
    slug: "rishi-basu-samsonite-whistling-woods",
    img: work4,
    title: "Rishi Basu — Samsonite + Whistling Woods",
    client: "Rishi Basu",
    industry: "Events & Collaborations",
    tags: ["Project", "Branding"],
    year: "2024",
    challenge:
      "Execute a unique collaboration project between brands. The challenge was creating a compelling narrative for cross-brand partnership.",
    approach:
      "We developed a strategic partnership narrative emphasizing both brands' strengths. Through coordinated communications and media outreach, we built awareness.",
    impact: {
      title: "Successful brand collaboration",
      description:
        "The collaboration generated strong media interest and positioned both partners effectively in their respective markets.",
      metrics: [
        { value: "10+", label: "Media features" },
        { value: "Successful", label: "Event execution" },
        { value: "Positive", label: "Brand reception" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "19",
    slug: "greater-good",
    img: work1,
    title: "Greater Good",
    client: "Greater Good",
    industry: "Social Impact",
    tags: ["Retainer", "Community"],
    year: "2024",
    challenge:
      "Build sustainable awareness and engagement for social impact initiatives. The challenge was maintaining consistent messaging and community involvement.",
    approach:
      "We executed a retainer-based strategy centered on community building and impact storytelling. Our approach focused on authentic narratives and sustained engagement.",
    impact: {
      title: "Built engaged impact community",
      description:
        "Greater Good strengthened its social impact narrative through consistent communications and strategic partnerships.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "500+", label: "Community members" },
        { value: "Growing", label: "Impact reach" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "20",
    slug: "house-of-sachi",
    img: work2,
    title: "House of Sachi",
    client: "House of Sachi",
    industry: "Fashion & Design",
    tags: ["Branding", "In-house"],
    year: "2024",
    challenge:
      "Develop in-house branding and communication strategy for a luxury brand. The challenge was maintaining design excellence and brand consistency.",
    approach:
      "We provided comprehensive in-house support for branding initiatives, content creation, and strategic communications. Our approach emphasized design-forward positioning.",
    impact: {
      title: "Strengthened brand identity",
      description:
        "House of Sachi built a cohesive brand presence through strategic in-house initiatives and consistent visual storytelling.",
      metrics: [
        { value: "Ongoing", label: "In-house support" },
        { value: "Strong", label: "Design consistency" },
        { value: "Premium", label: "Brand positioning" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "21",
    slug: "rk-wedding",
    img: work3,
    title: "RK Wedding",
    client: "RK",
    industry: "Events & Weddings",
    tags: ["Events", "One-time"],
    year: "2024",
    challenge:
      "Execute a high-profile wedding event with strategic communication and coverage. The challenge was managing media relations and creating memorable experiences.",
    approach:
      "We coordinated comprehensive event strategy including media relations, influencer management, and content creation. Our approach emphasized elegant storytelling.",
    impact: {
      title: "Executed landmark event",
      description:
        "The wedding became a talked-about event with strong media coverage and social engagement.",
      metrics: [
        { value: "20+", label: "Media features" },
        { value: "500k+", label: "Social reach" },
        { value: "Memorable", label: "Execution" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "22",
    slug: "nav-chaitanya",
    img: work4,
    title: "Nav Chaitanya",
    client: "Nav Chaitanya",
    industry: "Personal Branding",
    tags: ["Project", "Branding"],
    year: "2024",
    challenge:
      "Build personal brand visibility and establish professional positioning. The challenge was creating authentic narrative around expertise.",
    approach:
      "We developed a strategic personal branding initiative with media outreach and content creation. Our approach emphasized thought leadership and authentic voice.",
    impact: {
      title: "Built personal brand presence",
      description:
        "Nav Chaitanya established strong professional visibility through strategic communications and media placements.",
      metrics: [
        { value: "8+", label: "Media features" },
        { value: "Strong", label: "Professional positioning" },
        { value: "Growing", label: "Influence" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "23",
    slug: "the-other-circle",
    img: work1,
    title: "The Other Circle",
    client: "The Other Circle",
    industry: "Community & Events",
    tags: ["Events", "Community"],
    year: "2024",
    challenge:
      "Build community engagement and event visibility for an exclusive community platform. The challenge was creating meaningful member experiences.",
    approach:
      "We executed a community-focused strategy emphasizing exclusive events and member networking. Our approach focused on building network value and engagement.",
    impact: {
      title: "Built active community network",
      description:
        "The Other Circle strengthened its positioning as an exclusive gathering space through strategic events and communications.",
      metrics: [
        { value: "15+", label: "Events hosted" },
        { value: "300+", label: "Active members" },
        { value: "Strong", label: "Engagement" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "24",
    slug: "vijay-chabra-personal-profiling",
    img: work2,
    title: "Vijay Chabra — Personal Profiling",
    client: "Vijay Chabra",
    industry: "Personal Branding & Consulting",
    tags: ["Retainer", "Branding"],
    year: "2024",
    challenge:
      "Build and maintain executive personal brand with strategic communications. The challenge was establishing thought leadership and professional authority.",
    approach:
      "We executed a comprehensive retainer-based personal profiling strategy. Our approach emphasized consistent media presence, thought leadership content, and executive positioning.",
    impact: {
      title: "Established executive authority",
      description:
        "Vijay Chabra built strong professional authority through sustained media presence and strategic communications.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "18+", label: "Media features" },
        { value: "Strong", label: "Executive brand" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "25",
    slug: "cinema-salon",
    img: work3,
    title: "Cinema Salon",
    client: "Cinema Salon",
    industry: "Entertainment & Culture",
    tags: ["Project", "Events"],
    year: "2024",
    challenge:
      "Build awareness and audience engagement for a film-focused cultural initiative. The challenge was attracting cinephiles and media attention.",
    approach:
      "We developed a culturally-focused strategy emphasizing editorial coverage and community building. Our approach highlighted artistic merit and curated programming.",
    impact: {
      title: "Built engaged film community",
      description:
        "Cinema Salon established itself as a respected venue for film appreciation through strategic media coverage and community events.",
      metrics: [
        { value: "12+", label: "Media features" },
        { value: "20+", label: "Events hosted" },
        { value: "Growing", label: "Audience base" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "26",
    slug: "roma-gandhi",
    img: work4,
    title: "Roma Gandhi",
    client: "Roma Gandhi",
    industry: "Personal Branding",
    tags: ["Project", "Content"],
    year: "2024",
    challenge:
      "Build personal brand presence and establish professional positioning. The challenge was creating distinctive personal narrative.",
    approach:
      "We executed a strategic personal branding project with media outreach and content development. Our approach emphasized authentic storytelling.",
    impact: {
      title: "Built strong personal brand",
      description:
        "Roma Gandhi established clear professional identity through strategic media placements and quality content.",
      metrics: [
        { value: "10+", label: "Media features" },
        { value: "15+", label: "Content pieces" },
        { value: "Growing", label: "Professional presence" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "27",
    slug: "shenoys-1976",
    img: work1,
    title: "Shenoy's 1976",
    client: "Shenoy's",
    industry: "F&B & Heritage",
    tags: ["Project", "Heritage"],
    year: "2024",
    challenge:
      "Build awareness for a heritage F&B establishment with legacy storytelling. The challenge was connecting tradition with contemporary relevance.",
    approach:
      "We developed a heritage-focused strategy emphasizing brand history and authenticity. Through media coverage and community engagement, we positioned the brand.",
    impact: {
      title: "Established heritage credibility",
      description:
        "Shenoy's 1976 strengthened its positioning as an authentic, legacy establishment through strategic storytelling.",
      metrics: [
        { value: "14+", label: "Media features" },
        { value: "Strong", label: "Heritage narrative" },
        { value: "Growing", label: "Customer base" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "28",
    slug: "nistha-bansal-personal-profiling",
    img: work2,
    title: "Nistha Bansal — Personal Profiling",
    client: "Nistha Bansal",
    industry: "Personal Branding & Consulting",
    tags: ["Retainer", "Branding"],
    year: "2024",
    challenge:
      "Build and maintain professional personal brand with sustained communications. The challenge was establishing consistent thought leadership.",
    approach:
      "We executed a comprehensive retainer-based personal profiling strategy. Our approach emphasized consistent media presence and professional authority building.",
    impact: {
      title: "Established professional authority",
      description:
        "Nistha Bansal built strong professional credibility through ongoing media presence and strategic communications.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "16+", label: "Media features" },
        { value: "Strong", label: "Professional brand" },
      ],
    },
    gallery: [work2, work2, work2],
  },
];

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((w) => w.slug === slug);
}

export function getRelatedWork(currentSlug: string, limit = 3): WorkProject[] {
  const current = getWorkBySlug(currentSlug);
  if (!current) return [];

  return workProjects
    .filter((w) => w.slug !== currentSlug)
    .filter((w) => w.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit);
}
