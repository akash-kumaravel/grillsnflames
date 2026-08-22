import { FAQItem, ProductDetails, BlogArticle, ServiceItem, GasFireplaceVariant, OutdoorFireUnitVariant } from './types';

export const BRAND = "Flames Fireplace";
export const TAGLINE = "Indoor & Outdoor Fire Features in Dubai & UAE";

export const META_SUMMARY = {
  home: {
    title: "Best Fireplace in Dubai | Flames Fireplace UAE",
    description: "Flames Fireplace designs and installs premium indoor and outdoor fire features in Dubai and the UAE, including outdoor gas fire places, manual ethanol fire places, 3D water vapor fire places, fire pots, and custom fire tables.",
    primaryKW: "best fireplace in Dubai, Flames Fireplace, fireplace UAE",
    secondaryKW: "outdoor gas fire place, indoor fire place, ethanol fireplace Dubai"
  },
  about: {
    title: "About Flames Fireplace | Dubai Fireplace Experts",
    description: "Learn about Flames Fireplace, a Dubai supplier of premium indoor and outdoor fire units, custom fire tables, and modern fireplace solutions for homes and hospitality spaces.",
    primaryKW: "about Flames Fireplace Dubai, fireplace experts UAE",
    secondaryKW: "custom fire unit, luxury fire features"
  },
  indoor: {
    title: "Indoor Fire Place Dubai | Ethanol, Water Vapor & 3D Artificial Fireplaces",
    description: "Discover indoor fire places for Dubai homes, including manual ethanol fire places, 3D water vapor fire places, and 3D artificial fire places with clean modern styling.",
    primaryKW: "indoor fire place Dubai, ethanol fireplace, water vapor fireplace",
    secondaryKW: "3D artificial fire place, wall fire place, ventless fireplace"
  },
  outdoor: {
    title: "Outdoor Fire Unit Dubai | Gas Fire Place, Fire Pits & Fire Tables",
    description: "Build a premium outdoor fire unit with home automation on/off control, high and low flame settings, remote operation, push-and-turn ignition, key valve fire places, fire pits, and custom fire tables.",
    primaryKW: "outdoor fire unit Dubai, outdoor gas fire place, fire table UAE",
    secondaryKW: "remote operated fire place, key valve fire place, fire pot Dubai"
  },
  faq: {
    title: "Flames Fireplace FAQs | Dubai Fireplace Guide",
    description: "Expert answers about safety, fuel types, installation, and custom fireplace products for indoor and outdoor fire units in Dubai and the UAE.",
    primaryKW: "Flames Fireplace FAQ, fireplace safety Dubai",
    secondaryKW: "fuel options, fireplace installation UAE"
  },
  contact: {
    title: "Contact Flames Fireplace | Get a Quote in Dubai",
    description: "Request a quote for custom fireplaces in Dubai, including outdoor gas fire places, manual ethanol fire places, 3D water vapor fire places, and bespoke fire tables.",
    primaryKW: "contact Flames Fireplace, fireplace quote Dubai",
    secondaryKW: "custom fire table, indoor fireplace quote"
  },
  'why-choose': {
    title: "Why Choose Flames Fireplace | Premium Fireplaces in Dubai",
    description: "Discover why Flames Fireplace is a trusted choice for indoor and outdoor fire units, custom fire tables, and modern fire place solutions built for UAE homes.",
    primaryKW: "why choose Flames Fireplace, premium fireplace Dubai",
    secondaryKW: "custom fire unit, luxury fireplace UAE"
  },
  'outdoor-features': {
    title: "Outdoor Fire Features Dubai | Gas Fire Place & Fire Tables",
    description: "Design a complete outdoor fire feature setup with gas fire places, fire pots, lava rock, pebbles, artificial stone, and customized fire tables with integrated fire units.",
    primaryKW: "outdoor fire features Dubai, gas fire place UAE",
    secondaryKW: "fire pot, fire table, lava rock"
  },
  'best-fireplace-dubai': {
    title: "Best Fireplace in Dubai | Flames Fireplace Guide",
    description: "Find the best fireplace in Dubai with Flames Fireplace. Explore outdoor gas fire places, manual ethanol fire places, fire pots, fire tables, and indoor 3D flame options.",
    primaryKW: "best fireplace Dubai, Flames Fireplace UAE",
    secondaryKW: "outdoor gas fireplace, indoor fire place Dubai"
  },
  services: {
    title: "Fireplace Products in Dubai | Flames Fireplace UAE",
    description: "Explore Flames Fireplace products in Dubai: outdoor gas fire places, manual ethanol fire places, wood fire places, fire pots, fire tables, custom fire units, and indoor fire places.",
    primaryKW: "fireplace products Dubai, flames fireplace products",
    secondaryKW: "outdoor fire unit, indoor fire place, custom fire table"
  },
  'outdoor-gas-fireplace': {
    title: "Outdoor Gas Fire Place Dubai | 5 Control & Automation Models",
    description: "Discover premium outdoor gas fireplaces in Dubai with home automation, high/low flame modulation, wireless remote, push-and-turn piezo spark, and key valve controls.",
    primaryKW: "outdoor gas fireplace Dubai, gas fire place UAE",
    secondaryKW: "home automated gas fireplace, remote operated fire place, key valve fireplace"
  },
  'home-automated-gas-fireplace': {
    title: "Home Automated On & Off Fireplace Dubai | Smart BMS Integration",
    description: "Smart home automated on/off outdoor gas fireplaces in Dubai. Integrates with Crestron, Lutron, Control4, and KNX with automated safety shutoff.",
    primaryKW: "home automated gas fireplace, smart fireplace Dubai",
    secondaryKW: "BMS gas fireplace, Control4 fireplace UAE"
  },
  'high-low-flame-gas-fireplace': {
    title: "High and Low Flame Gas Fireplace Dubai | Variable Modulating Flame",
    description: "Dual-stage high and low flame modulating outdoor gas fireplaces in Dubai with variable BTU output and energy-saving low flame mode.",
    primaryKW: "high low flame fireplace Dubai, modulating gas fireplace",
    secondaryKW: "variable flame fire pit, dual stage gas burner"
  },
  'remote-operated-gas-fireplace': {
    title: "On and Off Remote Operated Fireplace Dubai | Wireless RF Control",
    description: "Wireless handheld remote operated outdoor gas fireplaces in Dubai. Instant spark ignition from up to 30 meters with child lock protection.",
    primaryKW: "remote operated gas fireplace, wireless fireplace Dubai",
    secondaryKW: "remote control fire pit, outdoor wireless fire feature"
  },
  'push-and-turn-gas-fireplace': {
    title: "Push & Turn Gas Fireplace Dubai | Battery Piezo Spark Ignition",
    description: "Push & turn piezo spark ignition outdoor gas fireplaces in Dubai. 100% wire-free battery ignition with tactile safety lock mechanism.",
    primaryKW: "push and turn gas fireplace, piezo spark fireplace Dubai",
    secondaryKW: "battery ignition fire pit, wire-free gas fireplace"
  },
  'key-valve-gas-fireplace': {
    title: "Key Valve Gas Fireplace Dubai | Heavy-Duty Brass Manual Valve",
    description: "Heavy-duty brass key valve outdoor gas fireplaces in Dubai. Tamper-proof removable key safety with high-flow BTU capacity for villas and resorts.",
    primaryKW: "key valve gas fireplace, manual key valve fire pit Dubai",
    secondaryKW: "brass key valve fireplace, high BTU outdoor burner"
  },
  'ethanol-fireplace': {
    title: "Ethanol Fireplace Dubai | Manual Ethanol & High-Quality Fuel",
    description: "Flames Fireplace manual ethanol fireplaces and ultra-pure bio-ethanol fuel in Dubai. 100% ventless, eco-friendly living flames.",
    primaryKW: "ethanol fireplace Dubai, manual ethanol fire place",
    secondaryKW: "bio ethanol fuel Dubai, smokeless fireplace UAE"
  },
  'manual-ethanol-fireplace': {
    title: "Manual Ethanol Fire Place Dubai | Stainless Steel Burner Box",
    description: "Architectural manual ethanol fireplace inserts in Dubai with ceramic fiber wool absorption, spill-proof reservoir, and zero chimney requirement.",
    primaryKW: "manual ethanol fireplace Dubai, manual bio ethanol burner",
    secondaryKW: "ventless ethanol fireplace, stainless steel fire insert"
  },
  'ethanol-fuel-fireplace': {
    title: "Ethanol Fuel & Burners Dubai | 96.6% Ultra-Pure Bio Ethanol",
    description: "Double-distilled pure bioethanol fireplace fuel and refill units in Dubai for clean, soot-free, and odorless real flame ambiance.",
    primaryKW: "ethanol fuel Dubai, bioethanol liquid UAE",
    secondaryKW: "smokeless fireplace fuel, clean burning ethanol"
  },
  'wood-fireplace': {
    title: "Wood Fire Place Dubai | Outdoor Woodfire Places & Chimeneas",
    description: "Authentic wood-burning outdoor fireplaces, hearths, and fire pits in Dubai. Heavy-gauge corten steel with spark arrestor mesh screens.",
    primaryKW: "wood fireplace Dubai, outdoor woodfire place UAE",
    secondaryKW: "wood burning fire pit, corten steel fireplace"
  },
  'outdoor-woodfire-place': {
    title: "Outdoor Woodfire Place Dubai | Heavy-Duty Wood Burning Fireplace",
    description: "Engineered outdoor woodfire places in Dubai for villas and gardens. Heavy refractory lining, high-temperature finishes, and authentic crackling logs.",
    primaryKW: "outdoor woodfire place Dubai, wood fire pit UAE",
    secondaryKW: "rustic wood fireplace, garden fire feature"
  },
  'rocks-media': {
    title: "Fireplace Rocks & Media Dubai | Lava Rock, Pebbles, Artificial Stone",
    description: "Premium fire media in Dubai: porous volcanic lava rock, refractory ceramic pebbles, and hand-sculpted artificial stones for fire pits and tables.",
    primaryKW: "fireplace rocks Dubai, lava rock UAE",
    secondaryKW: "fire pebbles, artificial stone media, glowing ceramic fire rocks"
  },
  'lava-rock-media': {
    title: "Lava Rock Fire Media Dubai | Natural Volcanic Basalt Rocks",
    description: "Natural volcanic lava rock in black and red for gas fireplaces and fire bowls in Dubai. Superior heat retention and radiant dispersion.",
    primaryKW: "lava rock Dubai, volcanic fire pit rocks UAE",
    secondaryKW: "black lava stone, gas burner media"
  },
  'pebbles-media': {
    title: "Pebbles Fire Media Dubai | Refractory Ceramic Fire Pebbles",
    description: "Shatter-proof refractory ceramic fire pebbles and smooth river stones in Dubai. Modern architectural look for luxury fire features.",
    primaryKW: "fire pebbles Dubai, ceramic river stones UAE",
    secondaryKW: "white fire pebbles, refractory stone media"
  },
  'artificial-stone-media': {
    title: "Artificial Stone Fire Media Dubai | Glowing Ceramic Boulders",
    description: "Engineered ceramic fiber artificial stones and boulders in Dubai. 70% lighter with radiant cherry-red heat glow under gas flames.",
    primaryKW: "artificial stone fireplace Dubai, ceramic fire boulders UAE",
    secondaryKW: "glowing ceramic rock, lightweight fire table media"
  },
  'fire-pot-tables': {
    title: "Fire Pot & Fire Tables Dubai | Concrete, Metal, GRC & Bespoke Tables",
    description: "Discover luxury concrete fire pots, metal powder-coated pots, GRC fire bowls, and custom-designed fire tables in Dubai.",
    primaryKW: "fire pot Dubai, fire tables UAE",
    secondaryKW: "GRC fire bowls, concrete fire pot, metal powder coated pot"
  },
  'concrete-fire-pot': {
    title: "Concrete Fire Pot Dubai | Architectural Precast Concrete Vessels",
    description: "Precast architectural concrete fire pots in Dubai with hydrophobic UV sealant and integrated stainless burner trays for pools and patios.",
    primaryKW: "concrete fire pot Dubai, precast fire bowl UAE",
    secondaryKW: "outdoor concrete fire feature, garden fire pot"
  },
  'metal-powder-coated-pot': {
    title: "Metal Powder Coated Fire Pot Dubai | Marine Aluminum & Stainless",
    description: "Laser-cut marine-grade aluminum and stainless steel fire pots in Dubai with architectural powder coating and custom RAL color matching.",
    primaryKW: "metal fire pot Dubai, powder coated fire bowl UAE",
    secondaryKW: "aluminum fire pot, custom RAL fire pit"
  },
  'grc-fire-bowls': {
    title: "GRC Fire Bowls Dubai | Lightweight Glass Fiber Reinforced Concrete",
    description: "High-tensile GRC (GFRC) fire bowls in Dubai. 50% lighter than solid stone, ideal for rooftop penthouses and cantilevered timber decks.",
    primaryKW: "GRC fire bowls Dubai, GFRC fire pit UAE",
    secondaryKW: "lightweight stone fire bowl, penthouse fire pit"
  },
  'customized-fire-tables-general': {
    title: "Customized Fire Tables Dubai | Bespoke Dekton & Marble Tables",
    description: "Bespoke fire dining, coffee, and lounge tables in Dubai with integrated burner systems and luxury Dekton, marble, or granite surfaces.",
    primaryKW: "customized fire tables Dubai, bespoke fire table UAE",
    secondaryKW: "Dekton fire table, marble fire pit table"
  },
  'custom-fire-tables': {
    title: "Custom Fire Tables Dubai | Bespoke Fire Table with Fire Unit",
    description: "Customized fire tables with integrated fire units in Dubai. Turnkey design, 3D CAD modeling, and on-site commissioning.",
    primaryKW: "custom fire table Dubai, fire table with burner UAE",
    secondaryKW: "integrated fire table, outdoor fire table installation"
  },
  'custom-fire-table': {
    title: "Customized Fire Table with Fire Unit | Flames Fireplace Dubai",
    description: "Bespoke outdoor fire table fabrication with integrated burners and remote control options for luxury villas and hospitality.",
    primaryKW: "customized fire table Dubai, integrated fire unit",
    secondaryKW: "luxury fire table, bespoke outdoor fire feature"
  },
  'custom-fire-table-with-fire-unit': {
    title: "Customized Fire Table with Fire Unit | Flames Fireplace Dubai",
    description: "Bespoke outdoor fire table fabrication with integrated burners, smart remote control, and luxury stone finishes in Dubai.",
    primaryKW: "customized fire table with fire unit Dubai, outdoor fire table",
    secondaryKW: "integrated burner fire table, luxury fire feature UAE"
  },
  'artificial-3d-fireplace': {
    title: "3D Artificial Fire Place Dubai | Non-Combustion Realistic Flame",
    description: "High-fidelity 3D artificial fireplaces in Dubai offering realistic flame dynamics with zero combustion, zero heat, and absolute safety.",
    primaryKW: "3D artificial fireplace Dubai, safe flame effect UAE",
    secondaryKW: "electric artificial fire, media wall flame"
  },
  portfolio: {
    title: "Our Works | Flames Fireplace Dubai Luxury Installations",
    description: "Explore luxury fireplace installations and bespoke projects by Flames Fireplace in Dubai, including indoor fire places, outdoor fire units, and custom fire tables.",
    primaryKW: "Flames Fireplace our works Dubai",
    secondaryKW: "fireplace installations, custom fire unit, luxury fire features"
  },
  blog: {
    title: "Flames Fireplace Blog | Fireplace Design & Product Guides",
    description: "Read the latest fireplace design and product guides from Flames Fireplace. Learn about indoor fire places, outdoor gas fire places, and custom fire unit trends in Dubai.",
    primaryKW: "Flames Fireplace blog, fireplace design Dubai",
    secondaryKW: "fire place guide, fire unit trends"
  }

};

