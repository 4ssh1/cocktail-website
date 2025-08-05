import gsap from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"
import _SplitText from "gsap/SplitText"
import Navbar from "./components/Navbar"

gsap.registerPlugin(_ScrollTrigger, _SplitText)

function App() {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App
