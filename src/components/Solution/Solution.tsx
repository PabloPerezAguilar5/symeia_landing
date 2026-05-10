import AnimatedSection from '../shared/AnimatedSection'
import VideoPlaceholder from '../shared/VideoPlaceholder'
import styles from './Solution.module.css'

type SolutionProps = {
  chatbotVideoId?: string
  crmVideoId?: string
  demoVideoId?: string
}

const Solution = ({ chatbotVideoId, crmVideoId, demoVideoId }: SolutionProps) => (
  <section className={styles.solution}>
    <div className="container">
      <div className={styles.header}>
        <h2>Conheça a Symeia</h2>
        <p>
          Dois sistemas. Uma só plataforma. Tudo pensado para clínicas estéticas.
        </p>
      </div>

      <AnimatedSection delay={0} className={styles.block}>
        <div className={styles.grid}>
          <div className={styles.media}>
            <VideoPlaceholder label="📱 Mockup WhatsApp" youtubeId={chatbotVideoId} />
          </div>
          <div className={styles.content}>
            <h3>🤖 Seu atendente mais dedicado</h3>
            <p>Trabalha 24h, nunca falta, nunca reclama.</p>
            <ul>
              <li>✅ Responde dúvidas sobre procedimentos, preços e médicos automaticamente</li>
              <li>✅ Agenda, confirma e cancela consultas pelo WhatsApp</li>
              <li>✅ Manda lembretes automáticos para reduzir faltas</li>
              <li>✅ Atende enquanto você dorme, viaja ou descansa</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100} className={styles.block}>
        <div className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.content}>
            <h3>📊 O painel de controle que sua clínica nunca teve.</h3>
            <p>Dashboard completo com faturamento, procedimentos e performance dos médicos.</p>
            <ul>
              <li>✅ Dashboard completo com faturamento, procedimentos e performance dos médicos</li>
              <li>✅ Agenda do mês inteira em um só lugar</li>
              <li>✅ Gestão de pacientes, histórico e follow-up</li>
              <li>✅ Assistente interno para sua equipe adicionar, cancelar e consultar agendamentos</li>
            </ul>
          </div>
          <div className={styles.media}>
            <VideoPlaceholder label="🖥️ Dashboard CRM" youtubeId={crmVideoId} />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
)

export default Solution
