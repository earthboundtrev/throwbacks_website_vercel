"use client"

import React from 'react'

export default function ArcadeMenu() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Arcade Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Food Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Food</h2>
          <div className="space-y-4">
            {/* Add menu items here */}
          </div>
        </section>

        {/* Drinks Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Drinks</h2>
          <div className="space-y-4">
            {/* Add drink items here */}
          </div>
        </section>

        {/* Snacks Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Snacks</h2>
          <div className="space-y-4">
            {/* Add snack items here */}
          </div>
        </section>

        {/* Specials Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Daily Specials</h2>
          <div className="space-y-4">
            {/* Add specials here */}
          </div>
        </section>
      </div>
    </div>
  )
} 