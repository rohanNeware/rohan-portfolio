
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from "./components/Skills/Skills"
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Experience from './components/Experiance/Experiance'

const App = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow scrollable">
        <div className="container mx-auto px-4">
          <About />
          <Projects />
          <section id="Resume" className="bg-[#f6f3fc] py-10">
          <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8">
          <Experience />
          <Education />
        </div>
        </div>
        </section>
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
      <div className="circle-container">
        
      </div>
    </div>
  )
}

export default App
