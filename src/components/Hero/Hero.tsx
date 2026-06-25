import { useT } from '../../i18n'
import styles from './Hero.module.css'

const Hero = () => {
  const t = useT()

  const scrollTo = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <button className={styles.cta} onClick={scrollTo} type="button">
          {t.hero.cta}
        </button>
      </div>
    </section>
  )
}

export default Hero
