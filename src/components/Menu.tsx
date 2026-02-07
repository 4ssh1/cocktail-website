import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { sliderLists } from "../consts"

function Menu() {
    const [currIndex, setCurrIndex] = useState(0)
    const allCocktails = sliderLists.length
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        gsap.fromTo("#title", {opacity: 0}, {opacity: 1, duration: 1})
        gsap.fromTo(".cockail-img", {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut"})
        gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut"})
        gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut"})
    }, [currIndex])

    const goToSlide = (ind: number) => {
        const newInd = (ind + allCocktails) % allCocktails
        setCurrIndex(newInd)
    }

    const cocktailAt = (indexwith: number) => {
        return sliderLists[(currIndex + indexwith + allCocktails) % allCocktails]
    }

    const currentCocktail = cocktailAt(0)
    const prevCocktail = cocktailAt(-1)
    const nextCocktail = cocktailAt(1)

    console.log(currIndex, currentCocktail.name)

    return (
        <section id="menu" aria-labelledby="menu-heading" >
            <div className="flex justify-between items-center">
                <img src="/hero-left-leaf.png" alt="left-leaf" id="mi-left-leaf" className="w-48" />
                <img src="/hero-right-leaf.png" alt="right-leaf" id="mi-right-leaf" className="w-48" />
            </div>

            <h2 id="menu-heading" className="text-center text-4xl sm:text-7xl mb-8 text"> Cocktail Menu</h2>

            <div className="flex justify-between items-center gap-6">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currIndex

                    return (
                        <div className="px-3" key={cocktail.id}>
                            <div className={`w-full cursor-pointer hover:text-white/70 text-xs sm:text-lg  ${isActive ? 'text-white border-white' : "text-white/50 border-white/50"}`}
                                onClick={() => goToSlide(index)}>
                                {cocktail.name}
                                <hr />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="content mt-20 sm:mt-30 px-3">
                <div className="flex justify-between  w-full">

                    <div className="flex-col px-1.5 md:px-3" >
                        <div>
                            <span className="md:w-40 inline-block text-[11px] w-20 md:text-[16px] text-nowrap">{prevCocktail.name}</span>
                            <img src="/left-arr.png" alt="arrow" className="md:size-20 size-10 rounded-full bg-green-600 p-2 mt-5 cursor-pointer" onClick={() => goToSlide(currIndex - 1)} />
                        </div>
                    </div>

                    <div className="size-52 md:size-86 rounded-full overflow-hidden shadow-lg cockail-img">
                        <img src={currentCocktail.image} className="object-cover size-full" alt="img" />
                    </div>
                    <div className="justify-items-end" >
                        <span className="md:w-40 inline-block text-end text-[11px] text-nowrap w-20 md:text-[16px]">{nextCocktail.name}</span >
                        <img src="/right-arr.png" alt="arrow" className="md:size-20 size-10 rounded-full bg-white mt-5 cursor-pointer" onClick={() => goToSlide(currIndex + 1)} />
                    </div>
                </div>
            </div>
            <div className="recipe">
                <div className="info" ref={contentRef}>
                    <p>Recipes for: </p>
                    <p id="title" className="text">{currentCocktail.name}</p>
                </div>
                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>

        </section>
    )
}

export default Menu
