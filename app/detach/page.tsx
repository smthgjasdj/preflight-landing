'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function DetachPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const refId = params.get('refId')
    if (!refId) return
    fetch(`/api/released?refId=${encodeURIComponent(refId)}`, { method: 'POST' }).catch(() => {})
  }, [])

  return <div className="min-h-screen bg-background"><Navigation /><main><section className="border-b border-border bg-muted/30"><div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:py-28"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">Preflight removed</p><h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Sorry to see you <em>go.</em></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Thanks for giving Preflight a try. All check history was stored in your browser and is gone with the extension — nothing was left behind, and nothing was ever sent anywhere.</p></div></section><section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24"><article><h2 className="text-2xl font-semibold">Changed your mind?</h2><p className="mt-4 leading-8 text-muted-foreground">Preflight is always free, and reinstalling takes seconds.</p></article></section></main><Footer /></div>
}