export const TRUST_BAR = [
  { title: "Honest, Competitive Pricing", desc: "Quality products without inflated pricing" },
  { title: "Dedicated Customer Care", desc: "Real support before, during, and after your purchase" },
  { title: "Consistent Quality", desc: "Every product checked and standard-tested before delivery" },
  { title: "Experienced Team", desc: "Specialists who understand fire safety and outdoor design" },
  { title: "Trusted Across the UAE", desc: "A growing base of satisfied homeowners and businesses" },
  { title: "Reliable Delivery", desc: "We follow through on every commitment we make" }
];

export const OUTDOOR_GAS_VARIANTS: GasFireplaceVariant[] = [
  {
    id: "home-automated-gas-fireplace",
    title: "Home Automated On & Off Fireplace",
    shortTitle: "Home Automated On & Off",
    tagline: "Smart Home, BMS & App-Controlled Outdoor Gas Fire Feature",
    description: "Seamless one-touch automation for luxury villas and hospitality. Integrates directly with Control4, Crestron, Lutron, KNX, or smartphone apps for effortless on/off control.",
    detailedDescription: "Engineered for high-end residential estates and luxury hospitality across Dubai and the UAE, the Home Automated On & Off Gas Fireplace delivers effortless one-touch fire ignition and safety shutdown. Designed with smart dry-contact relays, hot-surface electronic spark ignition, and automatic flame-sensing safety thermocouples, this system connects directly into your central Building Management System (BMS), KNX, Control4, Crestron, Lutron, Google Home, Apple HomeKit, or dedicated wall switches.",
    image: "/assets/OutdoorGasFireplace.jpeg",
    badge: "SMART HOME AUTOMATION",
    features: [],
    benefits: [
      "Effortless smart home control without handling manual gas valves",
      "Integrated safety timer & automated emergency shutoff",
      "Custom burner sizing from 60cm up to 300cm linear lengths",
      "Compatible with both LPG cylinder systems and centralized Natural Gas",
      "Certified UAE safety compliance and whisper-quiet operation"
    ],
    howItWorks: [
      "Initiate ignition seamlessly through your connected Smart Home or BMS interface (Crestron, Lutron, Control4, KNX, Apple HomeKit, or wall switch).",
      "The low-voltage controller commands the gas safety solenoid to open and sparks the pilot electrode.",
      "An integrated micro-thermocouple confirms positive flame rectification within 2 seconds, maintaining continuous stable combustion.",
      "Extinguish safely with one touch from any smart touch panel, automated timer schedule, or smartphone application."
    ],
    specs: [
      { label: "BMS / Smart Integration", value: "Crestron, Lutron, Control4, KNX, Savant & Dry Contact Relays" },
      { label: "Ignition Technology", value: "Direct Electronic Spark / Hot Surface Pilot with Micro-Sensor" },
      { label: "Gas Type Compatibility", value: "Bottled LPG Propane (5kg/11kg/45kg) or Centralized Natural Gas (NG)" },
      { label: "Burner Tray Construction", value: "Marine-Grade 316 Stainless Steel with Laser-Cut Orifices" },
      { label: "Safety System", value: "Continuous Flame Rectification Thermocouple & Emergency Auto-Cutoff" },
      { label: "Compliance & Safety", value: "CE Certified & Dubai Civil Defense (DCD) Safety Standards" }
    ],
    faqs: [
      { question: "Can this fireplace connect to my existing Control4 or Crestron system?", answer: "Yes. Our automated gas fireplace uses standard low-voltage dry contact relays, making it seamlessly compatible with Control4, Crestron, Lutron, KNX, Savant, and home automation systems." },
      { question: "What happens if wind blows the flame out?", answer: "The integrated thermocouple micro-sensor detects loss of flame instantly and attempts one safe re-ignition. If flame is not restored within 3 seconds, it completely shuts off the gas supply solenoid valve." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the Home Automated On & Off Gas Fireplace.",
    seoTitle: "Home Automated Gas Fireplace Dubai | Smart BMS Fire Features",
    seoDescription: "Smart home automated on/off outdoor gas fireplaces in Dubai. Integrates with Crestron, Lutron, Control4, and KNX."
  },
  {
    id: "high-low-flame-gas-fireplace",
    title: "High and Low Flame Fireplace",
    shortTitle: "High and Low Flame",
    tagline: "Modulating Flame Height & Variable BTU Output Gas Burner",
    description: "Adjust flame height and warmth effortlessly. Switch between a vibrant high flame centerpiece and an intimate low ambient glow with energy-saving mode.",
    detailedDescription: "The High & Low Flame Gas Fireplace gives you precise micro-control over your outdoor ambiance and heating output. Featuring a dual-stage electronic gas modulating valve and servo-actuator, you can toggle between maximum flame height for brisk desert winter evenings and a subtle low-profile flame for mild summer nights, saving gas while sustaining an enchanting fire presence.",
    image: "/assets/OutdoorGasFireplac.jpeg",
    badge: "MODULATING FLAME CONTROL",
    features: [],
    benefits: [
      "Adapt flame height and heat output to seasonal UAE weather",
      "Lower fuel consumption during warmer evening gatherings",
      "Architectural flexibility for long linear troughs or deep round fire bowls",
      "Dual-stage safety interlock preventing flame blowout at low throttle",
      "Premium lava rock or reflective fire glass media compatibility"
    ],
    howItWorks: [
      "Press the ignition button on your multi-level handheld remote or smart wall control module to engage the electronic spark sequence.",
      "Integrated flame thermocouple verifies positive ignition within 2 seconds and opens the primary gas safety solenoid.",
      "Toggle effortlessly between High Flame (maximum visual impact and deep radiant warmth) and Low Flame (ambient intimate glow with optimal fuel efficiency).",
      "Precision motorized servo-valve modulates internal manifold pressure smoothly with zero popping noise, zero soot, and complete wind-stable combustion."
    ],
    specs: [
      { label: "Flame Modulation", value: "Dual-Stage High / Low Modulation (45,000 – 110,000 BTU/hr)" },
      { label: "Fuel Efficiency", value: "Eco-Mode with up to 45% gas consumption reduction on Low" },
      { label: "Gas Compatibility", value: "Bottled LPG Propane (5kg/11kg) or Municipal Natural Gas (NG)" },
      { label: "Burner Material", value: "Marine-Grade 316 / 304 Laser-Cut Stainless Steel Tray" },
      { label: "Control System", value: "Ergonomic Handheld RF Multi-Stage Remote & Wall Switch" },
      { label: "Safety & Compliance", value: "Flame Failure Safety Shut-off & UAE Civil Defense Certified" }
    ],
    faqs: [
      { question: "How much gas does the Low flame setting save?", answer: "The Low flame mode reduces gas flow by approximately 40% to 45%, offering extended burn time while providing a soft decorative glow." },
      { question: "Can I adjust the flame height from a handheld remote?", answer: "Yes, our high/low system includes a dedicated handheld remote with one-touch High and Low flame toggle buttons." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the High and Low Flame Gas Fireplace.",
    seoTitle: "High and Low Flame Gas Fireplace Dubai | Modulating Burners",
    seoDescription: "Dual-stage high and low flame modulating outdoor gas fireplaces in Dubai with variable BTU output."
  },
  {
    id: "remote-operated-gas-fireplace",
    title: "On and Off Remote Operated Fireplace",
    shortTitle: "Remote Operated",
    tagline: "Wireless RF Handheld Remote Control Outdoor Gas Fire Feature",
    description: "Light and extinguish your outdoor gas fire feature effortlessly from up to 30 meters away with an ergonomic, encrypted wireless handheld remote.",
    detailedDescription: "Designed for ultimate relaxation and effortless hospitality entertaining, the On and Off Remote Operated Gas Fireplace brings wireless freedom to your outdoor lounge, patio, or poolside terrace. Featuring an encrypted radio-frequency (RF) receiver, battery-operated electronic pilot, and reliable flame-rectification safety system, you can ignite the fire from your couch without approaching the burner.",
    image: "/assets/Outdoor%20Fireplace%20_%20Poolside%20(1).png",
    badge: "WIRELESS REMOTE CONTROL",
    features: [],
    benefits: [
      "Instant ignition and extinguish without leaving your patio seat",
      "Child-lock mode prevents accidental activation",
      "No electrical trenching required when paired with battery ignition pack",
      "Weather-sealed control module built for humid and dusty environments",
      "Compatible with fire pits, linear burners, and custom fire tables"
    ],
    howItWorks: [
      "Press the wireless power button on the encrypted RF handheld remote from up to 30 meters away.",
      "The receiver triggers the high-voltage spark electrode and commands the gas solenoid to open.",
      "Continuous flame-sensing safety rod confirms stable combustion across the burner bed within 3 seconds.",
      "Extinguish effortlessly with one-touch button press; safety interlock prevents accidental reactivation."
    ],
    specs: [
      { label: "Wireless Control Range", value: "Up to 30 meters (Encrypted 433MHz RF Signal)" },
      { label: "Ignition Architecture", value: "Battery-Powered Spark Module (4x AA) or 220V Mains Adapter" },
      { label: "Burner Output Capacity", value: "45,000 – 120,000 BTU/hr (Linear & Circular Sizing)" },
      { label: "Burner Material", value: "Marine-Grade 316 / 304 Heavy Stainless Steel" },
      { label: "Safety Protections", value: "Child-Lock Feature, Auto Sleep Timer & Flame Failure Sensor" },
      { label: "Gas Type", value: "Composite LPG Bottles (Propane) or Municipal Natural Gas" }
    ],
    faqs: [
      { question: "Does the remote require direct line of sight?", answer: "No. The system uses radio-frequency (RF) technology which passes through glass patio doors and outdoor furniture up to 30 meters away." },
      { question: "What if the remote batteries run low?", answer: "The receiver unit features manual override control buttons directly on the weather-resistant base enclosure." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the On and Off Remote Operated Gas Fireplace.",
    seoTitle: "Remote Operated Gas Fireplace Dubai | Wireless Outdoor Fire",
    seoDescription: "Wireless handheld remote operated outdoor gas fireplaces in Dubai. Instant spark ignition from up to 30m away."
  },
  {
    id: "push-and-turn-gas-fireplace",
    title: "Push & Turn Fireplace",
    shortTitle: "Push & Turn",
    tagline: "Battery-Assisted Piezo Push-and-Turn Safety Gas Fireplace",
    description: "Intuitive, reliable, and entirely independent of external electrical wiring. Push and rotate the dial to ignite instantly with tactile safety-locking feedback.",
    detailedDescription: "The Push & Turn Gas Fireplace provides the timeless tactile feel of a high-end gas barbecue combined with the refined aesthetics of architectural fire features. Featuring a mechanical push-in safety interlock and continuous battery-powered piezo sparker, this system prevents accidental gas release and requires zero electrical trenching to your garden or roof terrace.",
    image: "/assets/Poolside%20Fire%20Pit%20_%20Luxury%20Patio.png",
    badge: "PIEZO SPARK IGNITION",
    features: [],
    benefits: [
      "100% wireless and cable-free installation",
      "Robust mechanical safety mechanism trusted by families",
      "Zero standby power consumption and easy DIY battery changes",
      "Reliable spark in breezy conditions without matches or lighters",
      "Cost-effective installation with zero electrician required"
    ],
    howItWorks: [
      "Depress the safety control knob firmly to disengage the mechanical child-safety lock and open the gas valve.",
      "Rotate the knob counter-clockwise to actuate the rapid battery-assisted piezo spark ignition sequence.",
      "Maintain pressure for 5 seconds to allow the safety thermocouple sensor to heat to operating temperature.",
      "Release and rotate dial freely to adjust flame height from subtle ambient glow to roaring heat."
    ],
    specs: [
      { label: "Ignition Mechanism", value: "Battery-Assisted Rapid Piezo Pulse Spark (1x AA Battery)" },
      { label: "Safety Interlock", value: "Push-to-Turn Mechanical Safety Valve with Thermocouple" },
      { label: "Wiring Requirement", value: "100% Wire-Free (Zero electrical conduits or trenching)" },
      { label: "Faceplate & Bezel", value: "Heavy-Gauge Brushed 304 Stainless Steel" },
      { label: "Flame Regulation", value: "Continuous Variable Rotary Dial (40,000 – 90,000 BTU/hr)" },
      { label: "Fuel Type", value: "Standard LPG Propane Bottles or Centralized Natural Gas" }
    ],
    faqs: [
      { question: "Does this require an electrical outlet or wiring?", answer: "No. The Push & Turn system operates completely on a single standard AA battery for the sparker, requiring zero electrical connection." },
      { question: "Is the push-and-turn knob child safe?", answer: "Yes. The dial must be pushed inwards with deliberate force before it can be rotated, preventing accidental bumping or child activation." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the Push & Turn Gas Fireplace.",
    seoTitle: "Push & Turn Gas Fireplace Dubai | Piezo Spark Fire Tables",
    seoDescription: "Push & turn piezo spark ignition outdoor gas fireplaces in Dubai. Wire-free battery ignition with safety lock."
  },
  {
    id: "key-valve-gas-fireplace",
    title: "Key Valve Fireplace",
    shortTitle: "Key Valve",
    tagline: "Heavy-Duty Brass Quarter-Turn Key Valve Gas Fireplace",
    description: "The gold standard in durable, tamper-proof outdoor fire control. Features a solid brass valve and removable chrome or brass key for safe, secure operation.",
    detailedDescription: "Engineered for maximum reliability and tamper-proof security in private residences, hotels, and luxury resorts, the Key Valve Gas Fireplace uses a heavy-duty quarter-turn solid brass ball valve. The removable key acts as an absolute physical safety lock, ensuring children or unauthorized guests cannot activate the fire feature.",
    image: "/assets/Concrete_Metal_GRCFireCollectio.jpeg",
    badge: "TAMPER-PROOF MANUAL VALVE",
    features: [],
    benefits: [
      "Tamper-proof safety: remove the key when not in use",
      "Bulletproof longevity: impervious to sandstorms, rain, and desert heat",
      "Highest maximum BTU flow rate for extra-large custom fire features",
      "Zero maintenance and indefinite operational lifespan",
      "Seamless flush architectural mounting in stone, concrete, or wood veneer"
    ],
    howItWorks: [
      "Place an extended fireplace lighter wand over the fire media bed.",
      "Insert the solid brass safety key into the flush-mounted escutcheon valve flange.",
      "Rotate the key counter-clockwise a quarter turn to release gas flow for instant ignition.",
      "Fine-tune flame height by rotating the key, or turn clockwise to achieve 100% mechanical gas shutoff."
    ],
    specs: [
      { label: "Valve Construction", value: "Heavy-Duty Forged Solid Brass 1/4-Turn Ball Valve" },
      { label: "Key & Flange Finish", value: "Polished Chrome, Antique Brass, or Matte Black" },
      { label: "BTU Flow Capacity", value: "High-Flow Commercial Grade up to 300,000+ BTU/hr" },
      { label: "Pipe Connections", value: "Standard 1/2\" or 3/4\" NPT Female Threaded Inlets" },
      { label: "Durability Rating", value: "100% Weatherproof, Rustproof & Sandstorm Impervious (Zero Electronics)" }
    ],
    faqs: [
      { question: "Why choose a Key Valve system over electronic controls?", answer: "Key Valves offer absolute mechanical reliability with zero electronics to fail, zero battery replacements, and tamper-proof security since the fire cannot be turned on without the key." },
      { question: "Can this handle high-BTU large commercial burners?", answer: "Yes, our 3/4-inch high-flow key valves can deliver over 300,000 BTU/hr, making them ideal for massive luxury villa fire features and resort fire pits." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the Key Valve Gas Fireplace.",
    seoTitle: "Key Valve Gas Fireplace Dubai | Manual Brass Valve Fire Pits",
    seoDescription: "Heavy-duty brass key valve outdoor gas fireplaces in Dubai. Tamper-proof removable key with high-flow BTU capacity."
  }
];

export const ETHANOL_VARIANTS: OutdoorFireUnitVariant[] = [
  {
    id: "manual-ethanol-fireplace",
    categoryId: "ethanol-fireplace",
    categoryTitle: "Ethanol Fire Place",
    title: "Manual Ethanol Fire Place",
    shortTitle: "Manual Ethanol",
    tagline: "Precision Stainless Steel Manual Bioethanol Burner Tray",
    description: "Ventless, zero-electricity bio-ethanol fireplace with manual flame damping snuffer lid, internal ceramic wool wadding, and zero flue requirement.",
    detailedDescription: "The Manual Ethanol Fireplace provides authentic dancing golden flames using high-purity liquid bioethanol. It operates completely independently of gas lines, chimneys, or electrical wiring. Fabricated from heavy-gauge 304 and marine-grade 316 stainless steel, it features high-density ceramic fiber wadding that stabilizes the liquid fuel against accidental spillage while extending burn efficiency by up to 30%.",
    image: "/assets/Bio-Ethanol Fireplace _ Product Close-up.png",
    badge: "MANUAL BIO-ETHANOL",
    benefits: [
      "100% ventless — zero smoke, soot, odor, or ash residue",
      "Zero electrical wiring or gas line connection required",
      "Smooth sliding damping lid for flame extinguishing and burn regulation",
      "High-capacity stainless steel reservoir offering 5 to 8 hours burn time",
      "Spill-resistant ceramic fiber core for enhanced safety"
    ],
    howItWorks: [
      "Pour certified 96.6%+ liquid bioethanol into the cooled burner reservoir.",
      "Ignite safely across the burner opening using an extended fire lighter wand.",
      "Adjust flame height or extinguish completely using the stainless steel sliding snuffer."
    ],
    specs: [
      { label: "Burner Material", value: "304 & 316 Brushed Stainless Steel" },
      { label: "Fuel Type", value: "Liquid Bio-Ethanol (96.6% - 98% purity)" },
      { label: "Burn Duration", value: "5 – 8 hours per full reservoir" },
      { label: "Flue Requirement", value: "100% Ventless (No chimney or flue needed)" },
      { label: "Safety Core", value: "Spill-Resistant Ceramic Fiber Wadding" }
    ],
    faqs: [
      { question: "Is a manual bioethanol fireplace safe for indoor living rooms and covered patios in Dubai?", answer: "Yes. Premium bioethanol burns with clean combustion, emitting only water vapor and minimal carbon dioxide comparable to two standard candles. It requires no chimney or exhaust flue." },
      { question: "How do I refill the manual burner safely?", answer: "Always allow the burner tray to cool for 15-20 minutes before refueling, then use the provided safety pour spout to refill the reservoir to the max-fill mark." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the Manual Ethanol Fireplace.",
    seoTitle: "Manual Ethanol Fireplace Dubai | Ventless Bioethanol Burners",
    seoDescription: "Manual bio-ethanol fireplaces in Dubai. Stainless steel burner trays with zero gas line or chimney required."
  },
  {
    id: "ethanol-fuel-fireplace",
    categoryId: "ethanol-fireplace",
    categoryTitle: "Ethanol Fire Place",
    title: "Ethanol Fuel & Burner Systems",
    shortTitle: "Ethanol Fuel & Tech",
    tagline: "High-Purity 96.6% Eco-Friendly Biofuel & Combustion Engineering",
    description: "Ultra-pure denatured bioethanol fuel delivering vibrant golden flames with clean, smoke-free, soot-free combustion for luxury environments.",
    detailedDescription: "Our premium bioethanol fuel is distilled from 100% renewable agricultural biomass (sugarcane and grain fermentations). Refined to a 96.6%–98% purity standard, it achieves complete clean combustion inside modern manual and automated ethanol burner units. It generates only warmth, water vapor, and trace CO2, eliminating the need for smoke flues or chimney exhaust while ensuring absolute safety for family living areas, luxury penthouses, and hospitality venues.",
    image: "/assets/Bio-Ethanol Cassette Media Wall.png",
    badge: "BIO-ETHANOL FUEL",
    benefits: [
      "96.6%+ Ultra-pure distillation with clean, odor-neutral combustion",
      "Eco-friendly renewable carbon-neutral energy source",
      "Specially formulated for long burning duration and vivid yellow flame color",
      "Sealed child-proof bottles with flame-arrestor safety pouring nozzles",
      "Safe storage protocols engineered for UAE ambient temperatures"
    ],
    howItWorks: [
      "Store bioethanol in a cool, ventilated area away from direct sunlight.",
      "Use the spill-proof safety dispenser nozzle to fill empty, cooled burner reservoirs.",
      "Enjoy clean golden flames with zero soot on walls, glass, or ceilings."
    ],
    specs: [
      { label: "Purity Grade", value: "96.6% - 98.2% Denatured Bio-Ethanol" },
      { label: "Combustion Output", value: "Steam (H2O) and atmospheric trace CO2" },
      { label: "Odor Profile", value: "Odorless / neutral clean burn" },
      { label: "Packaging", value: "1L and 5L safety canisters with flame arrestors" },
      { label: "Certification", value: "CE, TÜV & UAE Civil Defence compliance" }
    ],
    faqs: [
      { question: "Can standard supermarket alcohol or rubbing alcohol be used?", answer: "No! Only certified 96.6%+ denatured bioethanol should ever be used in ethanol fireplaces to ensure soot-free and non-toxic combustion." },
      { question: "How should bioethanol fuel be stored in Dubai summers?", answer: "Store in original sealed containers inside a climate-controlled cabinet or shaded indoor utility room below 30°C." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Bio-Ethanol Fuel and Burner Systems.",
    seoTitle: "Bio-Ethanol Fuel Dubai | 96.6% Clean Fireplace Biofuel UAE",
    seoDescription: "High-purity bioethanol fuel and burner systems in Dubai. Eco-friendly, smoke-free liquid fuel for fireplaces."
  }
];

export const WOOD_VARIANTS: OutdoorFireUnitVariant[] = [
  {
    id: "outdoor-woodfire-place",
    categoryId: "wood-fireplace",
    categoryTitle: "Wood Fire Place",
    title: "Outdoor Wood Fire Place",
    shortTitle: "Woodfire Place",
    tagline: "Authentic Wood-Burning Hearths, Fire Pits & Chimeneas for UAE Gardens",
    description: "Timeless crackling wood-burning fire pits and built-in hearths crafted from heavy-gauge corten steel, stainless steel, and refractory firebricks.",
    detailedDescription: "Experience the authentic primal allure, hypnotic aroma, and crackling heat of an authentic wood-burning fire feature. Designed for luxury villa gardens, desert courtyards, and open-air rooftop terraces, our wood fireplace systems combine heavy-duty weather-resistant materials with precision engineered ember control. Available as freestanding chimeneas, circular steel fire bowls, or custom masonry hearth inserts with integrated spark protection screens and ash cleanout pans.",
    image: "/assets/Outdoor Fireplace _ Poolside (1).png",
    badge: "AUTHENTIC WOOD FIRE",
    benefits: [
      "Authentic natural wood scent, ambient crackle, and high radiant heat",
      "Heavy-duty Corten steel and 304 stainless steel weather-proof construction",
      "Integrated heavy-mesh spark arrestor dome preventing flying embers",
      "Deep refractory firebrick lining for optimal heat retention and longevity",
      "Removable stainless steel ash collector drawer for effortless cleaning"
    ],
    howItWorks: [
      "Arrange seasoned dry hardwood logs over the lower steel grate.",
      "Light with natural kindling or fire starters; adjust airflow damper if equipped.",
      "Secure the high-temperature stainless spark screen in place for ember safety.",
      "Empty the slide-out ash pan after cooling."
    ],
    specs: [
      { label: "Body Construction", value: "4mm Heavy-Duty Corten Steel / Marine 304 Stainless" },
      { label: "Hearth Lining", value: "High-density 1400°C Refractory Firebricks" },
      { label: "Safety Mesh", value: "304 Stainless Steel Micro-Perforated Spark Dome" },
      { label: "Fuel", value: "Seasoned Hardwood (Oak, Birch, Olive wood)" },
      { label: "Drainage", value: "Integrated rainwater base drain holes" }
    ],
    faqs: [
      { question: "Can wood fireplaces be installed on wooden deck patios or synthetic grass?", answer: "Wood fireplaces should always sit on non-combustible surfaces like stone, tile, or concrete pavers with minimum 2-meter safety clearance from flammable structures." },
      { question: "What wood burns best with minimal smoke in Dubai?", answer: "Kiln-dried seasoned hardwoods like oak, olive, and beech burn with the highest heat output and virtually zero excess smoke." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about the Outdoor Wood Fire Place.",
    seoTitle: "Outdoor Wood Fire Place Dubai | Wood Burning Fire Pits UAE",
    seoDescription: "Traditional outdoor wood fireplaces and steel chimeneas in Dubai. Engineered ember containment and weather-resistant builds."
  }
];

export const ROCKS_MEDIA_VARIANTS: OutdoorFireUnitVariant[] = [
  {
    id: "lava-rock-media",
    categoryId: "rocks-media",
    categoryTitle: "Rocks",
    title: "LAVA ROCK",
    shortTitle: "Lava Rock",
    tagline: "Natural Volcanic Basalt Lava Rock for Gas & Ethanol Fire Beds",
    description: "Porous, high-heat volcanic stones that disperse gas evenly across the burner bed while radiating intense, uniform warmth.",
    detailedDescription: "Sourced from natural volcanic basalt quarries, our Lava Rock fire media withstands temperatures exceeding 1100°C without fracturing, popping, or discolouring. The porous structure promotes micro-diffusion of LPG or Natural Gas, creating a fuller, more authentic dancing flame while storing and radiating soothing infrared warmth long into chilly desert evenings.",
    image: "/assets/Rocks_StoneonHous.jpeg",
    badge: "VOLCANIC LAVA ROCK",
    benefits: [
      "Excellent thermal heat retention radiating warmth after shutdown",
      "Micro-porous surface delivers even gas dispersion and natural flame height",
      "Natural rustic aesthetic available in charcoal black and deep terracotta red",
      "Extreme thermal shock resistance — zero popping or cracking under flame",
      "Low maintenance and resistant to coastal humidity and sand exposure"
    ],
    howItWorks: [
      "Pour base layer of lava rocks over the stainless burner pan to cover the manifold.",
      "Maintain open clearance around the pilot safety thermocouple.",
      "Enjoy uniform flame coverage and long-lasting radiant heat output."
    ],
    specs: [
      { label: "Material", value: "Natural Volcanic Basalt Porous Rock" },
      { label: "Temperature Rating", value: "Up to 1100°C (2012°F)" },
      { label: "Graded Sizes", value: "Small (1-2 cm), Medium (2-4 cm), Large (4-8 cm)" },
      { label: "Colors", value: "Basalt Matte Charcoal Black & Terracotta Red" },
      { label: "Compatibility", value: "Outdoor Gas Burners, Fire Bowls & Ethanol Fireplaces" }
    ],
    faqs: [
      { question: "Will lava rocks explode or pop when heated?", answer: "No. Our lava rock is specially tumble-dried and screened for fire feature use with zero trapped moisture, ensuring zero popping or fracturing." },
      { question: "How deep should the lava rock layer be on a gas burner?", answer: "Typically 2 to 3 inches—just enough to conceal the burner ports while allowing sufficient oxygen intake." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Lava Rock Fire Media.",
    seoTitle: "Lava Rock Fireplace Media Dubai | Volcanic Gas Fire Pits UAE",
    seoDescription: "Premium natural volcanic lava rocks in Dubai for outdoor gas fire pits, tables, and fire bowls."
  },
  {
    id: "pebbles-media",
    categoryId: "rocks-media",
    categoryTitle: "Rocks",
    title: "Pebbles",
    shortTitle: "Fire Pebbles",
    tagline: "Refractory Ceramic & Tumbled Basalt River Stones for Modern Fire Beds",
    description: "Ultra-smooth, tumbled fire pebbles in contemporary monochrome shades, engineered for extreme thermal endurance and sleek architectural aesthetics.",
    detailedDescription: "Transform your outdoor fire table or linear burner into a sculptural masterpiece with our smooth fire pebbles. Manufactured from ultra-dense refractory ceramic and tumble-polished basalt stones, they provide a clean, modern aesthetic with zero soot buildup. Available in matte graphite, snow ivory, slate grey, and earthy river tones.",
    image: "/assets/Rocks_StoneonHous.jpeg",
    badge: "FIRE PEBBLES & STONES",
    benefits: [
      "Smooth, tumbled architectural appearance ideal for modern minimalist villas",
      "Specially engineered refractory formula prevents cracking or discoloration",
      "Available in curated color palettes: Matte Graphite, Ivory White, and River Basalt",
      "Perfect when paired with clear glass wind guards and stainless linear troughs",
      "Clean and dust-free surface that is easy to wash and maintain"
    ],
    howItWorks: [
      "Layer pebbles smoothly over the burner pan substrate.",
      "Position decorative stones around the burner flame orifices for sculpted aesthetics."
    ],
    specs: [
      { label: "Composition", value: "High-Alumina Refractory Ceramic & Tumbled Stone" },
      { label: "Max Operating Temp", value: "1200°C" },
      { label: "Color Selection", value: "Graphite Grey, Ivory White, Desert Sand, River Mix" },
      { label: "Size Profiles", value: "40mm - 70mm oval and rounded stones" },
      { label: "Cleanliness", value: "100% dust-free and washable" }
    ],
    faqs: [
      { question: "Can normal beach or garden pebbles be used in a fire pit?", answer: "Never! Ordinary stones contain trapped moisture and minerals that can violently shatter or explode when exposed to fire. Only certified refractory fire pebbles must be used." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Fire Pebbles & River Stones.",
    seoTitle: "Fireplace Pebbles Dubai | Refractory Ceramic Stones UAE",
    seoDescription: "Contemporary fire pebbles and refractory river stones in Dubai for fire tables, pits, and bowls."
  },
  {
    id: "artificial-stone-media",
    categoryId: "rocks-media",
    categoryTitle: "Rocks",
    title: "Artificial Stone",
    shortTitle: "Artificial Stone",
    tagline: "Engineered Refractory Ceramic Fiber Stone Boulders & Logs",
    description: "Hand-sculpted ceramic fiber stones and geometric boulders that mimic natural desert rock formations with superior heat glow and zero structural weight.",
    detailedDescription: "Engineered specifically for high-end hospitality and private estate fire features, our Artificial Stone collection consists of ceramic fiber stones, geometric cubes, and realistic log shapes. Hand-painted with heat-resistant pigments, these pieces glow cherry-red under intense gas flames, creating breathtaking depth and warmth without the heavy weight of natural boulders.",
    image: "/assets/Rocks_StoneonHous.jpeg",
    badge: "ENGINEERED CERAMIC STONE",
    benefits: [
      "Generates mesmerizing radiant red-orange glow when exposed to flame",
      "Ultra-lightweight ceramic fiber composition ideal for rooftop terraces",
      "Hand-detailed natural rock textures, veins, and realistic coloring",
      "100% immune to thermal shock, spalling, or cracking up to 1300°C",
      "Custom arrangements for linear fireplaces, circular pans, and fire pots"
    ],
    howItWorks: [
      "Arrange artificial stone boulders organically across the burner bed.",
      "When gas flame ignites, ceramic fibers rapidly absorb heat and produce radiant incandescent illumination."
    ],
    specs: [
      { label: "Material", value: "Vacuum-formed High-Purity Ceramic Fiber" },
      { label: "Thermal Tolerance", value: "Up to 1300°C (2372°F)" },
      { label: "Shapes", value: "Natural River Boulders, Geometric Spheres, Desert Formations" },
      { label: "Weight", value: "70% lighter than natural solid rock" },
      { label: "Safety", value: "Non-toxic refractory pigments, zero smoke or off-gassing" }
    ],
    faqs: [
      { question: "Why choose artificial ceramic stones over natural stone?", answer: "They glow with radiant heat, are 70% lighter, and are chemically engineered never to crack under direct high-BTU gas burners." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Artificial Ceramic Fire Stone Media.",
    seoTitle: "Artificial Stone Fireplace Media Dubai | Ceramic Fire Rocks",
    seoDescription: "Architectural artificial ceramic stones and glowing fire boulders in Dubai for gas fireplaces."
  }
];

export const FIRE_POT_VARIANTS: OutdoorFireUnitVariant[] = [
  {
    id: "concrete-fire-pot",
    categoryId: "fire-pot-tables",
    categoryTitle: "Fire Pot & Fire Tables",
    title: "Concrete Fire Pot",
    shortTitle: "Concrete Fire Pot",
    tagline: "Architectural Precast Concrete Fire Pots for Gardens & Patios",
    description: "Solid reinforced architectural concrete fire pots with sealed weather-resistant finishes, integrated burner trays, and custom volcanic media.",
    detailedDescription: "Our Concrete Fire Pots combine monolithic architectural substance with refined artisanal craftsmanship. Cast from ultra-high-performance reinforced concrete and sealed with hydrophobic UV coatings, these fire pots withstand Dubai’s desert heat, sun exposure, and rain while creating dramatic focal points around swimming pools, garden paths, and patio lounges.",
    image: "/assets/Concrete_Metal_GRCFireCollectio.jpeg",
    badge: "ARCHITECTURAL CONCRETE",
    benefits: [
      "Heavy monolithic stability impervious to strong coastal winds",
      "Hydrophobic nano-sealant prevents stains, water absorption, and UV fading",
      "Built-in stainless steel burner pan with drainage channels",
      "Available in charcoal, limestone grey, sand beige, and terracotta finishes",
      "Integrates with gas burner systems or bio-ethanol inserts"
    ],
    howItWorks: [
      "Place the concrete fire pot on a sturdy level foundation.",
      "Connect bottom gas supply pipe or insert refillable bioethanol burner.",
      "Ignite and enjoy a sculptural fire vessel centerpiece."
    ],
    specs: [
      { label: "Material", value: "Ultra-High-Performance Architectural Reinforced Concrete" },
      { label: "Diameters", value: "60cm, 80cm, 100cm, 120cm circular profiles" },
      { label: "Finish", value: "Smooth Matte, Travertine Texture, or Acid-Washed Terrazzo" },
      { label: "Burner System", value: "316 Stainless Steel round ring or star burner" },
      { label: "Weight", value: "45kg to 120kg (wind-stable)" }
    ],
    faqs: [
      { question: "Will concrete crack under the fireplace heat?", answer: "No. The fire burner is elevated in a stainless steel drop-in pan with thermal insulation barriers that isolate heat from the concrete bowl walls." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Concrete Fire Pots.",
    seoTitle: "Concrete Fire Pot Dubai | Architectural Precast Fire Bowls UAE",
    seoDescription: "Architectural concrete fire pots in Dubai. Weather-sealed, heavy-duty fire features for villas and poolsides."
  },
  {
    id: "metal-powder-coated-pot",
    categoryId: "fire-pot-tables",
    categoryTitle: "Fire Pot & Fire Tables",
    title: "Metal Powder Coated Pot",
    shortTitle: "Metal Powder Coated",
    tagline: "Marine Aluminum & Stainless Steel Pots with High-Temp Powder Finishes",
    description: "Sleek, lightweight metal fire pots crafted from precision laser-cut marine aluminum and stainless steel with baked high-temperature electrostatic powder coatings.",
    detailedDescription: "For a crisp, contemporary aesthetic with limitless color customization, our Metal Powder Coated Fire Pots deliver unmatched elegance. Fabricated from marine-grade aluminum and stainless steel, each unit undergoes a multi-stage pre-treatment and electrostatic thermoset powder bake, delivering a scratch-resistant, UV-stable finish in any RAL color to match your outdoor architecture.",
    image: "/assets/Concrete_Metal_GRCFireCollectio.jpeg",
    badge: "POWDER COATED METAL",
    benefits: [
      "100% rust-proof marine aluminum and 304 stainless steel build",
      "Architectural electrostatic powder coating in matte black, bronze, corten rust, or custom RAL",
      "Lightweight design perfect for timber decks, rooftop terraces, and easy relocation",
      "Built-in thermal heat shields protecting outer body from direct flame heat",
      "Compatible with push-to-turn, remote, or manual key valve ignition"
    ],
    howItWorks: [
      "Laser-cut metal shell houses an insulated drop-in burner pan.",
      "Conceals internal gas connections or portable LPG bottle in larger models.",
      "Delivers vibrant flame ambiance with sharp contemporary profiles."
    ],
    specs: [
      { label: "Body Material", value: "3mm Marine-Grade Aluminum or 304 Stainless Steel" },
      { label: "Coating", value: "Dual-coat electrostatic architectural polyester powder" },
      { label: "Standard Colors", value: "Matte Black, Anthracite Grey, Champagne Gold, Metallic Bronze" },
      { label: "Customization", value: "Custom RAL palette matching upon request" },
      { label: "Weatherproofing", value: "100% anti-corrosive & UV stabilized" }
    ],
    faqs: [
      { question: "Does the powder coating peel or blister from the fire's heat?", answer: "No. We use industrial-grade high-temperature architectural coatings combined with internal double-wall air gaps that keep outer metal surfaces cool." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Metal Powder Coated Fire Pots.",
    seoTitle: "Metal Powder Coated Fire Pots Dubai | Aluminum Fire Features",
    seoDescription: "Modern metal powder coated fire pots in Dubai. Custom RAL colors, marine-grade aluminum and stainless steel."
  },
  {
    id: "grc-fire-bowls",
    categoryId: "fire-pot-tables",
    categoryTitle: "Fire Pot & Fire Tables",
    title: "GRC FIRE BOWLS",
    shortTitle: "GRC Fire Bowls",
    tagline: "Glass Fiber Reinforced Concrete (GFRC) Lightweight Fire Bowls",
    description: "High-tensile Glass Fiber Reinforced Concrete fire bowls offering stone strength at 50% lighter weight—the premier choice for luxury penthouses and wooden pool decks.",
    detailedDescription: "Engineered for rooftop penthouses, beachfront villas, and timber pool decks where structural load is a primary consideration, GRC (Glass Fiber Reinforced Concrete) fire bowls deliver the authentic tactile beauty of cast stone at a fraction of the weight. The high-density matrix of alkali-resistant glass fibers embedded in high-grade cement provides exceptional flexural tensile strength and resistance to cracking.",
    image: "/assets/Concrete_Metal_GRCFireCollectio.jpeg",
    badge: "GFRC LIGHTWEIGHT STONE",
    benefits: [
      "50% lighter than solid concrete with superior flexural tensile strength",
      "Ideal for rooftop terraces, cantilevered balconies, and timber pool decks",
      "Resists thermal expansion and salt-air corrosion in coastal UAE locations",
      "Available in low-profile circular bowls, fluted urns, and square vessels",
      "Fitted with marine-grade 316 stainless steel burner assemblies"
    ],
    howItWorks: [
      "Lightweight GFRC shell easily positioned without heavy crane lifting.",
      "Drop-in stainless pan connects to gas line or self-contained burner.",
      "Water drain ports ensure zero water pooling during occasional rain or cleaning."
    ],
    specs: [
      { label: "Material", value: "Glass Fiber Reinforced Concrete (GFRC) with AR-Glass matrix" },
      { label: "Density", value: "High strength-to-weight ratio (approx. 50% lighter than cast concrete)" },
      { label: "Finish Options", value: "Smooth Honed Stone, Textured Basalt, Raw Travertine" },
      { label: "Safety", value: "Thermal barrier layer and stainless steel heat reflector pan" },
      { label: "Sizes", value: "70cm, 90cm, 110cm, 130cm diameter options" }
    ],
    faqs: [
      { question: "Why is GRC preferred for Dubai rooftop penthouses?", answer: "Because GRC is lightweight, structurally certified, easily transported up elevators, and doesn't overload structural roof floor slab limits." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about GRC / GFRC Fire Bowls.",
    seoTitle: "GRC Fire Bowls Dubai | Glass Fiber Reinforced Concrete Fire Pits",
    seoDescription: "Lightweight GRC fire bowls in Dubai for rooftop penthouses, gardens, and luxury villas."
  },
  {
    id: "customized-fire-tables-general",
    categoryId: "fire-pot-tables",
    categoryTitle: "Fire Pot & Fire Tables",
    title: "COUSTOMIZED FIRE TABLES",
    shortTitle: "Custom Fire Tables",
    tagline: "Bespoke Dining, Coffee & Lounge Tables with Built-in Fire Features",
    description: "Fully bespoke fire tables designed to your precise dimensions, geometry, and surface finishes (Dekton, natural marble, granite, fluted GRC).",
    detailedDescription: "We fabricate bespoke fire tables tailored to your outdoor architectural vision. Whether you desire a 3-meter outdoor dining table with a central dancing ribbon of flame, a low-slung sunken seating coffee table, or a standing cocktail bar with an integrated gas burner, our team provides 3D CAD modeling, material fabrication, and turnkey installation across the UAE.",
    image: "/assets/CustomizedFireTabl.jpeg",
    badge: "CUSTOM ARCHITECTURAL TABLES",
    benefits: [
      "Tailored to any dimension, height, and geometry (Rectangular, Round, Square, Oval)",
      "Luxury top surfaces: Dekton, Sintered Ultra-Compact Stone, Calacatta Marble, Granite",
      "Integrated burner configurations: Linear flame troughs, square pans, round rings",
      "Optional removable tabletop flush lid transforming fire pit into solid dining surface",
      "Turnkey 3D engineering CAD drawings and custom fabrication in Dubai"
    ],
    howItWorks: [
      "Share your spatial dimensions, seating layout, and preferred top material.",
      "We provide detailed 3D CAD engineering renderings and material samples.",
      "Our master craftsmen fabricate, assemble, test, and commission on-site."
    ],
    specs: [
      { label: "Framework", value: "Marine 304/316 Stainless Steel or Aluminum internal chassis" },
      { label: "Table Tops", value: "Dekton, Neolith, Natural Marble, Granite, GRC Stone" },
      { label: "Heights", value: "Lounge Coffee Table (45cm), Dining Table (75cm), Bar Height (105cm)" },
      { label: "Burner Systems", value: "Electronic Smart Remote, Push & Turn, or Bio-Ethanol" },
      { label: "Accessories", value: "Tempered wind glass shield, flush matching lid, all-weather cover" }
    ],
    faqs: [
      { question: "Can I eat or place drinks on the fire table while the fire is lit?", answer: "Yes. Our custom tables are engineered with wide perimeter ledges (minimum 25-35cm clearance) and thermal barriers, keeping the dining perimeter cool to touch." }
    ],
    waMessage: "Hi Flames Fireplace, I'm inquiring about Customized Fire Tables.",
    seoTitle: "Customized Fire Tables Dubai | Bespoke Outdoor Fire Tables UAE",
    seoDescription: "Bespoke fire tables with integrated burners in Dubai. Custom Dekton, marble, and GRC fire tables."
  }
];

export const ALL_OUTDOOR_VARIANTS: OutdoorFireUnitVariant[] = [
  ...(OUTDOOR_GAS_VARIANTS.map(v => ({
    ...v,
    categoryId: 'outdoor-gas-fireplace' as const,
    categoryTitle: 'Outdoor Gas Fireplace'
  }))),
  ...ETHANOL_VARIANTS,
  ...WOOD_VARIANTS,
  ...ROCKS_MEDIA_VARIANTS,
  ...FIRE_POT_VARIANTS
];

export const SERVICES: ServiceItem[] = [
  {
    id: "outdoor-gas-fireplace",
    title: "Outdoor Gas Fire Place",
    subtitle: "Automated Gas Burners & Controls",
    description: "Premium engineered outdoor gas fire features with smart automation, remote ignition, and robust weather-resistant construction.",
    image: "/assets/OutdoorGasFireplac.jpeg",
    badge: "GAS FIREPLACE",
    category: "outdoor",
    waMessage: "Inquiry regarding Outdoor Gas Fire Place",
    seoTitle: "Outdoor Gas Fire Place Dubai | Flames Fireplace",
    seoDescription: "High-performance outdoor gas fireplaces with automation, remote ignition, and durable weatherproof housings.",
    faqs: [
      { question: "Can gas units be automated?", answer: "Yes — we can integrate gas burners with smart home controllers and safety interlocks." }
    ]
  },
  {
    id: "ethanol-fireplace",
    title: "Ethanol Fire Place",
    subtitle: "Manual & Automated Ethanol Burners",
    description: "Clean-burning manual and automated bio-ethanol fireplace systems engineered for smoke-free elegance in indoor and sheltered outdoor spaces.",
    image: "/assets/Bio-Ethanol Fireplace _ Product Close-up.png",
    badge: "ETHANOL FIRE PLACE",
    category: "indoor",
    waMessage: "Inquiry regarding Ethanol Fire Place",
    seoTitle: "Ethanol Fire Place Dubai | Flames Fireplace",
    seoDescription: "Manual and automated ethanol fireplaces for indoor and sheltered outdoor settings — clean burning and flexible styling.",
    faqs: [
      { question: "Are ethanol burners ventless?", answer: "Yes — ethanol burns cleanly without smoke or soot, but ensure reasonable room ventilation for large burns." }
    ]
  },
  {
    id: "wood-fireplace",
    title: "Wood Fire Place",
    subtitle: "Traditional Wood-Burning Options",
    description: "Classic wood-fired solutions for outdoor settings and designated hearth areas, with ember control and safety options.",
    image: "/assets/Outdoor Fireplace _ Poolside (1).png",
    badge: "WOOD FIRE PLACE",
    category: "outdoor",
    waMessage: "Inquiry regarding Wood Fire Place",
    seoTitle: "Wood Fire Place Dubai | Flames Fireplace",
    seoDescription: "Traditional wood fireplaces and engineered wood fire features for outdoor entertaining and hearth installations.",
    faqs: [
      { question: "Can wood fires be used near leisure areas?", answer: "Yes — with appropriate spark guards and placement; we advise on safe distances and materials." }
    ]
  },
  {
    id: "rocks-media",
    title: "Rocks",
    subtitle: "Lava Rock, Pebbles & Artificial Stone",
    description: "Supply of lava rock, decorative pebbles, and architectural artificial stone media for styling fire beds and pots.",
    image: "/assets/Rocks_StoneonHous.jpeg",
    badge: "FIRE MEDIA",
    category: "outdoor",
    waMessage: "Inquiry regarding Rocks",
    seoTitle: "Lava Rock & Pebbles Dubai | Flames Fireplace",
    seoDescription: "High-quality lava rock, pebbles and artificial stone for fire pits, bowls and linear burners.",
    faqs: [
      { question: "Which media is suitable for poolside use?", answer: "Artificial stone and marine-grade aggregates are recommended for coastal and poolside installations." }
    ]
  },
  {
    id: "fire-pot-tables",
    title: "Fire Pot & Fire Tables",
    subtitle: "Concrete, Metal & GRC Bowls and Tables",
    description: "Concrete fire pots, powder-coated metal bowls, GRC fire bowls and bespoke fire tables with integrated burners and finishes.",
    image: "/assets/FireTable_FirePotShowcas.jpeg",
    badge: "FIRE POTS & TABLES",
    category: "outdoor",
    waMessage: "Inquiry regarding Fire Pot & Fire Tables",
    seoTitle: "Fire Pot & Fire Tables Dubai | Flames Fireplace",
    seoDescription: "Range of fire pots and fire tables in concrete, powder-coated metal and GRC with custom sizing and finishes.",
    faqs: [
      { question: "Can tables be customized?", answer: "Yes — custom sizes, finishes and integrated burner options are available." }
    ]
  },
  {
    id: "custom-fire-table",
    title: "Customized Fire Table with Fire Unit",
    subtitle: "Bespoke Tables with Integrated Burners",
    description: "Custom-designed fire tables with integrated burners, tailored to site needs and available with remote or automated control options.",
    image: "/assets/CustomizedFireTabl.jpeg",
    badge: "CUSTOM FIRE TABLE",
    category: "outdoor",
    waMessage: "Inquiry regarding Customized Fire Table",
    seoTitle: "Customized Fire Table Dubai | Flames Fireplace",
    seoDescription: "Bespoke fire tables with integrated fire units, designed for villas, restaurants and hospitality terraces.",
    faqs: [
      { question: "Can the table include remote operation?", answer: "Yes — remote control and keyed-valve options are available per specification." }
    ]
  },
  {
    id: "water-vapor-fireplace",
    title: "3D Water Vapor Fire Place",
    subtitle: "Cool-To-Touch Indoor Flame Effect",
    description: "Realistic 3D flame visuals created with ultrasonic water mist and LED light — perfect for media walls, luxury apartments, and child-safe interiors.",
    image: "/assets/3DWaterVaporFireplac.jpeg",
    badge: "3D WATER VAPOR",
    category: "indoor",
    waMessage: "Inquiry regarding 3D Water Vapor Fire Place",
    seoTitle: "3D Water Vapor Fire Place Dubai | Flames Fireplace",
    seoDescription: "Flames Fireplace designs 3D water vapor fire places in Dubai with cool-to-touch mist flames, ideal beneath TVs and inside modern living spaces.",
    faqs: [
      { question: "Are water vapor fireplaces safe around TVs?", answer: "Yes — they produce a cool mist and no heat, so they are ideal beneath AV units when installed correctly." },
      { question: "Do they need maintenance?", answer: "Occasional tank refills and periodic descaling of the ultrasonic nebulizer keep performance optimal." }
    ]
  },
  {
    id: "artificial-3d-fireplace",
    title: "3D Artificial Fire Place",
    subtitle: "Realistic Non-Combustion Flame Systems",
    description: "Advanced artificial flame systems that emulate flame dynamics for striking visual effect without any combustion or heat.",
    image: "/assets/3DArtificialFireplace.jpeg",
    badge: "3D ARTIFICIAL FIRE",
    category: "indoor",
    waMessage: "Inquiry regarding 3D Artificial Fire Place",
    seoTitle: "3D Artificial Fire Place Dubai | Flames Fireplace",
    seoDescription: "High-fidelity artificial flame systems for safe indoor visual effects with minimal running cost.",
    faqs: [
      { question: "Do these produce heat?", answer: "No — they are visual-only systems and generate negligible heat." }
    ]
  }
];

export const GENERAL_STATS = [
  { value: "500+", label: "Fireplaces Installed" },
  { value: "100%", label: "Smokeless & Safe" },
  { value: "3", label: "Product Categories" },
  { value: "5-Star", label: "Customer Service" }
];

export const PRODUCTS: ProductDetails[] = [
  {
    id: "outdoor-gas-fireplace",
    name: "Outdoor Gas Fire Place",
    tagline: "Home automated on &off fire place — high & low flame control",
    description: "Outdoor gas fireplaces: Home automated on &off fire place, High and low flame fire Place, On and Off remote operated fire place, Push & turn fire place, Key valve Fire place.",
    detailedDescription: "Engineered outdoor gas burners offering instant ignition, adjustable flame heights, remote operation and multiple safety interlocks (push-&-turn, keyed valve). Suitable for terraces and poolside installs.",
    imageUrl: "/assets/OutdoorGasFireplac.jpeg",
    bgGradient: "from-amber-100 to-orange-100",
    features: [],
    benefits: [
      "Full automation and remote convenience",
      "Precise flame control for ambiance or heat",
      "Industry-standard safety interlocks"
    ],
    howItWorks: [
      "Connect to certified gas supply and commission by licensed installer.",
      "Configure remote or home-automation controller during setup.",
      "Use push-&-turn or keyed valve for secure ignition and shutdown."
    ],
    faqs: [
      { question: "Can these be automated?", answer: "Yes — on/off automation and remote control are supported with proper installation." }
    ]
  },
  {
    id: "ethanol-fireplace",
    name: "Ethanol Fire Place",
    tagline: "Manual ethanol fireplaces — clean real flame",
    description: "Manual ethanol fireplaces and burners for outdoor and sheltered settings; simple refill operation using high-quality ethanol fuel.",
    detailedDescription: "A straightforward ethanol burner range for terraces and outdoor seating — manual refills, low maintenance, and available in multiple finishes.",
    imageUrl: "/assets/Bio-Ethanol Fireplace _ Product Close-up.png",
    bgGradient: "from-orange-50 to-orange-100",
    features: [],
    benefits: ["Clean-burning real flame", "No gas line required"],
    howItWorks: ["Fill burner reservoir with ethanol and ignite per safety instructions."],
    faqs: [ { question: "Do ethanol burners need fuel lines?", answer: "No — they use liquid fuel reservoirs or refillable canisters." } ]
  },
  {
    id: "wood-fireplace",
    name: "Wood Fire Place",
    tagline: "Classic wood-fire for outdoor areas",
    description: "Traditional wood-burning fireplaces and fire pits designed for outdoor use with ember control and durable finishes.",
    detailedDescription: "Wood-fire solutions including chimeneas, built-in hearths and engineered pits — specify ember guards and finishes suitable for terraces and gardens.",
    imageUrl: "/assets/WOOD FIRE PLACE.jpeg",
    bgGradient: "from-neutral-50 to-orange-50",
    features: [],
    benefits: ["Authentic campfire ambiance", "Robust outdoor performance"],
    howItWorks: ["Use seasoned hardwood and follow local open-burning regulations."],
    faqs: [ { question: "Can wood fires be used near leisure areas?", answer: "Yes — with spark guards and correct placement as advised by our team." } ]
  },
  {
    id: "rocks-media",
    name: "Rocks",
    tagline: "Lava Rock, Pebbles, Artificial Stone",
    description: "Decorative and functional media for fire beds: lava rock, pebbles and artificial stone selections for pots, bowls and linear burners.",
    detailedDescription: "Choose from graded lava rock, decorative pebbles and engineered artificial stone to style and protect your burner area. Suitable for poolside and high-moisture environments when specified correctly.",
    imageUrl: "/assets/Rocks_StoneonHous.jpeg",
    bgGradient: "from-neutral-50 to-neutral-100",
    features: [],
    benefits: ["Improved flame aesthetics", "Durable under heat", "Multiple textures and colours"],
    howItWorks: ["Spread media to recommended depth and rinse pebbles before use."],
    faqs: [ { question: "Which media is best for coastal use?", answer: "Artificial stone or marine-grade aggregates are best for salty coastal exposure." } ]
  },
  {
    id: "fire-pot-tables",
    name: "Fire Pot & Fire Tables",
    tagline: "Concrete, metal powder-coated and GRC fire bowls and tables",
    description: "Concrete fire pots, powder-coated metal bowls, GRC fire bowls and low-rise fire tables built for outdoor entertaining.",
    detailedDescription: "Durable fire pots and tables in a variety of materials and finishes. Options include integrated burners, powder-coated metals and lightweight GFRC constructions for rooftop use.",
    imageUrl: "/assets/FireTable_FirePotShowcas.jpeg",
    bgGradient: "from-orange-50 to-neutral-50",
    features: [],
    benefits: ["Multiple material options", "Custom finishes available"],
    howItWorks: ["Select material and burner type; commission with protective covers and maintenance guidance."],
    faqs: [ { question: "Can tables be customized?", answer: "Yes — we fabricate custom sizes and integrate burners on request." } ]
  },
  {
    id: "custom-fire-tables",
    name: "Customized Fire Tables",
    tagline: "Customized fire tables and bespoke integrated units",
    description: "Full custom fire table fabrication and integration with optional fire unit installations per client specification.",
    detailedDescription: "Bespoke design and fabrication of fire tables with integrated burners, controls and finishing — ideal for villas, restaurants and hospitality terraces.",
    imageUrl: "/assets/CustomizedFireTabl.jpeg",
    bgGradient: "from-amber-100 to-orange-100",
    features: [],
    benefits: ["Tailored aesthetics", "Full installation and commissioning available"],
    howItWorks: ["Request a site survey, approve materials, and we fabricate and install."],
    faqs: [ { question: "Can these include integrated fire units?", answer: "Yes — specify integrated burners and control options during quoting." } ]
  }
];

export const WHY_CHOOSE_EXTRA = {
  headline: "Flames Fireplace — Dubai's Trusted Name in Fire Features",
  paragraphs: [
    "Flames Fireplace was founded to bring high-quality, beautifully designed fire features and outdoor kitchens to homes and commercial spaces across the UAE. Based in Dubai, our team specializes in sourcing, supplying, and installing fireplaces and outdoor living products that are safe, durable, and engineered to perform in the Gulf climate.",
    "We believe that a fireplace or outdoor kitchen should be more than just an addition; it should be a central gathering space that brings people together. That’s why we partner with leading manufacturers to offer products that blend aesthetic elegance with robust, long-lasting construction.",
    "Whether it is a rooftop lounge, a private garden, or a high-end hospitality venue, Flames Fireplace serves clients in all emirates, including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah, with uncompromising standards of customer care and craftsmanship."
  ]
};

export const COMMON_FAQS: FAQItem[] = [
  {
    question: "Do Flames Fireplace products require highly complicated professional installation?",
    answer: "Most of our catalog is designed for simple, plug-and-play installation! Freestanding Bio Ethanol columns require no installation. Wall-recessed bioethanol models can be easily mounted on safety wall blocks, and our technical design team provides full schematics and remote assistance."
  },
  {
    question: "Are bioethanol fireplaces safe to burn in small apartments?",
    answer: "Yes, when used as directed! Bioethanol burns cleanly, releasing vapor and minimal carbon dioxide equal to lighting a couple of candles. As long as your room has a normal ventilation inflow (like an open door, typical AC breeze, or a partially open window), it is fully safe."
  },
  {
    question: "What is the running cost compared to traditional wood or LPG gas?",
    answer: "Bio Ethanol utilizes liquid fuel. It burns highly efficiently, providing cozy radiant heating compared to electric radiators with no heat loss through a chimney."
  },
  {
    question: "Does Flames Fireplace deliver to all Emirates in the UAE?",
    answer: "Yes, we handle complete, secure door-to-door delivery across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. Our fulfillment is prompt, double-packed, and fully insured."
  },
  {
    question: "Can I customize the length of my fireplace?",
    answer: "Yes! For large villas, penthouses, or commercial environments like hotel lounges, our linear bio ethanol burners can be placed side-by-side to create a continuous, seamless flame line. Contact our team to request engineering assistance."
  },
  {
    question: "Where does Flames Fireplace install fireplaces in the UAE?",
    answer: "We serve Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah for residential and hospitality projects."
  },
  {
    question: "Is Flames Fireplace suitable for villas, penthouses, and hotel lounges?",
    answer: "Absolutely. Our custom fireplace and outdoor living solutions are designed for private villas, rooftop penthouses, modern apartments, and high-end hospitality spaces."
  },
  {
    question: "What is the best fireplace option for a modern Dubai home?",
    answer: "A bio ethanol fireplace is one of the most popular choices for modern Dubai homes because it offers real flame, no chimney, and elegant installation with minimal structural disruption."
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "ethanol-buying-guide",
    title: "The Ultimate Bio Ethanol Fireplace Buyer's Guide & Safety Blueprint",
    slug: "/blog/bio-ethanol-fireplace-buyers-guide",
    targetKeyword: "bio ethanol fireplace buying guide, bio ethanol fireplace UAE",
    schema: "HowTo, FAQPage",
    seoTitle: "Bio Ethanol Fireplace Buying Guide | Flames Fireplace",
    seoDescription: "The ultimate bio ethanol fireplace buying guide. Learn about safety, fuels, running costs, and layout integration from Flames Fireplace experts in Dubai.",
    content: {
      category: "Buying Guide",
      readTime: "7 min read",
      date: "May 28, 2026",
      intro: "Clean, ventless bioethanol fireplaces are taking modern interior remodeling by storm. Offering a real fire experience without the cost, soot, or logistics of chimneys, they install in minutes. Before you purchase a bioethanol fireplace for your home or project, here is our definitive architectural buyer's guide covering models, fuel criteria, running costs, and important precautions.",
      sections: [
        {
          heading: "1. Selecting Your Mounting Format",
          paragraphs: [
            "Tabletop and Intimate Casings: Small, highly mobile luxury containers designed for console tables, outdoor dining sets, or bathroom terraces. They burn for 2-4 hours per fill.",
            "Wall-Mounted and Freestanding Columns: Designed to be fixed on drywall backing or place securely on the floor as structural furniture elements. Perfect for open-plan layouts.",
            "Built-In Cassette Cassettes: Seamlessly inserted into custom plaster walls or media walls. Often protected with tall tempered glass guards to prevent draft interference."
          ]
        },
        {
          heading: "2. Fuel Quality is Non-Negotiable",
          paragraphs: [
            "Always purchase liquid bioethanol fuel with a clean purity rating of 96% or more. Cheaper, substandard fuel variants can introduce chemical odors, burn with a yellow-grey color, or leave black soot carbon stains around your stainless steel burner slots. Double-distilled fuel produces completely clean combustion."
          ]
        },
        {
          heading: "3. Estimating Real-World Operational Budgets",
          paragraphs: [
            "A standard bioethanol burner compartment operating on a moderate flame setting provides hours of authentic living fire on a single tank. Given the cost of high-grade bioethanol canisters, it is a highly economical and focused alternative to heating rooms."
          ]
        },
        {
          heading: "4. Architectural Safety Checklist",
          paragraphs: [
            "Never refill any bioethanol reservoir while the unit is hot or actively burning! Always extinguish the flame and allow the metallic burner plate to cool down for at least 15 minutes before pouring fresh fuel.",
            "Maintain reasonable distance margins (at least 1 meter) from loose curtains, textile rugs, or wood decorations."
          ]
        }
      ]
    }
  },
  {
    id: "outdoor-entertaining-ideas",
    title: "Designing the Ultimate Alfresco Lounge with Bio Ethanol Style",
    slug: "/blog/outdoor-entertaining-bio-ethanol-fireplace",
    targetKeyword: "outdoor fireplace ideas UAE, outdoor bio ethanol fireplace design",
    schema: "Article",
    seoTitle: "Outdoor Fireplace Ideas UAE | Flames Fireplace Dubai",
    seoDescription: "Design the ultimate outdoor living area with a clean bio ethanol fireplace. Discover modern patio fireplace ideas for luxury UAE villas and gardens.",
    content: {
      category: "Outdoor Living",
      readTime: "4 min read",
      date: "April 15, 2026",
      intro: "An outdoor deck or private garden is more than just square footage — it is a canvas for social memory. As the sun sets, a living fire centerpiece resets the ambiance of your space. Learn how professional landscape architects in Dubai and across the GCC integrate Outdoor Bio Ethanol Fireplaces to craft high-impact, cozy, four-season visual areas.",
      sections: [
        {
          heading: "Creating a Magnetic Lounge Hub",
          paragraphs: [
            "The ancient campfire remains the ultimate social magnet. By placing a low-slung concrete bioethanol fire table at the center of your sectional outdoor sofas, you establish an instant focal point. Guests can sit close without coughing on wood smoke or dealing with unpredictable flying embers that ruin outdoor textiles."
          ]
        },
        {
          heading: "Defining Boundaries with Fire Columns",
          paragraphs: [
            "If you have a wide, expansive garden layout, a pool deck, or a rooftop lounge, use tall concrete or obsidian-style bioethanol pillar torches to flank your entryways or outline the pool boundary. It creates a stunning resort-like lifestyle atmosphere that looks incredible during evening parties."
          ]
        },
        {
          heading: "Material Selection for Coastal Climates",
          paragraphs: [
            "The UAE's coastal areas can be challenging for outdoor metals due to high humidity and salinity. When buying outdoor fireplaces, refuse basic iron frames. Insist on marine-grade stainless steel 316, anodized aluminum structural panels, or lightweight weather-sealed architectural concrete fiber. These elements require zero annual painting."
          ]
        }
      ]
    }
  },
  {
    id: "best-fireplace-guide",
    title: "Best Fireplace in Dubai: How to Choose & Where to Buy",
    slug: "/blog/best-fireplace-in-dubai",
    targetKeyword: "best fireplace Dubai, fireplace Dubai",
    schema: "Article, FAQPage",
    seoTitle: "Best Fireplace in Dubai | Flames Fireplace UAE Guide",
    seoDescription: "How to choose the best fireplace in Dubai. Read our expert review comparing bio-ethanol, cool water vapor, gas fire tables, and built-in grills.",
    content: {
      category: "Buying Guide",
      readTime: "8 min read",
      date: "July 6, 2026",
      intro: "A practical guide to selecting the best fireplace for Dubai homes — covering bio-ethanol, water-vapor, fire pits, and built-in BBQ solutions. Learn what matters for safety, installation, and long-term enjoyment.",
      sections: [
        {
          heading: "1. Match the Product to the Space",
          paragraphs: [
            "Consider indoor vs outdoor use, ventilation constraints, and the aesthetic you want. Bio-ethanol is ideal for ventless indoor shows; water-vapor is perfect where cool-touch safety matters; fire pits offer a social outdoor centerpiece."
          ]
        },
        {
          heading: "2. Prioritise Safety and Certification",
          paragraphs: [
            "Choose units with clear CE/UL compliance and a documented installation procedure. For indoor installations ensure adequate air exchange and follow fuel-handling best practices."
          ]
        },
        {
          heading: "3. Budget vs Longevity",
          paragraphs: [
            "Invest in quality burners and marine-grade finishes for coastal UAE homes — they last longer and save on maintenance."
          ]
        },
        {
          heading: "4. Installation & Aftercare",
          paragraphs: [
            "Work with providers who offer site surveys, CAD-friendly casing diagrams, and post-installation commissioning to ensure optimal performance."
          ]
        }
      ],
      faq: {
        question: "Which fireplace type is best for Dubai apartments?",
        answer: "Ventless bio-ethanol and water-vapor models are best for apartments when installed per manufacturer guidance and with normal room ventilation."
      }
    }
  },
  {
    id: "vapor-fireplace-technology",
    title: "Water Vapor Fireplaces: The Safe & Modern Aesthetic Trend in Dubai",
    slug: "/blog/water-vapor-fireplace-technology-dubai",
    targetKeyword: "water vapor fireplace Dubai, 3D mist fireplace UAE",
    schema: "Article",
    seoTitle: "Water Vapor Fireplace Dubai | Flames Fireplace 3D Mist",
    seoDescription: "Discover water vapor fireplace design trends in Dubai. Learn how flueless 3D mist technology creates safe, realistic flames directly under smart TVs.",
    content: {
      category: "Technology",
      readTime: "5 min read",
      date: "July 8, 2026",
      intro: "Water vapor technology has revolutionized indoor design, allowing a completely ventless, 100% safe living fire visual directly under smart TVs. Learn how this 3D mist flame technology works and why it is the fastest-growing design trend in premium Dubai residences.",
      sections: [
        {
          heading: "How Ultrasonic Mist Becomes Realistic Flame",
          paragraphs: [
            "Using silent high-frequency ultrasonic transducers, water vapor cassettes atomize normal water into an extremely fine, cool mist. When illuminated by warm, high-intensity LED light strips, this mist takes on the precise appearance of a three-dimensional flickering flame."
          ]
        },
        {
          heading: "Perfect Match for Dubai Media Walls",
          paragraphs: [
            "Unlike standard gas or bio-ethanol burners, water vapor mist generates zero physical heat. This makes it completely safe to install directly beneath large TV consoles, expensive artwork, or sensitive soundbars without building complex insulated heat barriers or deflector shields."
          ]
        },
        {
          heading: "Simple Setup and Refill Mechanics",
          paragraphs: [
            "Water vapor units can be plumbed directly to a local water line or operated via internal manual reservoirs. A single fill can last up to 10-15 hours, providing continuous flame aesthetics with only periodic descaling maintenance."
          ]
        }
      ]
    }
  },
  {
    id: "modern-outdoor-kitchen-trends",
    title: "Bespoke Outdoor Kitchens & BBQs: Designing Luxury GCC Gardens",
    slug: "/blog/luxury-outdoor-kitchen-bbq-trends",
    targetKeyword: "outdoor kitchen Dubai, built-in BBQ Dubai",
    schema: "Article",
    seoTitle: "Outdoor Kitchen Dubai | Flames Built-in BBQ UAE Trend",
    seoDescription: "Modern luxury outdoor kitchen designs and built-in BBQ layouts for GCC gardens. Learn about weatherproofing materials like marine stainless steel 316.",
    content: {
      category: "Outdoor Living",
      readTime: "6 min read",
      date: "July 8, 2026",
      intro: "An outdoor kitchen is the ultimate luxury feature for villa gardens and rooftops. With the GCC outdoor entertaining season being highly valued, having a customized BBQ island with weather-resistant finishes is a must-have. Here are the top trends in luxury outdoor kitchen layouts for UAE properties.",
      sections: [
        {
          heading: "Integrating Built-in BBQs and Smokers",
          paragraphs: [
            "A luxury outdoor kitchen centers around a high-performance built-in barbecue grill. Anodized burners, heavy-duty stainless steel grates, and integrated temperature gauges allow restaurant-level cooking. Complementing the grill with slow smokers or pizza ovens creates a complete culinary hub."
          ]
        },
        {
          heading: "Weatherproofing for Extreme Summer Heat",
          paragraphs: [
            "In the UAE, outdoor structures face high humidity, saline sea breezes, and intense summer sun. Selecting durable materials is vital: choose marine-grade stainless steel 316, sintered stone surfaces (like Dekton), and powder-coated doors that resist UV fading and rust."
          ]
        },
        {
          heading: "Creating a Social Island Hub",
          paragraphs: [
            "The best outdoor kitchens are designed as social bar spaces. Extending the worktop into a bar counter with high stools allows guests to converse with the chef while enjoying cold drinks from an under-counter outdoor beverage fridge."
          ]
        }
      ]
    }
  },
  {
    id: "ethanol-burner-media-walls",
    title: "Ethanol Burners for Media Walls: A Dubai Architect's Guide",
    slug: "/blog/ethanol-burner-inserts-media-wall-dubai",
    targetKeyword: "ethanol burner inserts Dubai, custom media wall fireplace",
    schema: "Article, HowTo",
    seoTitle: "Ethanol Burners for Media Walls | Dubai Architect Guide",
    seoDescription: "Learn how to integrate bio ethanol burner inserts into custom media walls in Dubai. Architect guidelines for safety, clearance, and heat isolation.",
    content: {
      category: "Design Guides",
      readTime: "7 min read",
      date: "July 10, 2026",
      intro: "Integrating a real fire feature directly below a large smart TV has become the ultimate focal point for luxury living rooms in Dubai. By combining bioethanol burner inserts with custom media walls, designers achieve a stunning visual balance. Here is a technical design guide for architects and interior decorators to ensure safety and elegance in these installations.",
      sections: [
        {
          heading: "Choosing Between Manual and Automatic Burners",
          paragraphs: [
            "Manual bioethanol inserts are budget-friendly and require no electrical wiring. However, automatic electronic burners offer push-button ignition, remote control, smart home integration, and safety sensors that monitor heat, tilt, and fuel levels. For high-end Dubai projects, automatic burners are highly recommended."
          ]
        },
        {
          heading: "Required Clearances and TV Protection",
          paragraphs: [
            "The primary challenge when mounting a television above an active fireplace is protecting sensitive electronics from rising hot air. We recommend a minimum clearance of 100 cm between the burner opening and the TV. Additionally, creating a recessed niche for the TV or installing a non-combustible deflector mantle redirects heat flow safely away from the screen."
          ]
        },
        {
          heading: "Thermal Insulation and Non-Combustible Materials",
          paragraphs: [
            "Never construct a media wall fireplace chamber with standard drywall. The inner casing must be lined with premium insulation materials, such as calcium silicate boards (e.g., Promafour) or cement boards. The surrounding finishes should consist of non-combustible materials like natural marble, sintered stone, or metal sheets."
          ]
        }
      ]
    }
  },
  {
    id: "luxury-fire-tables-rooftops",
    title: "Luxury Fire Tables & Bowls: Dubai Rooftops & Penthouses",
    slug: "/blog/luxury-fire-tables-rooftop-penthouses-dubai",
    targetKeyword: "luxury fire tables Dubai, rooftop fire pit UAE",
    schema: "Article",
    seoTitle: "Luxury Fire Tables & Bowls | Dubai Penthouses & Rooftops",
    seoDescription: "Create a stunning penthouse terrace in Dubai with luxury fire tables and fire bowls. Learn about wind guards, weight limits, and clean-burning fuels.",
    content: {
      category: "Outdoor Living",
      readTime: "5 min read",
      date: "July 10, 2026",
      intro: "Penthouses and rooftop terraces in Dubai offer spectacular views of the skyline and Arabian Gulf. Adding a luxury fire table or fire bowl creates a warm, inviting social hub that transforms these outdoor areas. Let's explore the key design rules for setting up high-wind, high-elevation fire centerpieces in the UAE.",
      sections: [
        {
          heading: "Fuel Selections: Gas vs. Bio-Ethanol",
          paragraphs: [
            "Rooftop installations must adapt to high winds. While liquid bio-ethanol burns beautifully in sheltered setups, propane or natural gas fire tables provide a more robust flame structure under drafty conditions. Always install tempered glass wind guards to shield the flames and maintain safety."
          ]
        },
        {
          heading: "Weight and Structural Load Planning",
          paragraphs: [
            "Concrete and natural stone fire tables can be extremely heavy. For penthouses and balcony structures, it is vital to select lightweight materials that do not exceed floor load limits. Specialized glass-fiber reinforced concrete (GFRC) offers the aesthetic of heavy concrete with only a fraction of the weight, making it ideal for elevated balconies."
          ]
        },
        {
          heading: "Weather Protection for Coastal Exposure",
          paragraphs: [
            "Rooftop terraces in Dubai face intense coastal humidity, salt water breezes, and UV rays. Ensure your fire bowl features marine-grade stainless steel burners (grade 316) and weather-proof outdoor covers. Regular cleaning and covering during the summer off-season preserves the premium finish for years."
          ]
        }
      ]
    }
  }
];
