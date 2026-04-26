import { Deployment } from '@/shared/lib/mock-data'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@workspace/ui/components/Table'
import { Badge } from '@workspace/ui/components/Badge'
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/Avatar'
import { Button } from '@workspace/ui/components/Button'
import {
    CheckCircle2Icon,
    XCircleIcon,
    AlertCircleIcon,
    ClockIcon,
    GitBranchIcon,
    ExternalLinkIcon,
    RotateCcwIcon,
    MoreHorizontalIcon,
} from 'lucide-react'

interface DeploymentTableProps {
    deployments: Deployment[]
}

export function DeploymentTable({ deployments }: DeploymentTableProps) {
    return (
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden shadow-2xl precise-edge">
            <Table>
                <TableHeader className="bg-white/[0.03]">
                    <TableRow className="hover:bg-transparent border-white/[0.05]">
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold py-4 text-muted-foreground pl-6">
                            Deploy ID
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            Status
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            Project / Branch
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            Commit
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            Author
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            Duration
                        </TableHead>
                        <TableHead className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right pr-6">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="[&_tr:nth-child(odd)]:bg-transparent [&_tr:nth-child(even)]:bg-white/[0.01]">
                    {deployments.length > 0 ? (
                        deployments.map(deploy => <DeploymentRow key={deploy.id} deploy={deploy} />)
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="h-32 text-center text-muted-foreground text-sm italic">
                                No deployments found matching your criteria.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

function DeploymentRow({ deploy }: { deploy: Deployment }) {
    const statusConfig = {
        success: {
            label: 'Success',
            icon: <CheckCircle2Icon className="h-3 w-3" />,
            color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        },
        failed: {
            label: 'Failed',
            icon: <XCircleIcon className="h-3 w-3" />,
            color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        },
        canceled: {
            label: 'Canceled',
            icon: <AlertCircleIcon className="h-3 w-3" />,
            color: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
        },
        running: {
            label: 'Running',
            icon: <ClockIcon className="h-3 w-3 animate-spin" />,
            color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        },
    }

    const config = statusConfig[deploy.status]

    return (
        <TableRow className="group border-white/[0.05] hover:bg-white/[0.04] transition-colors">
            <TableCell className="py-4 pl-6">
                <span className="font-mono text-xs font-semibold text-white/90">{deploy.id}</span>
                <div className="text-[10px] text-muted-foreground mt-0.5">
                    {new Date(deploy.createdAt).toLocaleDateString()}
                </div>
            </TableCell>
            <TableCell>
                <Badge
                    className={`flex items-center gap-1.5 w-fit font-bold tracking-wider text-[9px] uppercase px-2 py-0.5 rounded-full border ${config.color}`}
                >
                    {config.icon}
                    {config.label}
                </Badge>
            </TableCell>
            <TableCell>
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-white">{deploy.projectId}</span>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <GitBranchIcon size={10} />
                        <span className="font-mono">{deploy.branch}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-1.5 text-zinc-400 hover:text-primary transition-colors cursor-pointer group/commit">
                    <ExternalLinkIcon size={12} className="opacity-40 group-hover/commit:opacity-100" />
                    <span className="text-[11px] font-mono">{deploy.commit}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border border-white/10">
                        <AvatarImage src={`https://github.com/${deploy.author}.png`} />
                        <AvatarFallback className="text-[8px] bg-zinc-800">
                            {deploy.author.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{deploy.author}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex flex-col">
                    <span className="text-xs font-mono text-white/80">{deploy.duration}</span>
                    <span className="text-[9px] text-muted-foreground">
                        {new Date(deploy.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </TableCell>
            <TableCell className="text-right pr-6">
                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {deploy.status === 'success' && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-primary/10 hover:text-primary"
                            aria-label="Rollback"
                            title="Rollback"
                        >
                            <RotateCcwIcon />
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/10"
                        aria-label="View Logs"
                        title="View Logs"
                    >
                        <MoreHorizontalIcon />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    )
}
