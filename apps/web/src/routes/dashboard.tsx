import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_PROJECTS, MOCK_ALERTS, MOCK_DEPLOYMENTS } from '@/shared/lib/mock-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Badge } from '@workspace/ui/components/Badge'
import { Button } from '@workspace/ui/components/Button'
import {
    RocketIcon,
    ActivityIcon,
    AlertTriangleIcon,
    BoxIcon,
    ExternalLinkIcon,
    PlusIcon,
    SearchIcon,
    FilterIcon,
} from 'lucide-react'

export const Route = createFileRoute('/dashboard')({
    component: DashboardComponent,
})

function DashboardComponent() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 animate-in fade-in duration-500">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Control Center</h1>
                        <p className="text-muted-foreground mt-1">
                            Manage and monitor your infrastructure across all environments.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                            <FilterIcon className="mr-2 h-4 w-4" /> Filter
                        </Button>
                        <Link to="/deployments/new">
                            <Button
                                size="sm"
                                className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                            >
                                <PlusIcon className="mr-2 h-4 w-4" /> New Deploy
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        title="Total Projects"
                        value={MOCK_PROJECTS.length.toString()}
                        icon={<BoxIcon className="text-primary" size={20} />}
                        trend="+2 this month"
                    />
                    <Link to="/pipelines/runs" className="block">
                        <StatCard
                            title="Active Runs"
                            value={MOCK_DEPLOYMENTS.filter(d => d.status === 'running').length.toString()}
                            icon={<RocketIcon className="text-blue-400" size={20} />}
                            trend="3 queued"
                        />
                    </Link>
                    <StatCard
                        title="System Health"
                        value="99.9%"
                        icon={<ActivityIcon className="text-emerald-400" size={20} />}
                        trend="All nodes UP"
                    />
                    <StatCard
                        title="Critical Alerts"
                        value={MOCK_ALERTS.filter(a => a.level === 'critical').length.toString()}
                        icon={<AlertTriangleIcon className="text-rose-400" size={20} />}
                        trend="Requires attention"
                    />
                </div>

                {/* Search & Main Content */}
                <div className="flex flex-col gap-6">
                    <div className="relative group">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search projects, services or deployments..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Projects List */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold tracking-tight">Active Projects</h2>
                                <Link to="/projects">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-muted-foreground hover:text-foreground"
                                    >
                                        View All
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {MOCK_PROJECTS.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>

                        {/* Sidebar Content: Recent Activity */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
                                <Link to="/pipelines/history">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-muted-foreground hover:text-foreground"
                                    >
                                        View All
                                    </Button>
                                </Link>
                            </div>
                            <div className="glass rounded-xl p-1 precise-edge">
                                <div className="flex flex-col divide-y divide-white/5">
                                    {MOCK_DEPLOYMENTS.map(deploy => (
                                        <ActivityItem key={deploy.id} deploy={deploy} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

function StatCard({
    title,
    value,
    icon,
    trend,
}: {
    title: string
    value: string
    icon: React.ReactNode
    trend: string
}) {
    return (
        <Card className="bg-white/2 backdrop-blur-sm border-white/5 precise-edge hover:bg-white/5 transition-colors group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">{icon}</div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">{trend}</p>
            </CardContent>
        </Card>
    )
}

function ProjectCard({ project }: { project: (typeof MOCK_PROJECTS)[0] }) {
    const statusColors = {
        healthy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        deploying: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        degraded: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        failed: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    }

    return (
        <Card className="bg-white/2 border-white/5 precise-edge hover:border-primary/30 transition-all group overflow-hidden">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <Badge
                        variant="outline"
                        className={`text-[10px] uppercase tracking-wider font-bold ${statusColors[project.status]}`}
                    >
                        {project.status}
                    </Badge>
                    <div className="h-2 w-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                </div>
                <CardTitle className="text-base mt-2 group-hover:text-primary transition-colors">
                    {project.name}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-1">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>{project.environment}</span>
                    <span>Deploy {new Date(project.lastDeploy).toLocaleDateString()}</span>
                </div>
            </CardContent>
            <div className="bg-white/2 px-4 py-2 flex items-center justify-between border-t border-white/5">
                <span className="text-[10px] font-mono opacity-50 uppercase">{project.id}</span>
                <ExternalLinkIcon size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </Card>
    )
}

function ActivityItem({ deploy }: { deploy: (typeof MOCK_DEPLOYMENTS)[0] }) {
    const statusDots = {
        success: 'bg-emerald-500',
        running: 'bg-blue-500 animate-pulse',
        failed: 'bg-rose-500',
        canceled: 'bg-zinc-500',
    }

    return (
        <Link to="/deployments/$id" params={{ id: deploy.id }}>
            <div className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${statusDots[deploy.status]}`} />
                <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold truncate">{deploy.projectId}</span>
                        <span className="text-[10px] text-muted-foreground">#{deploy.commit}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground truncate">
                        {deploy.author} deployed to {deploy.branch}
                    </span>
                </div>
                <span className="ml-auto text-[10px] text-muted-foreground whitespace-nowrap">{deploy.duration}</span>
            </div>
        </Link>
    )
}
