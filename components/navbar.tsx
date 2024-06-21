'use client';
import { HomeIcon, NotebookIcon } from 'lucide-react';
import { DATA } from '../data/resume';
import { cn } from '../lib/util';
import { Dock, DockIcon } from './magicui/dock';
import { ModeToggle } from './mode-toggle';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Icons } from './icons';
import playSound from '../lib/PlaySound';
export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/"
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon'
                                    }),
                                    'size-12'
                                )}
                                onClick={() => playSound('/theme-audio.wav')}
                            >
                                <HomeIcon className="size-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Home</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="mailto:durgaprasadachana1108@gmail.com"
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon'
                                    }),
                                    'size-12'
                                )}
                                onClick={() => playSound('/theme-audio.wav')}
                            >
                                <Icons.mail className="size-8" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>gmail</TooltipContent>
                    </Tooltip>
                </DockIcon>
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="https://hashnode.com/@durgaprasad1108"
                                target="_blank"
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon'
                                    }),
                                    'size-12'
                                )}
                                onClick={() => playSound('/theme-audio.wav')}
                            >
                                <NotebookIcon className="size-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Blog</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.url}
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            size: 'icon'
                                        }),
                                        'size-12'
                                    )}
                                    onClick={() =>
                                        playSound('/theme-audio.wav')
                                    }
                                    target="_blank"
                                >
                                    <social.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    );
}
