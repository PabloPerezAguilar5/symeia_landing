import { useT } from '../../i18n'
import styles from './Footer.module.css'

const Footer = () => {
  const t = useT()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.logoAccent}>S</span>ymeia
          </span>
          <nav className={styles.links}>
            <a href="https://hellowendly.symeia.com" target="_blank" rel="noopener noreferrer">
              Wendly
            </a>
            <a href="mailto:hello@symeia.com">{t.footer.contacto}</a>
          </nav>
        </div>
        <p className={styles.copy}>{t.footer.copy}</p>
      </div>
    </footer>
  )
}

export default Footer
