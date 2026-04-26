import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_DEPLOYMENTS } from '@/shared/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Button } from '@workspace/ui/components/Button'
import { DeploymentTable } from '@/shared/components/DeploymentTable'
import { Tabs, TabList, Tab } from '@workspace/ui/components/Tabs'
import { BsSearchField } from '@workspace/ui/components/Searchfield'
import { RocketIcon, FilterIcon } from 'lucide-react'
import { useState, useMemo } from 'react'

export const Route = createFileRoute('/pipelines/history')({
    component: DeploymentHistoryPage,
})

type FilterStatus = 'all' | 'success' | 'failed' | 'canceled'

function DeploymentHistoryPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState<FilterStatus>('all')

    const filteredDeployments = useMemo(() => {
        return MOCK_DEPLOYMENTS.filter(deploy => {
            const matchesSearch =
                deploy.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                deploy.projectId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                deploy.commit.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesStatus = activeTab === 'all' || deploy.status === activeTab

            return matchesSearch && matchesStatus
        })
    }, [searchQuery, activeTab])

    const stats = useMemo(() => {
        const total = MOCK_DEPLOYMENTS.length
        const success = MOCK_DEPLOYMENTS.filter(d => d.status === 'success').length
        const failed = MOCK_DEPLOYMENTS.filter(d => d.status === 'failed').length

        return {
            successRate: ((success / total) * 100).toFixed(1),
            avgDuration: '2m 14s',
            totalRuns: total,
            failedRuns: failed,
        }
    }, [])

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Breadcrumbs & Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        <Link
                            to="/dashboard"
                            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                        >
                            Dashboard
                        </Link>
                        <span className="opacity-30">/</span>
                        <Link
                            to="/pipelines"
                            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                        >
                            Pipelines
                        </Link>
                        <span className="opacity-30">/</span>
                        <span className="text-foreground">History</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-white">Deployment History</h1>
                            <p className="text-muted-foreground text-sm mt-1">
                                Track and manage the lifecycle of your automated releases.
                            </p>
                        </div>
                        <Link to="/deployments/new">
                            <Button className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
                                <RocketIcon className="mr-2 h-4 w-4" /> New Deployment
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Filters & Tabs Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/[0.02] border border-white/[0.05] p-2 rounded-xl backdrop-blur-sm shadow-2xl">
                    <Tabs
                        aria-label="Filter Deployments"
                        selectedKey={activeTab}
                        onSelectionChange={k => setActiveTab(k as FilterStatus)}
                        className="w-full md:w-auto"
                    >
                        <TabList className="bg-transparent border-none gap-1 p-0">
                            <Tab
                                id="all"
                                className="rounded-lg px-4 py-2 text-xs font-medium data-[selected]:bg-white/10 data-[selected]:text-white transition-all"
                            >
                                All Runs
                            </Tab>
                            <Tab
                                id="success"
                                className="rounded-lg px-4 py-2 text-xs font-medium data-[selected]:bg-emerald-500/10 data-[selected]:text-emerald-400 transition-all"
                            >
                                Success
                            </Tab>
                            <Tab
                                id="failed"
                                className="rounded-lg px-4 py-2 text-xs font-medium data-[selected]:bg-rose-500/10 data-[selected]:text-rose-400 transition-all"
                            >
                                Failed
                            </Tab>
                            <Tab
                                id="canceled"
                                className="rounded-lg px-4 py-2 text-xs font-medium data-[selected]:bg-white/5 data-[selected]:text-zinc-400 transition-all"
                            >
                                Canceled
                            </Tab>
                        </TabList>
                    </Tabs>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <BsSearchField
                            placeholder="Search ID, Project, Commit..."
                            value={searchQuery}
                            onChange={setSearchQuery}
                            className="bg-transparent border-none"
                            containerClassName="w-full md:w-64"
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs px-4"
                        >
                            <FilterIcon className="mr-2 h-3.5 w-3.5" /> More
                        </Button>
                    </div>
                </div>

                {/* History Table */}
                <DeploymentTable deployments={filteredDeployments} />

                {/* Summary Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <StatCard
                        title="Success Rate"
                        value={`${stats.successRate}%`}
                        subtitle="Last 30 days"
                        trend="+2.4%"
                        trendUp={true}
                    />
                    <StatCard
                        title="Avg. Duration"
                        value={stats.avgDuration}
                        subtitle="Optimized"
                        trend="-15s"
                        trendUp={true}
                    />
                    <StatCard title="Total Runs" value={stats.totalRuns.toString()} subtitle="Automated" />
                    <StatCard
                        title="Failed Runs"
                        value={stats.failedRuns.toString()}
                        subtitle="Needs attention"
                        trend="+1"
                        trendUp={false}
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

function StatCard({
    title,
    value,
    subtitle,
    trend,
    trendUp,
}: {
    title: string
    value: string
    subtitle: string
    trend?: string
    trendUp?: boolean
}) {
    return (
        <Card className="bg-white/[0.02] border-white/[0.05] precise-edge hover:bg-white/[0.04] transition-all">
            <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em]">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
                    {trend && (
                        <div className={`text-[10px] font-bold ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {trend}
                        </div>
                    )}
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 font-medium">{subtitle}</p>
            </CardContent>
        </Card>
    )
}
