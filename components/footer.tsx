import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-8 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>&copy; 2024 Preflight. All rights reserved.</p>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
