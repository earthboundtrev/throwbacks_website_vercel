export default function LocationClosingBanner() {
  return (
    <div className="w-full bg-primary text-primary-foreground border-b border-primary/80">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-sm sm:text-base font-semibold leading-snug">
          Last day at our current location:{" "}
          <span className="whitespace-nowrap">Sunday, August 31</span>
        </p>
      </div>
    </div>
  )
}
