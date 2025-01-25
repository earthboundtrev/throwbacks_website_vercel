import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#FF6B00]/10 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg">
              Welcome to our company! We are passionate about delivering innovative solutions
              that make a difference in people's lives.
            </p>
            <p>
              Founded in 2024, we've been at the forefront of technology, combining creativity
              with technical excellence to solve complex challenges.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              To provide cutting-edge solutions while maintaining the highest standards of
              quality and customer satisfaction.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovation-driven development</li>
              <li>Customer-centric approach</li>
              <li>Sustainable practices</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

