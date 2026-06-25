import { useRef, useEffect } from 'react'
import { useT } from '../../i18n'
import styles from './Productos.module.css'

const Productos = () => {
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
    <section id="productos" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t.productos.heading}</h2>
        <div className={styles.single}>
          <div className={styles.card}>
            <span className={styles.badgeActive}>{t.productos.badge}</span>
            <h3 className={styles.productName}>Wendly</h3>
            <p className={styles.productDesc}>{t.productos.desc}</p>
            <a
              href="https://hellowendly.symeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productLink}
            >
              {t.productos.link}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productos
