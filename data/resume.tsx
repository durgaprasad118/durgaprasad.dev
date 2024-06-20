import React from 'react';
import { Icons } from '../components/icons';
export const DATA = {
    name: 'Achana Naga Durga Prasad',
    initials: 'Dp',
    url: 'https://dillion.io',
    location: 'Hyderabad',
    locationLink: 'https://www.google.com/maps/place/sanfrancisco',
    description:
        'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
    summary:
        'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
    avatarUrl: '/me.png',
    skills: [
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'Postgres',
        'MongoDB',
        'SQL',
        'Docker',
        'Java'
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
            href: 'https://atomic.finance',
            badges: ['Gold'],
            location: 'Remote',
            title: 'Frontend Devloper Intern',
            logoUrl: '/atomic.png',
            start: 'May 2023',
            end: 'August 2023',
            description:
                'Developed key features and improved user interfaces for a dynamic web application using React JS. Gained hands-on experience in state management using Redux Toolkit and successfully integrated third-party APIs.'
        }
    ],
    education: [
        {
            school: 'Vani Vidyalayam',
            href: 'https://buildspace.so',
            degree: 's3, s4, sf1, s5',
            logoUrl: '/buildspace.jpg',
            start: '2023',
            end: '2024'
        },
        {
            school: 'Indian Institute of Engineering Science and Technology, Shibpur',
            href: 'https://uwaterloo.ca',
            degree: 'Mechanical Engineering',
            logoUrl: '/waterloo.png',
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
            image: '',
            video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
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
