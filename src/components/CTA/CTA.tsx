import { useEffect } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"
import styles from './CTA.module.css'

const CTA = () => {

  return (
    <section className={styles.cta} id="cta">
      <div className="container">
        <h2>Sua clínica pronta para atender 24h?</h2>
        <p>Converse com a gente. Sem compromisso, sem enrolação.</p>
        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3>Agende uma videochamada</h3>
            <p>Escolha o melhor horário para você.</p>
            <div className={styles.placeholder}>
              <Cal namespace="30min"
                calLink="symeia-fn0v09/30min"
                style={{width:"100%",height:"600px",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
              />
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.panel}>
            <h3>Prefere o WhatsApp?</h3>
            <p>Manda uma mensagem agora e a gente responde na hora.</p>
            <a
              className={styles.whatsappButton}
              href="https://wa.me/5511969166495?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Symeia"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
        <p className={styles.note}>
          Uma conversa de 30 minutos pode mudar a forma como sua clínica funciona.
        </p>
        <p className={styles.noteSmall}>
          
        </p>
      </div>
    </section>
  )
}

export default CTA
