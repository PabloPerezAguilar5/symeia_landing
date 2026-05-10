import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import Solution from './components/Solution/Solution'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Results from './components/Results/Results'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution chatbotVideoId="OCv2ZNG0qbk" crmVideoId="J7fxO7h2gd4" />
        <HowItWorks />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
