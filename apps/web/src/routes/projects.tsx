import { useState, useMemo } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_PROJECTS, Project, ProjectStatus } from '@/shared/lib/mock-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Badge } from '@workspace/ui/components/Badge'
import { Button } from '@workspace/ui/components/Button'
import {
    BoxIcon,
    ExternalLinkIcon,
    PlusIcon,
    SearchIcon,
    LayoutGridIcon,
    ListIcon,
    ChevronRightIcon,
    ActivityIcon,
    FilterIcon,
} from 'lucide-react'
import { FilterDropdown, FilterOption } from '@/shared/components/FilterDropdown'
import { cn } from '@workspace/ui/lib/utils'
import { Tooltip, TooltipTrigger } from '@workspace/ui/components/Tooltip'
import { z } from 'zod'

const projectsSearchSchema = z.object({
    view: z.enum(['grid', 'list']).optional().default('grid'),
})

export const Route = createFileRoute('/projects')({
    validateSearch: search => projectsSearchSchema.parse(search),
    component: ProjectsComponent,
})

function ProjectsComponent() {
    const { view: viewMode } = Route.useSearch()
    const navigate = useNavigate({ from: Route.fullPath })

    const [searchQuery, setSearchQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState<string[]>([])
    const [envFilter, setEnvFilter] = useState<string[]>([])

    const setViewMode = (mode: 'grid' | 'list') => {
        navigate({
            search: prev => ({ ...prev, view: mode }),
        })
    }

    const statusOptions: FilterOption[] = [
        { id: 'healthy', name: 'Healthy' },
        { id: 'deploying', name: 'Deploying' },
        { id: 'degraded', name: 'Degraded' },
        { id: 'failed', name: 'Failed' },
    ]

    const envOptions: FilterOption[] = [
        { id: 'production', name: 'Production' },
        { id: 'staging', name: 'Staging' },
        { id: 'development', name: 'Development' },
    ]

    const filteredProjects = useMemo(() => {
        return MOCK_PROJECTS.filter(project => {
            const matchesSearch =
                project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesStatus = statusFilter.length === 0 || statusFilter.includes(project.status)
            const matchesEnv = envFilter.length === 0 || envFilter.includes(project.environment.toLowerCase())

            return matchesSearch && matchesStatus && matchesEnv
        })
    }, [searchQuery, statusFilter, envFilter])

    const statusColors = {
        healthy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        deploying: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        degraded: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        failed: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Active Projects</h1>
                        <p className="text-muted-foreground mt-1">
                            Directory of all services and infrastructures under management.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative flex bg-white/5 p-1 rounded-xl border border-white/10 glass shadow-inner">
                            {/* Sliding Background */}
                            <div
                                className={cn(
                                    'absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary/20 border border-primary/30 rounded-lg transition-all duration-300 ease-out z-0',
                                    viewMode === 'grid' ? 'left-1' : 'left-[calc(50%+1px)]',
                                )}
                            />
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        'relative h-8 w-10 transition-colors z-10 hover:bg-transparent',
                                        viewMode === 'grid' ? 'text-primary' : 'text-muted-foreground',
                                    )}
                                    onPress={() => setViewMode('grid')}
                                >
                                    <LayoutGridIcon size={16} />
                                </Button>
                                <Tooltip>Grid View</Tooltip>
                            </TooltipTrigger>
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        'relative h-8 w-10 transition-colors z-10 hover:bg-transparent',
                                        viewMode === 'list' ? 'text-primary' : 'text-muted-foreground',
                                    )}
                                    onPress={() => setViewMode('list')}
                                >
                                    <ListIcon size={16} />
                                </Button>
                                <Tooltip>List View</Tooltip>
                            </TooltipTrigger>
                        </div>
                        <Link to="/deployments/new">
                            <Button
                                size="sm"
                                className="bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)] hover:scale-[1.05] active:scale-95 transition-all font-bold px-4 h-10"
                            >
                                <PlusIcon className="mr-2 h-4 w-4" /> New Project
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/2 border border-white/5 p-4 rounded-xl glass shadow-2xl shadow-black/20">
                    <div className="relative w-full md:w-96 group">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <FilterDropdown
                            placeholder="Filter"
                            label="Environments"
                            options={envOptions}
                            selectedValues={envFilter}
                            onChange={setEnvFilter}
                            icon={FilterIcon}
                            className="bg-white/5 border-white/10 hover:bg-white/10 transition-all flex-1 md:flex-none"
                        />

                        <FilterDropdown
                            placeholder="Status"
                            label="Project Status"
                            options={statusOptions}
                            selectedValues={statusFilter}
                            onChange={setStatusFilter}
                            icon={ActivityIcon}
                            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all flex-1 md:flex-none min-w-[140px] shadow-sm"
                        />
                    </div>
                </div>

                {/* Content */}
                {filteredProjects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/2 rounded-2xl border border-dashed border-white/10">
                        <div className="p-4 bg-white/5 rounded-full mb-4">
                            <BoxIcon className="text-muted-foreground opacity-20" size={40} />
                        </div>
                        <h3 className="text-lg font-medium">No projects found</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Try adjusting your filters or search query.
                        </p>
                        <Button
                            variant="link"
                            onClick={() => {
                                setSearchQuery('')
                                setStatusFilter([])
                                setEnvFilter([])
                            }}
                            className="mt-2 text-primary"
                        >
                            Clear all filters
                        </Button>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-300">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} statusColors={statusColors} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                        <div className="flex items-center gap-4 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                            <span className="w-8 shrink-0">Status</span>
                            <span className="flex-1">Project Name</span>
                            <span className="w-32 hidden md:block">Environment</span>
                            <span className="w-40 hidden lg:block">Last Deployment</span>
                            <span className="w-24 text-right">ID</span>
                        </div>
                        {filteredProjects.map(project => (
                            <ProjectListRow key={project.id} project={project} statusColors={statusColors} />
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}

function ProjectCard({ project, statusColors }: { project: Project; statusColors: Record<string, string> }) {
    return (
        <Card className="bg-white/2 border-white/5 precise-edge hover:border-primary/30 hover:bg-white/5 transition-all group overflow-hidden flex flex-col h-full shadow-lg">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <Badge
                        variant="outline"
                        className={`text-[10px] uppercase tracking-wider font-bold px-1.5 py-0 ${statusColors[project.status]}`}
                    >
                        {project.status}
                    </Badge>
                    <BoxIcon
                        size={16}
                        className="text-muted-foreground opacity-20 group-hover:text-primary group-hover:opacity-100 transition-all"
                    />
                </div>
                <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                    {project.name}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2 min-h-[32px]">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
                <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Environment</span>
                        <span className="font-medium text-primary/80">{project.environment}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Last Deploy</span>
                        <span className="font-medium">{new Date(project.lastDeploy).toLocaleDateString()}</span>
                    </div>

                    <div className="space-y-1.5 pt-2">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-tighter text-muted-foreground">
                            <span>Uptime Score</span>
                            <span>99.9%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500/50 w-[99.9%]" />
                        </div>
                    </div>
                </div>
            </CardContent>

            <div className="bg-white/2 px-4 py-3 flex items-center justify-between border-t border-white/5 mt-auto">
                <span className="text-[10px] font-mono opacity-50 uppercase">{project.id}</span>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs group-hover:text-primary transition-colors"
                >
                    Manage <ExternalLinkIcon size={12} className="ml-1.5" />
                </Button>
            </div>
        </Card>
    )
}

function ProjectListRow({ project, statusColors }: { project: Project; statusColors: Record<string, string> }) {
    return (
        <Card className="bg-white/2 border-white/5 precise-edge hover:bg-white/5 hover:border-primary/20 transition-all group cursor-pointer overflow-hidden shadow-md">
            <CardContent className="p-0">
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="w-8 shrink-0 flex justify-center">
                        <div
                            className={`h-2.5 w-2.5 rounded-full ${
                                project.status === 'healthy'
                                    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                                    : project.status === 'deploying'
                                      ? 'bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                                      : project.status === 'degraded'
                                        ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                                        : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]'
                            }`}
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                                {project.name}
                            </span>
                            <Badge
                                variant="outline"
                                className={`text-[9px] uppercase h-4 px-1.5 opacity-80 ${statusColors[project.status]}`}
                            >
                                {project.status}
                            </Badge>
                        </div>
                        <p className="text-[10px] text-muted-foreground truncate mt-0.5">{project.description}</p>
                    </div>

                    <div className="w-32 hidden md:block shrink-0">
                        <Badge
                            variant="secondary"
                            className="bg-white/5 text-[10px] text-zinc-400 border-white/5 font-medium"
                        >
                            {project.environment}
                        </Badge>
                    </div>

                    <div className="w-40 hidden lg:flex flex-col shrink-0">
                        <span className="text-[11px] font-medium">
                            {new Date(project.lastDeploy).toLocaleDateString()}
                        </span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-tighter">
                            at{' '}
                            {new Date(project.lastDeploy).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </span>
                    </div>

                    <div className="w-24 text-right shrink-0">
                        <span className="text-[10px] font-mono opacity-40 uppercase">{project.id}</span>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all"
                    >
                        <ChevronRightIcon size={16} />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
