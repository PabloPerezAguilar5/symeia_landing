import AnimatedSection from '../shared/AnimatedSection'
import styles from './Results.module.css'

type ResultsMetric = {
  value: string
  color: string
  text: string
}

type ResultsProps = {
  title?: string
  metrics?: ResultsMetric[]
}

const defaultMetrics: ResultsMetric[] = [
  { value: '-80%', color: 'var(--violet)', text: 'de perguntas repetitivas respondidas pela equipe' },
  { value: '48h', color: 'var(--green)', text: 'para sua clínica estar 100% operando com a Symeia' },
  { value: '24/7', color: 'var(--pink)', text: 'de atendimento sem precisar de ninguém' },
]

const Results = ({
  title = 'Resultados que sua clínica puede esperar',
  metrics = defaultMetrics,
}: ResultsProps) => (
  <section className={styles.results}>
    <div className="container">
      <div className={styles.inner}>
        <h2>{title}</h2>
        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.value} delay={index * 100}>
              <div className={styles.card}>
                <div className={styles.value} style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <p className={styles.text}>{metric.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Results
