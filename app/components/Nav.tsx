'use client';

import * as React from "react";
import { cn } from '@/lib/utils';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface Routes {
    title: string,
    href: string,
    description: string,
};

const createRoutes: Routes[] = [
    {
        title: 'Lesson',
        href: '/create/lesson',
        description: 'Create a lesson.'
    },
    {
        title: 'Learning Path',
        href: '/create/category-hierarchy',
        description: 'Create learning-path, a curriculum.'
    }
];

const learnRoutes: Routes[] = [
    {
        title: 'JS',
        href: '/learn/quiz/mcqs',
        description: 'Test yourself with MCQs.'
    }
];

export default function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Create</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                            {createRoutes.map((route) => (
                                <ListItem
                                    key={route.title}
                                    title={route.title}
                                    href={route.href}
                                >{route.description}</ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                            {learnRoutes.map((route) => (
                                <ListItem
                                    key={route.title}
                                    title={route.title}
                                    href={route.href}
                                >{route.description}</ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
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
                        "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-wash-850 focus:bg-wash-850",
                        className
                    )}
                    {...props}
                >
                    <div className=" text-base font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"