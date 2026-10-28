import { CaseStudy, PricingPackage, PricingAddon, ComparisonPoint, AdCampaignTemplate } from '../types.ts';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'elements-dining',
    title: 'Elements Bistro & Rooftop Lounge',
    industry: 'hospitality',
    clientName: 'Elements Hospitality (Victoria Island, Lagos)',
    outcome: 'Eliminated manual phone reservations and constant WhatsApp table queries with automated real-time booking.',
    metric: '+₦4.2M Extra Monthly Bookings',
    timeframe: 'Delivered in 7 days',
    tags: ['Table Booking Engine', 'Seasonal Menu CMS', 'Mobile-First UI'],
    description: 'Transformed an outdated Instagram-only bio link into a culinary brand experience with an instant reservation system, local Google Maps ranking, and Paystack deposit integration.',
    features: [
      'Interactive mobile menu with instant dish preview & pricing',
      'Automated table reservation engine linked directly to manager WhatsApp',
      'Under 0.4s mobile load time on MTN & Airtel 4G networks (Zero heavy images)',
      'Optimized for "best dining in Victoria Island" and Google local search'
    ],
    previewType: 'restaurant',
    accentColor: 'amber'
  },
  {
    id: 'lexington-corporate',
    title: 'Lexington Legal & Financial Advisory',
    industry: 'services',
    clientName: 'Lexington Partners (Ikoyi & Abuja)',
    outcome: 'Positioned the firm as an elite tier-1 consultancy, attracting corporate retainers and international clients.',
    metric: '+160% High-Value Retainer Calls',
    timeframe: 'Delivered in 10 days',
    tags: ['Client Intake Flow', 'B2B Authority Design', 'Automated Calendly'],
    description: 'Designed a high-trust institutional portal with a pre-qualification questionnaire, case studies, and automated consultation scheduling.',
    features: [
      'Automated client qualification form saving 12+ hours of back-and-forth weekly',
      'Verified corporate case studies library and partner credentials',
      'Enterprise-grade SSL security and encrypted client document portal',
      '100/100 Google Lighthouse speed and mobile performance score'
    ],
    previewType: 'corporate',
    accentColor: 'indigo'
  },
  {
    id: 'aura-home',
    title: 'Aura Lifestyle & Home Decor',
    industry: 'ecommerce',
    clientName: 'Aura Living Co. (Lekki Phase 1)',
    outcome: 'Stopped losing customers to slow "DM for price" responses by automating orders with 24/7 Paystack & card checkout.',
    metric: '₦8.6M Online Sales in Month 1',
    timeframe: 'Delivered in 9 days',
    tags: ['Custom E-Commerce', 'Paystack & Flutterwave', 'Direct WhatsApp Alert'],
    description: 'Built a sleek, minimalist shopping experience that elevated average order value by 55% and automatically notifies the warehouse via WhatsApp upon every paid order.',
    features: [
      'Seamless checkout supporting Nigerian debit cards, bank transfers & Apple Pay',
      'Instant WhatsApp order notification sent to business and customer',
      'Automated delivery fee calculator for Lagos, Abuja & interstate shipping',
      'High-speed vector asset loading with instantaneous product detail transitions'
    ],
    previewType: 'ecommerce',
    accentColor: 'emerald'
  }
];

export const PRICING_PACKAGES: Record<'starter' | 'business' | 'growth', PricingPackage> = {
  starter: {
    id: 'starter',
    name: 'Starter Business Presence',
    idealFor: 'Solo practitioners, consultants, personal brands & small boutique shops',
    originalPrice: 180000,
    basePrice: 110500, // Reduced by ₦50k (₦130,000) minus 15% discount = ₦110,500
    baseTimeline: '5 to 7 days',
    features: [
      'Up to 4 custom pages (Home, About, Services, Contact)',
      '100% mobile responsive (Fast on MTN/Airtel 4G networks)',
      'Direct 1-tap WhatsApp chat & call button',
      'Google Business & Map search registration',
      'Zero-bloat architecture for instant page loading'
    ]
  },
  business: {
    id: 'business',
    name: 'Professional Business Engine',
    idealFor: 'Clinics, legal firms, restaurants, logistics & growing service businesses',
    originalPrice: 450000,
    basePrice: 340000, // Reduced by ₦50k (₦400,000) minus 15% discount = ₦340,000
    baseTimeline: '7 to 10 days',
    features: [
      'Up to 8 custom bespoke pages & case studies',
      'Automated client booking calendar & WhatsApp quote alerts',
      'Local Nigerian SEO & schema markup for Google ranking',
      'Sub-second page load speed & SSL certificate included',
      'Custom interactive forms and lead intake questionnaire'
    ]
  },
  growth: {
    id: 'growth',
    name: 'High-Scale E-Commerce & Portal',
    idealFor: 'Online brands, apparel stores, wholesale, course creators & portals',
    originalPrice: 950000,
    basePrice: 765000, // Reduced by ₦50k (₦900,000) minus 15% discount = ₦765,000
    baseTimeline: '12 to 16 days',
    features: [
      'Full custom product catalog with cart & instant search',
      'Paystack, Flutterwave & direct bank transfer checkout',
      'Automatic instant WhatsApp notification for every new order',
      'Inventory sync & delivery fee calculation for all 36 states',
      'Advanced conversion rate optimization & analytics tracking'
    ]
  }
};

