"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { type CarouselProps } from '@/components/ui/carousel'

const Carousel = dynamic(() => import('@/components/ui/carousel'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
})

function LoadingPlaceholder() {
  return (
    <div className="w-full aspect-[1000/667] bg-muted animate-pulse rounded-lg" />
  )
}

interface MenuCarouselProps {
  images: {
    url: string
    alt: string
  }[]
}

export default function MenuCarousel({ images }: MenuCarouselProps) {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Carousel images={images} />
      </Suspense>
    </div>
  )
} 