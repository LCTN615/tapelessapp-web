'use client'

import { useState } from 'react'

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="40" cy="60" r="32" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="40" cy="60" r="6" fill="currentColor" />
      <line x1="72" y1="60" x2="116" y2="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="84" y1="48" x2="84" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="48" x2="100" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    // TODO: replace with your waitlist endpoint (Resend, Loops, Mailchimp, etc.)
    await new Promise(r => setTimeout(r, 800))
    setState('done')
  }

  if (state === 'done') {
    return (
      <p className="text-white/60 text-sm font-mono tracking-wide">
        YOU&apos;RE ON THE LIST — WE&apos;LL LET YOU KNOW.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-3 rounded-lg bg-white/5 text-white placeholder:text-white/30 border border-white/10 focus:outline-none focus:border-volt text-sm w-72"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className="px-6 py-3 bg-volt text-ink font-semibold rounded-lg hover:bg-volt/90 transition-colors text-sm disabled:opacity-60 whitespace-nowrap"
      >
        {state === 'loading' ? 'Joining…' : "Notify me when it's live"}
      </button>
    </form>
  )
}

export default function Home() {
  return (
    <div
      className="min-h-screen bg-ink text-white flex flex-col"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      {/* Header strip */}
      <header className="flex items-center justify-between px-8 pt-8 pb-0">
        <p className="text-white/40 text-xs font-mono tracking-[0.2em] uppercase flex items-center gap-2">
          <span className="text-volt">•</span>
          TAPELESS / COMING SOON
        </p>
        <span className="text-white/30 text-xs font-mono tracking-[0.15em]">iOS</span>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-8 pt-12 pb-0 max-w-4xl">
        {/* Logo lockup */}
        <div className="flex items-center gap-5 mb-12">
          <LogoMark className="w-16 h-16 text-volt" />
          <span className="text-white text-4xl font-bold tracking-tight">tapeless</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.0] tracking-tight mb-8 max-w-2xl">
          Measure the<br />distance.<br />No tape required.
        </h1>

        {/* Status + CTA */}
        <p className="text-white/40 text-lg mb-8 font-light">
          Coming soon to iPhone.
        </p>
        <WaitlistForm />
      </main>

      {/* Bottom metadata strip */}
      <footer className="px-8 py-8 flex items-end justify-between">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-white/30 text-xs font-mono tracking-[0.15em] uppercase mb-1">Platform</p>
            <p className="text-white text-sm font-medium">iOS</p>
          </div>
          <div>
            <p className="text-white/30 text-xs font-mono tracking-[0.15em] uppercase mb-1">Category</p>
            <p className="text-white text-sm font-medium">Utilities</p>
          </div>
          <div>
            <p className="text-white/30 text-xs font-mono tracking-[0.15em] uppercase mb-1">Audience</p>
            <p className="text-white text-sm font-medium">Everyone who measures</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/20 text-xs font-mono tracking-widest">
          {/* TODO: add social links */}
          <a href="/privacy" className="hover:text-white/50 transition-colors">PRIVACY</a>
          <span>—</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}
