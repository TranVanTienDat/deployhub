import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_DEPLOYMENTS } from '@/shared/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Button } from '@workspace/ui/components/Button'
import { Badge } from '@workspace/ui/components/Badge'
import {
    RocketIcon,
    ClockIcon,
    GitBranchIcon,
    UserIcon,
    ExternalLinkIcon,
    PlayCircleIcon,
    HistoryIcon,
} from 'lucide-react'

export const Route = createFileRoute('/pipelines')({
    component: PipelinesComponent,
})

function PipelinesComponent() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 animate-in fade-in duration-500">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Pipelines</h1>
                        <p className="text-muted-foreground mt-1">Automated CI/CD workflows and deployment history.</p>
                    </div>
                    <Button size="sm" className="bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <PlayCircleIcon className="mr-2 h-4 w-4" /> Run Pipeline
                    </Button>
                </div>

                {/* Pipeline List */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest px-4">
                        <span className="flex-1">Deployment / Project</span>
                        <span className="hidden md:block w-32">Branch</span>]
                        <span className="hidden lg:block w-40">Commit</span>
                        <span className="w-24 text-right">Duration</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {MOCK_DEPLOYMENTS.map(deploy => (
                            <PipelineRow key={deploy.id} deploy={deploy} />
                        ))}
                    </div>
                </div>

                {/* Past History Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <Card className="bg-white/2 border-white/5 precise-edge">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-400">94.2%</div>
                            <p className="text-[10px] text-muted-foreground mt-1">Based on last 500 runs</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/2 border-white/5 precise-edge">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Avg. Deploy Time
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3m 12s</div>
                            <p className="text-[10px] text-muted-foreground mt-1">Down 15% from last week</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/2 border-white/5 precise-edge">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Webhooks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-[10px] text-muted-foreground mt-1">Listening to GitHub/GitLab</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    )
}

function PipelineRow({ deploy }: { deploy: (typeof MOCK_DEPLOYMENTS)[0] }) {
    const statusConfig = {
        success: { icon: <RocketIcon size={14} />, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
        running: {
            icon: <ClockIcon size={14} className="animate-spin" />,
            color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        },
        failed: { icon: <HistoryIcon size={14} />, color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
        canceled: { icon: <HistoryIcon size={14} />, color: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20' },
    }

    const config = statusConfig[deploy.status]

    return (
        <Link to="/deployments/$id" params={{ id: deploy.id }}>
            <Card className="bg-white/2 border-white/5 precise-edge hover:bg-white/5 transition-all group cursor-pointer">
                <CardContent className="p-4 flex items-center gap-4">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${config.color}`}>
                        {config.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm truncate">{deploy.projectId}</span>
                            <Badge variant="outline" className="text-[9px] uppercase h-4 px-1 opacity-60">
                                PROD
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
                            <UserIcon size={10} />
                            <span>{deploy.author}</span>
                            <span className="opacity-30">•</span>
                            <span>{new Date(deploy.createdAt).toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-1.5 w-32 shrink-0">
                        <GitBranchIcon size={12} className="text-muted-foreground" />
                        <span className="text-[11px] font-mono truncate">{deploy.branch}</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1.5 w-40 shrink-0">
                        <span className="text-[11px] font-mono text-zinc-500">commit</span>
                        <span className="text-[11px] font-mono truncate">{deploy.commit}</span>
                    </div>

                    <div className="w-24 text-right shrink-0">
                        <span className="text-xs font-mono">{deploy.duration}</span>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ExternalLinkIcon size={14} />
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}
