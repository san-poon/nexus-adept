import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';


const connectionString = process.env.SUPABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode
export const sql = postgres(connectionString, { prepare: false })


export const db = drizzle(sql, { schema });
