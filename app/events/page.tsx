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

      <div className="max-w-xl mx-auto mb-12">
        <div className="rounded-lg border border-primary/40 bg-primary/5 px-6 py-4 text-center space-y-4">
          <p className="font-semibold text-primary">
            Featured Event
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F924515293702293%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="text-left text-sm leading-relaxed space-y-2">
            <p>
              Today is March 17th is St Patrick&apos;s Day. Throwbacks Arcade will be open and PAID CASH will be hosting it with some fun music! Happy Hour is 4-7 with special drink and food prices. We will be open 4-9. Admission to the arcade is only $8!
            </p>
            <p>
              14&apos; cheese pizza is only $10<br />
              10&apos; cheese pizza is only $8<br />
              Flatbread cheese pizzas are only $7<br />
              Chicken wings are $8, mozzarella sticks are $6, basket of fries are only $4.
            </p>
            <p>
              More specials to come later this week! We also have the largest beer and cider selection in the entire county!
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

