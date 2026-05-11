import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.brand}>Symeia</div>
        <p className={styles.tagline}>hello@symeia.com</p>
        <p className={styles.tagline}>Inteligência que cresce com você.</p>
        <div className={styles.links}>
          <a href="https://www.instagram.com/symeia/">Instagram</a>
          <a href="https://www.linkedin.com/in/pablomperezaguilar/">LinkedIn</a>
          <a href="https://wa.me/5511969166495?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Symeia">WhatsApp</a>
        </div>
        <p className={styles.copy}>© 2026 Symeia. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
)

export default Footer
