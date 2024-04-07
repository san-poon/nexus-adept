import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from '@/db/schema';

// Connect to Vercel Postgres
const db = drizzle(sql, { schema });
export default db;