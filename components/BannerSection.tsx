'use client'

import React, { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Banner = {
  id: number
  src: string
  alt: string
  position?: string
  fit?: 'cover' | 'contain'
}

const bannerImages: Banner[] = [
  {
    id: 1,
    src: '/banner1.png',
    alt: 'Industrial Cloud Training',
    fit: 'contain',            // ✅ ONLY FIRST BANNER
    position: 'center',
  },
  {
    id: 2,
    src: '/banner2.png',
    alt: 'Big Data Masters Program',
    fit: 'cover',
    position: 'center',
  },
  {
    id: 3,
    src: '/banner3.png',
    alt: 'Placement Highlights',
    fit: 'cover',
    position: 'center 65%',    // text safe
  },
  {
    id: 4,
    src: '/banner4.png',
    alt: 'Our Global Community',
    fit: 'cover',
    position: 'center',
  },
  {
    id: 5,
    src: '/banner5.png',
    alt: 'Learn First Pay Later',
    fit: 'cover',
    position: 'center',
  },
]

export default function BannerSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => scroll('right'), 6000)
    return () => clearInterval(timer)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const width = scrollRef.current.offsetWidth
    const max = scrollRef.current.scrollWidth - width

    if (direction === 'right') {
      scrollRef.current.scrollLeft >= max - 10
        ? scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        : scrollRef.current.scrollBy({ left: width, behavior: 'smooth' })
    } else {
      scrollRef.current.scrollLeft <= 10
        ? scrollRef.current.scrollTo({ left: max, behavior: 'smooth' })
        : scrollRef.current.scrollBy({ left: -width, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    setActiveIndex(
      Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth)
    )
  }

  return (
    <section className="w-full">
      <div className="relative overflow-hidden group">

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {bannerImages.map((banner) => (
            <div
              key={banner.id}
              className="
                min-w-full snap-center relative
                h-[240px] sm:h-[360px] md:h-[460px] lg:h-[560px]
              "
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full"
                style={{
                  objectFit: banner.fit || 'cover',
                  objectPosition: banner.position || 'center',
                }}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                scrollRef.current?.scrollTo({
                  left: i * scrollRef.current.offsetWidth,
                  behavior: 'smooth',
                })
              }
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === i ? 'w-10 bg-primary' : 'w-4 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
