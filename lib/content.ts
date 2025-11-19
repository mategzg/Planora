export const SITE_URL = 'https://planora-testfit.vercel.app'

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Cases', href: '/cases' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Gift', href: '/gift' },
  { label: 'Contact', href: '/contact' },
]

export const proofPoints = [
  {
    label: 'Delivery',
    value: '72–96 h',
    detail: 'Calendar hours from intake completion to preview drop-off.',
  },
  {
    label: 'Scope',
    value: '2k–20k ft²',
    detail: 'Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, South Broward.',
  },
  {
    label: 'Built for',
    value: 'Tenant-rep brokers',
    detail: 'Decision-ready visuals to help tenants compare options fast.',
  },
]

export const offeringItems = [
  {
    title: 'Test-fit option',
    description:
      'One clear layout your tenant can understand in 60 seconds—no architecture jargon, just ratios and adjacencies that help them decide.',
    icon: 'layout',
  },
  {
    title: 'Clean 2D plan + section/axo',
    description: 'A readable plan and simple section you can drop into emails and decks without explanation.',
    icon: 'plan',
  },
  {
    title: 'Two still images',
    description:
      'Tenant-friendly stills that show space, light, and mood—realistic enough to move the deal, not so polished they raise budget expectations.',
    icon: 'image',
  },
  {
    title: '60-second video',
    description:
      'A walkthrough edited for how brokers actually pitch: email attachments, quick client calls, and landlord updates.',
    icon: 'video',
  },
]

export const steps = [
  {
    title: 'Brief & upload',
    detail: 'Share the shell (DWG/PDF/JPG), ft range, headcount, and basic use.',
  },
  {
    title: 'Pre-flight call (T+0 h)',
    detail: 'A 15-minute call to align on ratios, risks, style, and timing; SLA starts.',
  },
  { title: 'Test-fit (T+36–48 h)', detail: 'One layout option with basic ratios and notes.' },
  {
    title: 'Renders (T+48–72 h)',
    detail: 'Two stills aligned with the test-fit and your audience.',
  },
  { title: 'Video (T+72–96 h)', detail: 'A 60-second walkthrough edited for real broker use.' },
  { title: 'One revision & delivery', detail: 'One round of changes included, then final files.' },
]

export const qaChips = ['Layout', 'Ratios & ADA (macro)', 'Graphics & Naming']

export const pricingTiers = [
  { range: '2–5k ft²', price: 'US$ 1,000', note: 'Launch' },
  { range: '5–10k ft²', price: 'US$ 1,300', note: 'Launch' },
  { range: '10–15k ft²', price: 'US$ 1,700', note: 'Launch' },
  { range: '15–20k ft²', price: 'US$ 2,100', note: 'Launch' },
  { range: '20k+ ft²', price: 'Request a quote' },
]

export const pricingConditions = [
  'Launch pricing (public) for Miami tenant-rep office previews (2k–20k ft²); >20k by quote.',
  'Scope: 1 test-fit, 1 clean 2D plan (PDF A3), 1 section/axonometric, 2 JPG stills, 1×60s MP4, schematic only.',
  'One revision included; SketchUp 3D model available on request.',
  'Delivery window 72–96 h from intake completion.',
  'Payment: 50/50 (deposit + delivery).',
  'Not for construction or permitting; tenant-facing and landlord-ready preview materials.',
  'File formats: PDF A3, DWG, 2× JPG stills, 1× MP4 video with subtle brand overlay.',
]

export const pricingInclusions = [
  'One revision included',
  'SketchUp 3D model on request',
  '50/50 payment (deposit + delivery)',
  '72–96h delivery from pre-flight call',
]

export const addOns = [
  {
    title: '+1 test-fit option',
    price: 'US$ 180 (Launch)',
    detail: 'Adds another scenario for headcount or layout.',
  },
  {
    title: '+1 render',
    price: 'US$ 400',
    detail: 'Additional still image (interior or interior/exterior) at Launch quality.',
  },
  {
    title: '+30s of extra video',
    price: 'US$ 800',
    detail: 'Adds 30 seconds of camera moves to the MP4 deliverable.',
  },
]

