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
          <p className="font-semibold text-primary">Location update</p>
          <div className="flex justify-center overflow-x-auto">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02r9ZTTEXN29DKw9DZtRYJxiSnTTfjGGAyNHGxf5vQqNnmGJEaS6HScaygzhY7ngxfl%26id%3D61556280427238&show_text=true&width=500"
              width="500"
              height="488"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

