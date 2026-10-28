import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Project Credentials Endpoint
app.get('/api/credentials', (_req, res) => {
  res.json({
    appName: 'Ochuru Web Studio',
    brandName: 'Ochuru Digital',
    appletId: '88760882-e0cc-4e19-a30f-426b1c8a570d',
    apiKey: 'ochuru_live_api_88760882_b94f27a810934e62',
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    environment: process.env.NODE_ENV || 'development',
    status: 'ACTIVE',
  });
});

// AI Blueprint Generator Endpoint using Gemini 3.8 Flash
app.post('/api/generate-blueprint', async (req, res) => {
  try {
    const { businessName, industry, goals } = req.body;

    if (!businessName) {
      return res.status(400).json({ error: 'Business name is required' });
    }

    // If Gemini API Key is configured, generate with Gemini
    if (process.env.GEMINI_API_KEY) {
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

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('AI response timeout')), 4500)
      );

      const response = await Promise.race([
        ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        }),
        timeoutPromise,
      ]);

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        return res.json(parsed);
      } catch {
        return res.json({
          headline: `Transform ${businessName} with a High-Converting Digital Presence`,
          subheadline: 'Engineered for sub-second mobile loading, Google visibility, and automated 24/7 Paystack & WhatsApp sales.',
          recommendedPages: ['Home & Brand Story', 'Services & Live Pricing', 'Client Proof & Reviews', '1-Tap WhatsApp Intake'],
          conversionHooks: [
            'Instant 24/7 client booking eliminating slow voice-note friction',
            'Sub-0.4s load speed on Nigerian 4G networks with zero image lag',
            'Top ranking on Google local search in Lagos, Abuja & nationwide',
          ],
          recommendedPackage: 'Professional Business Engine (₦340,000 Promo Tier)',
          projectedWeeklyInquiries: '+10 to 18 High-Intent Inquiries',
          estimatedDelivery: '7 Business Days',
        });
      }
    } else {
      // High-quality deterministic fallback blueprint if API key isn't injected yet
      return res.json({
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
    }
  } catch (error) {
    console.warn('Gemini call encountered temporary spike, using fallback blueprint:', (error as Error).message);
    const { businessName } = req.body || {};
    return res.json({
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
});

// Vite Middleware for Development / Static Serve for Production
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
