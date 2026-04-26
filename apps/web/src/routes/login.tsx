import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@workspace/ui/components/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/Card'
import { GithubIcon, ChromeIcon, ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@workspace/ui/lib/utils'

export const Route = createFileRoute('/login')({
    component: LoginComponent,
})

function LoginComponent() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<string | null>(null)

    const handleLogin = (provider: string) => {
        setIsLoading(provider)
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(null)
            navigate({ to: '/dashboard' })
        }, 1500)
    }

    return (
        <div className="min-h-screen w-full bg-[#08090a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="w-full max-w-100 z-10 animate-in fade-in zoom-in duration-700">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4 glass shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <div className="w-6 h-6 bg-primary rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#f7f8f8]">DeployHub</h1>
                    <p className="text-[#8a8f98] text-sm mt-1 font-medium">Engineering the future of deployment</p>
                </div>

                <Card className="bg-white/2 border-white/5 glass backdrop-blur-xl precise-edge shadow-2xl">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-xl font-semibold text-[#f7f8f8]">Welcome back</CardTitle>
                        <CardDescription className="text-[#8a8f98]">
                            Select a provider to continue to your dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 pt-6 pb-8">
                        <Button
                            variant="ghost"
                            className={cn(
                                'w-full h-12 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-[#f7f8f8] flex items-center justify-center gap-3 group relative overflow-hidden',
                                isLoading === 'github' && 'opacity-80 cursor-not-allowed',
                            )}
                            onPress={() => handleLogin('github')}
                            isDisabled={!!isLoading}
                        >
                            {isLoading === 'github' ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Continue with GitHub</span>
                                </>
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            className={cn(
                                'w-full h-12 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-[#f7f8f8] flex items-center justify-center gap-3 group relative overflow-hidden',
                                isLoading === 'google' && 'opacity-80 cursor-not-allowed',
                            )}
                            onPress={() => handleLogin('google')}
                            isDisabled={!!isLoading}
                        >
                            {isLoading === 'google' ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <ChromeIcon
                                        size={18}
                                        className="text-blue-400 group-hover:text-blue-300 transition-colors"
                                    />
                                    <span>Continue with Google</span>
                                </>
                            )}
                        </Button>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/5" />
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                                <span className="bg-[#0c0d0e] px-2 text-[#62666d]">Precise Security</span>
                            </div>
                        </div>

                        <div className="text-[11px] text-[#62666d] text-center leading-relaxed px-4">
                            By continuing, you agree to DeployHub's{' '}
                            <a
                                href="#"
                                className="text-[#8a8f98] hover:text-primary transition-colors underline underline-offset-4"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                href="#"
                                className="text-[#8a8f98] hover:text-primary transition-colors underline underline-offset-4"
                            >
                                Privacy Policy
                            </a>
                            .
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Links */}
                <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#62666d]">
                    <a href="#" className="hover:text-[#f7f8f8] transition-colors">
                        Documentation
                    </a>
                    <a href="#" className="hover:text-[#f7f8f8] transition-colors">
                        Support
                    </a>
                    <a href="#" className="hover:text-[#f7f8f8] transition-colors">
                        Status
                    </a>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
    )
}
