import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from '@/shared/layouts/DashboardLayout'
import { Button } from '@workspace/ui/components/Button'
import { PlusIcon, RocketIcon } from 'lucide-react'

export const Route = createFileRoute('/deployments/new')({
    component: NewDeploymentPage,
})

function NewDeploymentPage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-black tracking-tight text-white">Create New Deployment</h1>
                    <p className="text-muted-foreground text-lg">
                        Launch a new version of your application with custom parameters.
                    </p>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 glass shadow-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Project</label>
                            <div className="h-12 bg-white/5 border border-white/10 rounded-xl px-4 flex items-center text-white/50">
                                Select a project...
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Branch</label>
                            <div className="h-12 bg-white/5 border border-white/10 rounded-xl px-4 flex items-center text-white/50">
                                main
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white/70 uppercase tracking-widest">
                            Environment Variables (Optional)
                        </label>
                        <textarea
                            className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white/50 resize-none"
                            placeholder="KEY=VALUE"
                        />
                    </div>

                    <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 rounded-2xl">
                        <RocketIcon className="mr-2 h-5 w-5" /> Start Deployment
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    )
}
