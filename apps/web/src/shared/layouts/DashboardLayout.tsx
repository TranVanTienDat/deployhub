import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/Avatar'
import {
    DashboardHeader,
    SidebarNavigationMenu,
    SidebarNavigationMenuItem,
} from '@workspace/ui/components/Sidebar.helpers'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarInset,
    SidebarProvider,
} from '@workspace/ui/components/Sidebar'
import {
    ActivityIcon,
    BarChart3Icon,
    BoxIcon,
    HelpCircleIcon,
    LayoutDashboardIcon,
    RocketIcon,
    SettingsIcon,
    TerminalIcon,
} from 'lucide-react'
import { Link, LinkComponentProps, useRouterState } from '@tanstack/react-router'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

const MAIN_ITEMS: Array<SidebarNavigationMenuItem> = [
    {
        title: 'Control Center',
        url: '/dashboard',
        icon: LayoutDashboardIcon,
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: BoxIcon,
    },
    {
        title: 'Pipelines',
        url: '/pipelines',
        icon: RocketIcon,
        items: [
            {
                title: 'Active Runs',
                url: '/pipelines/runs',
            },
            {
                title: 'History',
                url: '/pipelines/history',
            },
        ],
    },
    {
        title: 'Resource & Logs',
        url: '/logs',
        icon: TerminalIcon,
    },
]

const MONITORING_ITEMS: Array<SidebarNavigationMenuItem> = [
    {
        title: 'Analytics',
        url: '/analytics',
        icon: BarChart3Icon,
    },
    {
        title: 'System Health',
        url: '/health',
        icon: ActivityIcon,
    },
]

const SYSTEM_ITEMS: Array<SidebarNavigationMenuItem> = [
    {
        title: 'Global Settings',
        url: '/settings',
        icon: SettingsIcon,
    },
    {
        title: 'Documentation',
        url: '/docs',
        icon: HelpCircleIcon,
    },
]

function CustomLink({ href, ...props }: LinkComponentProps & { href: any }) {
    return <Link to={href} {...props} />
}

interface DashboardLayoutProps {
    children: React.ReactNode
    defaultOpen?: boolean
}

export function DashboardLayout({ children, defaultOpen = true }: DashboardLayoutProps) {
    const currentPathname = useRouterState().location.pathname

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <Sidebar collapsible="icon" className="border-r border-border/50">
                <SidebarHeader className="flex flex-row items-center gap-3 px-4 py-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <BoxIcon size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold tracking-tight group-data-[collapsible=icon]:hidden">
                        DeployHub
                    </span>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarNavigationMenu
                        linkComponent={CustomLink}
                        items={MAIN_ITEMS}
                        currentPathname={currentPathname}
                    />
                    <SidebarNavigationMenu
                        title="Monitoring"
                        linkComponent={CustomLink}
                        items={MONITORING_ITEMS}
                        currentPathname={currentPathname}
                        className="mt-6"
                    />
                    <SidebarNavigationMenu
                        title="System"
                        linkComponent={CustomLink}
                        items={SYSTEM_ITEMS}
                        className="mt-auto"
                        currentPathname={currentPathname}
                    />
                </SidebarContent>

                <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2">
                    <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-2 transition-colors hover:bg-sidebar-accent group-data-[collapsible=icon]:justify-center">
                        <Avatar className="h-8 w-8 rounded-md border border-sidebar-border">
                            <AvatarImage src="https://github.com/ttcenter.png" />
                            <AvatarFallback className="rounded-md bg-sidebar-accent text-[10px]">LD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
                            <span className="truncate text-xs font-medium">Lão Đại</span>
                            <span className="truncate text-[10px] text-muted-foreground">Premium Plan</span>
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>

            <SidebarInset className="bg-background/95">
                <DashboardHeader className="glass sticky top-0 z-30 border-b border-border/50 px-6">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                                System Status
                            </span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-semibold">All systems operational</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeSwitcher />
                            <Avatar className="h-8 w-8 border border-border/50 shadow-sm">
                                <AvatarImage src="https://github.com/ttcenter.png" />
                                <AvatarFallback>LD</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </DashboardHeader>
                <main className="p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}
