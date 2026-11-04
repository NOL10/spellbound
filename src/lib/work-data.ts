import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

// Import project-specific images
import raraImg1 from "@/assets/images/rara1.png";
import raraImg2 from "@/assets/images/rara2.png";
import raraImg3 from "@/assets/images/rara3.png";
import raraImg4 from "@/assets/images/rara4.png";

import donnaCucinaImg1 from "@/assets/images/donna\ cusine1.JPG";
import donnaCucinaImg2 from "@/assets/images/donna\ cusine2.JPG";
import donnaCucinaImg3 from "@/assets/images/donna\ cusine3.JPG";
import donnaCucinaImg4 from "@/assets/images/donna\ cusine4.JPG";

import lakehouseImg1 from "@/assets/images/lakehouse1.jpg";
import lakehouseImg2 from "@/assets/images/lakehouse.jpg";
import lakehouseImg3 from "@/assets/images/lakehouse3.jpg";
import lakehouseImg4 from "@/assets/images/lakehouse4.jpg";

import greySoulImg1 from "@/assets/images/greysoul1.jpg";
import greySoulImg2 from "@/assets/images/greysoul2.jpg";
import greySoulImg3 from "@/assets/images/greysoul3.jpg";
import greySoulImg4 from "@/assets/images/greysoul4.jpg";

import husnaRahmanImg1 from "@/assets/images/Husna\ Rahman1.jpg";
import husnaRahmanImg2 from "@/assets/images/Husna\ Rahman2.jpg";
import husnaRahmanImg3 from "@/assets/images/Husna\ Rahman3.jpg";
import husnaRahmanImg4 from "@/assets/images/Husna\ Rahman4.jpg";

import jambajiceImg1 from "@/assets/images/jambajice1.webp";
import jambajiceImg2 from "@/assets/images/jambajice2.webp";
import jambajiceImg3 from "@/assets/images/jambajice3.webp";
import jambajiceImg4 from "@/assets/images/jambajice4.webp";

import chaitanyaImg1 from "@/assets/images/chanitya1.jpg";
import chaitanyaImg2 from "@/assets/images/chaithainya2.jpg";
import chaitanyaImg3 from "@/assets/images/chaitaniya3.jpg";
import chaitanyaImg4 from "@/assets/images/chatinya2.jpg";

import ciuImg1 from "@/assets/images/ciu.png";
import ciuImg2 from "@/assets/images/ciu1.jpeg";
import ciuImg3 from "@/assets/images/ciu3.png";
import ciuImg4 from "@/assets/images/ciu4.jpg";

import mrdaImg1 from "@/assets/images/mrda1.jpg";
import mrdaImg2 from "@/assets/images/mrda2.jpg";
import mrdaImg3 from "@/assets/images/mrda.jpg";
import mrdaImg4 from "@/assets/images/mrda4.jpg";

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
  mediaCoverage?: Array<{
    publication: string;
    url: string;
    type: "article" | "instagram" | "facebook";
  }>;
}

