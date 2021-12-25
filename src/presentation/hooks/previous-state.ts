import { useRef, useEffect } from 'react'

export const usePreviousState = <T>(value: T): T => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
