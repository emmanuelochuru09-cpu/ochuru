export type IndustryType = 'all' | 'hospitality' | 'services' | 'ecommerce';

export interface CaseStudy {
  id: string;
  title: string;
  industry: 'hospitality' | 'services' | 'ecommerce';
  clientName: string;
  outcome: string;
  metric: string;
  timeframe: string;
  tags: string[];
  description: string;
  features: string[];
  previewType: 'restaurant' | 'corporate' | 'ecommerce';
  accentColor: string;
}

export interface PricingPackage {
  id: 'starter' | 'business' | 'growth';
  name: string;
  idealFor: string;
  originalPrice?: number;
  basePrice: number;
  baseTimeline: string;
  features: string[];
}

export interface PricingAddon {
  id: string;
  name: string;
  originalPrice?: number;
  price: number;
  description: string;
}

export interface ComparisonPoint {
  title: string;
  withoutSite: string;
  withOurSite: string;
  impact: string;
}

export interface AdCampaignTemplate {
  id: string;
  channel: string;
  channelLabel: string;
  title: string;
  headline: string;
  body: string;
  ctaText: string;
  hashtags?: string[];
  targetAudience: string;
  tips: string;
}

export interface ProjectBrief {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
  timestamp: string;
}
