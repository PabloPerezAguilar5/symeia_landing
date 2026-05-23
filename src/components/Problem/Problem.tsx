import AnimatedSection from '../shared/AnimatedSection'
import styles from './Problem.module.css'

type ProblemItem = {
  icon: string
  title: string
  text: string
}

type ProblemProps = {
  title?: string
  problems?: ProblemItem[]
  footerText?: string
}

const defaultProblems: ProblemItem[] = [
  {
    icon: '📱',
    title: 'Mensagem sem resposta',
    text: 'Pacientes perguntando preço, horário e procedimento no WhatsApp — e ninguém responde rápido o suficiente. Eles vão para a concorrência.',
  },
  {
    icon: '📅',
    title: 'Agenda bagunçada',
    text: 'Confirmações manuais, faltas sem aviso, horários vagos, a paciente cancela meia hora antes. Sua equipe perde tempo todo dia com isso. O horário fica vago, o médico esperou, e você perdeu dinheiro sem ter como evitar.',
  },
  {
    icon: '😓',
    title: 'Recepcionista sobrecarregada',
    text: 'Ela atende o telefone, responde o WhatsApp, confirma consulta e ainda precisa sorrir para o paciente na frente. Não dá. ',
  },
  {
    icon: '📊',
    title: 'Você não sabe o que acontece na sua clínica',
    text: 'Quanto entrou esse mês? Qual procedimento vende mais? Qual médico performa melhor? Sem dados, sem controle.',
  },
  {
    icon: '⭐',
    title: 'Reputação / avaliações',
    text: 'Avaliações negativas por demora. Uma paciente esperou horas por uma resposta. Resultado: uma estrela no Google e um comentário que qualquer cliente novo vai ler.',
  },
  {
    icon: '💸',
    title: 'Controle financeiro',
    text: 'Pagamentos desorganizados. Quem pagou, quem deve, quem parcelou — tudo espalhado em anotações, planilhas e memória. Não dá pra crescer assim.',
  },
]

const Problem = ({
  title = 'Reconhece alguma dessas situações?',
  problems = defaultProblems,
  footerText = 'Se você se identificou com pelo menos um desses pontos, a Symeia foi feita para você.',
}: ProblemProps) => (
  <section className={styles.problem}>
    <div className="container">
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {problems.map((problem, index) => (
            <AnimatedSection key={problem.title} delay={100 * index}>
              <div className={styles.card}>
                <div className={styles.icon}>{problem.icon}</div>
                <h3 className={styles.cardTitle}>{problem.title}</h3>
                <p className={styles.cardText}>{problem.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <p className={styles.footerText}>{footerText}</p>
      </div>
    </div>
  </section>
)

export default Problem
