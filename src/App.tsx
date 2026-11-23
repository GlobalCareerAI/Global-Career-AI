import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedJobs from './components/FeaturedJobs'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedJobs />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
