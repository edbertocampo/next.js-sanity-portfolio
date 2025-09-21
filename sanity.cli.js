import { defineCliConfig } from 'sanity/cli'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

// Check if project is configured
const hasRealProject = process.env.VITE_SANITY_PROJECT_ID && 
  process.env.VITE_SANITY_PROJECT_ID !== 'your-project-id'

if (!hasRealProject) {
  console.warn('⚠️ No real Sanity project configured. Please set VITE_SANITY_PROJECT_ID in .env.local')
}

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET || 'production',
  },
})
