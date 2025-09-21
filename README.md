```md
# Edbert Ocampo Portfolio

A personal portfolio website showcasing projects, skills, experience, and a downloadable resume. Built with [Next.js](https://nextjs.org) and [Sanity CMS](https://www.sanity.io).

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install Dependencies
```bash
npm install
# or
yarn
# or
pnpm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the project root and add the following:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
```

> **Note**: A token is not required for public read-only content.

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Project Structure

- **`app/`**: Contains Next.js pages, components, and layout.
- **`components/`**: Reusable React components (e.g., Hero, Header, Projects).
- **`lib/sanity.ts`**: Sanity client configuration and helper functions.
- **`sanityMockData.ts`**: Mock data for local development fallback.
- **`public/`**: Static assets like images, favicon, and resume PDF.

---

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the [Geist](https://vercel.com/font) font family.

---

## Deployment

Deploy the app effortlessly on [Vercel](https://vercel.com/new):

1. Push your code to a Git repository (e.g., GitHub, GitLab).
2. Connect the repository to Vercel.
3. Configure the same environment variables in Vercel's dashboard.
4. Deploy and access your portfolio online.

For detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity CMS Documentation](https://www.sanity.io/docs)

---

Made with ❤️ by Edbert Ocampo
```