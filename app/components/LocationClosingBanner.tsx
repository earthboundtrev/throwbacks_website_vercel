export default function LocationClosingBanner() {
  return (
    <div className="w-full bg-primary text-primary-foreground border-b border-primary/80">
      <div className="container mx-auto px-4 py-3 text-center space-y-1">
        <p className="text-sm sm:text-base font-semibold leading-snug">
          We&apos;ve found a new place and expect to move in about two months!{" "}
          <a
            href="https://www.facebook.com/permalink.php?story_fbid=pfbid02r9ZTTEXN29DKw9DZtRYJxiSnTTfjGGAyNHGxf5vQqNnmGJEaS6HScaygzhY7ngxfl&id=61556280427238"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:no-underline"
          >
            Read more on Facebook
          </a>
        </p>
      </div>
    </div>
  )
}
