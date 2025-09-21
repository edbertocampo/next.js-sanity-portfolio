import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Get project config from env vars
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'

// Check if we have a real Sanity project configured
const hasRealProject = projectId && projectId !== 'your-project-id'

// Initialize client only if project is set
export const client = hasRealProject ? createClient({
  projectId,
  dataset,
  useCdn: false, // always fetch latest data in dev
  apiVersion: '2025-09-21' // stable API version
}) : null

const builder = client ? imageUrlBuilder(client) : null

// Utility for image URLs
export function urlFor(source: any) {
  return builder ? builder.image(source) : null
}

// Portfolio
export async function getPortfolioData() {
  if (!client) return null
  const query = `*[_type == "portfolio"] | order(_updatedAt desc)[0] {
    hero,
    features,
    experience,
    academic,
    projects,
    testimonials,
    footer
  }`
  return await client.fetch(query)
}

// Hero
export async function getHeroData() {
  if (!client) return null
  const query = `*[_type == "hero"] | order(_updatedAt desc)[0]{
    intro,
    highlightName,
    headline,
    description,
    cta,
    image,
    resumeFile // include file field
  }`
  return await client.fetch(query)
}

// Features / About Me
export async function getFeaturesData() {
  if (!client) return null
  const query = `*[_type == "featureSection"] | order(_updatedAt desc)[0] {
    aboutMe,
    features[]{
      title,
      icon,
      technologies[] // fetch each tech as separate string
    }
  }`
  return await client.fetch(query)
}

// Projects
export async function getProjectsData() {
  if (!client) return null
  return await client.fetch(`*[_type == "project"] | order(_createdAt asc)`)
}

// Experience
export async function getExperienceData() {
  if (!client) return null
  return await client.fetch(`*[_type == "experience"] | order(startDate desc)`)
}

// Academic
export async function getAcademicData() {
  if (!client) return null
  return await client.fetch(`*[_type == "academic"] | order(startDate desc)`)
}

// Footer
export async function getFooterData() {
  if (!client) return null
  return await client.fetch(`*[_type == "footer"] | order(_updatedAt desc)[0]`)
}
