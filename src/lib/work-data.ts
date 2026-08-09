import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

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
    slug: "rara-by-arshiya-singhvi",
    img: work1,
    title: "RARA by Arshiya Singhvi",
    client: "RARA by Arshiya Singhvi",
    industry: "Fashion & Design",
    tags: ["Public Relations", "Design"],
    year: "2025",
    challenge:
      "RARA by Arshiya Singhvi needed to establish itself as a distinctive luxury fashion brand in a crowded market. The challenge wasn't just launching a collection, but creating a narrative that positioned the brand as a thoughtful voice in contemporary Indian fashion — one that speaks to discerning audiences who value craft, heritage, and innovation.",
    approach:
      "We built RARA's brand narrative from first principles. Starting with a deep dive into Arshiya's design philosophy and the stories behind each collection, we developed a comprehensive PR and design strategy. We crafted a visual identity that reflected the brand's ethos—refined, intentional, and distinctly modern. On the communications front, we shaped media relationships, curated influencer partnerships, and created content that positioned RARA not just as a product, but as a perspective on fashion. Every touchpoint, from press releases to social content, was designed to reinforce the brand's positioning as a design house that refuses to follow trends.",
    impact: {
      title: "From launch to cultural conversation",
      description:
        "RARA quickly gained traction among fashion editors, style influencers, and discerning consumers. The brand's distinctive voice cut through the noise, earning features in top-tier fashion publications and building an engaged community of supporters who saw themselves reflected in the brand's values.",
      metrics: [
        { value: "15+", label: "Media features in first quarter" },
        { value: "8.5k", label: "Engaged followers built organically" },
        { value: "3", label: "Major fashion collaborations secured" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "2",
    slug: "donna-cucina-italian-summer",
    img: work2,
    title: "Donna Cucina — Italian Summer",
    client: "Donna Cucina",
    industry: "Hospitality & F&B",
    tags: ["Events", "F&B"],
    year: "2025",
    challenge:
      "Donna Cucina wanted to launch a limited-edition Italian summer experience that would feel like an escape—not just a meal. The challenge was to create buzz around a seasonal dining concept in a city where novelty fades fast, and to make the experience feel exclusive, immersive, and worth the conversation.",
    approach:
      "We treated this as an experiential storytelling project. Rather than traditional marketing, we created a curated narrative around the Italian summer—the people, the places, the food culture. We designed every element: from the visual language used across communications to the guest list curation to the media narrative. We positioned this not as a restaurant pop-up, but as a cultural moment. Partnerships with cultural tastemakers, influencers, and media were strategically woven into the launch, and the content strategy focused on capturing the sensory, emotional experience of the dining concept.",
    impact: {
      title: "A moment that lingered",
      description:
        "Donna Cucina's Italian Summer became one of the season's most talked-about dining experiences. The event created organic buzz, with attendees becoming advocates who shared their experiences across platforms. Media coverage positioned it as a landmark cultural event, not just another restaurant activation.",
      metrics: [
        { value: "2.3M+", label: "Impressions across social channels" },
        { value: "120+", label: "Media mentions" },
        { value: "92%", label: "Booking capacity within 48 hours" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "3",
    slug: "rever-by-rb",
    img: work3,
    title: "Rever by RB",
    client: "Rever by RB",
    industry: "Luxury Retail",
    tags: ["Social", "Content"],
    year: "2025",
    challenge:
      "Rever by RB entered the market with a bold vision: to redefine what a luxury lifestyle brand means to contemporary consumers. The challenge lay in building authentic community and engagement in a space often dominated by aspirational, disconnected content. Rever needed a social presence that felt genuine, intimate, and worth paying attention to.",
    approach:
      "We developed a social-first brand strategy that placed community at its center. Instead of broadcasting, we created spaces for dialogue. Content was shaped around Rever's values, visual aesthetic, and the lifestyle it represented. We focused on storytelling that showed the 'behind-the-scenes,' the craft, the intentionality—the things that make Rever distinctive. Community management became a form of brand building, where every interaction reinforced the brand's ethos. We also engineered strategic collaborations with aligned creators and brands that expanded reach while maintaining authenticity.",
    impact: {
      title: "Community over followers",
      description:
        "Rever built an engaged, loyal community that became advocates for the brand. While follower counts grew steadily, the real metric was engagement rate and the quality of conversations happening in comments and DMs. The brand became known for authentic, thoughtful content in an industry often criticized for superficiality.",
      metrics: [
        { value: "45k", label: "Followers built in 6 months" },
        { value: "8.2%", label: "Average engagement rate" },
        { value: "150+", label: "User-generated content pieces" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "4",
    slug: "jakobi-chocolatier",
    img: work4,
    title: "Jakobi Chocolatier",
    client: "Jakobi Chocolatier",
    industry: "Artisanal F&B",
    tags: ["PR", "Craft"],
    year: "2024",
    challenge:
      "Jakobi Chocolatier is an artisanal chocolatier with a commitment to quality, heritage, and craft that goes beyond typical fine food messaging. The challenge was to communicate this authenticity and craftsmanship to food writers, influencers, and consumers in a way that set Jakobi apart from mass-market chocolate brands claiming 'artisanal' status.",
    approach:
      "We positioned Jakobi not as a chocolate brand, but as a custodian of craft. Our approach focused on storytelling around the process, the ingredients, the people behind the brand. We cultivated relationships with food writers and culinary tastemakers who understood the nuances of artisanal production. Media placements were strategic and quality-focused rather than volume-focused. We created content that showed the obsessive attention to detail—the kind of work that doesn't scale but shouldn't. From PR to visual communication, every element reinforced the idea that Jakobi wasn't competing on flavor alone, but on integrity.",
    impact: {
      title: "Recognized as the genuine article",
      description:
        "Jakobi gained recognition among food critics, influencers, and discerning consumers as a brand that genuinely cares about craft. Media coverage positioned the brand as a reference point for artisanal chocolate, and it became the go-to gift and recommendation among foodies and design-conscious consumers.",
      metrics: [
        { value: "22", label: "Editorial features in year one" },
        { value: "5.2k", label: "Core community members" },
        { value: "60%", label: "Repeat customer rate" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "5",
    slug: "the-lakehouse-amanora",
    img: work4,
    title: "The Lakehouse, Amanora",
    client: "The Lakehouse, Amanora",
    industry: "Hospitality & Real Estate",
    tags: ["PR", "Branding", "Luxury"],
    year: "2025",
    challenge:
      "The Lakehouse by Amanora needed to introduce a sophisticated dining concept to Pune's luxury lifestyle market. The challenge was positioning a refined, water-edge dining venue in a competitive landscape while maintaining exclusivity and establishing it as a destination for experiential dining.",
    approach:
      "We crafted a luxury hospitality narrative emphasizing the venue's unique waterfront location and curated dining experience. Through strategic media placements in lifestyle publications, collaborations with food critics, and influencer partnerships, we positioned The Lakehouse as a landmark destination. Our approach highlighted the thoughtful design, culinary excellence, and immersive experience that sets it apart from conventional dining venues.",
    impact: {
      title: "Established as a landmark destination",
      description:
        "The Lakehouse quickly became recognized as one of Pune's premier dining experiences. Media coverage positioned it as a destination worth traveling for, and it garnered features in major hospitality and lifestyle publications across India.",
      metrics: [
        { value: "25+", label: "Major media features" },
        { value: "4.8/5", label: "Average rating across platforms" },
        { value: "85%", label: "Booking capacity" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "6",
    slug: "grey-soul-coffee",
    img: work1,
    title: "Grey Soul Coffee Roasters",
    client: "Grey Soul Coffee Roasters",
    industry: "F&B & Speciality Coffee",
    tags: ["PR", "Content", "Social"],
    year: "2024",
    challenge:
      "Grey Soul Coffee Roasters wanted to establish itself as a reference point for specialty coffee culture in India. The challenge was building credibility in a niche market and creating a community of coffee enthusiasts who understood and valued the craft behind specialty coffee.",
    approach:
      "We positioned Grey Soul as educators and custodians of coffee craft. Our strategy focused on building relationships with coffee journalists, food writers, and cultural tastemakers. We created content that demystified specialty coffee while celebrating the artistry involved. Through interviews, media features, and community events, we shifted the conversation from commodity coffee to craft and culture.",
    impact: {
      title: "Established credibility in specialty coffee space",
      description:
        "Grey Soul became recognized as a thought leader in India's specialty coffee movement. The brand earned features in major publications and built a passionate community of coffee enthusiasts who valued the brand's commitment to quality and education.",
      metrics: [
        { value: "18+", label: "Editorial features" },
        { value: "12k", label: "Engaged community members" },
        { value: "65%", label: "Repeat purchase rate" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "7",
    slug: "blackberrys",
    img: work2,
    title: "Blackberrys",
    client: "Blackberrys",
    industry: "Fashion & Apparel",
    tags: ["Social", "Content", "PR"],
    year: "2024",
    challenge:
      "Blackberrys sought to refresh its brand narrative and appeal to a contemporary, design-conscious audience. The challenge was repositioning the brand in a crowded apparel market while maintaining its heritage and reaching new consumer segments.",
    approach:
      "We developed a multi-channel strategy emphasizing design innovation and contemporary styling. Through curated social content, influencer collaborations, and strategic media partnerships, we highlighted Blackberrys' distinctive design language and quality craftsmanship. Our approach focused on building community through authentic engagement and user-generated content.",
    impact: {
      title: "Strengthened brand positioning",
      description:
        "Blackberrys successfully repositioned itself as a design-forward apparel brand. Social engagement increased significantly, with strong community participation and positive media reception among fashion publications and lifestyle media.",
      metrics: [
        { value: "32k", label: "Social followers acquired" },
        { value: "6.5%", label: "Average engagement rate" },
        { value: "28+", label: "Media features" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "8",
    slug: "gamezop",
    img: work3,
    title: "Gamezop",
    client: "Gamezop",
    industry: "Tech & Gaming",
    tags: ["PR", "Branding", "Content"],
    year: "2024",
    challenge:
      "Gamezop needed to establish itself as a leader in the casual gaming space in India. The challenge was building awareness and credibility for a tech platform in a rapidly evolving market while communicating the value proposition to both developers and players.",
    approach:
      "We positioned Gamezop as an innovative platform democratizing game development and distribution. Our strategy included thought leadership pieces, media partnerships with tech publications, and collaborations with industry influencers. We created content that explained the platform's significance in the gaming ecosystem while highlighting user success stories.",
    impact: {
      title: "Established as gaming platform leader",
      description:
        "Gamezop gained significant media attention and industry recognition. The platform attracted partnerships and user growth through strategic positioning and consistent media presence across tech and gaming publications.",
      metrics: [
        { value: "650M+", label: "Minutes of engagement on platform" },
        { value: "35+", label: "Media mentions" },
        { value: "500k+", label: "Active users acquired" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "9",
    slug: "house-of-sachi",
    img: work1,
    title: "House of Sachi",
    client: "House of Sachi",
    industry: "Design & Decor",
    tags: ["PR", "Design", "Social"],
    year: "2024",
    challenge:
      "House of Sachi needed to establish itself as a premium design and decor destination. The challenge was building brand recognition among design-conscious consumers and establishing credibility in the interior design and home décor space.",
    approach:
      "We created a lifestyle narrative around design excellence and craftsmanship. Through features in design publications, collaborations with interior designers and architects, and curated social content, we positioned House of Sachi as a destination for discerning design consumers. Our approach emphasized the brand's commitment to quality, curation, and design innovation.",
    impact: {
      title: "Established as premium design destination",
      description:
        "House of Sachi became recognized as a curated space for design and home décor. The brand attracted design professionals, architects, and conscious consumers seeking premium, thoughtfully curated pieces.",
      metrics: [
        { value: "20+", label: "Features in design publications" },
        { value: "8k", label: "Design community followers" },
        { value: "45%", label: "Professional buyer segment" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "10",
    slug: "reliance-jewels",
    img: work2,
    title: "Reliance Jewels",
    client: "Reliance Jewels",
    industry: "Luxury & Jewellery",
    tags: ["PR", "Content", "Branding"],
    year: "2024",
    challenge:
      "Reliance Jewels sought to strengthen its position as a premium jewellery retailer. The challenge was communicating luxury heritage while remaining accessible to contemporary consumers and building emotional connection to the brand.",
    approach:
      "We developed a brand narrative centered on heritage, craftsmanship, and timeless elegance. Through strategic media partnerships, celebrity collaborations, and seasonal campaigns, we positioned Reliance Jewels as a custodian of fine jewellery traditions. Our approach emphasized the emotional and cultural significance of jewellery in Indian life.",
    impact: {
      title: "Strengthened premium positioning",
      description:
        "Reliance Jewels solidified its position as a luxury jewellery destination through strategic media presence and community engagement. The brand gained significant positive coverage in lifestyle and luxury publications.",
      metrics: [
        { value: "50+", label: "Media features annually" },
        { value: "15k", label: "Engaged luxury community" },
        { value: "72%", label: "Brand recall among target segment" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "11",
    slug: "la-folie",
    img: work3,
    title: "La Folie",
    client: "La Folie",
    industry: "Hospitality & F&B",
    tags: ["PR", "Events", "Branding"],
    year: "2024",
    challenge:
      "La Folie needed to establish itself as a distinctive culinary destination. The challenge was creating a unique brand identity in a competitive hospitality market and building a reputation for gastronomic excellence.",
    approach:
      "We positioned La Folie as a culinary storytelling destination. Through chef interviews, food critic partnerships, and immersive dining event coverage, we created a narrative around the restaurant's culinary philosophy. Our content strategy highlighted the artistry, innovation, and cultural significance of the menu.",
    impact: {
      title: "Established culinary reputation",
      description:
        "La Folie became recognized as a destination for discerning food enthusiasts. The restaurant gained significant media attention and critical acclaim from food writers and lifestyle publications.",
      metrics: [
        { value: "30+", label: "Food critic features" },
        { value: "4.7/5", label: "Average rating" },
        { value: "90%", label: "Reservation capacity" },
      ],
    },
    gallery: [work3, work3, work3],
  },
  {
    id: "12",
    slug: "essange",
    img: work4,
    title: "Essange",
    client: "Essange",
    industry: "Beauty & Wellness",
    tags: ["PR", "Content", "Social"],
    year: "2024",
    challenge:
      "Essange sought to build brand awareness and credibility in the premium beauty and wellness space. The challenge was differentiating in a saturated market and establishing authentic connection with conscious beauty consumers.",
    approach:
      "We created a narrative around mindful beauty and wellness. Through partnerships with beauty journalists, influencers, and wellness experts, we positioned Essange as a brand that understands holistic beauty. Our content strategy emphasized clean beauty, sustainability, and scientific approach to skincare.",
    impact: {
      title: "Built conscious beauty community",
      description:
        "Essange established itself as a trusted brand among conscious beauty consumers. The brand gained significant media coverage and built an engaged community valuing quality and sustainability.",
      metrics: [
        { value: "12k", label: "Engaged followers" },
        { value: "22+", label: "Beauty publication features" },
        { value: "8.1%", label: "Community engagement rate" },
      ],
    },
    gallery: [work4, work4, work4],
  },
  {
    id: "13",
    slug: "nanna-negroni",
    img: work1,
    title: "Nanna's Negroni",
    client: "Nanna's Negroni",
    industry: "F&B & Hospitality",
    tags: ["PR", "Social", "Events"],
    year: "2024",
    challenge:
      "Nanna's Negroni needed to establish itself as a distinctive dining and beverage destination. The challenge was building brand recognition and creating buzz around a new concept in a competitive market.",
    approach:
      "We positioned Nanna's Negroni through immersive dining experiences and beverage storytelling. Through event coverage, chef collaborations, and mixologist partnerships, we created a narrative around the restaurant's unique culinary and beverage offerings. Our strategy emphasized craft, authenticity, and cultural fusion.",
    impact: {
      title: "Established as destination experience",
      description:
        "Nanna's Negroni quickly gained recognition as a must-visit destination. The venue attracted food enthusiasts, travelers, and media attention, establishing itself as a cultural gathering space.",
      metrics: [
        { value: "25+", label: "Media features" },
        { value: "5k", label: "Monthly social impressions" },
        { value: "85%", label: "Regular customer base" },
      ],
    },
    gallery: [work1, work1, work1],
  },
  {
    id: "14",
    slug: "dassani-brothers",
    img: work2,
    title: "Dassani Brothers",
    client: "Dassani Brothers",
    industry: "Luxury & Jewellery",
    tags: ["PR", "Branding", "Design"],
    year: "2024",
    challenge:
      "Dassani Brothers needed to strengthen its heritage brand positioning and appeal to contemporary luxury consumers. The challenge was balancing tradition with modernity while maintaining exclusivity.",
    approach:
      "We developed a luxury narrative centered on heritage craftsmanship and contemporary design. Through features in luxury publications, designer collaborations, and exclusive event coverage, we positioned Dassani Brothers as a bridge between tradition and innovation. Our content emphasized the artisanal process and design excellence.",
    impact: {
      title: "Elevated brand prestige",
      description:
        "Dassani Brothers strengthened its position as a premium jewellery brand. The brand gained significant coverage in luxury publications and attracted high-net-worth individuals and design-conscious consumers.",
      metrics: [
        { value: "18+", label: "Luxury publication features" },
        { value: "12k", label: "High-value followers" },
        { value: "75%", label: "HNWI awareness" },
      ],
    },
    gallery: [work2, work2, work2],
  },
  {
    id: "15",
    slug: "udaan-by-le-sutra",
    img: work3,
    title: "Udaan by Le Sutra Great Escapes",
    client: "Udaan by Le Sutra Great Escapes",
    industry: "Luxury Travel & Hospitality",
    tags: ["PR", "Branding", "Travel"],
    year: "2024",
    challenge:
      "Udaan needed to establish itself as a luxury travel destination offering exclusive, curated experiences. The challenge was building awareness among affluent travelers and communicating the unique value proposition of bespoke travel experiences.",
    approach:
      "We positioned Udaan as a curator of transformative travel experiences. Through travel journalist partnerships, luxury publication features, and destination storytelling, we created a narrative around authentic, curated journeys. Our content emphasized uniqueness, exclusivity, and transformative travel experiences.",
    impact: {
      title: "Established luxury travel brand",
      description:
        "Udaan gained recognition among discerning travelers seeking unique experiences. The brand attracted partnerships with luxury hotels and travel influencers, establishing itself as a premium travel curator.",
      metrics: [
        { value: "20+", label: "Travel publication features" },
        { value: "8k", label: "Luxury traveler community" },
        { value: "78%", label: "Booking conversion rate" },
      ],
    },
    gallery: [work3, work3, work3],
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
