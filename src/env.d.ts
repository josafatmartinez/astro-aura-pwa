/// <reference types="astro/client" />

interface ImportMetaEnv {
  // 🔓 Variables públicas (expuestas al cliente)
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;

  // 🔐 Variables privadas (solo en server.ts)
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_PRIVATE_KEY_ID: string;
  readonly FIREBASE_PRIVATE_KEY: string;
  readonly FIREBASE_CLIENT_EMAIL: string;
  readonly FIREBASE_CLIENT_ID: string;
  readonly FIREBASE_AUTH_URI: string;
  readonly FIREBASE_TOKEN_URI: string;
  readonly FIREBASE_AUTH_CERT_URL: string;
  readonly FIREBASE_CLIENT_CERT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
