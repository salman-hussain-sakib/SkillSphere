import { createClient } from "@libsql/client";
import Database from "better-sqlite3";
import path from "path";

// For local development, we use a simple SQLite file
const dbPath = path.join(process.cwd(), "auth.db");
export const db = new Database(dbPath);

// Initialize tables if they don't exist (BetterAuth can also do this)