export const PRICING_ADDONS: PricingAddon[] = [
  {
    id: 'seo',
    name: 'Google Local SEO & Business Profile Setup',
    originalPrice: 60000,
    price: 51000, // ₦60,000 with 15% discount
    description: 'Target high-intent Google searches for your industry across Lagos, Abuja, and nationwide.'
  },
  {
    id: 'booking',
    name: 'Automated WhatsApp Booking & Paystack Setup',
    originalPrice: 75000,
    price: 63750, // ₦75,000 with 15% discount
    description: 'Collect appointments, table bookings, or deposits straight into your account automatically.'
  },
  {
    id: 'copywriting',
    name: 'Persuasive Sales Copywriting (All Pages)',
    originalPrice: 80000,
    price: 68000, // ₦80,000 with 15% discount
    description: 'High-converting copy crafted to turn skeptical visitors into eager paying clients.'
  },
  {
    id: 'express',
    name: 'Express Rush Turnaround (5 Days Guarantee)',
    originalPrice: 100000,
    price: 85000, // ₦100,000 with 15% discount
    description: 'Priority engineering queue to launch your complete verified website in 5 business days.'
  }
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    title: 'Customer Trust & "Is This Legit?"',
    withoutSite: 'Relying only on Instagram or WhatsApp makes clients hesitate, suspect scams, or demand pay-on-delivery.',
    withOurSite: 'A bespoke, fast .com / .ng website with verified business details, customer reviews, and clear terms builds instant credibility.',
    impact: 'Commands premium rates without bargaining'
  },
  {
    title: 'Ending the "DM for Price" Trap',
    withoutSite: 'Wasting 4–6 hours every day answering repetitive WhatsApp messages: "How much?", "Is this available?", "Send account number".',
    withOurSite: 'Customers view your full catalog, see exact prices, book appointments, or pay with card/transfer automatically 24/7.',
    impact: 'Saves 25+ hours of manual admin monthly'
  },
  {
    title: 'Google Search Visibility in Nigeria',
    withoutSite: 'Completely invisible when customers in Lagos, Abuja, Port Harcourt, or abroad search Google for your service.',
    withOurSite: 'Built-in local SEO and Google Business setup so customers searching for what you do find YOU instead of your competition.',
    impact: 'Generates free organic leads every single week'
  },
  {
    title: 'Protection from Account Bans',
    withoutSite: 'If Instagram or Facebook randomly disables your page or algorithm changes, your business instantly grinds to a halt.',
    withOurSite: 'A digital asset you own 100%, with your domain, direct customer phone/email database, and zero platform dependency.',
    impact: 'Permanent business security and high valuation'
  }
];

