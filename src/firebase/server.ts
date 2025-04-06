// src/firebase/server.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";

const serviceAccount: ServiceAccount = {
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
    privateKey: import.meta.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  };

const activeApps = getApps();

const initApp = () => {
  if (import.meta.env.PROD) {
    console.info("🔥 Modo producción: usando cuenta por defecto.");
    return initializeApp(); // en Firebase Functions se inyecta por defecto
  }

  console.info("🛠️ Modo desarrollo: inicializando con service account desde .env");
  return initializeApp({ credential: cert(serviceAccount) });
};

export const app = activeApps.length === 0 ? initApp() : activeApps[0];
