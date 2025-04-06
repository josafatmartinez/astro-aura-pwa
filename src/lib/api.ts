// src/lib/api.ts
export async function saveUser(data: {
  birthDate: string;
  birthTime?: string;
  birthPlace: string;
  sunSign: string;
}) {
  const res = await fetch("/api/save-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.error || "Error guardando datos");
  return result;
}
