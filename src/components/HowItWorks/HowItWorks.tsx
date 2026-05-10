import AnimatedSection from '../shared/AnimatedSection'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '①',
    title: 'Você nos conta sobre sua clínica',
    text: 'Uma conversa de 30 minutos. Procedimentos, preços, médicos, horários. A gente cuida do resto.',
  },
  {
    number: '②',
    title: 'A gente configura tudo pra você',
    text: 'Montamos o chatbot com a cara da sua clínica, integramos seu WhatsApp, seu calendário, as informações da sua clínica. e configuramos o CRM completo.',
  },
  {
    number: '③',
    title: 'Sua clínica começa a atender sozinha',
    text: 'Em 48 horas seu atendente virtual já está respondendo, agendando e organizando tudo.',
  },
]

const HowItWorks = () => (
  <section className={styles.howItWorks}>
    <div className="container">
      <div className={styles.inner}>
        <h2>Começar é mais simples do que você imagina.</h2>
        <p>Em 48 horas sua clínica já está operando com a Symeia.</p>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 100} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </AnimatedSection>
          ))}
        </div>
        <p className={styles.closing}>
          Sem complicação. Sem precisar de equipe de TI. Sem dor de cabeça.
        </p>
      </div>
    </div>
  </section>
)

export default HowItWorks
