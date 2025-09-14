import gsap from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"
import _SplitText from "gsap/SplitText"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"

gsap.registerPlugin(_ScrollTrigger, _SplitText)

function App() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
