import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => (
  <main className={styles.home}>
    <div className={styles.inner}>
      <p className={styles.subtitle}>
        Una sola landing. Dos países. Elegí tu versión y seguí con la mejor experiencia.
      </p>
      <h1 className={styles.title}>Symeia para Brasil y Argentina</h1>
      <div className={styles.grid}>
        <Link to="/br" className={styles.button}>
          🇧🇷 Brasil
        </Link>
        <Link to="/ar" className={styles.button}>
          🇦🇷 Argentina
        </Link>
      </div>
    </div>
  </main>
)

export default Home
