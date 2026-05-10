import { ReactNode, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

type AnimatedSectionProps = {
  children: ReactNode
  delay?: number
  className?: string
}

const AnimatedSection = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const style = useMemo(
    () => ({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }),
    [delay, inView],
  )

  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  )
}

export default AnimatedSection
