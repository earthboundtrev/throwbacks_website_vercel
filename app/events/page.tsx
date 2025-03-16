"use client"
import { useState, useEffect } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Convert your events data to FullCalendar format
const events = [
  {
    title: "CLOSED",
    daysOfWeek: [1, 2], // Monday and Tuesday
    display: 'background',
    color: 'rgba(255, 0, 0, 0.1)', // Subtle red background
    classNames: ['closed-day'],
    description: "The arcade is closed on Mondays and Tuesdays.",
    isRegular: true,
  },
  {
    title: "Family Nite",
    daysOfWeek: [3], // Wednesday is 3 (0 = Sunday, 1 = Monday, etc.)
    startTime: '17:00:00', // 5:00 PM
    endTime: '21:00:00', // 9:00 PM
    description:
      "Join us for Family Night every Wednesday! Only $8 admission with all 70+ games on freeplay. A perfect evening of arcade fun for the whole family. Special food and drink options available.",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/family_nite.jpg",
    isRegular: true,
  },
  {
    title: "Throwback Thursday",
    daysOfWeek: [4], // Thursday is 4
    startTime: '17:00:00', // 5:00 PM
    endTime: '21:00:00', // 9:00 PM
    description:
      "Join us for our weekly Throwback Thursday! Only $10 admission with all 70 games on freeplay. Enjoy special deals on food and drinks including $8 Cheese Pizza, $3 Chips & Salsa, and beer specials.",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwback_thursday_tonight.jpg",
    isRegular: true,
  },
  // For Spirit Nights, you'll need to add specific dates when they occur
  {
    title: "Spirit Nights",
    start: '2024-01-29T17:30:00', // Combine date and time
    end: '2024-01-29T20:30:00',   // Combine date and time
    description:
      "Support local schools during our Spirit Nights! $10.00 admission includes access to all games, with food available for purchase. Parent supervision required - this is not a drop-off event. Remember to mention your school's code!",
    image: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/spirit_night_1-29.jpg",
    isRegular: false,
  }
]

