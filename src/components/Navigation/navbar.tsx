"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/ui/"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { image: string, title: string; href: string; description: string }[] = [
    {
        image: '/images/techIcon.jpg',
        title: "MGM Tech Solutions",
        href: "#",
        description:
            "IT department deals with building and maintaining of softwares.",
    },
    {
        image: '/images/partner.jpg',
        title: "Partnership",
        href: "#",
        description:
            "We as mgm partners we offer and accept partnership with our customers.",
    },
    {
        image: '/images/community.jpg',
        title: "Community",
        href: "/community",
        description:
            "Build communities all over South Africa.",
    },
    {
        image: '/images/companies.jpg',
        title: "Companies",
        href: "#",
        description: "Our current partners are mg mobile, nma logistics and many more.",
    },
    // {
    //     image: '/images/logo.png',
    //     title: "Tabs",
    //     href: "/docs/primitives/tabs",
    //     description:
    //         "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    // },
    // {
    //     image: '/images/logo.png',
    //     title: "Tooltip",
    //     href: "/docs/primitives/tooltip",
    //     description:
    //         "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    // },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <Image
                                            alt="mgm"
                                            src="/images/logo.png"
                                            width={210}
                                            height={220}
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            MGM Partners
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            MGM Partners is a software and services company that helps businesses
                                            all over to succeed.And help them
                                            interact better with clients and customers.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="#About" title="Introduction">
                                As company mgm we bring tech and companies together.
                            </ListItem>
                            <ListItem href="#" title="Company Goals">
                                Provide a fair partnership and support with our customers.
                            </ListItem>
                            <ListItem href="" title="Partners">
                                Let partner as mgm and move foward.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Team</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    href={component.href}
                                >
                                    <div className="flex flex-row items-center mt-5">
                                        <p className="text-sm font-medium leading-none text-black">{component.title}</p>
                                        <Image
                                            alt="mgm"
                                            src={component.image}
                                            width={40}
                                            height={20}
                                            className="rounded-lg" />
                                    </div>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/education" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Education
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
