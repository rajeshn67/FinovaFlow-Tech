import './App.css'
import { CTA } from './components/CTA'
import { Excellence } from './components/Excellence'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Stats } from './components/Stats'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Excellence />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
