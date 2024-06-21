import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Education from "./components/Education"
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
        </div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Technologies" element={<section><Technologies /></section>} />
        <Route path="/Education" element={<section><Education /></section>} />
        <Route path="/Experience" element={<section><Experience /></section>} />
        <Route path="/Project" element={<section><Project /></section>} />
        <Route path="/Contact" element={<section><Contact /></section>} />
      </Routes>
      {/* <Hero/>
      <About/>
      <Technologies/>
      <Education/>
      <Experience/>
      <Project/>
      <Contact/> */}
      </div>
    </div>
  )
}

export default App