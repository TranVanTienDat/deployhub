import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@workspace/ui/components/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Activity, ArrowDownRight, ArrowUpRight, Cpu, Database, Globe, HardDrive, Zap } from 'lucide-react'
import { ProgressBar } from 'react-aria-components'

export const Route = createFileRoute('/analytics')({
    component: AnalyticsPage,
})

function Sparkline({ data, color }: { data: number[]; color: string }) {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min
    const width = 100
    const height = 30

    const points = data
        .map((d, i) => {
            const x = (i / (data.length - 1)) * width
            const y = height - ((d - min) / range) * height
            return `${x},${y}`
        })
        .join(' ')

    return (
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
            <polyline
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
            />
        </svg>
    )
}

function AnalyticsPage() {
    const stats = [
        { label: 'Avg. CPU Usage', value: '24.5%', trend: '+2.1%', icon: Cpu, data: [10, 15, 12, 18, 22, 20, 25, 24] },
        {
            label: 'Memory Pressure',
            value: '4.2 GB',
            trend: '-0.5%',
            icon: Database,
            data: [4.5, 4.4, 4.3, 4.2, 4.2, 4.3, 4.2, 4.2],
        },
        {
            label: 'Network Traffic',
            value: '1.2 GB/s',
            trend: '+12%',
            icon: Globe,
            data: [0.5, 0.8, 1.2, 0.9, 1.1, 1.5, 1.3, 1.2],
        },
        {
            label: 'Disk IOPS',
            value: '1.8k',
            trend: '+0.2%',
            icon: HardDrive,
            data: [1.2, 1.5, 1.4, 1.6, 1.8, 1.7, 1.8, 1.8],
        },
    ]

    const projects = [
        { name: 'API Gateway', status: 'Healthy', cpu: 12, mem: 45, traffic: '450req/s' },
        { name: 'Auth Service', status: 'Healthy', cpu: 8, mem: 22, traffic: '120req/s' },
        { name: 'Payment Worker', status: 'Degraded', cpu: 88, mem: 92, traffic: '15req/s' },
        { name: 'Media CDN', status: 'Healthy', cpu: 32, mem: 68, traffic: '2.4kreq/s' },
    ]

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight">System Monitoring</h1>
                    <p className="text-muted-foreground">Real-time performance metrics across all active clusters.</p>
                </div>
                <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 py-1 px-3">
                    <Activity className="mr-2 h-3 w-3 animate-pulse" /> Live Metrics
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                    <Card key={i} className="glass-card border-white/5 overflow-hidden group">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                {s.label}
                            </CardTitle>
                            <s.icon className="h-4 w-4 text-indigo-400/70" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{s.value}</div>
                            <div className="flex items-center gap-1 mt-1">
                                {s.trend.startsWith('+') ? (
                                    <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                                ) : (
                                    <ArrowDownRight className="h-3 w-3 text-rose-500" />
                                )}
                                <span
                                    className={`text-[10px] font-medium ${s.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}
                                >
                                    {s.trend} from last hour
                                </span>
                            </div>
                            <div className="mt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                <Sparkline data={s.data} color={s.trend.startsWith('+') ? '#10b981' : '#f43f5e'} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 glass-card border-white/5">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">Resource Distribution by Service</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {projects.map((p, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium">{p.name}</span>
                                            <Badge
                                                variant="outline"
                                                className={`text-[10px] h-4 ${p.status === 'Healthy' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-amber-500 border-amber-500/20 bg-amber-500/5'}`}
                                            >
                                                {p.status}
                                            </Badge>
                                        </div>
                                        <span className="text-xs text-muted-foreground font-mono">{p.traffic}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[10px] uppercase text-muted-foreground">
                                                <span>CPU</span>
                                                <span>{p.cpu}%</span>
                                            </div>
                                            <ProgressBar value={p.cpu} className="h-1 bg-white/5" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[10px] uppercase text-muted-foreground">
                                                <span>MEM</span>
                                                <span>{p.mem}%</span>
                                            </div>
                                            <ProgressBar value={p.mem} className="h-1 bg-white/5" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-white/5 bg-indigo-500/[0.02]">
                    <CardHeader>
                        <CardTitle className="text-sm font-semibold">Optimization Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2">
                            <div className="flex items-center gap-2 text-amber-500">
                                <Zap className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase">Resource Alert</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                <span className="text-white font-medium">Payment Worker</span> is experiencing high CPU
                                pressure (88%). Consider scaling horizontally or optimizing event loops.
                            </p>
                        </div>

                        <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                            <div className="flex items-center gap-2 text-emerald-500">
                                <Activity className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase">Efficiency Tip</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Database queries for <span className="text-white font-medium">Auth Service</span> have
                                improved by 14% since the last deployment. Cache hit ratio is at 98.2%.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <h4 className="text-[10px] font-bold uppercase text-muted-foreground mb-3">Top Clusters</h4>
                            <div className="space-y-2">
                                {['US-East-1', 'EU-West-2', 'AP-Southeast-1'].map(region => (
                                    <div key={region} className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">{region}</span>
                                        <span className="font-mono text-emerald-500">Active</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