// Add this CSS object for calendar styling
const calendarStyles = {
  '.fc': {
    '--fc-border-color': '#FF6B00',
    '--fc-button-text-color': '#fff',
    '--fc-button-bg-color': '#FF6B00',
    '--fc-button-border-color': '#FF6B00',
    '--fc-button-hover-bg-color': '#FF8533',
    '--fc-button-hover-border-color': '#FF8533',
    '--fc-button-active-bg-color': '#FF8533',
    '--fc-today-bg-color': 'transparent',
    '--fc-neutral-text-color': '#fff',
  },
  '.fc .fc-event:not(.closed-day)': {
    cursor: 'pointer',
    backgroundColor: '#FF6B00',  // Base orange color
    '&:hover': {
      backgroundColor: '#FF8533',  // Same hover color as the Month button
      borderColor: '#FF8533',      // Same hover border color as the Month button
    }
  },
  '.fc .fc-toolbar-title': {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '1.2rem',
    color: '#FF6B00',
    textShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
  },
  '.fc .fc-button': {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '0.8rem',
    padding: '0.5rem 1rem',
    textTransform: 'uppercase',
    borderRadius: '0',
  },
  '.fc .fc-daygrid-day': {
    transition: 'background-color 0.2s',
  },
  '.fc .fc-daygrid-day:hover': {
    backgroundColor: 'rgba(255, 107, 0, 0.05)',
  },
  '.fc .fc-daygrid-day.fc-day-today': {
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
  },
  '.fc .fc-col-header-cell': {
    backgroundColor: '#1a1a1a !important',
    color: '#FF6B00 !important',
    padding: '8px !important',
    fontFamily: '"Press Start 2P", cursive !important',
    fontSize: '0.8rem !important',
    fontWeight: 'bold !important',
    textTransform: 'uppercase !important',
    borderColor: '#FF6B00 !important',
    WebkitTextFillColor: '#FF6B00 !important',
    WebkitBackgroundClip: 'text !important',
    textShadow: '0 0 10px rgba(255, 107, 0, 0.5) !important',
    position: 'relative !important',
  },
  '.fc .fc-col-header-cell::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  '.fc .fc-col-header-cell-cushion': {
    position: 'relative',
    zIndex: 2,
    color: '#FF6B00 !important',
    opacity: '1 !important',
    visibility: 'visible !important',
    display: 'block !important',
    padding: '4px !important',
    textShadow: '0 0 10px rgba(255, 107, 0, 0.5) !important',
    background: 'linear-gradient(to bottom, rgba(255, 107, 0, 0.2), transparent)',
  },
  '.fc .fc-col-header': {
    background: 'transparent !important',
  },
  '.fc thead': {
    color: '#FF6B00 !important',
  },
  '.fc .fc-daygrid-day-number': {
    color: '#fff',
    padding: '0.5rem',
  },
  '.fc .fc-event': {
    borderRadius: '0',
    clipPath: `polygon(
      0 4px, 4px 4px, 4px 0,
      calc(100% - 4px) 0, calc(100% - 4px) 4px,
      100% 4px, 100% calc(100% - 4px),
      calc(100% - 4px) calc(100% - 4px),
      calc(100% - 4px) 100%, 4px 100%,
      4px calc(100% - 4px), 0 calc(100% - 4px)
    )`,
    whiteSpace: 'normal !important',
    minHeight: '50px',
    height: 'auto !important',
    maxHeight: 'none !important',
  },
  '.fc .fc-event-main': {
    whiteSpace: 'normal !important',
    overflow: 'visible !important',
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'column',
  },
  '.fc .fc-event-title': {
    whiteSpace: 'normal !important',
    overflow: 'visible !important',
    display: 'block !important',
    fontSize: '0.7rem',
    lineHeight: '1.1',
    wordBreak: 'break-word',
    width: '100%',
  },
  '.fc .fc-event-time': {
    fontSize: '0.7rem',
    whiteSpace: 'normal !important',
    display: 'block',
    width: '100%',
  },
  '.fc-theme-standard td, .fc-theme-standard th': {
    borderColor: '#FF6B00',
  },
  '.fc-theme-standard .fc-scrollgrid': {
    borderColor: '#FF6B00',
    boxShadow: '0 0 10px rgba(255, 107, 0, 0.2)',
  },
  '.fc-day-past, .fc-day-future': {
    color: '#fff !important',
  },
  '.fc-day-today': {
    color: '#FF6B00 !important',
  },
  // Super aggressive header styling
  '.fc table thead': {
    backgroundColor: '#1a1a1a !important',
    color: '#FF6B00 !important',
  },
  '.fc table thead th': {
    backgroundColor: '#1a1a1a !important',
    color: '#FF6B00 !important',
    borderColor: '#FF6B00 !important',
  },
  '.fc table thead th a': {
    color: '#FF6B00 !important',
    textDecoration: 'none !important',
  },
  '.fc-theme-standard thead, .fc-theme-standard thead tr, .fc-theme-standard thead th': {
    backgroundColor: '#1a1a1a !important',
  },
  '.fc .fc-scrollgrid-section-header *': {
    backgroundColor: '#1a1a1a !important',
    color: '#FF6B00 !important',
  },
  '.fc .fc-event.not-closed-day': {
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 12px rgba(255, 107, 0, 0.3)',
      zIndex: 5,
    }
  },
  '.fc .fc-event-main:not(.closed-day)': {
    '&:hover': {
      backgroundColor: 'rgba(255, 107, 0, 0.1)',
    }
  },
}

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Add debugging useEffect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .fc-col-header-cell {
        background-color: #1a1a1a !important;
      }
      .fc-col-header-cell-cushion {
        color: #FF6B00 !important;
        opacity: 1 !important;
        visibility: visible !important;
        text-shadow: 0 0 10px rgba(255, 107, 0, 0.5) !important;
      }
      .fc-scrollgrid-sync-inner {
        background-color: #1a1a1a !important;
      }
      .fc thead th {
        background-color: #1a1a1a !important;
      }
      .fc thead span {
        color: #FF6B00 !important;
      }

      // Calendar cell background styling
      .fc-daygrid-day {
        background-color: #1a1a1a !important;
      }
      
      // Add a subtle gradient to make it less flat
      .fc-daygrid-day-frame {
        background-color: #2a2a2a !important;
        transition: background-color 0.2s ease;
      }

      // Slightly lighter hover state
      .fc-daygrid-day:hover {
        background-color: #333333 !important;
      }

      // Today's date styling
      .fc-day-today {
        background-color: rgba(255, 107, 0, 0.1) !important;
      }

      // Numbers in the cells
      .fc-daygrid-day-number {
        color: #ffffff !important;
        opacity: 0.8;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">Events Calendar</h1>
      <p className="text-center text-muted-foreground mb-8">
        Check out our upcoming events! Click the event to see more details! Follow us on{" "}
        <a 
          href="https://www.facebook.com/profile.php?id=61556280427238"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Facebook
        </a>
        {" "}for the latest arcade happenings!
      </p>
      
      <div className="mb-8 pixel-corners p-4 bg-card">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events.sort((a, b) => {
            // If one event is regular and the other isn't, show the non-regular event first
            if (a.isRegular && !b.isRegular) return 1;
            if (!a.isRegular && b.isRegular) return -1;
            return 0;
          })}
          eventClick={(info) => {
            if (info.event.extendedProps.image) {
              setSelectedImage(info.event.extendedProps.image);
            }
          }}
          height="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          buttonText={{
            today: 'Today',
            month: 'Month',
          }}
          dayMaxEvents={false}
          displayEventTime={false}
          eventDisplay="block"
          eventOverlap={true}
        />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-[90vw] max-h-[90vh] relative w-full flex flex-col items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 z-50"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="bg-card p-4 rounded-lg w-full max-w-4xl mx-auto flex flex-col items-center">
              <div className="w-full flex justify-center">
                <div className="relative w-full aspect-[4/3] max-w-3xl">
                  <Image 
                    src={selectedImage} 
                    alt="Event details"
                    fill
                    className="object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
              <div className="text-center w-full max-w-2xl mt-4">
                <h3 className="text-xl font-bold mb-2">{events.find(event => event.image === selectedImage)?.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

