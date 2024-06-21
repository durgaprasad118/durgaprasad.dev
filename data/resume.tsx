import React from 'react';
import { Icons, SkillIcons } from '../components/icons';
export const DATA = {
    name: 'Durga Prasad',
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
        SkillIcons.typescript,
        SkillIcons.javascript,
        SkillIcons.next,
        SkillIcons.html,
        SkillIcons.css,
        SkillIcons.tailwind,
        SkillIcons.git,
        SkillIcons.mongodb,
        SkillIcons.postgresql,
        SkillIcons.graphql,
        SkillIcons.prisma,
        SkillIcons.nodejs,
        SkillIcons.docker
    ],
    contact: {
        email: 'durgaprasadachana1108@gmail.com',
        tel: '+917661044831',
        social: {
            GitHub: {
                url: 'https://github.com/durgaprasad118',
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
            badges: [],
            location: 'Remote',
            title: 'Frontend Devloper Intern',
            logoUrl: '/celebal.jpeg',
            start: 'May 2023',
            end: 'Aug 2023',
            description:
                'Developed key features and improved user interfaces for a dynamic web application using React JS. Gained hands-on experience in state management using Redux Toolkit and successfully integrated third-party APIs.'
        }
    ],
    education: [
        {
            school: 'Indian Institute of Engineering Science and Technology, Shibpur',
            href: 'https://www.iiests.ac.in/',
            degree: 'Mechanical Engineering',
            logoUrl: '/iiest.png',
            start: '2020',
            end: '2024'
        }
    ],
    projects: [
        {
            title: 'Ink Well',
            href: 'https://blogging-app-mauve.vercel.app/',
            dates: 'March 2024 - April 2024',
            active: true,
            description:
                'Engineered a full-stack, performance-optimized **blogging platform** with secure authentication, blog management, WYSIWYG editor, and responsive design using modern technologies, deployed serverlessly.',
            technologies: [
                'React',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Hono',
                'recoil'
            ],
            links: [
                {
                    type: 'Live Preview',
                    href: 'https://blogging-app-mauve.vercel.app/',
                    icon: <Icons.globe className="size-1" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/durgaprasad118/Blogging_App',
                    icon: <Icons.source className="size-1" />
                }
            ],
            image: '/inkwell.png'
        },
        {
            title: 'Pro Manage',
            href: '',
            dates: 'Jan 2024 - March 2024',
            active: true,
            description:
                'Full-stack kanban task management app with secure authentication, advanced features, subtasks, due dates, real-time tracking, and optimized performance using modern tech stack.',
            technologies: [
                'React',
                'CSS',
                'MongoDB',
                'Node.js',
                'express',
                'RTK Query'
            ],
            links: [
                {
                    type: 'Live Preview',
                    href: 'https://pro-manage-kohl.vercel.app/',
                    icon: <Icons.globe className="size-2" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/durgaprasad118/Pro-Manage',
                    icon: <Icons.source className="size-3" />
                }
            ],
            image: '/promanage.png'
        }
    ]
} as const;
