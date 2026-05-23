import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Problem from '../components/Problem/Problem'
import Solution from '../components/Solution/Solution'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Results from '../components/Results/Results'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

const argentinaProblems = [
  {
    icon: '📱',
    title: 'Mensajes sin respuesta',
    text: 'Pacientes consultan por precio, horario y procedimiento en WhatsApp — y nadie responde rápido. Se van con la competencia.',
  },
  {
    icon: '📅',
    title: 'Agenda desordenada',
    text: 'Confirmaciones manuales, ausencias sin aviso, turnos vacíos, la paciente cancela media hora antes. Tu equipo pierde tiempo todos los días.',
  },
  {
    icon: '😓',
    title: 'Recepcionista sobrecargada',
    text: 'Atiende el teléfono, responde WhatsApp, confirma turnos y aún debe sonreír frente al paciente. No da más.',
  },
  {
    icon: '📊',
    title: 'No sabés qué pasa en tu clínica',
    text: '¿Cuánto entró este mes? ¿Qué procedimiento vende más? ¿Qué médico rinde mejor? Sin datos claros, no hay control.',
  },
  {
    icon: '⭐',
    title: 'Reputación / reseñas',
    text: 'Reseñas negativas por demora. Una paciente esperó horas por una respuesta. Resultado: una estrella en Google y un comentario que cualquier nuevo cliente va a leer.',
  },
  {
    icon: '💸',
    title: 'Control financiero',
    text: 'Pagos desorganizados. Quién pagó, quién debe, quién lo financió — todo en notas, planillas y memoria.',
  },
]

const argentinaSteps = [
  {
    number: '①',
    title: 'Nos contás sobre tu clínica',
    text: 'Una charla de 30 minutos. Procedimientos, precios, médicos, horarios. Nosotros hacemos el resto.',
  },
  {
    number: '②',
    title: 'Configuramos todo para vos',
    text: 'Armamos el chatbot con la identidad de tu clínica, integramos WhatsApp, calendario e información y habilitamos el CRM completo.',
  },
  {
    number: '③',
    title: 'Tu clínica empieza a atender sola',
    text: 'En 48 horas tu sistema esta listo, tu asistente virtual ya responde, agenda y organiza todo en tu clínica.',
  },
]

const argentinaMetrics = [
  { value: '-80%', color: 'var(--violet)', text: 'de preguntas repetitivas respondidas automáticamente' },
  { value: '48h', color: 'var(--green)', text: 'para tener la clínica 100% operativa con Symeia' },
  { value: '24/7', color: 'var(--pink)', text: 'de atención sin depender de nadie' },
]

const argentinaBlocks = [
  {
    videoLabel: '🎬 Conocé Symeia',
    youtubeId: 'ZihwLELSKdY',
    title: 'Conocé Symeia',
    text: 'Una vista rápida de cómo Symeia ayuda a clínicas estéticas a automatizar atención, agendamiento y gestión.',
    items: [
      'Asistente 24/7 para atender y agendar',
      'Integración con WhatsApp y calendario',
      'Dashboard con métricas y performance',
    ],
  },
]

const whatsappHref =
  'https://wa.me/5511969166495?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Symeia'

const Argentina = () => (
  <>
    <Navbar buttonLabel="→ Hablá con nosotros" />
    <main>
      <Hero
        title="Las clínicas estéticas que más crecen ya automatizaron su atención."
        subtitle="Chatbot inteligente + CRM completo. Tu clínica atendiendo, agendando y creciendo 24 horas al día."
        buttonText="→ Quiero automatizar mi clínica"
        showVideo={false}
      />
      <Solution
        headerTitle="Conocé Symeia"
        headerText="Dos sistemas. Una sola plataforma. Todo pensado para clínicas estéticas."
        blocks={argentinaBlocks}
      />
      <Problem
        title="¿Te suena alguna de estas situaciones?"
        problems={argentinaProblems}
        footerText="Si te identificaste con al menos uno de estos puntos, Symeia está diseñada para vos."
      />
      <HowItWorks
        heading="Empezar es más simple de lo que pensás."
        subheading="En 48 horas tu clínica ya está operando con Symeia."
        steps={argentinaSteps}
        closing="Sin complicaciones. Sin equipo de TI. Sin dolores de cabeza."
      />
      <Results title="Resultados que tu clínica puede esperar" metrics={argentinaMetrics} />
      <CTA
        heading="¿Tu clínica lista para atender 24h?"
        paragraph="Hablá con nosotros. Sin compromiso, sin vueltas."
        scheduleTitle="Agendá una videollamada"
        scheduleText="Elegí el mejor horario para vos."
        calLink="symeia-fn0v09/reunion-de-30-min"
        whatsappTitle="¿Preferís WhatsApp?"
        whatsappText="Escribinos y respondemos al instante."
        whatsappHref={whatsappHref}
        whatsappButtonText="💬 Escribir por WhatsApp"
        note="Una charla de 30 minutos puede cambiar cómo funciona tu clínica."
      />
    </main>
    <Footer
      email="hello@symeia.com"
      tagline="Inteligencia que avanza con vos."
      copy="© 2026 Symeia. Todos los derechos reservados."
    />
  </>
)

export default Argentina
