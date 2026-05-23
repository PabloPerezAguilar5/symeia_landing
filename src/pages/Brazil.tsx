import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Problem from '../components/Problem/Problem'
import Solution from '../components/Solution/Solution'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Results from '../components/Results/Results'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

const brazilBlocks = [
  {
    videoLabel: '📱 Mockup WhatsApp',
    youtubeId: 'OCv2ZNG0qbk',
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
    youtubeId: 'J7fxO7h2gd4',
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

const Brazil = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Problem />
      <Solution blocks={brazilBlocks} />
      <HowItWorks />
      <Results />
      <CTA />
    </main>
    <Footer />
  </>
)

export default Brazil
