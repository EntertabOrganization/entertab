// Base URL of the Entertab backend. Falls back to the production backend so a
// missing NEXT_PUBLIC_API_URL at build time never sends forms to this site.
export const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://entertab-backend.vercel.app"
).replace(/\/+$/, "");

// Parses a JSON response body without throwing on empty or non-JSON bodies.
export async function readJson(response: Response): Promise<{ message?: string } & Record<string, unknown>> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { message: `Server error (${response.status}). Please try again later.` };
  }
}
