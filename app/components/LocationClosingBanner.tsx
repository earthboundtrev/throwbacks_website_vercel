import Link from "next/link"

export default function LocationClosingBanner() {
  return (
    <div className="w-full bg-primary text-primary-foreground border-b border-primary/80">
      <div className="container mx-auto px-4 py-3 text-center space-y-1">
        <p className="text-sm sm:text-base font-semibold leading-snug">
          Last day at our current location:{" "}
          <span className="whitespace-nowrap">Sunday, August 23, 2026</span>
        </p>
        <p className="text-sm leading-snug">
          We&apos;re still booking private and public parties!{" "}
          <Link
            href="/party"
            className="underline font-semibold hover:no-underline"
          >
            Book a party
          </Link>
        </p>
      </div>
    </div>
  )
}
