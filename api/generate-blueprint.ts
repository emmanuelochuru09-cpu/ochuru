import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { businessName, industry, goals } = req.body || {};

    if (!businessName) {
      return res.status(400).json({ error: 'Business name is required' });
    }

    if (process.env.GEMINI_API_KEY) {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const prompt = `You are the lead conversion strategist at Ochuru Digital, a premier web design agency in Lagos, Nigeria.
Create a high-converting custom website strategy blueprint for:
Business Name: ${businessName}
Industry: ${industry || 'Nigerian SME / Service Business'}
Goals: ${goals || 'Increase sales, rank on Google, stop WhatsApp back-and-forth'}

Respond with JSON format strictly matching this structure:
{
  "headline": "A punchy, high-impact hero headline tailored to Nigerian and global buyers",
  "subheadline": "A clear, compelling subheadline explaining value proposition and speed",
  "recommendedPages": ["Page 1", "Page 2", "Page 3", "Page 4"],
  "conversionHooks": [
    "Hook 1 addressing customer trust or payment automation",
    "Hook 2 addressing mobile speed on MTN/Airtel 4G networks",
    "Hook 3 addressing Google local SEO in Nigeria"
  ],
  "recommendedPackage": "Starter Business Presence (₦110,500) or Professional Business Engine (₦340,000)",
  "projectedWeeklyInquiries": "+8 to 15 High-Intent Clients",
  "estimatedDelivery": "5 to 7 Days"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        return res.status(200).json(parsed);
      } catch {
        // Fallback JSON
      }
    }

    // Default high-converting strategy fallback
    return res.status(200).json({
      headline: `Dominate Your Market: High-Impact Custom Website for ${businessName}`,
      subheadline: `A lightning-fast, bespoke website engineered to rank on Google in Nigeria, eliminate manual 'DM for price' messaging, and close sales automatically.`,
      recommendedPages: [
        'High-Authority Homepage & Core Value Proposition',
        'Interactive Services / Product Catalog with Clear Pricing',
        'Verified Customer Proof & Case Studies Library',
        'Automated WhatsApp Booking & Paystack Payment Engine',
      ],
      conversionHooks: [
        'Instant client trust with verified .com.ng domain & SSL security',
        'Sub-0.4s instant load time on MTN & Airtel mobile networks',
        'Direct WhatsApp lead notification dispatched to your phone in 0.1s',
      ],
      recommendedPackage: 'Professional Business Engine (₦340,000 Promo Price - 15% Off)',
      projectedWeeklyInquiries: '+12 Qualified Inquiries / Week',
      estimatedDelivery: '7 Days Turnaround',
    });
  } catch (error) {
    const { businessName } = req.body || {};
    return res.status(200).json({
      headline: `Dominate Your Market: High-Impact Custom Website for ${businessName || 'Your Business'}`,
      subheadline: `A lightning-fast, bespoke website engineered to rank on Google in Nigeria, eliminate manual 'DM for price' messaging, and close sales automatically.`,
      recommendedPages: [
        'High-Authority Homepage & Core Value Proposition',
        'Interactive Services / Product Catalog with Clear Pricing',
        'Verified Customer Proof & Case Studies Library',
        'Automated WhatsApp Booking & Paystack Payment Engine',
      ],
      conversionHooks: [
        'Instant client trust with verified .com.ng domain & SSL security',
        'Sub-0.4s instant load time on MTN & Airtel mobile networks',
        'Direct WhatsApp lead notification dispatched to your phone in 0.1s',
      ],
      recommendedPackage: 'Professional Business Engine (₦340,000 Promo Price - 15% Off)',
      projectedWeeklyInquiries: '+12 Qualified Inquiries / Week',
      estimatedDelivery: '7 Days Turnaround',
    });
  }
}
