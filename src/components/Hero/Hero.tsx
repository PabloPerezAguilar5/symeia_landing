import AnimatedSection from '../shared/AnimatedSection'
import VideoPlaceholder from '../shared/VideoPlaceholder'
import styles from './Hero.module.css'

type HeroProps = {
  pill?: string
  title?: string
  subtitle?: string
  buttonText?: string
  videoLabel?: string
  youtubeId?: string
  showVideo?: boolean
}

const Hero = ({
  pill = '✦ IA para clínicas estéticas',
  title = 'As clínicas estéticas que mais crescem no Brasil já automatizaram o atendimento. E a sua?',
  subtitle = 'Chatbot inteligente + CRM completo. Sua clínica atendendo, agendando e crescendo 24h por dia.',
  buttonText = '→ Quero automatizar minha clínica',
  videoLabel = '🎬 Demo video',
  youtubeId = '_7FjDhGkqBA',
  showVideo = true,
}: HeroProps) => {
  const handleClick = () => {
    const target = document.getElementById('cta')
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <AnimatedSection delay={0}>
          <span className={styles.pill}>{pill}</span>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className={styles.title}>{title}</h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className={styles.subtitle}>{subtitle}</p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <button className={styles.ctaButton} type="button" onClick={handleClick}>
            {buttonText}
          </button>
        </AnimatedSection>
        {showVideo && (
          <AnimatedSection delay={400}>
            <div className={styles.videoWrapper}>
              <VideoPlaceholder label={videoLabel} youtubeId={youtubeId} />
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}

export default Hero
