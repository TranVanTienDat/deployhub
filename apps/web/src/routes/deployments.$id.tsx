import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_DEPLOYMENTS, DeploymentStep } from '@/shared/lib/mock-data'
import { Button } from '@workspace/ui/components/Button'
import { Badge } from '@workspace/ui/components/Badge'
import {
    RocketIcon,
    ClockIcon,
    GitBranchIcon,
    TerminalIcon,
    CheckCircle2Icon,
    XCircleIcon,
    CircleIcon,
    ChevronLeftIcon,
    RotateCcwIcon,
    Trash2Icon,
    DownloadIcon,
    Maximize2Icon,
} from 'lucide-react'
import { useState, useMemo } from 'react'
import { cn } from '@workspace/ui/lib/utils'

export const Route = createFileRoute('/deployments/$id')({
    component: DeploymentDetailsPage,
})

function DeploymentDetailsPage() {
    const { id } = useParams({ from: '/deployments/$id' })
    const deployment = useMemo(() => MOCK_DEPLOYMENTS.find(d => d.id === id), [id])
    const [selectedStepId, setSelectedStepId] = useState<string | null>(deployment?.steps?.[0]?.id || null)

    if (!deployment) {
        return (
            <DashboardLayout>
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <h2 className="text-xl font-bold">Deployment not found</h2>
                    <Link to="/pipelines/history" className="mt-4 text-primary hover:underline">
                        Return to History
                    </Link>
                </div>
            </DashboardLayout>
        )
    }

    const selectedStep = deployment.steps?.find(s => s.id === selectedStepId)

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6 max-w-[1600px] mx-auto animate-in fade-in duration-700">
                {/* Navigation & Header */}
                <div className="flex flex-col gap-4">
                    <Link
                        to="/pipelines/history"
                        className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
                    >
                        <ChevronLeftIcon size={14} />
                        Back to History
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl glass">
                        <div className="flex items-center gap-5">
                            <div
                                className={cn(
                                    'h-12 w-12 rounded-xl flex items-center justify-center border shadow-lg',
                                    deployment.status === 'success'
                                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                        : deployment.status === 'failed'
                                          ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                                          : deployment.status === 'running'
                                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                            : 'bg-zinc-500/10 border-zinc-500/20 text-zinc-400',
                                )}
                            >
                                {deployment.status === 'running' ? (
                                    <ClockIcon className="animate-spin" />
                                ) : (
                                    <RocketIcon />
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-2xl font-bold tracking-tight text-white">{deployment.id}</h1>
                                    <Badge
                                        className={cn(
                                            'text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border',
                                            deployment.status === 'success'
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                : deployment.status === 'failed'
                                                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                                  : deployment.status === 'running'
                                                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                    : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
                                        )}
                                    >
                                        {deployment.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                                    <span className="font-medium text-white/70">{deployment.projectId}</span>
                                    <span className="opacity-30">•</span>
                                    <div className="flex items-center gap-1.5">
                                        <GitBranchIcon size={14} />
                                        <span className="font-mono">{deployment.branch}</span>
                                    </div>
                                    <span className="opacity-30">•</span>
                                    <span className="font-mono text-xs">{deployment.commit}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {deployment.status === 'running' ? (
                                <Button variant="destructive" className="shadow-lg shadow-rose-500/20">
                                    <Trash2Icon className="mr-2 h-4 w-4" /> Cancel Run
                                </Button>
                            ) : (
                                <Button className="bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                    <RotateCcwIcon className="mr-2 h-4 w-4" /> Redeploy
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-320px)] min-h-[500px]">
                    {/* Left Sidebar: Steps */}
                    <div className="lg:col-span-1 flex flex-col gap-3">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-2">
                            Workflow Steps
                        </h3>
                        <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
                            {deployment.steps?.map(step => (
                                <StepItem
                                    key={step.id}
                                    step={step}
                                    isActive={selectedStepId === step.id}
                                    onClick={() => setSelectedStepId(step.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Area: Logs Console */}
                    <div className="lg:col-span-3 flex flex-col bg-[#0b0c0e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative group/console">
                        {/* Console Header */}
                        <div className="flex items-center justify-between px-6 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <TerminalIcon size={16} className="text-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                                    {selectedStep?.name || 'Logs'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 text-muted-foreground hover:text-white"
                                >
                                    <DownloadIcon size={14} />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 text-muted-foreground hover:text-white"
                                >
                                    <Maximize2Icon size={14} />
                                </Button>
                            </div>
                        </div>

                        {/* Logs Area */}
                        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed custom-scrollbar bg-black/40">
                            {selectedStep?.logs ? (
                                <div className="flex flex-col gap-1.5">
                                    {selectedStep.logs.map((log, i) => (
                                        <div key={i} className="flex gap-4 group/log">
                                            <span className="text-white/20 select-none w-8 shrink-0 text-right">
                                                {i + 1}
                                            </span>
                                            <span
                                                className={cn(
                                                    'text-zinc-400 break-all',
                                                    log.startsWith('ERROR')
                                                        ? 'text-rose-400'
                                                        : log.startsWith('PASS') || log.includes('success')
                                                          ? 'text-emerald-400'
                                                          : '',
                                                )}
                                            >
                                                {log}
                                            </span>
                                        </div>
                                    ))}
                                    {selectedStep.status === 'running' && (
                                        <div className="flex gap-4 animate-pulse mt-2">
                                            <span className="text-white/20 w-8 shrink-0 text-right">...</span>
                                            <span className="text-primary/60 italic text-xs">Streaming logs...</span>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-30">
                                    <TerminalIcon size={48} className="mb-4" />
                                    <p>No logs available for this step</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

function StepItem({ step, isActive, onClick }: { step: DeploymentStep; isActive: boolean; onClick: () => void }) {
    const statusIcon = {
        success: <CheckCircle2Icon size={16} className="text-emerald-400" />,
        failed: <XCircleIcon size={16} className="text-rose-400" />,
        running: <ClockIcon size={16} className="text-blue-400 animate-spin" />,
        pending: <CircleIcon size={16} className="text-zinc-600" />,
    }

    return (
        <button
            onClick={onClick}
            className={cn(
                'flex items-center gap-3 p-4 rounded-xl border transition-all text-left group w-full',
                isActive
                    ? 'bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                    : 'bg-white/2 border-white/5 hover:bg-white/5',
            )}
        >
            <div className="shrink-0">{statusIcon[step.status]}</div>
            <div className="flex-1 min-w-0">
                <div
                    className={cn(
                        'text-sm font-semibold truncate transition-colors',
                        isActive ? 'text-primary' : 'text-white/80 group-hover:text-white',
                    )}
                >
                    {step.name}
                </div>
                {step.duration && (
                    <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">{step.duration}</div>
                )}
            </div>
            {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />}
        </button>
    )
}
