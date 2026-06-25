import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useT } from '../../i18n'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const t = useT()
  const isAR = location.pathname === '/ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span className={styles.logoAccent}>S</span>ymeia
        </span>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li>
            <button onClick={() => scrollTo('productos')} type="button">{t.navbar.productos}</button>
          </li>
          <li>
            <button onClick={() => scrollTo('fundador')} type="button">{t.navbar.nosotros}</button>
          </li>
          <li>
            <button onClick={() => scrollTo('contacto')} type="button">{t.navbar.contacto}</button>
          </li>
        </ul>
        <div className={styles.right}>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${isAR ? styles.toggleActive : ''}`}
              onClick={() => navigate('/ar')}
              type="button"
            >
              🇦🇷 ES
            </button>
            <button
              className={`${styles.toggleBtn} ${!isAR ? styles.toggleActive : ''}`}
              onClick={() => navigate('/br')}
              type="button"
            >
              🇧🇷 PT
            </button>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            type="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
