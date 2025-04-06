// src/pages/api/save-user.ts
export const prerender = false; // Disable static rendering for this endpoint
import { app as firebaseAdminApp } from "@/firebase/server";
import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const db = getFirestore(firebaseAdminApp);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { birthDate, birthTime, birthPlace, sunSign } = body;

    if (!birthDate || !birthPlace || !sunSign) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const id = `${birthDate}-${birthPlace}`.replace(/\s+/g, "_").toLowerCase();

    await db
      .collection("users")
      .doc(id)
      .set({
        birthDate,
        birthTime: birthTime || null,
        birthPlace,
        sunSign,
        createdAt: Timestamp.now(),
      });

    return new Response(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error guardando usuario:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
