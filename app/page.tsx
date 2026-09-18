'use client'

import Link from 'next/link'
import { ArrowRight, Check, CheckCircle2, Gauge, ImageIcon, Link2, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const features = [
  { icon: Link2, title: 'Check every link', text: 'Validate every destination in your campaign before it goes live.' },
  { icon: ShieldCheck, title: 'Follow redirects', text: 'Trace full redirect chains and catch broken or unexpected destinations.' },
  { icon: Gauge, title: 'Flag slow pages', text: 'Measure response times so slow landing pages never surprise you.' },
  { icon: ImageIcon, title: 'Validate creatives', text: 'Detect undersized images and missing creative assets before launch.' },
]

export default function Page() {
  const [showNotice, setShowNotice] = useState(true)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_right,oklch(0.92_0.05_180),transparent_38%),linear-gradient(180deg,oklch(0.99_0_0),oklch(0.96_0.01_260))]">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-12 lg:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><CheckCircle2 className="size-4" /> Campaign quality gate</div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Check Meta ads <span className="text-secondary">before</span> you launch.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Preflight checks your links, redirects, landing pages, and creatives in one calm, clear report — so broken campaigns never make it to market.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-transform hover:-translate-y-0.5">Get Preflight — it&apos;s free <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
                <span className="text-sm text-muted-foreground">No account. No upload. Runs in your browser.</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-3 shadow-2xl shadow-primary/10">
                <div className="rounded-xl bg-primary p-6 text-primary-foreground sm:p-8">
                  <div className="flex items-center justify-between border-b border-primary-foreground/15 pb-5"><div className="flex items-center gap-2 font-semibold"><CheckCircle2 className="size-5 text-secondary" /> Preflight report</div><span className="rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary-foreground">Ready to launch</span></div>
                  <div className="grid gap-3 py-6 sm:grid-cols-3">{[['24','Links checked'],['0','Broken paths'],['184ms','Fastest load']].map(([value,label]) => <div key={label} className="rounded-lg bg-primary-foreground/10 p-4"><div className="text-2xl font-semibold">{value}</div><div className="mt-1 text-xs text-primary-foreground/65">{label}</div></div>)}</div>
                  <div className="flex flex-col gap-3 rounded-lg bg-primary-foreground/10 p-4 text-sm"><div className="flex items-center gap-3"><Check className="size-4 text-secondary" /> All destinations resolve</div><div className="flex items-center gap-3"><Check className="size-4 text-secondary" /> Redirect chains look healthy</div><div className="flex items-center gap-3"><Check className="size-4 text-secondary" /> Creative dimensions verified</div></div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-lg sm:block"><span className="font-semibold text-secondary">✓</span> Passed before launch</div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">A better last check</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Confidence before the budget starts.</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">A quality gate for media buyers, agencies, and advertisers who care about every click.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map(({icon: Icon,title,text}) => <div key={title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"><div className="flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary"><Icon className="size-5" /></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>
        <section className="border-y border-border bg-primary px-6 py-20 text-primary-foreground sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ship campaigns with fewer surprises.</h2><p className="mt-3 max-w-xl text-primary-foreground/70">Everything stays in your browser. Preflight gives you a clear pass/fail report for every ad you&apos;re about to run.</p></div><a href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3.5 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5">Add to Chrome <ArrowRight className="size-4" /></a></div></section>
      </main>
      {showNotice && <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-xl items-start gap-4 rounded-xl border border-border bg-card p-4 text-sm shadow-xl"><p className="flex-1 leading-6 text-muted-foreground">We use essential site cookies to keep Preflight reliable. By continuing, you agree to our <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-4">site terms</Link>.</p><button aria-label="Dismiss notice" onClick={() => setShowNotice(false)} className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"><X className="size-4" /></button></div>}
      <Footer />
    </div>
  )
}

