import AnimatedSection from '../shared/AnimatedSection'
import styles from './Results.module.css'

const metrics = [
  { value: '-80%', color: 'var(--violet)', text: 'de perguntas repetitivas respondidas pela equipe' },
  { value: '48h', color: 'var(--green)', text: 'para sua clínica estar 100% operando com a Symeia' },
  { value: '24/7', color: 'var(--pink)', text: 'de atendimento sem precisar de ninguém' },
]

const Results = () => (
  <section className={styles.results}>
    <div className="container">
      <div className={styles.inner}>
        <h2>Resultados que sua clínica pode esperar</h2>
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
        <div className={styles.guarantee}>
          <div className={styles.icon}>🔒</div>
          <p className={styles.guaranteeText}>
            Confiamos tanto no que construímos que a proposta é simples:
          </p>
          <p className={styles.guaranteeStrong}>
            Se em 15 dias você não estiver satisfeito, devolvemos tudo. Sem burocracia. Sem perguntas.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Results
