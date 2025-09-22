import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// ✅ Only use NEXT_PUBLIC env vars for Next.js runtime
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const hasRealProject = !!projectId && projectId !== 'your-project-id'

export const client = hasRealProject
  ? createClient({
      projectId,
      dataset,
      useCdn: true, // ✅ use CDN for production, false if you want drafts
      apiVersion: '2025-09-21',
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  return builder ? builder.image(source) : null
}

// Portfolio
export async function getPortfolioData() {
  if (!client) return null
  const query = `*[_type == "portfolio"] | order(_updatedAt desc)[0]{
    hero,
    features,
    experience,
    academic,
    projects,
    testimonials,
    footer
  }`
  return client.fetch(query)
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
    resumeFile
  }`
  return client.fetch(query)
}

// Features
export async function getFeaturesData() {
  if (!client) return null
  const query = `*[_type == "featureSection"] | order(_updatedAt desc)[0]{
    aboutMe,
    features[]{
      title,
      icon,
      technologies[]
    }
  }`
  return client.fetch(query)
}

// Projects
export async function getProjectsData() {
  if (!client) return null
  return client.fetch(`*[_type == "project"] | order(_createdAt asc){
    title,
    description,
    technologies,
    github,
    demo,
    image
  }`)
}

// Experience
export async function getExperienceData() {
  if (!client) return null
  return client.fetch(`*[_type == "experience"] | order(startDate desc)`)
}

// Academic
export async function getAcademicData() {
  if (!client) return null
  return client.fetch(`*[_type == "academic"] | order(startDate desc)`)
}

// Footer
export async function getFooterData() {
  if (!client) return null
  return client.fetch(`*[_type == "footer"] | order(_updatedAt desc)[0]`)
}
