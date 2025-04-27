"use client"

import {type LucideIcon} from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@shared/components/ui/sidebar"
import {NavLink} from "react-router";

import {useMatcher} from "@shared/hooks/useMatcher.ts";

export function NavMain({
                            items,
                        }: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
    }[]
}) {
    const {current} = useMatcher();

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <NavLink to={item.url}>
                                <SidebarMenuButton className={'cursor-pointer'} tooltip={item.title}
                                                   isActive={item.url === current?.pathname}>
                                    {item.icon &&
                                        <item.icon/>
                                    }
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </NavLink>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
