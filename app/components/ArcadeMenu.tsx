"use client"

import React, { useState } from 'react'

export default function ArcadeMenu() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Menu</h1>
      <p className="text-muted-foreground text-center mb-8 italic">
        Our menu is constantly evolving! We regularly add new items and rotate specials, so there's always something new to try. Click on the menu images below to zoom in and see all the details.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Food Menu */}
        <div className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Food Menu</h2>
          <img 
            src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_food_menu_1.jpg" 
            alt="Throwbacks Arcade Food Menu" 
            className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal("https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_food_menu_1.jpg")}
          />
          </div>

        {/* Drink Menu */}
        <div className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Drink Menu</h2>
          <img 
            src="https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_drink_menu_1.jpg" 
            alt="Throwbacks Arcade Drink Menu" 
            className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal("https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/throwbacks_drink_menu_1.jpg")}
          />
            </div>
          </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 w-10 h-10 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Menu Full Size" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
      </div>
      )}
    </div>
  )
} 