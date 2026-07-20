/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Testimonial, FAQItem, ServiceDetail } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ohana-grill',
    title: 'CUSTOM OUTDOOR KITCHEN & BAR',
    subtitle: 'Design & Build',
    location: 'Jumeirah Golf Estates, Dubai',
    category: 'kitchen',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    description: 'A modern outdoor kitchen build featuring a sleek dual-fuel grill, outdoor cooling drawers, and a polished quartzite bar—designed to blend culinary excellence with pool-side luxury.',
    fullStory: 'Located in the prestigious Jumeirah Golf Estates, this outdoor kitchen design and build project combines culinary high performance with luxury styling. The focal point is a massive custom-clad island with a built-in professional 42" hybrid grill (gas and charcoal), surrounded by high-durability quartzite countertops. A seamless steel pergola shelters the bar area, integrating state-of-the-art dimmable LED ambiance lighting. With custom weatherproof cabinetry, smart marine-grade refrigerators, and an auxiliary wood-fired pizza oven, every detail was engineered for seamless, fine-dining entertainment.',
    keyFeatures: [
      '42" Hybrid gas & charcoal built-in professional grill system',
      'Exquisite quartzite countertops with integrated ice chest and wet bar',
      'Weatherproof marine-grade stainless steel framing and powder-coated doors',
      'Custom overhead architectural steel pergola with integrated dimmable LED tracks',
      'Dedicated dual-zone outdoor refrigerator and under-counter ice maker'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Custom Outdoor Kitchen & Bar' },
      { label: 'Location', value: 'Jumeirah Golf Estates, Dubai' },
      { label: 'Materials', value: 'White Quartzite, Marine Stainless, Ipe Wood' },
      { label: 'Grill System', value: 'Kalamazoo Hybrid Fire 42"' },
      { label: 'Completion', value: 'September 2025' }
    ]
  },
  {
    id: 'serene-hearth',
    title: 'SUNKEN FIRE FEATURE & LOUNGE',
    subtitle: 'Fire Feature & Lounge',
    location: 'Emirates Hills, Dubai',
    category: 'fire',
    heroImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
    description: 'An architectural linear gas fire feature integrated into a sunken seating lounge, crafted from premium basalt stone and raw concrete for ambient evening gatherings.',
    fullStory: 'Conceived for a private sanctuary in Emirates Hills, the Serene Path Hearth brings dramatic fire artistry to a spacious backyard lawn. A custom 3-meter linear gas fire pit is carved directly into a premium basalt monolith. Surrounding the fire pit is a sunken lounge lined with custom water-resistant canvas cushions and warm backlighting. The burner utilizes advanced safety sensors with a smart electronic ignition system, controlled via smartphone. The thermal glow contrasted against a sleek architectural pool creates an immersive five-star resort vibe in a private residential home.',
    keyFeatures: [
      '3-Meter custom-sculpted basalt stone linear burner',
      'Fully integrated sunken lounge with all-weather cushions',
      'Remote ignition system and smart automation connectivity',
      'Tuscan black volcanic lava rock burner media',
      'Sleek perimeter LED floor lighting casting architectural glows'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Custom Fire Feature & Sunken Lounge' },
      { label: 'Location', value: 'Emirates Hills, Dubai' },
      { label: 'Materials', value: 'Basalt Monolith, Architectural Concrete, Teak' },
      { label: 'Burner Rating', value: '120,000 BTU Smart Gas Burner' },
      { label: 'Completion', value: 'November 2025' }
    ]
  },
  {
    id: 'breeze-pavilion',
    title: 'BIOCLIMATIC PERGOLA & DINING PAVILION',
    subtitle: 'Dining & Kitchen',
    location: 'Palm Jumeirah, Dubai',
    category: 'pavilion',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    description: 'A grand oceanfront dining pavilion showcasing a custom copper fire dome, rotisserie grill station, and dining accommodations for sixteen guests under a bio-climatic louvred roof.',
    fullStory: 'Standing on the fronds of Palm Jumeirah, the Breeze Al Fresco Pavilion was designed for grand-scale beachside hospitality. It features a fully automated bio-climatic louvred roof that adjusts for sun angles or closes completely in rare rainfall. Inside, a professional Argentine-style grill with a height-adjustable crank wheel sits alongside a custom copper dome wood-fired pizza oven. The space is anchored by an absolute black granite dining table, complete with built-in warming plates, and surrounded by integrated misting systems to keep the environment perfectly temperate during Dubai afternoons.',
    keyFeatures: [
      'Bio-climatic automated louvred pergola with wind sensors',
      'Custom Argentine grill (Asador) with stainless-steel handcrank',
      'Handcrafted clay-lined copper dome pizza oven',
      'High-pressure integrated misting system for thermal control',
      'Custom absolute black granite dining table with warming bays'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Luxury Dining Pavilion & Argentine Grill' },
      { label: 'Location', value: 'Palm Jumeirah, Dubai' },
      { label: 'Materials', value: 'Absolute Black Granite, Copper, Teak' },
      { label: 'Cooling', value: 'High-Pressure 1000 PSI Outdoor Misting' },
      { label: 'Completion', value: 'January 2026' }
    ]
  },
  {
    id: 'redwood-grill',
    title: 'CUSTOM COMPACT KITCHEN & SMOKER',
    subtitle: 'Design & Build',
    location: 'Al Barari, Dubai',
    category: 'kitchen',
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    description: 'A cozy but highly-specified outdoor kitchen layout blending rustic redwood siding with polished dark granite counters and a premium Kamado ceramic smoking bay.',
    fullStory: 'Nestled into the lush rainforest aesthetic of Al Barari, the Redwood Master Suite Grill represents architectural harmony. Combining raw thermo-treated redwood paneling with dense titanium-hued granite countertops, it features a flush-mounted professional gas grill alongside a dedicated ceramic Kamado smoking bay. Under-counter wine chillers and hidden storage compartments maximize space efficiency while preserving a clean, minimalist profile. The warm wood finishes are carefully treated with UV and climate protective sealers designed specifically for harsh Middle Eastern summers.',
    keyFeatures: [
      'Thermo-treated moisture-resistant Redwood cladding',
      'Custom-integrated Kamado ceramic smoker bay',
      'Sleek under-counter dual-zone glass door wine cellar',
      'Polished Titanium Granite slab work surfaces',
      'Flush-mounted LED task and accent cabinet lighting'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Custom Compact Kitchen & Smoker Bay' },
      { label: 'Location', value: 'Al Barari, Dubai' },
      { label: 'Materials', value: 'Thermo-Redwood, Titanium Granite, Stainless Steel' },
      { label: 'Smoker Type', value: 'Kamado Joe Classic III Integrated' },
      { label: 'Completion', value: 'March 2026' }
    ]
  },
  {
    id: 'jumeirah-fire-dome',
    title: 'DECORATIVE FLOATING FIRE BOWL',
    subtitle: 'Fire Feature',
    location: 'Jumeirah Islands, Dubai',
    category: 'fire',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    description: 'A magnificent circular floating fire bowl positioned over a reflective pool feature, crafted in premium brushed brass and volcanic stone with automated ignite controls.',
    fullStory: 'For this luxury Jumeirah Islands villa, Grills & Flames designed a striking artistic visual centerpiece. A large, circular fire dome made of hand-beaten brushed brass floats elegantly over a custom shallow swimming pool step. A concealed gas line runs underwater to fuel the dual-concentric fire ring inside the bowl, which is piled with rare black Indonesian lava rocks. The flickering flames cast dramatic, shimmering reflections across the entire villa facade, creating an awe-inspiring twilight atmosphere perfect for high-profile hosting.',
    keyFeatures: [
      'Hand-beaten thick architectural brushed brass floating bowl',
      'Underwater gas line engineering with proprietary water-stop seals',
      'Dual-concentric stainless steel high-flow burner ring',
      'Safety thermopile sensors with auto gas shut-off protection',
      'Seamless integration with the pool water filtration system'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Artistic Water-Floating Fire Feature' },
      { label: 'Location', value: 'Jumeirah Islands, Dubai' },
      { label: 'Materials', value: 'Beaten Brass, Marine 316 Stainless, Lava Rock' },
      { label: 'Fuel Type', value: 'LPG / Smart Ignite Connection' },
      { label: 'Completion', value: 'May 2026' }
    ]
  },
  {
    id: 'golf-estate-pavilion',
    title: 'LUXURY PERGOLA & ROTISSERIE PAVILION',
    subtitle: 'Dining & Build',
    location: 'Jumeirah Golf Estates, Dubai',
    category: 'pavilion',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    description: 'A grand architectural steel-frame dining canopy sheltering a massive outdoor brick fireplace, fully integrated rotisserie spit, and custom quartz dining counters.',
    fullStory: 'Perched overlooking the championship Earth Course at Jumeirah Golf Estates, this entertainment pavilion is the pinnacle of outdoor luxury. Centering around a floor-to-ceiling brick-clad wood fireplace, the pavilion houses a heavy-duty professional rotisserie spit capable of roasting whole cuts. The custom steel columns frame panoramic views of the greens, while retractable high-definition weatherproof shade screens roll down at the touch of a button. The entire structure is wired with high-end premium outdoor audio, bringing theater-quality sound to an al fresco culinary feast.',
    keyFeatures: [
      'Floor-to-ceiling rustic brick wood-burning fireplace monolith',
      'Industrial-grade motorized rotisserie spit with multi-height configurations',
      'Retractable automated zip-track climate and sun screens',
      'Premium integrated Sonance outdoor high-fidelity surround audio',
      'Premium polished quartz bar with hidden drawer dishwashers'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Project Type', value: 'Luxury Sports Pavilion & Brick Fireplace' },
      { label: 'Location', value: 'Jumeirah Golf Estates, Dubai' },
      { label: 'Materials', value: 'Rustic Brick, Structural Steel, Polished Quartz' },
      { label: 'Grill Type', value: 'Custom Commercial Wood Rotisserie' },
      { label: 'Completion', value: 'June 2026' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Elena Rostova',
    role: 'Villa Owner, Jumeirah Golf Estates',
    rating: 5,
    date: '2 months ago',
    text: 'Grills & Flames transformed our empty backyard into a five-star al fresco dining resort! The hybrid grill they recommended is incredible, and the travertine stonework on the kitchen island is flawless. From permit approval to the first steak cooked, their team was extremely professional and meticulous.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: '2',
    author: 'Faisal Al-Thani',
    role: 'Villa Owner, Emirates Hills',
    rating: 5,
    date: '3 months ago',
    text: 'The sunken linear fire lounge is spectacular. We spend almost every evening outdoors now. Their engineering team took care of all gas pipe extensions and Dubai Municipality safety approvals seamlessly. True luxury craftsmanship. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: '3',
    author: 'Marcus Vance',
    role: 'Property Developer, Palm Jumeirah',
    rating: 4.8,
    date: '4 months ago',
    text: 'Superb execution on our beachfront pavilion project. The bioclimatic louvred roof and the custom Argentine grill are a dream combination for our guests. They handled the complex seaside environment challenges with ease and delivered on time.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Do You Provide Design Services For Every Project?',
    answer: 'Yes, absolutely. Every Grills & Flames project begins with a dedicated design consultation. We produce comprehensive 2D layouts and fully rendered 3D spatial visualizations. This allows you to walk through your virtual outdoor kitchen or fire lounge and fine-tune material selections, lighting placements, and equipment layout before any construction work begins.'
  },
  {
    id: '2',
    question: 'Do You Handle Both Residential And Commercial Projects?',
    answer: 'Yes. While the majority of our work is high-end residential villas across Dubai and Abu Dhabi, we also design and install premium outdoor culinary zones for luxury hotels, beach clubs, fine-dining rooftops, and high-end residential developments.'
  },
  {
    id: '3',
    question: 'Can You Obtain Necessary Approvals For My Project?',
    answer: 'Yes. Operating in Dubai requires strict compliance with municipal, developer, and community guidelines (such as Dubai Municipality, Civil Defence, Emaar, Nakheel, or Jumeirah Golf Estates). Our in-house engineering team handles the complete engineering drawing submissions, structural certifications, gas utility extensions, and final safety inspections so you do not have to worry about the paperwork.'
  },
  {
    id: '4',
    question: 'What Types Of Materials Do You Use?',
    answer: 'We only source premium, climate-resilient materials designed to withstand Dubai’s high temperature, humidity, and salinity. This includes marine-grade 316 stainless steel (for cabinets and framing), natural stones (such as granite, quartzite, and volcanic basalt), thermo-treated timber cladding (Ipe, teak, and thermo-ash), and commercial-grade outdoor equipment with weatherproof certifications.'
  },
  {
    id: '5',
    question: 'Do You Have An In-House Construction Team?',
    answer: 'Yes, we are a fully integrated design & build company. We do not subcontract our core workmanship. Our dedicated team of master masonry workers, premium finish carpenters, gas engineers, and electrical technicians ensure that the hand-built quality remains perfectly consistent from blueprint to final handover.'
  },
  {
    id: '6',
    question: 'How Do You Ensure The Accuracy Of The Project?',
    answer: 'We utilize advanced digital laser scanners to capture millimeter-accurate dimensions of your existing backyard site. All our custom cabinets and structures are pre-fabricated in our modern workshop using precision CNC machinery, ensuring perfect alignments. On-site, our senior project managers perform daily quality checklists to ensure that the physical build matches the approved 3D design exactly.'
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'pergolas',
    title: 'PERGOLAS',
    description: 'Stylish shade solutions for outdoor comfort.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tagline: 'Automated Bioclimatic Architecture',
    longDescription: 'Our pergolas integrate structural engineering with luxury aesthetics. Engineered specifically for the extreme Dubai climate, they feature automated rotatable louvres that adjust seamlessly for absolute shade control, or seal completely to protect your lounge from unexpected rain. Outfitted with high-pressure micro-misting systems, customized ambient warmth LED tracks, and hidden acoustics, they redefine luxury al fresco living.',
    features: [
      'Automated smart-home motorization & smartphone app integration',
      'Dual-stage high-pressure cooling misting line systems (drop ambient temps by up to 12°C)',
      'Certified marine-grade structural steel and anti-corrosion powder coatings',
      'Integrated heavy-duty motorized wind-resistant side tracks and screens'
    ],
    specifications: [
      { label: 'Materials', value: 'Architectural Grade T6 Aluminum & Marine-grade 316 Stainless Steel' },
      { label: 'Wind Resistance', value: 'Certified up to 120 km/h structural load' },
      { label: 'Climate Control', value: 'Integrated French high-pressure 1000 PSI mist pump' },
      { label: 'Integration', value: 'KNX, Crestron, Lutron and standard iOS/Android controllers' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Automated bio-climatic louvred canopies adjusting for perfect shade',
      'Integrated high-pressure outdoor cooling misting systems',
      'Premium surround acoustics, lighting arrays, and ceiling heating bays',
      'Retractable wind-resistant mesh panels for maximum al fresco seasonal comfort'
    ]
  },
  {
    id: 'outdoor-fire-pits',
    title: 'OUTDOOR FIRE PITS',
    description: 'Cozy up with beautiful backyard fire pits.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    tagline: 'Exquisite Warmth Under the Stars',
    longDescription: 'Our custom-engineered outdoor fire pits act as the social focal point of Dubai’s finest estates. From sunken seating lounges lined with luxury marine-grade fabrics to minimalist floating fire tables, we build custom systems tailored to your hosting style. Each unit features certified natural gas or LPG burners complete with electronic automation, safety thermopiles, and exquisite stone masonry details.',
    features: [
      'Sunken structural lounge layouts with custom drainage integration',
      'Natural gas pipeline connections or concealed safe LPG chambers',
      'Exquisite stone details (Italian travertine, Greek marble, or volcanic basalt)',
      'Electronic ignition with remote controllers and auto-stop safety values'
    ],
    specifications: [
      { label: 'Fuel Options', value: 'Direct Natural Gas, LPG Bottles, or Bioethanol' },
      { label: 'Heat Output', value: 'Up to 95,000 BTU high-efficiency burners' },
      { label: 'Finishes', value: 'Raw concrete, travertine, leathered absolute black granite' },
      { label: 'Safety', value: 'Dubai Civil Defence certified gas regulators & automatic shutoff' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Custom linear, round, or square fire features crafted from premium stone',
      'Sunken lounges integrated with all-weather high-luxury cushioning',
      'Smart gas burner setups with electronic ignition and remote automation',
      'Fully certified safety valves and automatic gas shut-offs'
    ]
  },
  {
    id: 'indoor-fire-pits',
    title: 'INDOOR FIRE PITS',
    description: 'Add warmth and elegance indoors.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Sleek, Ventless Interior Elegance',
    longDescription: 'Enjoy the warmth and luxury of real flames inside your home without the need for traditional chimneys or vents. Utilizing ecologically clean bioethanol or state-of-the-art steam-mist lighting technology, we create custom linear fireplaces recessed into structural walls, marble columns, or floating partitions. Bound with heavy tempered glass and premium titanium trims, these interior masterworks enhance the mood of any luxury room.',
    features: [
      'Eco-friendly clean-burning bioethanol technology with no smoke or soot',
      'Ultrasonic water vapor realistic mist fire effects for premium safety',
      'Custom stone housings featuring integrated thermal-isolation barriers',
      'Premium smart remote control and voice command integration'
    ],
    specifications: [
      { label: 'Fuel Type', value: '96.6% Pure liquid bioethanol or Pure filtered water' },
      { label: 'Ventilation', value: '100% Ventless, no chimney required' },
      { label: 'Safety Glass', value: '12mm Opti-White toughened tempered safety glass' },
      { label: 'Controls', value: 'Sleek touch panel, keyless remote, or Alexa/Google Home' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Ventless clean-burning bioethanol fire technology',
      'Tempered glass shields and structural stone casings for indoor safety',
      'Tabletop and recessed luxurious architectural configurations',
      'Ecologically friendly cozy heating solutions with low-maintenance needs'
    ]
  },
  {
    id: 'fire-bowls',
    title: 'DECORATIVE FIRE BOWLS',
    description: 'Glow with stylish, artistic fire features.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    tagline: 'The Dynamic Intersection of Fire & Water',
    longDescription: 'Transform your poolside or terrace into a striking resort-style landscape with our architectural decorative fire bowls. We forge these custom bowls from heavy-gauge solid copper, marine brass, or handcrafted structural stone. Integrated over custom infinity water spillways, they let water cascade into your swimming pool while spectacular concentric gas flames blaze elegantly above, casting magical reflection dynamics across your entire estate.',
    features: [
      'Heavy-duty solid copper, marine brass, or cast stone bowls',
      'Integrated water spillways cascading directly into swimming pools',
      'Concentric high-efficiency gas burners designed for outdoor wind resistance',
      'Lined with authentic premium black volcanic lava rock or reflective fire glass'
    ],
    specifications: [
      { label: 'Dimensions', value: 'Diameters from 24 inches up to 48 inches custom sizes' },
      { label: 'Plumbing', value: 'Seamless integrated water-flow return pipework' },
      { label: 'Burner Specs', value: 'Solid 316 Stainless steel water-resistant gas rings' },
      { label: 'Media', value: 'High-temp lava rock, dark basalt, or custom emerald glass' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Water-floating and poolside architectural fire bowls',
      'Handcrafted thick brushed brass, copper, or structural cast-stone bowls',
      'High-flow concentric gas rings topped with Indonesian black lava rock',
      'Dramatic reflection dynamics creating high-end twilight backdrops'
    ]
  },
  {
    id: 'bbqs',
    title: "CUSTOM BBQ STATIONS",
    description: 'Grill in style with premium outdoor BBQs.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    tagline: 'The Professional Culinary Workstation',
    longDescription: 'For those who view outdoor cooking as an art form. We build professional-grade BBQ stations custom-fitted to your preferred cooking method—be it direct high-intensity gas grills, natural wood-fired rotisseries, or traditional charcoal hearths. Structured using heavy-duty 316 stainless steel framing and beautiful weatherproof stone masonry, our BBQ stations combine premium culinary components with industrial durability.',
    features: [
      'Integrated premium grills (Wolf, DCS, Coyote, or Lynx)',
      'Custom heavy-duty welded 316 marine-grade stainless steel structure',
      'Climate-resilient weather stripping and soft-closing insulated doors',
      'Dedicated warm storage compartments, integrated ice chest, and spice racks'
    ],
    specifications: [
      { label: 'Grill Units', value: 'Gas, Charcoal, Wood-fired, or hybrid combination configurations' },
      { label: 'Cabinetry', value: 'Pre-fabricated marine stainless steel with premium stone wraps' },
      { label: 'Gas Lines', value: 'Professional pressure-tested copper gas piping with safety valves' },
      { label: 'Accessories', value: 'Built-in rotisserie, wood chip drawers, high-BTU sear stations' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Premium integrated gas, charcoal, wood-fired, and hybrid grill systems',
      'Marine-grade 316 stainless steel cabinets and weathering door finishes',
      'Built-in ice chests, deep warming drawers, and custom rotisserie units',
      'Exquisite stone finishes built to withstand local outdoor weather elements'
    ]
  },
  {
    id: 'outdoor-kitchens',
    title: 'OUTDOOR KITCHENS',
    description: 'Cook and entertain in open-air luxury.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tagline: 'The Ultimate Al Fresco Entertaining Suite',
    longDescription: 'We design and construct fully integrated outdoor kitchens that mirror the sophistication and utility of your indoor culinary suite. Structured with rust-proof internal steel frames and clad with breathtaking quartzites or solid granite slabs, our outdoor kitchens are custom-outfitted with professional under-counter wine fridges, waterproof smart televisions, deep sinks, and custom breakfast bar islands for the perfect luxury hosting experience.',
    features: [
      'Premium monolithic countertop finishes (Absolute Black Granite, Dekton, or Quartzite)',
      'Fully weatherproofed integrated appliances (refrigerators, ice makers, wine chillers)',
      'Custom dry pantry cabinets with integrated magnetic moisture seals',
      'Exquisite ambient task-lighting, outdoor sound-system panels, and bar seating'
    ],
    specifications: [
      { label: 'Framework', value: 'Millimeter-precise heavy-gauge 316 marine-grade steel framing' },
      { label: 'Countertops', value: '20mm premium UV-resistant Dekton or quartzite slabs with mitered edges' },
      { label: 'Plumbing', value: 'Hot & cold water connections, built-in heavy waste grinders' },
      { label: 'Electric Load', value: 'IP66 waterproof rated exterior outlets with dedicated circuit boards' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ],
    bullets: [
      'Custom culinary setups tailored for grand open-air hospitality',
      'Thick slabs of quartzite or absolute black granite workspaces',
      'Dual-zone under-counter wine chillers, ice makers, and premium bar sinks',
      'Integrated lighting, audio, and utility connections for perfect hosting'
    ]
  }
];
