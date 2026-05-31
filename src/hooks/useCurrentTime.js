import { useEffect, useState } from 'react'

export function useCurrentTime() {
  const getTime = () =>
    new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date())

  const [time, setTime] = useState(getTime)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTime()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return time
}
