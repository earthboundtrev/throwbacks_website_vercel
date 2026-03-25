"use client"
import ContactSection from "@/app/components/ContactSection"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">Our Events</h1>
      <p className="text-center text-muted-foreground mb-8">
        Check out our upcoming events! Follow us on our{" "}
        <a 
          href="https://www.facebook.com/profile.php?id=61556280427238"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Facebook
        </a>
        {" "}and{" "}
        <a 
          href="https://www.instagram.com/throwbacksculpeper/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Instagram
        </a>
        {" "}and{" "}
        <a 
          href="https://www.tiktok.com/@throwbacks_arcade"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          TikTok
        </a>
        {" "}accounts for the latest arcade happenings!
      </p>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="rounded-lg border border-primary/40 bg-primary/5 px-6 py-4 space-y-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Event</p>
            <h2 className="text-2xl font-bold">Music Quiz Night</h2>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid037tuAwXBXqXKeuShnYPQdsXYex2aMyTMEdyLU4wqdqnJKYVwCwoddn89DqH21tCEkl%26id%3D61556280427238&show_text=false&width=500"
              width="500"
              height="498"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          <div className="text-left text-sm leading-relaxed space-y-3">
            <p className="font-medium">Tonight is Music Quiz Night! ❤️ 🎶</p>
            <p>Doors open at 4 PM, and free entertainment starts at 6 PM.</p>
            <p>If you want to play arcade games, it&apos;s $10 per person.</p>
            <p>We have food and drink specials available—please ask the bartender.</p>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

