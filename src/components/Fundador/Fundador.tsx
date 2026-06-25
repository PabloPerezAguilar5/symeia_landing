import { useRef, useEffect } from 'react'
import pabloImg from '../../assets/images/pablo.png'
import { useT } from '../../i18n'
import styles from './Fundador.module.css'

const Fundador = () => {
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
    <section id="fundador" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <img src={pabloImg} alt="Pablo Martin Perez Aguilar" className={styles.avatar} />
        <h2 className={styles.name}>Pablo Martin Perez Aguilar</h2>
        <p className={styles.role}>{t.fundador.role}</p>
        <p className={styles.bio}>{t.fundador.bio}</p>
        <a href={t.fundador.linkedinHref} className={styles.linkedin}>
          {t.fundador.linkedin}
        </a>
      </div>
    </section>
  )
}

export default Fundador
