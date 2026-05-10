import AnimatedSection from '../shared/AnimatedSection'
import VideoPlaceholder from '../shared/VideoPlaceholder'
import styles from './Hero.module.css'

const Hero = () => {
  const handleClick = () => {
    const target = document.getElementById('cta')
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <AnimatedSection delay={0}>
          <span className={styles.pill}>✦ IA para clínicas estéticas</span>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className={styles.title}>
            As clínicas estéticas que mais crescem no Brasil já automatizaram o atendimento. E a sua?
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className={styles.subtitle}>
            Chatbot inteligente + CRM completo. Sua clínica atendendo, agendando e crescendo 24h por dia.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <button className={styles.ctaButton} type="button" onClick={handleClick}>
            → Quero automatizar minha clínica
          </button>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className={styles.videoWrapper}>
            <VideoPlaceholder label="🎬 Demo video" youtubeId="rui78BOV_7U" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Hero
