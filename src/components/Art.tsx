import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import { featureLists, goodLists } from "../consts"
import gsap from "gsap"

const Art = () => {
  const isMobile = useMediaQuery({maxWidth: 768})

  useGSAP(()=> {
    const start = isMobile ? 'top 20%' : 'top top'
  
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5, //smooth scroll control,
        pin: true
      }
    })

    maskTimeline.to('.will-fade', {
      opacity: 0, 
      stagger: 0.2,
      ease: "power1.inOut"
    }).to('.masked', {
      scale: 1.3, 
      maskPosition: 'center',
      maskSize: '400%',
      duration: 1,
      ease: "power1.inOut"
    })
  })
  return (
    <div id="work">
        <h2 className="text-7xl opacity-70 text-center will-fade">The Art</h2>
      <div className="container mx-auto h-[100vh] flex flex-col justify-center items-center radial-gradient relative">
        <div className="content w-full">
            <div className="flex flex-col gap-10 md:flex-row md:gap-0 justify-between px-5">
              <ul className="space-y-4 will-fade opacity-100">
                 {goodLists.map((feat, index)=> (
                  <li key={index}>
                      <p className="exo-2">{feat}</p>
                  </li>
                 ))}
              </ul>
              <ul className="space-y-4 will-fade opacity-100">
                 {featureLists.map((feat, index)=> (
                  <li key={index}>
                      <p className="exo-2">{feat}</p>
                  </li>
                 ))}
              </ul>
            </div>
        </div>

        <div className="abs-center size-48 masked-img ">
          <img src="/under-img.png" alt="cocktail" className="size-full object-cover masked" />
        </div>

        <div className="masked-cont translate-y-20">
          <h2>Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3 >Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink, it is a carefully crafted moment made just for you</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Art
