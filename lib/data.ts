import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'saadbains123786@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Saad, I am reaching out to you because...',

    oldPortfolio: 'https://saad-bains-portfolio.netlify.app/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/bainnss' },
    { name: 'linkedin', url: 'https://github.com/bainnss' },
    { name: 'facebook', url: 'https://www.facebook.com/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        // {
        //     name: 'Frammer Motion',
        //     icon: '/logo/framer-motion.png',
        // },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'Nest.js',
        //     icon: '/logo/nest.svg',
        // },
        // {
        //     name: 'Express.js',
        //     icon: '/logo/express.png',
        // },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Webpack',
            icon: '/logo/webpack.png',
        },
        // {
        //     name: 'Docker',
        //     icon: '/logo/docker.svg',
        // },
        // {
        //     name: 'AWS',
        //     icon: '/logo/aws.png',
        // },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'DRX Salon',
        slug: 'drx-salon',
        liveUrl: 'https://drx-salon.netlify.app/',
        year: 2023,
        description: `
      A modern and responsive salon website crafted to elevate the online presence of a beauty brand <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>💈 Grooming Services Showcase: Clean and interactive layout highlighting professional haircut and grooming offerings</li>
        <li>💵 Pricing Section: Transparent, well-structured pricing display to help users explore packages easily</li>
        <li>🗣️ Testimonials: Real customer feedback carousel to build credibility and engagement</li>
        <li>📱 Fully Responsive: Fluid layout optimized for mobile, tablet, and desktop screens</li>
        <li>⚡ Lightweight & Fast: Built without frameworks for faster load times and better performance</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Created responsive service cards and pricing tables using flexbox and grid</li>
        <li>Implemented interactive testimonial carousel using vanilla JavaScript</li>
        <li>Wrote modular and reusable CSS classes for design consistency and scalability</li>
        <li>Optimized images and assets for fast loading across all devices</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul> 
        <li>🎨 Frontend: Hand-coded UI using semantic HTML, modern CSS (Flexbox & Grid), and vanilla JavaScript</li> 
        <li>📱 Responsiveness: Built fully responsive layouts manually without any frameworks</li> 
        <li>🧠 Interactivity: Added dynamic behavior (like sliders and testimonials) using custom JavaScript</li>
        <li>🖼️ Media Optimization: Compressed images and used lazy loading for faster load times</li>
        <li>🚀 Deployment: Hosted on GitHub Pages with custom domain integration</li> <li>🧩 Third-Party Integration: Used a lightweight JavaScript slider library for testimonials section</li> 
      </ul>
      `,
        techStack: ['HTML', 'CSS', 'Javascript', 'Netfliy'],
        thumbnail: '/projects/thumbnail/mti.png',
        longThumbnail: '/projects/long/drx-salon',
        images: [
            '/projects/images/drx-salon-2.png',
            '/projects/long/drx-salon-1.jpeg',
        ],
    },
    {
        title: 'Perfect Enterprises',
        slug: 'perfect-ent',
        liveUrl: 'https://drx-salon.netlify.app/',
        year: 2023,
        description: `
      A modern and responsive salon website crafted to elevate the online presence of a beauty brand <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>💈 Grooming Services Showcase: Clean and interactive layout highlighting professional haircut and grooming offerings</li>
        <li>💵 Pricing Section: Transparent, well-structured pricing display to help users explore packages easily</li>
        <li>🗣️ Testimonials: Real customer feedback carousel to build credibility and engagement</li>
        <li>📱 Fully Responsive: Fluid layout optimized for mobile, tablet, and desktop screens</li>
        <li>⚡ Lightweight & Fast: Built without frameworks for faster load times and better performance</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Created responsive service cards and pricing tables using flexbox and grid</li>
        <li>Implemented interactive testimonial carousel using vanilla JavaScript</li>
        <li>Wrote modular and reusable CSS classes for design consistency and scalability</li>
        <li>Optimized images and assets for fast loading across all devices</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul> 
        <li>🎨 Frontend: Hand-coded UI using semantic HTML, modern CSS (Flexbox & Grid), and vanilla JavaScript</li> 
        <li>📱 Responsiveness: Built fully responsive layouts manually without any frameworks</li> 
        <li>🧠 Interactivity: Added dynamic behavior (like sliders and testimonials) using custom JavaScript</li>
        <li>🖼️ Media Optimization: Compressed images and used lazy loading for faster load times</li>
        <li>🚀 Deployment: Hosted on GitHub Pages with custom domain integration</li> <li>🧩 Third-Party Integration: Used a lightweight JavaScript slider library for testimonials section</li> 
      </ul>
      `,
        techStack: ['HTML', 'CSS', 'Javascript', 'Netfliy'],
        thumbnail: '/projects/thumbnail/perfect-ent.png',
        longThumbnail: '/projects/long/perfect-ent.png',
        images: [
            '/projects/images/drx-salon-2.png',
            '/projects/long/drx-salon-1.jpeg',
        ],
    },
    // {
    //     title: 'Epikcart',
    //     slug: 'epikcart',
    //     techStack: [
    //         'React',
    //         'Redux',
    //         'React i18n',
    //         'Tailwind CSS',
    //         'Framer Motion',
    //         'debouncing',
    //         'Api Integration',
    //     ],
    //     thumbnail: '/projects/thumbnail/epikcart.jpg',
    //     longThumbnail: '/projects/long/epikcart.jpg',
    //     images: [
    //         '/projects/images/epikcart-1.png',
    //         '/projects/images/epikcart-2.png',
    //         '/projects/images/epikcart-3.png',
    //         '/projects/images/epikcart-4.png',
    //         '/projects/images/epikcart-5.png',
    //     ],
    //     liveUrl: 'https://demo.epikcart.siphertech.com/',
    //     year: 2023,
    //     description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
    //     role: `As the frontend developer in a team of five, I: <br/>
    //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
    //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
    //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
    //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    // },
    // {
    //     title: 'Resume Roaster',
    //     slug: 'resume-roaster',
    //     techStack: [
    //         'GPT-4',
    //         'Next.js',
    //         'Postgressql',
    //         'Prisma',
    //         'Tailwind CSS',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/bainnss',
    //     // sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>
    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Associate Software Engineer (Frontend)',
        company: 'Gray Matrix Solutions',
        duration: 'Dec 2023 - Present',
    },
    {
        title: 'Frontend Developer - Intern',
        company: 'MakByte Solutions',
        duration: 'April 2023 - Dec 2023',
    },
    // {
    //     title: 'FRONTEND ENGINEER',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
