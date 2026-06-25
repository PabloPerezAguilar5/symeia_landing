import { useRef, useEffect } from 'react'
import { useT } from '../../i18n'
import styles from './Contacto.module.css'

const Contacto = () => {
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
    <section id="contacto" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t.contacto.heading}</h2>
        <p className={styles.body}>{t.contacto.body}</p>
        <a href="mailto:hello@symeia.com" className={styles.email}>
          hello@symeia.com
        </a>
        <div className={styles.buttons}>
          <a
            href={`mailto:hello@symeia.com?subject=${t.contacto.btn1Subject}`}
            className={styles.ghostBtn}
          >
            {t.contacto.btn1}
          </a>
          <a
            href={`mailto:hello@symeia.com?subject=${t.contacto.btn2Subject}`}
            className={styles.ghostBtn}
          >
            {t.contacto.btn2}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
