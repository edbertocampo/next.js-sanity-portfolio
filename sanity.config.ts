import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { 
  heroSchema, 
  featureSchema, 
  projectSchema, 
  experienceSchema, 
  academicSchema, 
  testimonialSchema, 
  footerSchema 
} from './src/lib/sanitySchemas'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID as string | undefined
const dataset = import.meta.env.SANITY_STUDIO_DATASET || 'production'

// Debugging
if (!projectId) {
  console.error("⚠️ SANITY_STUDIO_PROJECT_ID is missing")
  throw new Error("Configuration must contain `projectId`")
} else {
  console.log("✅ Sanity Project ID loaded:", projectId)
}

export default defineConfig({
  name: 'portfolio',
  title: 'Edbert Ocampo Portfolio',
  projectId,
  dataset,
  basePath: '/studio',   // 👈 ADD THIS
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      heroSchema,
      featureSchema,
      projectSchema,
      experienceSchema,
      academicSchema,
      testimonialSchema,
      footerSchema,
    ],
  },
})
