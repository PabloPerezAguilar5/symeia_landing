import AnimatedSection from '../shared/AnimatedSection'
import VideoPlaceholder from '../shared/VideoPlaceholder'
import styles from './Solution.module.css'

type SolutionBlock = {
  videoLabel: string
  youtubeId?: string
  title: string
  text: string
  items: string[]
  reverse?: boolean
}

type SolutionProps = {
  headerTitle?: string
  headerText?: string
  blocks?: SolutionBlock[]
}

const defaultBlocks: SolutionBlock[] = [
  {
    videoLabel: '📱 Mockup WhatsApp',
    youtubeId: undefined,
    title: '🤖 Seu atendente mais dedicado',
    text: 'Trabalha 24h, nunca falta, nunca reclama.',
    items: [
      '✅ Responde dúvidas sobre procedimentos, preços e médicos automaticamente',
      '✅ Agenda, confirma e cancela consultas pelo WhatsApp',
      '✅ Manda lembretes automáticos para reduzir faltas',
      '✅ Atende enquanto você dorme, viaja ou descansa',
    ],
  },
  {
    videoLabel: '🖥️ Dashboard CRM',
    youtubeId: undefined,
    title: '📊 O painel de controle que sua clínica nunca teve.',
    text: 'Dashboard completo com faturamento, procedimentos e performance dos médicos.',
    items: [
      '✅ Dashboard completo com faturamento, procedimentos e performance dos médicos',
      '✅ Agenda do mês inteira em um só lugar',
      '✅ Gestão de pacientes, histórico e follow-up',
      '✅ Assistente interno para sua equipe adicionar, cancelar e consultar agendamentos',
    ],
    reverse: true,
  },
]

const Solution = ({
  headerTitle = 'Conheça a Symeia',
  headerText = 'Dois sistemas. Uma só plataforma. Tudo pensado para clínicas estéticas.',
  blocks = defaultBlocks,
}: SolutionProps) => (
  <section className={styles.solution}>
    <div className="container">
      <div className={styles.header}>
        <h2>{headerTitle}</h2>
        <p>{headerText}</p>
      </div>

      {blocks.map((block, index) => (
        <AnimatedSection key={block.title} delay={100 * index} className={styles.block}>
          <div className={`${styles.grid} ${block.reverse ? styles.reverse : ''}`}>
            <div className={styles.media}>
              <VideoPlaceholder label={block.videoLabel} youtubeId={block.youtubeId} />
            </div>
            <div className={styles.content}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
)

export default Solution
