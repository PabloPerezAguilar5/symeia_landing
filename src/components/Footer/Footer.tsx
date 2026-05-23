import styles from './Footer.module.css'

type FooterLink = {
  label: string
  href: string
}

type FooterProps = {
  brand?: string
  email?: string
  tagline?: string
  links?: FooterLink[]
  copy?: string
}

const defaultLinks: FooterLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/hello.symeia/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablomperezaguilar/' },
  { label: 'WhatsApp', href: 'https://wa.me/5511969166495?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Symeia' },
]

const Footer = ({
  brand = 'Symeia',
  email = 'hello@symeia.com',
  tagline = 'Inteligência que cresce com você.',
  links = defaultLinks,
  copy = '© 2026 Symeia. Todos os direitos reservados.',
}: FooterProps) => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.brand}>{brand}</div>
        <p className={styles.tagline}>{email}</p>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <p className={styles.copy}>{copy}</p>
      </div>
    </div>
  </footer>
)

export default Footer
