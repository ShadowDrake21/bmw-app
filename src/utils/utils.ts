import { useEffect, useMemo, useState } from 'react'

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const changeDisplay = (isToggled: boolean, element?: HTMLElement) => {
  let displayStyle
  if (element) {
    displayStyle = element?.style.display || 'none'
  } else {
    return (displayStyle = isToggled ? 'block' : 'hidden')
  }

  return (displayStyle = displayStyle === 'none' ? 'block' : 'none')
}

export function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
