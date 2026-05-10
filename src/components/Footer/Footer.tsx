import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.brand}>Symeia</div>
        <p className={styles.tagline}>hello@symeia.com</p>
        <p className={styles.tagline}>Inteligência que atende, agenda e cresce com você.</p>
        <div className={styles.links}>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">WhatsApp</a>
        </div>
        <p className={styles.copy}>© 2025 Symeia. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
)

export default Footer
