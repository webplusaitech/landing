export const config = {
  siteName: 'WebPlusAI Tech',
  title: 'WebPlusAI Tech',
  description: '',
  locale: 'en',
  baseUrl: process.env.baseUrl,

  siteDomain: process.env.siteDomain,
  apiServer: process.env.apiServer,
  email: {
    serviceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    accountId: process.env.NEXT_PUBLIC_EMAIL_ACCOUNT_ID,
  },
};
