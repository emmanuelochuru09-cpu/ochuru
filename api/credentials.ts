export default function handler(_req: any, res: any) {
  res.status(200).json({
    appName: 'Ochuru Web Studio',
    brandName: 'Ochuru Digital',
    appletId: '88760882-e0cc-4e19-a30f-426b1c8a570d',
    apiKey: 'ochuru_live_api_88760882_b94f27a810934e62',
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    environment: 'production',
    status: 'ACTIVE',
  });
}
