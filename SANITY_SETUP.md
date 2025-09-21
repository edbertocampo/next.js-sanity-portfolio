```md
# Sanity CMS Setup Guide

This guide outlines the steps to set up Sanity CMS for your portfolio website.

---

## 1. Create a Sanity Project

1. Visit [sanity.io](https://www.sanity.io) and sign up or log in.
2. Create a new project.
3. Record your **Project ID** and **Dataset** name (typically `production`).

---

## 2. Configure Environment Variables

In your project root, create a `.env.local` file and add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 3. Install Sanity CLI (Optional)

For advanced management, install the Sanity CLI globally:

```bash
npm install -g @sanity/cli
```

---

## 4. Initialize Sanity Studio

Run the following command in your project directory to set up Sanity Studio:

```bash
npx sanity init
```

Follow the prompts to configure your project.

---

## 5. Deploy Sanity Studio

Deploy your Sanity Studio to make it accessible online:

```bash
npx sanity deploy
```

---

## 6. Access Sanity Studio

- **Local**: [http://localhost:3333](http://localhost:3333) (after running `npx sanity start`)
- **Production**: [https://your-project-id.sanity.studio](https://your-project-id.sanity.studio)

---

## 7. Add Content

1. Open Sanity Studio.
2. Add portfolio content using the available schemas.
3. The website will automatically fetch and display the updated data.

---

## Available Schema Types

- **Hero**: Content for the main hero section.
- **Feature**: Skills and highlights.
- **Project**: Portfolio projects.
- **Experience**: Work history.
- **Academic**: Educational background.
- **Testimonial**: Client testimonials.
- **Footer**: Footer content and links.
```