export const AD_TEMPLATES: AdCampaignTemplate[] = [
  {
    id: 'ig-growth-focused',
    channel: 'instagram_feed',
    channelLabel: 'Instagram / Facebook Feed Ad',
    title: 'The High-Converting Business Presence',
    headline: "Stop Losing Customers Because You Don't Have a Professional Website.",
    body: `Are you tired of losing serious clients because your business only has an Instagram page?

When high-paying customers want to spend real money, they look for a verified website to confirm:
1. Is this business legitimate?
2. What are their actual packages and prices?
3. Can I book or pay without 50 voice notes back and forth?

I am Emmanuel Ochuru, a web designer and developer. I build custom, lightning-fast websites for businesses that want to:
• Command premium prices with authority
• Rank #1 on Google search in your city
• Take bookings and payments automatically 24/7
• Launch in 7–10 days with zero stress

Ready to look like the market leader you truly are?

📲 Tap the button below or send a WhatsApp message to 08032568417 to get a free strategy call & custom quote!`,
    ctaText: 'Chat on WhatsApp: 08032568417',
    hashtags: ['#WebDesignNigeria', '#LagosBusiness', '#NigerianEntrepreneurs', '#AbujaBusinesses', '#SmallBusinessNigeria'],
    targetAudience: 'Business owners, founders, boutique owners, legal/consulting firms, service providers across Nigeria',
    tips: 'Set your Meta Ads CTA button to "Send WhatsApp Message" directing to wa.me/2348032568417.'
  },
  {
    id: 'ig-story-card',
    channel: 'story_status',
    channelLabel: 'Story & WhatsApp Status',
    title: 'Direct Quick-Callout Story',
    headline: 'Still replying "DM for price" 50 times every day?',
    body: `You are losing 60% of potential buyers who refuse to wait for voice notes back and forth.

I build high-converting websites for businesses across Nigeria that want to look professional, rank on Google, and make sales on autopilot.

💬 Send "WEBSITE" on WhatsApp to 08032568417 right now to get a FREE website audit & quote!`,
    ctaText: 'Chat on WhatsApp: 08032568417',
    hashtags: ['#WebDeveloperLagos', '#NigerianSME', '#OnlineBusinessNG'],
    targetAudience: 'Instagram store owners, salon/spa owners, consultants, freelancers, real estate agents',
    tips: 'Post this on your WhatsApp Status every Tuesday and Thursday with a direct link to wa.me/2348032568417!'
  },
  {
    id: 'whatsapp-cold-outreach',
    channel: 'whatsapp_outreach',
    channelLabel: 'WhatsApp Pitch Script',
    title: 'Direct B2B Outreach Message',
    headline: 'High-Trust Direct Outreach to Nigerian Business Owners',
    body: `Hello Alhaji / Manager! 👋

I noticed Prime Care Clinic has built an incredible reputation with quality service and 5-star customer reviews.

However, when prospective clients search Google for private healthcare & consulting in Lagos, Abuja & Nationwide, they cannot easily book directly online or view full pricing, which makes some doubt if you are legit.

I already drafted a quick 2-minute visual layout showing how a website could double your direct customer inquiries.

Could I send you the preview link on WhatsApp (08032568417)? No pressure at all—just wanted to share some ideas!

Warm regards,
Emmanuel Ochuru
Web Architect & Founder, Ochuru Digital
WhatsApp: 08032568417`,
    ctaText: 'Copy WhatsApp Pitch Script',
    targetAudience: 'Local businesses in Lagos, Abuja, Port Harcourt, Ibadan, or international clients',
    tips: 'Mention a specific product or post from their page in line 2 so they know you took the time to study their business.'
  },
  {
    id: 'google-search-ad',
    channel: 'google_search',
    channelLabel: 'Google Search Ad',
    title: 'High-Intent Search Campaign',
    headline: 'Custom Website Design In Lagos | Launched In 7 Days | WhatsApp & Paystack',
    body: 'Need a website that brings real paying customers? Custom-built, mobile-responsive websites with WhatsApp booking, Paystack payments & Google SEO. Launched in 7 days. Chat on WhatsApp: 08032568417.',
    ctaText: 'WhatsApp 08032568417 for Free Quote',
    targetAudience: 'People in Nigeria searching: "web designer in Lagos", "website developer Abuja", "how much is website design in Nigeria"',
    tips: 'Set location targeting to Lagos, Abuja, Rivers, Oyo, and Kano.'
  },
  {
    id: 'linkedin-b2b-post',
    channel: 'linkedin_b2b',
    channelLabel: 'LinkedIn B2B Post',
    title: 'Authority Thought-Leadership Post',
    headline: 'Why a Social Media Page is No Longer Enough for Nigerian SMEs in 2026',
    body: `If your business generates over ₦5M annually, relying exclusively on social media is your biggest operational vulnerability.

Here is why:
1. Algorithm dependency: Your audience reach can drop 80% overnight.
2. Zero search capture: High-value corporate clients start with a Google search, not Instagram scrolls.
3. Trust deficit: Serious institutional partners demand a verified web domain and corporate email before issuing retainers.

At Ochuru Digital, we engineer custom, fast, and high-converting websites for businesses ready to dominate their space.

If your business is ready for an online presence that works as hard as you do, let's talk.
Direct WhatsApp: 08032568417
Email: emmanuelochuru02@gmail.com

Let's build something exceptional for your brand.`,
    ctaText: 'Chat Directly on WhatsApp: 08032568417',
    hashtags: ['#NigerianBusiness', '#WebDevelopment', '#EntrepreneurshipNigeria', '#LagosSME', '#TechInAfrica'],
    targetAudience: 'Founders, managing directors, corporate consultants, business coaches in Nigeria & Diaspora',
    tips: 'Post on LinkedIn on Tuesday or Thursday between 8:00 AM and 10:00 AM.'
  }
];
