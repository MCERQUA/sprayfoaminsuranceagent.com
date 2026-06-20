// Centralized site data — used across nav, footer, schema, CTAs
// Spray Foam Insurance Agent — personal agent service for spray foam contractors

export const SITE = {
  name: "Spray Foam Insurance Agent",
  legalName: "Spray Foam Insurance Agent (by Contractors Choice Agency)",
  domain: "sprayfoaminsuranceagent.com",
  url: "https://sprayfoaminsuranceagent.com",
  tagline: "Your Dedicated Spray Foam Insurance Specialist",
  description:
    "Independent spray foam insurance agent providing personal service, policy review, and contractor advocacy — GL, workers' comp, inland marine for rigs and equipment, and spray foam rig coverage from all major carriers. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Spray Foam",
  brandSub: "Insurance Agent",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam operation",
  operatorCap: "Spray Foam Operation",
  industry: "spray foam contracting",
  industryCap: "Spray Foam Contracting",
  audience: "spray foam contractors",
  audienceCap: "Spray Foam Contractors",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Core GL coverage for spray foam contractors",
    description:
      "General liability is the foundation of every spray foam contractor's insurance program. We place GL that covers overspray damage, third-party bodily injury, completed-operations claims, and the product liability exposure that follows every spray foam job.",
    icon: "ShieldCheck",
    keywords: ["spray foam general liability", "spray foam contractor GL", "overspray insurance", "spray foam completed operations"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "WC for spray foam crews and applicators",
    description:
      "Spray foam work is high-hazard — chemical exposure, respiratory risk, heights, and equipment injuries. We place workers' comp with class codes that fit spray foam labor so your crew is covered and your premium reflects your actual operation.",
    icon: "HardHat",
    keywords: ["spray foam workers comp", "spray foam WC insurance", "spray foam applicator insurance", "foam contractor workers compensation"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine & Equipment",
    short: "Rigs, proportioners, hose and spray guns",
    description:
      "Your rig is your business. Inland marine coverage insures the proportioner, reactor, heated hose, spray guns, and the trailer or truck they ride in — against theft, vandalism, damage in transit, and breakdown on the jobsite.",
    icon: "Package",
    keywords: ["spray foam rig insurance", "proportioner insurance", "spray foam equipment coverage", "inland marine spray foam"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Trucks, vans and rig transport vehicles",
    description:
      "The truck or van hauling your spray foam rig to the job is a commercial vehicle — and it needs commercial auto, not personal auto. We insure the fleet that keeps your operation moving, including hired and non-owned auto for employees.",
    icon: "Truck",
    keywords: ["spray foam commercial auto", "contractor truck insurance", "spray foam vehicle insurance", "rig transport auto coverage"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Isocyanate and chemical exposure coverage",
    description:
      "Spray foam contains isocyanates — regulated chemicals that can trigger pollution exclusions in standard GL. Contractors pollution liability (CPL) covers the chemical-release and respiratory-exposure claims that fall outside standard policies.",
    icon: "Droplets",
    keywords: ["spray foam pollution liability", "isocyanate insurance", "CPL spray foam", "spray foam chemical liability"],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    short: "Excess limits above your primary policies",
    description:
      "A single overspray or chemical-exposure claim can exceed primary GL limits. A commercial umbrella drops down over your GL, auto, and employers' liability to extend your coverage where a large claim might otherwise exceed policy limits.",
    icon: "Award",
    keywords: ["spray foam umbrella insurance", "excess liability spray foam", "contractor umbrella policy", "spray foam high-limit insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Small Equipment",
    short: "Hand tools, gauges and jobsite gear",
    description:
      "Inland marine covers the rig; a tools-and-equipment floater covers the smaller gear — hand tools, gauges, cleaning equipment, and jobsite supplies that move from job to job and don't fit on a scheduled equipment form.",
    icon: "Wrench",
    keywords: ["spray foam tools insurance", "contractor tools floater", "jobsite equipment insurance", "spray foam hand tools coverage"],
  },
  {
    slug: "policy-review",
    title: "Policy Review & Advocacy",
    short: "We review your current coverage for gaps",
    description:
      "As your dedicated agent, we review your current policies annually — finding exclusions, sublimits, and gaps before a claim does. Policy review is a core part of our service, not an upsell.",
    icon: "FileSearch",
    keywords: ["spray foam policy review", "insurance coverage audit spray foam", "spray foam contractor insurance review", "agent advocacy spray foam"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Houston · Dallas · Statewide", blurb: "One of the largest spray foam markets in the country. We insure Texas spray foam contractors from the Gulf Coast to the Panhandle — with programs built for Texas heat, humidity, and a large contractor labor pool." },
  { slug: "florida", name: "Florida", region: "Tampa · Orlando · Statewide", blurb: "High-humidity Florida construction drives strong spray foam demand. We place GL, WC, and rig coverage for Florida spray foam operators facing hurricane exposure, strict licensing requirements, and competitive market conditions." },
  { slug: "southeast", name: "Southeast", region: "GA · NC · SC · AL", blurb: "Growing spray foam market across the Southeast. Programs for contractors insulating new construction, commercial retrofits, and agricultural buildings — with class codes built for Southern labor markets." },
  { slug: "midwest", name: "Midwest", region: "OH · IN · MI · IL", blurb: "Cold-climate Midwest markets drive strong demand for spray foam insulation. We insure Midwest contractors doing residential, commercial, and agricultural work — with rig coverage for the equipment that operates year-round." },
  { slug: "southwest", name: "Southwest", region: "AZ · NM · NV", blurb: "Desert Southwest spray foam operations face heat-exposure and high-UV chemical challenges. Programs built for Arizona, New Mexico, and Nevada contractors insulating new builds and commercial retrofits." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID", blurb: "High-altitude spray foam work in the Mountain West requires chemical formulas and application techniques built for cold and altitude. We insure Colorado, Utah, and Idaho contractors with programs that reflect those conditions." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · New England", blurb: "Dense construction markets across the Northeast. Spray foam contractors insulating homes, commercial properties, and industrial buildings — with rig coverage and WC programs built for Northeast labor costs and code requirements." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "California spray foam contractors face strict environmental and isocyanate regulations. We navigate those requirements to place compliant GL and pollution liability for West Coast spray foam operations." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "Every other agent gave me a generic contractor quote and called it done. My spray foam agent actually understood overspray claims, isocyanate exclusions, and why my rig needed separate inland marine. The policy he built is the first one I actually trust.", name: "Marcus T.", role: "Owner / Applicator", location: "Texas" },
  { quote: "I'd been declined twice for GL because of the chemical exposure. My agent found a specialty market that understood spray foam, documented our safety protocols, and placed a real program — not a stripped-down policy with a pollution exclusion that kills every claim.", name: "Denise R.", role: "Operations Manager", location: "Florida" },
  { quote: "The policy review caught three gaps I'd been carrying for two years — no completed-operations tail, ACV on my proportioner, and no hired auto. Fixed all three before renewal. That's what a real agent does.", name: "Kevin W.", role: "Spray Foam Contractor", location: "Ohio" },
] as const;
