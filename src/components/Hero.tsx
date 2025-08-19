import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const start = isMobile ? "top 10%" : "top 10%"
  const end = isMobile ? "300% top" : "bottom top"

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" })
    const paragraphSplit = new SplitText(".subtitle", { type: "chars, lines" })

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.05,
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.5,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".left-leaf", { y: 200 }, 0)
      .to(".right-leaf", { y: -200 }, 0)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start,
        end,
        scrub: true,
        pin: true
      },
    })

    videoRef.current?.addEventListener("loadedmetadata", () => {
      if (videoRef.current) {
        timeline.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        })
      }
    })

  }, [])

  return (
    <>
      <section id="hero" className="bg">
        <h1 className="title">DURAZNOS</h1>
        <img src="/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block pl-3">
              <p className="paytone text-xs sm:text-sm">Cool. Crisp. Classic</p>
              <p className="subtitle exo-2">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails max-w-4xl flex flex-col">
              <p className="subtitle exo-2 pb-3 text-wrap break-word whitespace-normal text-xs sm:text-sm">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair and timeless recipes- designed to delight your senses
              </p>
              <a href="#cocktails exo-2">View Cocktails</a>
            </div>
          </div>
        </div>
      <div className="video absolute inset-0 top-10 bg-blend-screen">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        ></video>
      </div>
      </section>

    </>
  )
}

export default Hero
