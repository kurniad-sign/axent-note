import 'dotenv/config';

import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('Missing environment variable: DATABASE_URL');
}

export const db = drizzle(process.env.DATABASE_URL!);
