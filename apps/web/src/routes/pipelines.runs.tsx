import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_DEPLOYMENTS } from '@/shared/lib/mock-data'
import { DeploymentTable } from '@/shared/components/DeploymentTable'
import { ActivityIcon, RefreshCwIcon } from 'lucide-react'
import { Button } from '@workspace/ui/components/Button'

export const Route = createFileRoute('/pipelines/runs')({
    component: ActiveRunsPage,
})

function ActiveRunsPage() {
    const activeRuns = MOCK_DEPLOYMENTS.filter(d => d.status === 'running')

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-3">
                            Active Runs
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Monitoring all deployments currently in progress across your cluster.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="h-12 px-6 rounded-xl border-white/10 hover:bg-white/5 transition-all"
                    >
                        <RefreshCwIcon className="mr-2 h-4 w-4" /> Refresh All
                    </Button>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden glass shadow-2xl">
                    <div className="p-8 border-b border-white/[0.05] flex items-center gap-3">
                        <ActivityIcon className="text-blue-400" size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest text-white/70">Live Queue</span>
                    </div>
                    <DeploymentTable deployments={activeRuns} />
                    {activeRuns.length === 0 && (
                        <div className="p-20 text-center flex flex-col items-center gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-zinc-500/10 flex items-center justify-center text-zinc-500">
                                <ActivityIcon size={32} />
                            </div>
                            <div>
                                <p className="text-lg font-medium text-white/80">No active runs found</p>
                                <p className="text-sm text-muted-foreground mt-1">Everything is idle at the moment.</p>
                            </div>
                            <Link to="/pipelines/history">
                                <Button variant="link" className="text-primary hover:text-primary/80">
                                    View History
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}
