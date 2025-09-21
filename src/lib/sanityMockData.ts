export interface SanityMockData {
  hero: {
    intro: string;
    highlightName: string;
    headline: string;
    description: string;
    cta: string;
    image: string | any; // for Sanity image object or fallback string
    resumeFile?: {
      asset: {
        url: string;
      };
    };
  }
  testimonials: {
    name: string;
    quote: string;
  }[];
  featuresData: {        
    aboutMe: string;
    features: {
      title: string;
      technologies: string[]; // updated from description
      icon: string;
    }[];
  };
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  academic: {
    title: string;
    institution: string;
    period: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
  }[];
  footer: {
    text: string;
    links: {
      label: string;
      href: string;
    }[];
  };
}

export const sanityMockData: SanityMockData = {
  hero: {
    intro: "Hi, my name is",
    highlightName: "Edbert",
    headline: "I build things for the web.",
    description:
      "Aspiring QA Engineer / Web Developer / VA Freelancer / Professor passionate about delivering high-quality digital solutions and ensuring exceptional user experiences.",
    cta: "Download Resume",
    image: "https://edbert-ocampo.vercel.app/me.jpg",
    resumeFile: {
      asset: {
        url: "https://edbert-ocampo.vercel.app/Ocampo%20Edbert%20Resume.pdf",
      },
    },
  },
  testimonials: [
    {
      name: "Dr. John Smith",
      quote:
        "Edbert showed exceptional dedication and technical prowess in implementing cutting-edge solutions for our projects.",
    },
    {
      name: "Jane Doe",
      quote:
        "Working with Edbert was a pleasure. His ability to understand complex requirements and deliver elegant solutions is remarkable.",
    },
  ],
  featuresData: {
    aboutMe:
      "I'm Edbert Ocampo, a passionate professional bridging technology and business through innovative digital solutions. As a technology professional and Professor, I blend technology and business to create innovative digital solutions across web development, QA, and freelance services.",
    features: [
      {
        title: "Frontend Development",
        technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        icon: "💻",
      },
      {
        title: "Backend Development",
        technologies: ["Python", "PHP", "SQL", "RESTful APIs"],
        icon: "⚙️",
      },
      {
        title: "Tools & DevOps",
        technologies: ["Git", "CI/CD", "Testing", "UI/UX Design"],
        icon: "🛠️",
      },
    ],
  },
  experience: [
    {
      title: "Lecturer I",
      company: "College of Informatics and Computing Sciences - Batangas State University",
      period: "Aug. 2024 - Present",
      description: "Delivering comprehensive lectures in Information Technology and Computing",
    },
    {
      title: "Computer Programmer I",
      company: "Center for Technopreneurship and Innovation",
      period: "Apr. 2024 - June 2024",
      description: "Developing innovative technological solutions",
    },
    {
      title: "Assistant Project Manager Intern",
      company: "The Umonics Method",
      period: "Feb. 2023 - May 2023",
      description: "Assisted in project planning and coordination",
    },
  ],
  academic: [
    {
      title: "Master of Science in Data Science",
      institution: "Batangas State University - College of Informatics and Computing Sciences",
      period: "Aug. 2024 - Present",
      description:
        "• Pursuing advanced studies in Data Science\n• Expanding expertise in advanced analytics and machine learning\n• Conducting research in cutting-edge technological domains",
    },
    {
      title: "Bachelor of Science in Information Technology",
      institution: "Batangas State University - College of Informatics and Computing Sciences",
      period: "2019 - 2023",
      description:
        "• Graduated with a Bachelor of Science in Information Technology\n• Specialized in Business Analytics\n• Developed strong technical and analytical skills",
    },
  ],
  projects: [
    {
      title: "Attendify",
      description: "A Digital Solution for Hassle-Free Attendance",
      technologies: ["TypeScript", "ReactJS", "JavaScript", "Material UI (MUI)", "Firebase", "MongoDB", "Vercel"],
      github: "https://github.com/edbertocampo/attendify",
      demo: "https://attendify-edu.vercel.app/",
    },
    {
      title: "Task Mate Now",
      description: "A modern to-do list application with an intuitive interface for task management.",
      technologies: ["HTML", "TypeScript", "JavaScript", "Styled Components", "Vercel"],
      github: "https://github.com/edbertocampo/to-do-list-2.0",
      demo: "https://task-mate-now.vercel.app/",
    },
    {
      title: "INGAT BATANGAS: City Emergency Response Application with Incident Management System",
      description:
        "Emergency response application to alert nearby emergency stations about life-threatening situations.",
      technologies: ["Laravel", "ReactJS", "Linode Object Storage", "NGINX", "API", "SQL"],
      github: "https://github.com/edbertocampo/INGATBATANGAS",
    },
    {
      title: "XML Plants Catalog",
      description:
        "A simple plant catalog using XML, HTML, and CSS, offering an easy-to-navigate display of various plants.",
      technologies: ["XML", "HTML", "CSS"],
      github: "https://github.com/edbertocampo/Plant-Info",
      demo: "https://plant-catalog.vercel.app/",
    },
    {
      title: "PHP Web Development",
      description:
        "Anime Records app for organizing and managing favorite anime, with user authentication and searchable database.",
      technologies: ["PHP", "HTML", "CSS", "SQL"],
      github: "https://github.com/edbertocampo/animerecordsphp",
    },
    {
      title: "Python Face Recognition System",
      description:
        "Face Recognition System using Tkinter for attendance tracking, with features for adding, updating, and deleting employee data.",
      technologies: ["Python", "Tkinter", "Sqlite3"],
      github: "https://github.com/edbertocampo/Face-Recognition-Attendance_Python",
    },
  ],
  footer: {
    text: "© 2025 Edbert Ocampo. All rights reserved.",
    links: [
      { label: "GitHub", href: "https://github.com/edbertocampo" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/edbert-ocampo" },
      { label: "Email", href: "mailto:edbert.ocampo123@gmail.com" },
    ],
  },
};
