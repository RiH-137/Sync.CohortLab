import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: "postgresql",
    schema:"./configs/schema.js",
    dbCredentials: {
        url:'postgresql://neondb_owner:npg_TC7vigyWn5cQ@ep-noisy-poetry-a4fejp92-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
    }
})