import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { sanityMockData } from './sanityMockData'

// ✅ Use NEXT_PUBLIC env vars only (accessible in client-side)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Warn if projectId is missing
if (!projectId) console.warn('❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set! Sanity fetches will fail.')

// Always initialize client; useCdn true for production
export const client = createClient({
  projectId: projectId || 'dummy_project',
  dataset,
  useCdn: true,
  apiVersion: '2025-09-21',
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

// Generic function to safely fetch data with fallback to mock
async function fetchData<T>(query: string, mockData: T): Promise<T> {
  try {
    if (!client || !projectId) return mockData
    const data = await client.fetch(query)
    if (!data || (Array.isArray(data) && data.length === 0)) return mockData
    return data
  } catch (err) {
    console.error('❌ Sanity fetch error:', err)
    return mockData
  }
}

// Portfolio
export async function getPortfolioData() {
  const query = `*[_type == "portfolio"] | order(_updatedAt desc)[0] {
    hero,
    features,
    experience,
    academic,
    projects,
    testimonials,
    footer
  }`
  return fetchData(query, sanityMockData)
}

// Hero
export async function getHeroData() {
  const query = `*[_type == "hero"] | order(_updatedAt desc)[0] {
    intro,
    highlightName,
    headline,
    description,
    cta,
    image,
    resumeFile
  }`
  return fetchData(query, sanityMockData.hero)
}

// Features
export async function getFeaturesData() {
  const query = `*[_type == "featureSection"] | order(_updatedAt desc)[0] {
    aboutMe,
    features[] {
      title,
      icon,
      technologies[]
    }
  }`
  return fetchData(query, sanityMockData.featuresData)
}

// Projects
export async function getProjectsData() {
  const query = `*[_type == "project"] | order(_createdAt asc) {
    title,
    description,
    technologies,
    github,
    demo,
    image
  }`
  return fetchData(query, sanityMockData.projects)
}

// Experience
export async function getExperienceData() {
  const query = `*[_type == "experience"] | order(startDate desc)`
  return fetchData(query, sanityMockData.experience)
}

// Academic
export async function getAcademicData() {
  const query = `*[_type == "academic"] | order(startDate desc)`
  return fetchData(query, sanityMockData.academic)
}

// Footer
export async function getFooterData() {
  const query = `*[_type == "footer"] | order(_updatedAt desc)[0]`
  return fetchData(query, sanityMockData.footer)
}