export const workProjects: WorkProject[] = [
  {
    id: "1",
    slug: "rara",
    img: raraImg1,
    title: "RARA",
    client: "RARA",
    industry: "Fashion & Design",
    tags: ["Media Coverage"],
    year: "2025",
    challenge: "RARA needed to establish itself as a distinctive luxury fashion brand with a strong retainer partnership. The challenge was maintaining consistent brand narrative and communication across all touchpoints.",
    approach: "We developed a comprehensive retainer-based strategy focused on continuous brand storytelling, media relations, and strategic communications. Our approach emphasized consistent quality across all platforms and touchpoints.",
    impact: {
      title: "Established strong brand presence",
      description: "RARA strengthened its market position through strategic communications and media coverage, building a loyal customer base through consistent brand messaging.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "15+", label: "Media features" },
        { value: "Premium", label: "Brand positioning" }
      ],
    },
    gallery: [raraImg1, raraImg2, raraImg3, raraImg4],
    mediaCoverage: [],
  },
  {
    id: "2",
    slug: "donna-cucina",
    img: donnaCucinaImg1,
    title: "Donna Cucina",
    client: "Donna Cucina",
    industry: "Hospitality & F&B",
    tags: ["Media Coverage", "Blogger Collaborations"],
    year: "2025",
    challenge: "Donna Cucina needed to build awareness and credibility as a premium dining destination. The challenge was creating buzz and establishing the restaurant as a must-visit culinary experience.",
    approach: "We executed a multi-channel strategy combining media coverage and blogger hosting events. Our approach focused on experiential marketing and building community through curated dining experiences.",
    impact: {
      title: "Established dining destination",
      description: "Donna Cucina became recognized as a premium dining destination through strategic media placements and engaging blogger partnerships.",
      metrics: [
        { value: "25+", label: "Media features" },
        { value: "50+", label: "Blogger events hosted" },
        { value: "85%", label: "Booking capacity" }
      ],
    },
    gallery: [donnaCucinaImg1, donnaCucinaImg2, donnaCucinaImg3, donnaCucinaImg4],
    mediaCoverage: [],
  },
  {
    id: "3",
    slug: "donna-cucina-summer-festival",
    img: work3,
    title: "Donna Cucina — Summer Festival",
    client: "Donna Cucina",
    industry: "Hospitality & Events",
    tags: ["Media Coverage", "Blogger Collaborations", "Social Media", "Event Curation"],
    year: "2025",
    challenge: "Launch a seasonal dining experience that would stand out in a competitive market. The challenge was creating exclusivity and cultural relevance around a limited-time concept.",
    approach: "We designed a comprehensive event strategy emphasizing the Italian summer theme. Through curated media coverage, influencer partnerships, and immersive experiences, we positioned this as a cultural moment.",
    impact: {
      title: "Landmark seasonal event",
      description: "The summer festival became one of the season's most anticipated dining experiences, creating organic buzz and establishing Donna Cucina as an experiential dining innovator.",
      metrics: [
        { value: "120+", label: "Media mentions" },
        { value: "2.3M+", label: "Social impressions" },
        { value: "92%", label: "Sold out" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  {
    id: "4",
    slug: "the-lakehouse-amanora",
    img: lakehouseImg1,
    title: "The Lakehouse, Amanora",
    client: "The Lakehouse",
    industry: "Hospitality & Luxury",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Introduce a refined waterfront dining concept to Pune's luxury market. The challenge was positioning the venue as an exclusive destination while building media credibility.",
    approach: "We executed a luxury hospitality narrative emphasizing the unique waterfront setting and curated experiences. Through strategic media placements and influencer partnerships, we established The Lakehouse as a landmark destination.",
    impact: {
      title: "Recognized luxury destination",
      description: "The Lakehouse quickly became Pune's premier dining destination, featured in major hospitality and lifestyle publications across India.",
      metrics: [
        { value: "30+", label: "Major media features" },
        { value: "4.8/5", label: "Average rating" },
        { value: "Booked out", label: "Status" }
      ],
    },
    gallery: [lakehouseImg1, lakehouseImg2, lakehouseImg3, lakehouseImg4],
    mediaCoverage: [],
  },
  {
    id: "5",
    slug: "nanna-negroni",
    img: work2,
    title: "Nanna's Negroni",
    client: "Nanna's Negroni",
    industry: "F&B & Hospitality",
    tags: ["Media Coverage", "Blogger Collaborations"],
    year: "2024",
    challenge: "Launch a distinctive dining and beverage destination in a competitive market. The challenge was building brand recognition and attracting high-net-worth individuals.",
    approach: "We positioned Nanna's Negroni through exclusive media coverage and curated HNI hosting events. Our strategy emphasized the venue's unique offering and cultural significance as a gathering space.",
    impact: {
      title: "Established as destination experience",
      description: "Nanna's Negroni quickly gained recognition as a must-visit destination among discerning diners and influencers, establishing itself as a cultural gathering space.",
      metrics: [
        { value: "20+", label: "Media features" },
        { value: "15+", label: "HNI events hosted" },
        { value: "85%", label: "Regular clientele" }
      ],
    },
    gallery: [work2, work2, work2],
    mediaCoverage: [],
  },
  {
    id: "6",
    slug: "grey-soul-coffee",
    img: greySoulImg1,
    title: "Grey Soul Coffee Roasters",
    client: "Grey Soul",
    industry: "F&B & Specialty Coffee",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Establish credibility as a specialty coffee roaster in India's emerging specialty coffee market. The challenge was building community among coffee enthusiasts and food writers.",
    approach: "We positioned Grey Soul as educators and custodians of coffee craft through a retainer-based partnership. Our strategy focused on media relations, thought leadership content, and community building.",
    impact: {
      title: "Established specialty coffee authority",
      description: "Grey Soul became recognized as a reference point in India's specialty coffee movement, attracting partnerships with cafés and building a passionate community.",
      metrics: [
        { value: "18+", label: "Editorial features" },
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "12k", label: "Engaged community" }
      ],
    },
    gallery: [greySoulImg1, greySoulImg2, greySoulImg3, greySoulImg4],
    mediaCoverage: [],
  },
  {
    id: "7",
    slug: "jamba-juice",
    img: jambajiceImg1,
    title: "Jamba Juice",
    client: "Jamba Juice",
    industry: "F&B & Beverages",
    tags: ["Blogger Collaborations"],
    year: "2024",
    challenge: "Build brand awareness and engagement through influencer and blogger partnerships. The challenge was creating authentic connections with content creators.",
    approach: "We executed a blogger hosting strategy that created authentic content opportunities. Our approach focused on experiential marketing through curated blogger events and partnerships.",
    impact: {
      title: "Built engaged influencer network",
      description: "Jamba Juice developed strong relationships with food and lifestyle bloggers, creating organic content and building community awareness.",
      metrics: [
        { value: "50+", label: "Blogger partnerships" },
        { value: "500k+", label: "Organic reach" },
        { value: "6.5%", label: "Engagement rate" }
      ],
    },
    gallery: [jambajiceImg1, jambajiceImg2, jambajiceImg3, jambajiceImg4],
    mediaCoverage: [],
  },
  {
    id: "8",
    slug: "moni-k",
    img: work3,
    title: "Moni K",
    client: "Moni K",
    industry: "Fashion & Branding",
    tags: ["Media Coverage", "Celebrity & Influencer Placements"],
    year: "2024",
    challenge: "Establish a distinctive personal brand in the luxury fashion space. The challenge was building brand narrative and media presence.",
    approach: "We developed a comprehensive retainer-based branding strategy focusing on media relations, influencer partnerships, and thought leadership positioning.",
    impact: {
      title: "Built luxury brand presence",
      description: "Moni K established itself as a distinctive voice in luxury fashion through strategic media placements and community engagement.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "12+", label: "Media features" },
        { value: "8k", label: "Engaged followers" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  {
    id: "9",
    slug: "rever-by-riddhi",
    img: work3,
    title: "Rever by Riddhi",
    client: "Rever by Riddhi",
    industry: "Luxury Retail",
    tags: ["Social Media", "Blogger Collaborations"],
    year: "2024",
    challenge: "Build authentic community and engagement in the luxury lifestyle space. The challenge was maintaining consistent brand presence and authentic voice.",
    approach: "We developed a social-first retainer strategy centered on community building and authentic engagement. Our approach emphasized quality over quantity in content creation.",
    impact: {
      title: "Built engaged luxury community",
      description: "Rever established itself as a trusted luxury lifestyle brand with an engaged, loyal community of followers.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "8.2%", label: "Engagement rate" },
        { value: "5k", label: "Engaged followers" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  {
    id: "10",
    slug: "jacobi-chocolatier",
    img: work4,
    title: "Jakobi Chocolatier",
    client: "Jacobi",
    industry: "Artisanal F&B",
    tags: [],
    year: "2024",
    challenge: "Establish credibility as an artisanal chocolatier in a mass-market dominated space. The challenge was communicating authentic craftsmanship.",
    approach: "We positioned Jakobi as a custodian of chocolate craft through a retainer-based partnership. Our strategy focused on storytelling around process, ingredients, and artisanal excellence.",
    impact: {
      title: "Recognized as genuine artisan",
      description: "Jakobi gained recognition among food critics and discerning consumers as a reference point for artisanal chocolate craft.",
      metrics: [
        { value: "22", label: "Editorial features" },
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "60%", label: "Repeat rate" }
      ],
    },
    gallery: [work4, work4, work4],
    mediaCoverage: [],
  },
  {
    id: "11",
    slug: "chaitanya-thane",
    img: chaitanyaImg1,
    title: "Chaitanya Thane",
    client: "Chaitanya Thane",
    industry: "Real Estate & Hospitality",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Build brand awareness for a luxury real estate and hospitality project. The challenge was positioning as a lifestyle destination.",
    approach: "We executed a comprehensive media and PR strategy emphasizing lifestyle and luxury positioning. Through strategic partnerships and media placements, we built credibility.",
    impact: {
      title: "Established luxury positioning",
      description: "Chaitanya Thane gained recognition as a premium lifestyle destination through strategic media coverage and partnerships.",
      metrics: [
        { value: "15+", label: "Media features" },
        { value: "8k+", label: "Qualified leads" },
        { value: "Premium", label: "Segment" }
      ],
    },
    gallery: [chaitanyaImg1, chaitanyaImg2, chaitanyaImg3, chaitanyaImg4],
  },
  {
    id: "12",
    slug: "mrda-ahmedabad",
    img: mrdaImg1,
    title: "MRDA Ahmedabad",
    client: "MRDA Ahmedabad",
    industry: "Real Estate & Development",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Build credibility and awareness for a real estate development project. The challenge was establishing thought leadership in urban development.",
    approach: "We developed a strategic PR campaign emphasizing innovation and sustainability. Through media relations and thought leadership positioning, we built authority.",
    impact: {
      title: "Built development authority",
      description: "MRDA gained recognition as a credible development partner through strategic media presence and thought leadership.",
      metrics: [
        { value: "12+", label: "Media features" },
        { value: "10k+", label: "Awareness reach" },
        { value: "Strong", label: "Brand perception" }
      ],
    },
    gallery: [mrdaImg1, mrdaImg2, mrdaImg3, mrdaImg4],
  },
  {
    id: "13",
    slug: "ciu",
    img: ciuImg1,
    title: "CIU (Chennai)",
    client: "CIU",
    industry: "Community & Events",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Build community engagement and event awareness. The challenge was creating meaningful connections among members.",
    approach: "We executed a community-focused strategy emphasizing event creation and member engagement. Our approach focused on building network value.",
    impact: {
      title: "Built active community",
      description: "CIU established itself as a vibrant community gathering space through successful events and strategic communication.",
      metrics: [
        { value: "20+", label: "Events hosted" },
        { value: "500+", label: "Active members" },
        { value: "85%", label: "Engagement rate" }
      ],
    },
    gallery: [ciuImg1, ciuImg2, ciuImg3, ciuImg4],
  },
  {
    id: "14",
    slug: "blackberrys",
    img: work1,
    title: "Blackberrys",
    client: "Blackberrys",
    industry: "Fashion & Apparel",
    tags: ["Event Curation", "Celebrity & Influencer Placements", "Blogger Collaborations"],
    year: "2024",
    challenge: "Reposition brand in a crowded apparel market and appeal to contemporary consumers. The challenge was building design-forward narrative.",
    approach: "We developed a multi-channel strategy emphasizing design innovation. Through social content, influencer partnerships, and media coverage, we built brand relevance.",
    impact: {
      title: "Strengthened brand positioning",
      description: "Blackberrys successfully repositioned itself as a design-forward brand with growing community engagement.",
      metrics: [
        { value: "25k+", label: "Social followers" },
        { value: "6.5%", label: "Engagement rate" },
        { value: "15+", label: "Media features" }
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "15",
    slug: "729-grams-coffee",
    img: work2,
    title: "729 Grams Coffee",
    client: "729",
    industry: "F&B & Specialty Coffee",
    tags: ["Media Coverage", "Blogger Collaborations"],
    year: "2024",
    challenge: "Build brand awareness and credibility in specialty coffee space. The challenge was positioning among discerning coffee consumers.",
    approach: "We executed a retainer-based strategy focusing on media relations and community building. Our approach emphasized craft and quality storytelling.",
    impact: {
      title: "Established coffee authority",
      description: "729 became recognized as a quality-focused specialty coffee brand through strategic media presence and community engagement.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "10+", label: "Media features" },
        { value: "8k", label: "Engaged community" }
      ],
    },
    gallery: [work2, work2, work2],
  },
  
  {
    id: "17",
    slug: "husna-rahman",
    img: work4,
    title: "Husna Rahman",
    client: "Husna Rahman",
    industry: "Content & Creative",
    tags: [],
    year: "2024",
    challenge: "Establish credibility and visibility as a content creator and creative professional. The challenge was building a distinctive voice.",
    approach: "We developed a content-driven strategy with strategic media placements and thought leadership positioning. Our approach focused on authentic storytelling and consistent communication.",
    impact: {
      title: "Established creative authority",
      description: "Husna Rahman built recognition as a talented content creator through media features and high-quality content creation.",
      metrics: [
        { value: "15+", label: "Media mentions" },
        { value: "25+", label: "Content projects" },
        { value: "Growing", label: "Audience" }
      ],
    },
    gallery: [work4, work4, work4],
    mediaCoverage: [],
  },
  
  {
    id: "19",
    slug: "greater-good",
    img: work2,
    title: "Greater Good",
    client: "Greater Good",
    industry: "Social Impact",
    tags: ["Visual Branding & Storytelling", "Social Media"],
    year: "2024",
    challenge: "Build sustainable awareness and engagement for social impact initiatives. The challenge was maintaining consistent messaging and community involvement.",
    approach: "We executed a retainer-based strategy centered on community building and impact storytelling. Our approach focused on authentic narratives and sustained engagement.",
    impact: {
      title: "Built engaged impact community",
      description: "Greater Good strengthened its social impact narrative through consistent communications and strategic partnerships.",
      metrics: [
        { value: "Ongoing", label: "Retainer partnership" },
        { value: "500+", label: "Community members" },
        { value: "Growing", label: "Impact reach" }
      ],
    },
    gallery: [work2, work2, work2],
    mediaCoverage: [],
  },
  {
    id: "20",
    slug: "house-of-sachi",
    img: work3,
    title: "House of Sachi",
    client: "House of Sachi",
    industry: "Fashion & Design",
    tags: ["Visual Branding & Storytelling", "Social Media"],
    year: "2024",
    challenge: "Develop in-house branding and communication strategy for a luxury brand. The challenge was maintaining design excellence and brand consistency.",
    approach: "We provided comprehensive in-house support for branding initiatives, content creation, and strategic communications. Our approach emphasized design-forward positioning.",
    impact: {
      title: "Strengthened brand identity",
      description: "House of Sachi built a cohesive brand presence through strategic in-house initiatives and consistent visual storytelling.",
      metrics: [
        { value: "Ongoing", label: "In-house support" },
        { value: "Strong", label: "Design consistency" },
        { value: "Premium", label: "Brand positioning" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  {
    id: "21",
    slug: "rk-wedding",
    img: work2,
    title: "RK Wedding",
    client: "RK",
    industry: "Events & Weddings",
    tags: ["Social Media"],
    year: "2024",
    challenge: "Execute a high-profile wedding event with strategic communication and coverage. The challenge was managing media relations and creating memorable experiences.",
    approach: "We coordinated comprehensive event strategy including media relations, influencer management, and content creation. Our approach emphasized elegant storytelling.",
    impact: {
      title: "Executed landmark event",
      description: "The wedding became a talked-about event with strong media coverage and social engagement.",
      metrics: [
        { value: "20+", label: "Media features" },
        { value: "500k+", label: "Social reach" },
        { value: "Memorable", label: "Execution" }
      ],
    },
    gallery: [work2, work2, work2],
    mediaCoverage: [],
  },
  {
    id: "22",
    slug: "nav-chaitanya",
    img: work3,
    title: "Nav Chaitanya",
    client: "Nav Chaitanya",
    industry: "Personal Branding",
    tags: ["Media Coverage", "Blogger Collaborations"],
    year: "2024",
    challenge: "Build personal brand visibility and establish professional positioning. The challenge was creating authentic narrative around expertise.",
    approach: "We developed a strategic personal branding initiative with media outreach and content creation. Our approach emphasized thought leadership and authentic voice.",
    impact: {
      title: "Built personal brand presence",
      description: "Nav Chaitanya established strong professional visibility through strategic communications and media placements.",
      metrics: [
        { value: "8+", label: "Media features" },
        { value: "Strong", label: "Professional positioning" },
        { value: "Growing", label: "Influence" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  
  
  {
    id: "25",
    slug: "cinema-salon",
    img: work2,
    title: "Cinema Salon",
    client: "Cinema Salon",
    industry: "Entertainment & Culture",
    tags: ["Media Coverage"],
    year: "2024",
    challenge: "Build awareness and audience engagement for a film-focused cultural initiative. The challenge was attracting cinephiles and media attention.",
    approach: "We developed a culturally-focused strategy emphasizing editorial coverage and community building. Our approach highlighted artistic merit and curated programming.",
    impact: {
      title: "Built engaged film community",
      description: "Cinema Salon established itself as a respected venue for film appreciation through strategic media coverage and community events.",
      metrics: [
        { value: "12+", label: "Media features" },
        { value: "20+", label: "Events hosted" },
        { value: "Growing", label: "Audience base" }
      ],
    },
    gallery: [work2, work2, work2],
    mediaCoverage: [],
  },
  {
    id: "26",
    slug: "roma-gandhi",
    img: work3,
    title: "Roma Gandhi",
    client: "Roma Gandhi",
    industry: "Personal Branding",
    tags: ["Project", "Content"],
    year: "2024",
    challenge: "Build personal brand presence and establish professional positioning. The challenge was creating distinctive personal narrative.",
    approach: "We executed a strategic personal branding project with media outreach and content development. Our approach emphasized authentic storytelling.",
    impact: {
      title: "Built strong personal brand",
      description: "Roma Gandhi established clear professional identity through strategic media placements and quality content.",
      metrics: [
        { value: "10+", label: "Media features" },
        { value: "15+", label: "Content pieces" },
        { value: "Growing", label: "Professional presence" }
      ],
    },
    gallery: [work3, work3, work3],
    mediaCoverage: [],
  },
  {
    id: "27",
    slug: "shenoys-1976",
    img: work4,
    title: "Shenoy's 1976",
    client: "Shenoy's",
    industry: "F&B & Heritage",
    tags: ["Blogger Collaborations", "Celebrity & Influencer Placements"],
    year: "2024",
    challenge: "Build awareness for a heritage F&B establishment with legacy storytelling. The challenge was connecting tradition with contemporary relevance.",
    approach: "We developed a heritage-focused strategy emphasizing brand history and authenticity. Through media coverage and community engagement, we positioned the brand.",
    impact: {
      title: "Established heritage credibility",
      description: "Shenoy's 1976 strengthened its positioning as an authentic, legacy establishment through strategic storytelling.",
      metrics: [
        { value: "14+", label: "Media features" },
        { value: "Strong", label: "Heritage narrative" },
        { value: "Growing", label: "Customer base" }
      ],
    },
    gallery: [work4, work4, work4],
  }
  
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
