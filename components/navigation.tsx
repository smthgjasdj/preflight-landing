'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <CheckCircle2 className="size-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Preflight</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/what-is-new"
              className={`text-sm font-medium transition-colors ${
                isActive('/what-is-new')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              What Is New
            </Link>
            <Link
              href="/whats-new"
              className={`text-sm font-medium transition-colors ${
                isActive('/whats-new')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              What&apos;s New
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
