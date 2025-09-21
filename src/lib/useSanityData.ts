'use client'

import { useEffect, useState } from 'react'
import { client } from './sanity'

export function useSanityData() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        
        // Check if Sanity client is available
        if (!client) {
          setLoading(false)
          return
        }
        
        // Fetch all data in parallel
        const [hero, features, projects, experience, academic, testimonials, footer] = await Promise.all([
          client.fetch(`*[_type == "hero"][0]`),
          client.fetch(`*[_type == "feature"] | order(_createdAt asc)`),
          client.fetch(`*[_type == "project"] | order(_createdAt asc)`),
          client.fetch(`*[_type == "experience"] | order(startDate desc)`),
          client.fetch(`*[_type == "academic"] | order(startDate desc)`),
          client.fetch(`*[_type == "testimonial"] | order(_createdAt asc)`),
          client.fetch(`*[_type == "footer"][0]`)
        ])

        setData({
          hero,
          features,
          projects,
          experience,
          academic,
          testimonials,
          footer
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
        console.error('Error fetching Sanity data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

// Individual hooks for specific data
export function useHeroData() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!client) {
      setLoading(false)
      return
    }
    
    client.fetch(`*[_type == "hero"][0]`)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}

export function useFeaturesData() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!client) {
      setLoading(false)
      return
    }
    
    client.fetch(`*[_type == "feature"] | order(_createdAt asc)`)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}

export function useProjectsData() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!client) {
      setLoading(false)
      return
    }
    
    client.fetch(`*[_type == "project"] | order(_createdAt asc)`)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
