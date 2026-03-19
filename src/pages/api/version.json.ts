import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs');

  const result: Record<string, { version: string; versionCode: number }> = {};

  for (const doc of docs) {
    const { version, versionCode, channel } = doc.data;
    if (!version || versionCode == null || !channel) continue;

    if (!(channel in result) || versionCode > result[channel].versionCode) {
      result[channel] = { version, versionCode };
    }
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
};
