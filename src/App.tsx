import gsap from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"
import _SplitText from "gsap/SplitText"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"

gsap.registerPlugin(_ScrollTrigger, _SplitText)

function App() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
