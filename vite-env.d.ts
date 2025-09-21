/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SANITY_PROJECT_ID: string
    readonly VITE_SANITY_DATASET: string
    // add more env vars here if needed, e.g.:
    // readonly VITE_API_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  