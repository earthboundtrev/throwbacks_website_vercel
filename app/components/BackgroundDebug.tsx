'use client'

import { useEffect } from 'react'

export function BackgroundDebug() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const checkBackground = () => {
      const body = document.body
      const computedStyle = window.getComputedStyle(body)
      const backgroundColor = computedStyle.backgroundColor
      
      console.log('Current background color:', backgroundColor)
      
      // Log if it's white
      if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === '#ffffff' || backgroundColor === 'white') {
        console.log('White background detected!')
        console.log('User Agent:', navigator.userAgent)
        console.log('Window dimensions:', window.innerWidth, 'x', window.innerHeight)
        console.log('Color scheme:', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      }
    }

    checkBackground()
    
    // Check after any theme changes
    const observer = new MutationObserver(checkBackground)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    })

    return () => observer.disconnect()
  }, [])

  return null
} 