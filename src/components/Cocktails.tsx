import { useGSAP } from "@gsap/react"
import gsap from "gsap"
// import { useMediaQuery } from "react-responsive"
import { cocktailList } from "../consts/navlinks"
import {mockTailLists} from '../consts/navlinks'

const Cocktails = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  // const left = isMobile ? "top 0%" : "top 10%"
  // const end = isMobile ? "300% top" : "bottom top"

  useGSAP(()=>{
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true
      }
    })

    timeline
    .from('#left', {
        x: -100, y:-100
      })
    .from('#right', {
      x: 200, y: 100
    })
  })


  return (
      <section className="bg ">
        <div className="list flex justify-between px-2 flex-col lg:flex-row lg:pt-35 pt-30">
          <div className="popular">
               <h2 className="md:text-2xl text-center lg:text-start pb-2 text-red-600">Most popular cocktails</h2>
               <ul>
                  {cocktailList.map((drink)=>(
                      <li key={drink.name} className="flex justify-end lg:justify-start items-center lg:border-b-2">
                          <div className="md:me-28 w-[230px] border-b-2 lg:border-b-0">
                              <h3 className="py-3 text-sm md:text-[16px]">{drink.name}</h3>
                              <p className="text-xs md:text-sm">{drink.country} | {drink.detail} </p>
                          </div>
                          <div className="text-sm md:text-[16px] text-red-700 bg-white rounded-2xl px-2">- {drink.price}</div>
                      </li>
                  ))}
               </ul>
          </div>
          <div className="loved pt-16 lg:pt-0">
               <h2 className="md:text-2xl text-amber-500">Most loved mocktails</h2>
               <ul>
                  {mockTailLists.map((drink)=>(
                      <li key={drink.name} className="flex items-center lg:border-b-2">
                          <div className="md:me-28 w-[230px] border-b-2 lg:border-b-0">
                              <h3 className="py-3 text-sm md:text-[16px]">{drink.name} </h3>
                              <p className="text-xs md:text-sm"> {drink.country} | {drink.detail} </p>
                          </div>
                          <div className="text-sm md:text-[16px] text-red-700 bg-white rounded-2xl px-2">- {drink.price}</div>
                      </li>
                  ))}
               </ul>
          </div>
        </div>
        <div className="flex justify-between items-center w-full overflow-hidden">
          <img src="/hero-left-leaf.png" alt="leaf" className="md:w-fit w-45" id="left"/>
          <img src="/hero-right-leaf.png" alt="leaf" className="md:w-fit " id="right"/> 
        </div>
      </section>
  )
}

export default Cocktails
