'use client';
import { AvatarImage } from '@radix-ui/react-avatar';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import GitHubCalendar from 'react-github-calendar';
import Markdown from 'react-markdown';
import Callout from '../components/Callout';
import { SkillIcons } from '../components/icons';
import BlurFade from '../components/magicui/blur-fade';
import BlurFadeText from '../components/magicui/blur-fade-text';
import { ProjectCard } from '../components/project-card';
import { ResumeCard } from '../components/resume-card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import LinkText from '../components/ui/LinkText';
import { DATA } from '../data/resume';
import playSound from '../lib/PlaySound';
const BLUR_FADE_DELAY = 0.04;
export default function Page() {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-8 md:space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-3">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-4">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none"
                                yOffset={8}
                                text={`Hi, I'm ${DATA.name} 👋`}
                            />
                            <BlurFadeText
                                className="max-w-[600px] text-slate-500   dark:text-slate-300 text-sm md:text-[16px]"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-24 border">
                                <AvatarImage
                                    alt={DATA.name}
                                    src={DATA.avatarUrl}
                                    loading="lazy"
                                />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>

            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-slate-500 dark:text-slate-300 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                </BlurFade>
            </section>
            <section id="contact">
                <div className="   w-full ">
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="text-center">
                            <div
                                className="md:px-4 py-3 w-full mb-1 text-xs md:text-[14px] text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                role="alert"
                            >
                                I am currently open for full-time developer
                                positions.
                                <div className="mt-1 flex flex-row items-center justify-center gap-4">
                                    <LinkText
                                        href={'https://cal.com/durgaprasad118'}
                                        className="text-slate-700 font-semibold text-sm "
                                        target="_blank"
                                        onClick={() =>
                                            playSound('theme-audio.wav')
                                        }
                                    >
                                        {'Schedule a meet/cal.com'}
                                    </LinkText>
                                    <LinkText
                                        href={
                                            'https://drive.google.com/file/d/1RcPL6Yk2GwMB7X9D_2tKEt1YBhE-XqQP/'
                                        }
                                        className="text-slate-700 font-semibold text-sm "
                                        target="_blank"
                                        onClick={() =>
                                            playSound('theme-audio.wav')
                                        }
                                    >
                                        {'Resume'}
                                    </LinkText>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="github">
                <div className="space-y-1 w-full ">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <GitHubCalendar
                            colorScheme={theme == 'dark' ? 'dark' : 'light'}
                            username="durgaprasad118"
                            year={2024}
                            hideTotalCount={true}
                            hideColorLegend={true}
                        />
                    </BlurFade>
                </div>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                        <BlurFade
                            key={work.company}
                            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                        >
                            <ResumeCard
                                key={work.company}
                                logoUrl={work.logoUrl}
                                altText={work.company}
                                title={work.company}
                                subtitle={work.title}
                                href={work.href}
                                badges={work.badges}
                                period={`${work.start} - ${work.end ?? 'Present'}`}
                                description={work.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-2">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>

                    <div className="flex flex-wrap gap-2 pl-1">
                        {DATA.skills.map((SkillIcon, index) => (
                            <BlurFade
                                key={index}
                                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                            >
                                <div className="transform  transition duration-200 ease-in-out cursor-pointer hover:scale-x-110 hover:animate-pulse">
                                    <SkillIcon />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-4 w-full py-2">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Projects</h2>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <div className="flex items-center justify-center">
                            <LinkText
                                href={'https://github.com/durgaprasad118'}
                                className="text-slate-600 dark:text-slate-300  font-semibold font-md "
                                target="_blank"
                                onClick={() => playSound('theme-audio.wav')}
                            >
                                {'For more projects'}
                            </LinkText>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade
                            key={education.school}
                            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                            <ResumeCard
                                key={education.school}
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                period={`${education.start} - ${education.end}`}
                                description={education.degree}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="w-full flex justify-center items-center md:p-2 md:mt-6 py-4">
                    {<SkillIcons.credit />}
                    <div className="mx-1 text-slate-500   dark:text-slate-300  ">
                        {new Date().getFullYear()}
                    </div>

                    <div
                        onClick={() => {
                            playSound('/theme-audio.wav');
                            router.push('/');
                        }}
                        className="mx-1 text-slate-500 dark:text-slate-300 dark:hover:text-blue-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                    >
                        {'durgaprasad.dev'}
                    </div>
                </div>
            </BlurFade>
        </main>
    );
}
