"use client"

import Carousel from '@/components/ui/carousel'

interface MenuCarouselProps {
  images: {
    url: string
    alt: string
  }[]
}

export default function MenuCarousel({ images }: MenuCarouselProps) {
  return (
    <div className="container mx-auto py-8">
      <Carousel images={images} />
    </div>
  )
} 