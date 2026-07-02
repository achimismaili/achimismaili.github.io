import type { APIRoute } from 'astro';
import pkg from '../../package.json';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({ version: pkg.version, name: pkg.name }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};
