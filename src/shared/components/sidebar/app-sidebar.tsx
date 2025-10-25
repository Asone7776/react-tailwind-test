'use client';

import * as React from 'react';
import { ROUTES } from '@utils/constants.ts';
import {
  HomeIcon,
  Building2Icon,
  NetworkIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  Wrench,
  Car,
} from 'lucide-react';

import { NavMain } from '@shared/components/navigation/main';
import { NavUser } from '@shared/components/navigation/user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from '@shared/components/ui/sidebar';

import { Link } from 'react-router';

// Навигационные секции
const navigationGroups = [
  {
    label: 'Управление',
    items: [
      { title: 'Главная', url: `/${ROUTES.MAIN}/`, icon: HomeIcon },
      {
        title: 'Компании',
        url: `/${ROUTES.MAIN}/${ROUTES.COMPANIES}`,
        icon: Building2Icon,
      },
      {
        title: 'Филиалы',
        url: `/${ROUTES.MAIN}/${ROUTES.BRANCHES}`,
        icon: NetworkIcon,
      },
      {
        title: 'Роли',
        url: `/${ROUTES.MAIN}/${ROUTES.ROLES}`,
        icon: ShieldCheckIcon,
      },
      {
        title: 'Заказы',
        url: `/${ROUTES.MAIN}/${ROUTES.ORDERS}`,
        icon: ShoppingCartIcon,
      },
    ],
  },
  {
    label: 'Администрирование',
    items: [
      {
        title: 'Типы автомобилей',
        url: `/${ROUTES.MAIN}/${ROUTES.CAR_TYPES}`,
        icon: Car,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="pl-0">
              <Link
                to="/admin/"
                className="flex items-center font-medium"
                viewTransition
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Wrench className="size-6" />
                </div>
                Servi
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <NavMain items={group.items} />
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
