import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navlinks } from "../consts/navlinks"

function Navbar() {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent'}, {
            backgroundColor: '#00000050', 
            filter: 'blur(0.8px)',
            duration: 1,
            ease: 'power1.inOut'
            }
        )
    })
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-0.5 justify-center">
            <img src="/drink1.png" alt="logo" width={'30px'} height={'30px'}/><p> Peach Velvet </p>
            </a>

            <ul className="hidden md:block">
                {navlinks.map(link=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
