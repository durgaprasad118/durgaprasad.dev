import React from 'react';
import { Icons } from '../components/icons';
export const DATA = {
    name: 'Achana Naga Durga Prasad',
    initials: 'Dp',
    url: 'https://dillion.io',
    location: 'Hyderabad',
    locationLink: 'https://www.google.com/maps/place/sanfrancisco',
    description:
        'Crafting seamless digital experiences as a full-stack wizard, blending ReactJS, Node.js, and TypeScript into innovative web solutions.',
    summary:
        'Hey! I am an engineer , dedicated to building and designing scalable websites and applications that prioritize exceptional user experiences and aesthetic design. My hobbies include playing badminton and travelling ',
    avatarUrl: '/dp1.jpg',
    skills: [
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'express',
        'Postgres',
        'MongoDB',
        'Docker',
        'TailwindCSS',
        'Java',
        'redux',
        'recoil'
    ],
    contact: {
        email: 'durgaprasadachana1108@gmail.com',
        tel: '+917661044831',
        social: {
            GitHub: {
                url: 'https://github.com/durgaprsad118',
                icon: Icons.github
            },
            LinkedIn: {
                url: 'https://www.linkedin.com/in/dp1108/',
                icon: Icons.linkedin
            },
            X: {
                url: 'https://x.com/durgaprasaddev',
                icon: Icons.x
            }
        }
    },

    work: [
        {
            company: 'Celebal Technologies',
            href: 'https://celebaltech.com/',
            badges: ['Gold'],
            location: 'Remote',
            title: 'Frontend Devloper Intern',
            logoUrl: '/celebal.jpeg',
            start: 'May 2023',
            end: 'August 2023',
            description:
                'Developed key features and improved user interfaces for a dynamic web application using React JS. Gained hands-on experience in state management using Redux Toolkit and successfully integrated third-party APIs.'
        }
    ],
    education: [
        {
            school: 'Indian Institute of Engineering Science and Technology, Shibpur',
            href: 'https://uwaterloo.ca',
            degree: 'Mechanical Engineering',
            logoUrl: '/iiest.png',
            start: '2016',
            end: '2021'
        }
    ],
    projects: [
        {
            title: 'Chat Collect',
            href: 'https://chatcollect.com',
            dates: 'Jan 2024 - Feb 2024',
            active: true,
            description:
                'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Stripe',
                'Shadcn UI',
                'Magic UI'
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://chatcollect.com',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/magicuidesign/magicui',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '/dp1.jpg',
            video: 'https://drive.google.com/file/d/1EMMF6A8iLHkdPPSjkmMtbemeU_-3q5Ow/'
        },
        {
            title: 'Magic UI',
            href: 'https://magicui.design',
            dates: 'June 2023 - Present',
            active: true,
            description:
                'Designed, developed and sold animated UI components for developers.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Stripe',
                'Shadcn UI',
                'Magic UI'
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://magicui.design',
                    icon: <Icons.globe className="size-2" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/magicuidesign/magicui',
                    icon: <Icons.github className="size-2" />
                }
            ],
            image: '',
            video: 'https://cdn.magicui.design/bento-grid.mp4'
        },
        {
            title: 'llm.report',
            href: 'https://llm.report',
            dates: 'April 2023 - September 2023',
            active: true,
            description:
                'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Shadcn UI',
                'Magic UI',
                'Stripe',
                'Cloudflare Workers'
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://llm.report',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/dillionverma/llm.report',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://cdn.llm.report/openai-demo.mp4'
        }
    ]
} as const;
