// schemas.ts
export const heroSchema = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Intro Text',
      type: 'string',
      description: 'Small text above the name, e.g., "Hi, my name is"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'highlightName',
      title: 'Highlight Name',
      type: 'string',
      description: 'The name that appears in a different font/color, e.g., "Edbert"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      description: 'Big text like "I build things for the web."',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Smaller description text below the headline',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cta',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the Download Resume button',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      description: 'Upload the PDF file that will be downloaded when the button is clicked',
      options: {
        accept: '.pdf',             // only allow PDF
        storeOriginalFilename: true // keep original filename
      },
      // optional, allows deletion
      validation: (Rule: any) => Rule.warning('You can delete this later if needed.'),
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      description: 'Upload a hero image (can delete or replace anytime)',
      options: {
        hotspot: true,              // allows focus point cropping
        storeOriginalFilename: true // keeps the original file name
      },
      // optional, allows deletion
      validation: (Rule: any) => Rule.warning('You can delete or replace this image anytime.'),
    },
  ],
};


export const featureSchema = {
  name: 'featureSection',
  title: 'Feature Section / About Me',
  type: 'document',
  fields: [
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'text',
      description: 'Write your About Me section here',
    },
    {
      name: 'features',
      title: 'Skills / Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'technologies',
              title: 'Technologies / Skills',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Each tech is a separate item',
            },
            {
              name: 'icon',
              title: 'Icon (Emoji)',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'demo',
      title: 'Demo URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export const experienceSchema = {
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ document }: any) => document?.ongoing,
    },
    {
      name: 'ongoing',
      title: 'Ongoing?',
      type: 'boolean',
      description: 'Check if this work is still ongoing',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company',
      start: 'startDate',
      end: 'endDate',
      ongoing: 'ongoing',
    },
    prepare({ title, company, start, end, ongoing }: any) {
      const startYear = start ? new Date(start).getFullYear() : '';
      const endYear = ongoing ? 'Present' : end ? new Date(end).getFullYear() : '';
      return {
        title: `${title} @ ${company}`,
        subtitle: `${startYear} - ${endYear}`,
      };
    },
  },
};

export const academicSchema = {
  name: 'academic',
  title: 'Academic Background',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Degree/Program',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ document }: any) => document?.ongoing,
    },
    {
      name: 'ongoing',
      title: 'Ongoing?',
      type: 'boolean',
      description: 'Check if this study is still ongoing',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      institution: 'institution',
      start: 'startDate',
      end: 'endDate',
      ongoing: 'ongoing',
    },
    prepare({ title, institution, start, end, ongoing }: any) {
      const startYear = start ? new Date(start).getFullYear() : '';
      const endYear = ongoing ? 'Present' : end ? new Date(end).getFullYear() : '';
      return {
        title: `${title} @ ${institution}`,
        subtitle: `${startYear} - ${endYear}`,
      };
    },
  },
};

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position/Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
  ],
};

export const footerSchema = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Footer Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'href',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
};
