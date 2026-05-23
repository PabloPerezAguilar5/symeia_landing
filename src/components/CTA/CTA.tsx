import Cal from '@calcom/embed-react'
import styles from './CTA.module.css'

type CTAProps = {
  heading?: string
  paragraph?: string
  scheduleTitle?: string
  scheduleText?: string
  calLink?: string
  whatsappTitle?: string
  whatsappText?: string
  whatsappHref?: string
  whatsappButtonText?: string
  note?: string
  noteSmall?: string
}

const CTA = ({
  heading = 'Sua clínica pronta para atender 24h?',
  paragraph = 'Converse com a gente. Sem compromisso, sem enrolação.',
  scheduleTitle = 'Agende uma videochamada',
  scheduleText = 'Escolha o melhor horário para você.',
  calLink = 'symeia-fn0v09/30min',
  whatsappTitle = 'Prefere o WhatsApp?',
  whatsappText = 'Manda uma mensagem agora e a gente responde na hora.',
  whatsappHref = 'https://wa.me/5511969166495?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Symeia',
  whatsappButtonText = '💬 Falar no WhatsApp',
  note = 'Uma conversa de 30 minutos pode mudar a forma como sua clínica funciona.',
  noteSmall = '',
}: CTAProps) => {
  return (
    <section className={styles.cta} id="cta">
      <div className="container">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3>{scheduleTitle}</h3>
            <p>{scheduleText}</p>
            <div className={styles.placeholder}>
              <Cal
                namespace="30min"
                calLink={calLink}
                style={{ width: '100%', height: '600px', overflow: 'scroll' }}
                config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
              />
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.panel}>
            <h3>{whatsappTitle}</h3>
            <p>{whatsappText}</p>
            <a
              className={styles.whatsappButton}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappButtonText}
            </a>
          </div>
        </div>
        <p className={styles.note}>{note}</p>
        <p className={styles.noteSmall}>{noteSmall}</p>
      </div>
    </section>
  )
}

export default CTA