export const individualItems = [
  { title: 'Test-fit only', price: 'US$ 0.12/ft² (min US$ 600)' },
  { title: 'Single render', price: 'US$ 400' },
  { title: '60-second video only', price: 'US$ 1,000' },
]

export const caseStudies = [
  {
    eyebrow: 'Demo – 3k ft – Delivered in 72 h',
    title: 'Demo 3k ft – Delivered in 72 h',
    body: 'One test-fit option focused on hybrid work.',
    bullets: [
      'Clean 2D + axo for landlord updates.',
      'Two stills + 60-second video for tenant and landlord.',
    ],
  },
  {
    eyebrow: 'Demo – 14k ft – Delivered in 72 h',
    title: 'Demo 14k ft – Delivered in 72 h',
    body: 'Single option aligned with target ratios.',
    bullets: [
      'Clean 2D + section for internal review.',
      'Two stills + 60-second video for the leasing team.',
    ],
  },
  {
    eyebrow: 'Demo – 8k ft – Delivered in 84 h',
    title: 'Hybrid floorplate for a growth tenant',
    body: 'Balanced focus rooms + open plan for Miami corridors.',
    bullets: [
      'Test-fit aligned to headcount and ratios.',
      'Placeholder stills + 60s walkthrough for landlord/tenant.',
    ],
  },
]

export const quickFaqs = [
  {
    question: 'What do I need to provide?',
    answer:
      'Shell plan if available (DWG/PDF/JPG), ft range, headcount, basic use. Brand guidelines optional.',
  },
  {
    question: 'When does the 72–96 h timeline start?',
    answer: 'Once we confirm the brief on a quick pre-flight call and have all inputs.',
  },
  {
    question: "What's included in the price?",
    answer:
      'One test-fit, clean 2D plan + section/axo, two stills, 60-second video, and one revision.',
  },
  {
    question: 'Is this for construction?',
    answer: 'No. All outputs are schematic only—no permit/seal.',
  },
]

export const faqs = [
  {
    question: 'What inputs do you need to start?',
    answer:
      'Shell (DWG/PDF/JPG) if available, ft range, headcount, basic use, and any style cues. If no shell, we use a generic footprint to move fast.',
  },
  {
    question: 'When does the 72–96 h SLA start?',
    answer:
      'After the pre-flight call confirms the brief and files. If inputs are missing, the SLA pauses until we have them.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'One round of revisions after the first drop-off is included.',
  },
  {
    question: 'How do you price footage?',
    answer: 'Public Launch tiers cover 2k–20k ft². >20k ft² is quoted after a quick scope review.',
  },
  {
    question: 'Can you work under NDA?',
    answer: 'Yes. NDA available on request. Intake materials stay confidential.',
  },
  {
    question: 'How can I reuse the outputs?',
    answer:
      'They are tenant-facing and landlord-ready. Use stills and video in emails, listings, LOIs, and internal decks.',
  },
  {
    question: 'Is this for construction or permitting?',
    answer: 'No. Schematic only—no permit/seal, no MEP, no CD set.',
  },
  {
    question: 'Which submarkets do you focus on?',
    answer:
      'Doral, Blue Lagoon, Coral Gables, Brickell, Kendall, and South Broward. Other Miami areas on request.',
  },
  {
    question: 'Do you offer add-ons?',
    answer: 'Yes: extra test-fit, extra render, and +30s video as listed on the pricing page.',
  },
  { question: 'How is payment handled?', answer: '50/50 (deposit + delivery), invoiced in US$.' },
  { question: 'Can I request a SketchUp model?', answer: 'Yes, on request.' },
]

export const submarkets = [
  'Doral',
  'Blue Lagoon',
  'Coral Gables',
  'Brickell',
  'Kendall',
  'South Broward',
  'Other',
]

export const ftRanges = ['2–5k ft²', '5–10k ft²', '10–15k ft²', '15–20k ft²', '20k+ ft²']

export const giftStyles = ['Modern Minimal', 'Tech Chic', 'Warm Contemporary']
