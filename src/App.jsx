import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Services  from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs     from './components/WhyUs'
import Pricing   from './components/Pricing'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
