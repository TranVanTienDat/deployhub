import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { MOCK_LOGS } from '@/shared/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Button } from '@workspace/ui/components/Button'
import { Badge } from '@workspace/ui/components/Badge'
import { TerminalIcon, SearchIcon, DownloadIcon, Trash2Icon, PauseIcon, PlayIcon, Maximize2Icon } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/logs')({
    component: LogsComponent,
})

function LogsComponent() {
    const [isStreaming, setIsStreaming] = useState(true)

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6 h-[calc(100vh-12rem)] animate-in slide-in-from-bottom-4 duration-500">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <TerminalIcon className="text-primary" size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">System Logs</h1>
                            <p className="text-sm text-muted-foreground mt-0.5">
                                Real-time stream from all active services.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/5 border-white/10"
                            onClick={() => setIsStreaming(!isStreaming)}
                        >
                            {isStreaming ? (
                                <PauseIcon className="mr-2 h-4 w-4" />
                            ) : (
                                <PlayIcon className="mr-2 h-4 w-4" />
                            )}
                            {isStreaming ? 'Pause Stream' : 'Resume Stream'}
                        </Button>
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
                            <DownloadIcon className="mr-2 h-4 w-4" /> Export
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20"
                        >
                            <Trash2Icon className="mr-2 h-4 w-4" /> Clear
                        </Button>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search logs (e.g. error, timeout, service name)..."
                            className="w-full bg-transparent border-none py-1.5 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <div className="flex items-center gap-2 pr-2">
                        <Badge
                            variant="outline"
                            className="bg-blue-500/10 text-blue-400 border-blue-500/20 cursor-pointer"
                        >
                            INFO
                        </Badge>
                        <Badge
                            variant="outline"
                            className="bg-amber-500/10 text-amber-400 border-amber-500/20 cursor-pointer"
                        >
                            WARN
                        </Badge>
                        <Badge
                            variant="outline"
                            className="bg-rose-500/10 text-rose-400 border-rose-500/20 cursor-pointer"
                        >
                            ERROR
                        </Badge>
                    </div>
                </div>

                {/* Terminal Window */}
                <Card className="flex-1 bg-black/40 border-white/10 overflow-hidden flex flex-col glass precise-edge shadow-2xl">
                    <CardHeader className="py-2 px-4 border-b border-white/5 bg-white/5 flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground ml-2 uppercase tracking-widest">
                                unified-log-stream.sh
                            </span>
                        </div>
                        <Maximize2Icon
                            size={12}
                            className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                        />
                    </CardHeader>
                    <CardContent className="p-0 flex-1 overflow-y-auto font-mono text-[13px] leading-relaxed">
                        <div className="p-4 flex flex-col">
                            {MOCK_LOGS.map((log, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 py-0.5 hover:bg-white/5 px-2 -mx-2 transition-colors group"
                                >
                                    <span className="text-zinc-600 shrink-0 select-none">[{log.timestamp}]</span>
                                    <span
                                        className={`shrink-0 font-bold ${
                                            log.level === 'ERROR'
                                                ? 'text-rose-500'
                                                : log.level === 'WARN'
                                                  ? 'text-amber-500'
                                                  : log.level === 'SUCCESS'
                                                    ? 'text-emerald-500'
                                                    : log.level === 'DEBUG'
                                                      ? 'text-blue-500'
                                                      : 'text-primary/70'
                                        }`}
                                    >
                                        {log.level}
                                    </span>
                                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                                        {log.message}
                                    </span>
                                </div>
                            ))}
                            {isStreaming && (
                                <div className="flex gap-4 py-0.5 px-2 -mx-2 mt-1">
                                    <span className="text-zinc-600 shrink-0">
                                        [{new Date().toISOString().replace('T', ' ').split('.')[0]}]
                                    </span>
                                    <span className="text-primary/70 font-bold italic animate-pulse">WAITING</span>
                                    <span className="text-zinc-500 italic">Listening for new events...</span>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}
