export const API_URL = (import.meta.env.VITE_APP_API_URL as string) || 'http://localhost:8080';
export const API_KEY = (import.meta.env.VITE_APP_API_KEY as string) || 'FallbackKey';

// TODO: remove TO PRODUCTION
export const JWT_SECRET = '123456' as string;
