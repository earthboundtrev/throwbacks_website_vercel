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
        <div className="rounded-lg border border-primary/40 bg-primary/5 px-6 py-4 text-center space-y-4">
          <p className="font-semibold text-primary">
            Featured Event
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3184890968370771%2F&show_text=false&width=476&t=0"
              width="476"
              height="476"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="text-left text-sm leading-relaxed space-y-4">
            <p className="font-medium">
              $10 admission tonight only, plus our Ultimate Smashbros tournament that starts at 4:30 pm hosted by Matt Hobcroft and it&apos;s FREE!
            </p>

            <p>
              Doors open at 4:00 PM &mdash; we close at 9:00 PM.
            </p>

            <div>
              <p className="font-semibold">TOURNAMENT</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>1 versus 1</li>
                <li>Bring your own controller (controller may be provided if needed)</li>
                <li>Tournament legal stages only</li>
                <li>No character bans</li>
                <li>Traditional tournament rules</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">SPECIALS</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>8 wings for $8</li>
                <li>10&apos; cheese pizza for $8</li>
                <li>14&apos; cheese pizza for $10</li>
                <li>Chips and salsa basket (fresh) for $2</li>
                <li>Mozzarella sticks 6 for $6</li>
                <li>Happy Hour for drinks 4-7!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

