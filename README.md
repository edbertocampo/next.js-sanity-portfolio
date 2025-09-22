# Edbert Ocampo Portfolio

A sample personal portfolio website showcasing projects, skills, experience, and a downloadable resume. Built with [Next.js](https://nextjs.org) and [Sanity CMS](https://www.sanity.io).

  ![NextJsSanityPortfolioSample](https://github.com/edbertocampo/next.js-sanity-portfolio/raw/main/public/NextJsSanityPortfolioSample.gif)

---

## Live Demo

Explore the live site: [https://sample-edbertocampo.vercel.app/](https://sample-edbertocampo.vercel.app/)

View the source code: [https://github.com/edbertocampo/next.js-sanity-portfolio](https://github.com/edbertocampo/next.js-sanity-portfolio)

---

## Getting Started

Embark on your journey to set up this unique portfolio project locally with these steps:

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/edbertocampo/next.js-sanity-portfolio.git
cd next.js-sanity-portfolio
```

### 2. Install Dependencies

Run one of the following commands to install the dependencies:

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

Start the development server with one of the following commands:

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

- **`app/`**: Houses Next.js pages, components, and layout for a seamless experience.
- **`components/`**: Reusable React components (e.g., Hero, Header, Projects) crafted with care.
- **`lib/sanity.ts`**: Sanity client configuration and helper functions for robust integration.
- **`sanityMockData.ts`**: Mock data for local development fallback, ensuring smooth testing.
- **`public/`**: Static assets like images, favicon, and resume PDF, adding a personal touch.

---

## Fonts

This project leverages [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the elegant [Geist](https://vercel.com/font) font family.

---

## Deployment

Deploy this distinctive portfolio effortlessly on [Vercel](https://vercel.com/new):

1. Push your code to a Git repository (e.g., GitHub, GitLab).
2. Connect the repository to Vercel.
3. Configure the same environment variables in Vercel's dashboard.
4. Deploy and share your unique online presence.

For detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity CMS Documentation](https://www.sanity.io/docs)

---

© 2025 Edbert Ocampo. All rights reserved. Crafted with love, passion and innovation. ᓚᘏᗢ

Made with ❤ by Edbert Ocampo (●'◡'●)



















