import { useRef, useEffect } from 'react'
import { useT } from '../../i18n'
import styles from './Mision.module.css'

const Mision = () => {
  const ref = useRef<HTMLElement>(null)
  const t = useT()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="mision" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {t.mision.heading} <span className={styles.accent}>{t.mision.accent}</span>
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.body}>{t.mision.body}</p>
        </div>
      </div>
    </section>
  )
}

export default Mision
