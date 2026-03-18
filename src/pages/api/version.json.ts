import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function compareVersions(a: string, b: string): number {
  const aParts = a.split('.').map(Number);
  const bParts = b.split('.').map(Number);
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const diff = (aParts[i] ?? 0) - (bParts[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs');

  const result: Record<string, string> = {};

  for (const doc of docs) {
    const { version, channel } = doc.data;
    if (!version || !channel) continue;

    if (!(channel in result) || compareVersions(version, result[channel]) > 0) {
      result[channel] = version;
    }
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
};
