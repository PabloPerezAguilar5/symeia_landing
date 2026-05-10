import { useEffect, useState } from 'react'
import logo from '../../assets/images/6.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const target = document.getElementById('cta')
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandHighlight}>Symeia</span>
          <img src={logo} alt="Symeia logo" className={styles.brandLogo} />
        </div>
        <button className={styles.ctaButton} type="button" onClick={handleClick}>
          → Fale com a gente
        </button>
      </div>
    </nav>
  )
}

export default Navbar
