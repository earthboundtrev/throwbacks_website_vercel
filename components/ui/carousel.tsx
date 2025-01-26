"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface CarouselImage {
  url: string
  alt: string
}

export interface CarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export default function Carousel({ images, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<CarouselImage | null>(null)
  const dotsPerPage = 8
  const currentDotSet = Math.floor(currentIndex / dotsPerPage)
  const totalDotSets = Math.ceil(images.length / dotsPerPage)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoPlayInterval])

  const getDotIndices = () => {
    const start = currentDotSet * dotsPerPage
    const end = Math.min(start + dotsPerPage, images.length)
    return Array.from({ length: end - start }, (_, i) => start + i)
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg neon-border pixel-corners">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-[1000/667] object-contain bg-black cursor-pointer"
                onClick={() => setZoomedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white rounded-full neon-border"
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white rounded-full neon-border"
        onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {getDotIndices().map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-[#FF6B00] neon-border' 
                : 'bg-white/50 hover:bg-[#FF6B00]/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {zoomedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              className="absolute -top-4 -right-4 bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white rounded-full neon-border"
              onClick={() => setZoomedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={zoomedImage.url}
              alt={zoomedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
