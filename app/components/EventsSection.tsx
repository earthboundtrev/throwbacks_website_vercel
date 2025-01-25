import React from 'react'

export default function EventsSection() {
  const events = [
    {
      title: "Annual Tech Conference",
      date: "June 15, 2024",
      location: "San Francisco, CA",
      description: "Join us for a day of cutting-edge technology discussions and networking."
    },
    {
      title: "Web Development Workshop",
      date: "July 2, 2024",
      location: "Virtual Event",
      description: "Learn the latest web development techniques and best practices."
    },
    {
      title: "Startup Networking Mixer",
      date: "July 20, 2024",
      location: "New York, NY",
      description: "Connect with fellow entrepreneurs and investors in a casual setting."
    }
  ];

  return (
    <div id="events" className="py-16 bg-gradient-to-b from-[#FF6B00]/10 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="text-gray-600 mb-4">
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
              <p className="text-gray-700">{event.description}</p>
              <button className="mt-4 px-4 py-2 bg-[#FF6B00] text-white rounded hover:bg-[#FF6B00]/90 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

