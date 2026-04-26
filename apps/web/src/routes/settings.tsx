import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Settings, Key, Shield, User, Eye, EyeOff, Plus, Trash2, Save, Lock } from 'lucide-react'
import { Tabs, TabList, Tab, TabPanel } from '@workspace/ui/components/Tabs'
import { Button } from '@workspace/ui/components/Button'
import { Label } from '@workspace/ui/components/Field'
import { Input } from '@workspace/ui/components/Textfield'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { Badge } from '@workspace/ui/components/Badge'

export const Route = createFileRoute('/settings')({
    component: SettingsPage,
})

function SettingsPage() {
    const [showValues, setShowValues] = useState<Record<string, boolean>>({})

    const toggleValue = (id: string) => {
        setShowValues(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const envVars = [
        {
            id: '1',
            key: 'DATABASE_URL',
            value: 'postgresql://admin:********@db.deployhub.internal:5432/main',
            type: 'Secret',
        },
        { id: '2', key: 'API_KEY', value: 'dh_live_72a6d8fcfeb14fb4a5c00be3d5b91583', type: 'Secret' },
        { id: '3', key: 'LOG_LEVEL', value: 'debug', type: 'Plaintext' },
        { id: '4', key: 'NEXT_PUBLIC_SITE_URL', value: 'https://deployhub.io', type: 'Plaintext' },
    ]

    return (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your workspace configuration and environment security.</p>
            </div>

            <Tabs defaultSelectedKey="environment" className="w-full">
                <TabList className="bg-white/5 p-1 border border-white/5">
                    <Tab id="general" className="gap-2">
                        <User className="h-4 w-4" /> General
                    </Tab>
                    <Tab id="environment" className="gap-2">
                        <Key className="h-4 w-4" /> Environment
                    </Tab>
                    <Tab id="security" className="gap-2">
                        <Shield className="h-4 w-4" /> Security
                    </Tab>
                </TabList>

                {/* --- GENERAL TAB --- */}
                <TabPanel id="general" className="mt-6 space-y-6">
                    <Card className="glass-card border-white/5">
                        <CardHeader>
                            <CardTitle>Workspace Profile</CardTitle>
                            <CardDescription>Your workspace's public information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="ws-name">Workspace Name</Label>
                                    <Input
                                        id="ws-name"
                                        defaultValue="DeployHub Main"
                                        className="bg-white/5 border-white/10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ws-slug">Workspace Slug</Label>
                                    <Input
                                        id="ws-slug"
                                        defaultValue="deployhub-main"
                                        className="bg-white/5 border-white/10"
                                    />
                                </div>
                            </div>
                            <Button className="precise-edge bg-action-solid hover:opacity-90">
                                <Save className="mr-2 h-4 w-4" /> Save Changes
                            </Button>
                        </CardContent>
                    </Card>
                </TabPanel>

                {/* --- ENVIRONMENT TAB --- */}
                <TabPanel id="environment" className="mt-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold">Environment Variables</h3>
                            <p className="text-sm text-muted-foreground">
                                Define secrets and configuration variables for your deployments.
                            </p>
                        </div>
                        <Button
                            size="sm"
                            className="bg-emerald-600/20 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-600/30"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Variable
                        </Button>
                    </div>

                    <div className="rounded-xl border border-white/5 overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/5 text-muted-foreground font-medium border-b border-white/5">
                                <tr>
                                    <th className="px-4 py-3">Key</th>
                                    <th className="px-4 py-3">Value</th>
                                    <th className="px-4 py-3">Type</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {envVars.map(v => (
                                    <tr key={v.id} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="px-4 py-3 font-mono text-indigo-300">{v.key}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-muted-foreground">
                                                    {v.type === 'Secret' && !showValues[v.id]
                                                        ? '••••••••••••••••'
                                                        : v.value}
                                                </span>
                                                {v.type === 'Secret' && (
                                                    <button
                                                        onClick={() => toggleValue(v.id)}
                                                        className="p-1 hover:text-white transition-colors"
                                                    >
                                                        {showValues[v.id] ? (
                                                            <EyeOff className="h-3 w-3" />
                                                        ) : (
                                                            <Eye className="h-3 w-3" />
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge
                                                variant="outline"
                                                className={`border-white/10 text-[10px] ${v.type === 'Secret' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}
                                            >
                                                {v.type}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-red-400"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Card className="bg-amber-500/5 border-amber-500/20">
                        <CardContent className="pt-6 flex gap-3 items-start">
                            <Lock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-amber-500">Security Note</p>
                                <p className="text-xs text-amber-500/80 leading-relaxed">
                                    Secret variables are encrypted at rest and only decrypted during the build process.
                                    Once saved, their values cannot be retrieved except by authorized CI/CD processes.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabPanel>

                {/* --- SECURITY TAB --- */}
                <TabPanel id="security" className="mt-6">
                    <Card className="glass-card border-white/5">
                        <CardHeader>
                            <CardTitle>API Access Tokens</CardTitle>
                            <CardDescription>
                                Use these tokens to access the DeployHub API from external services.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Read-Only Token
                                    </span>
                                    <span className="font-mono text-sm">****************************3a4b</span>
                                </div>
                                <Button variant="outline" size="sm" className="border-white/10">
                                    Revoke
                                </Button>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full border-dashed border-white/10 hover:border-white/20"
                            >
                                Generate New Token
                            </Button>
                        </CardContent>
                    </Card>
                </TabPanel>
            </Tabs>
        </div>
    )
}
