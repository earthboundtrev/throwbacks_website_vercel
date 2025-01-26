"use client"

import dynamic from 'next/dynamic'
import { type CarouselProps } from '@/components/ui/carousel'

const Carousel = dynamic(() => import('@/components/ui/carousel'), {
  ssr: false,
  loading: () => <div className="w-full aspect-[3/2] bg-muted animate-pulse rounded-lg" />,
})

export default function MenuCarousel({ images }: CarouselProps) {
  return (
    <div className="container mx-auto py-8">
      <Carousel images={images} />
    </div>
  )
} 