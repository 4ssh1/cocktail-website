import { useState, useRef } from "react"
import { sliderLists } from "../consts"

function Menu() {
    const [currIndex, setCurrIndex] = useState(0)
    const allCocktails = sliderLists.length
    const contentRef = useRef<HTMLDivElement>(null)

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

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <div className="flex justify-between items-center">
                <img src="/hero-left-leaf.png" alt="left-leaf" id="mi-left-leaf" className="w-48" />
                <img src="/hero-right-leaf.png" alt="right-leaf" id="mi-right-leaf" className="w-48" />
            </div>

            <h2 id="menu-heading" className="text-center text-4xl sm:text-7xl mb-8 color"> Cocktail Menu</h2>

            <div className="flex justify-between items-center gap-6">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currIndex

                    return (
                        <div className="px-3">
                            <div key={cocktail.id} className={`w-full cursor-pointer hover:text-white/70 text-xs sm:text-lg  ${isActive ? 'text-white border-white' : "text-white/50 border-white/50"}`}
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

                    <div className="flex-col px-3" >
                        <div>
                            <span className="w-40 inline-block">{prevCocktail.name}</span>
                            <img src="/left-arr.png" alt="arrow" className="md:size-20 size-10 rounded-full bg-white p-2 mt-5 cursor-pointer" onClick={() => goToSlide(currIndex - 1)} />
                        </div>
                    </div>

                    <div className="w-56 h-56 md:size-86 rounded-full overflow-hidden shadow-lg">
                        <img src={currentCocktail.image} className="object-cover size-full" alt="img" />
                    </div>
                    <div className="justify-items-end" >
                        <span className="w-40 inline-block text-end">{nextCocktail.name}</span >
                        <img src="/right-arr.png" alt="arrow" className="md:size-20 size-10 rounded-full bg-white mt-5 cursor-pointer" onClick={() => goToSlide(currIndex + 1)} />
                    </div>
                </div>
            </div>
            <div className="recipe">
                <div className="title" ref={contentRef}>
                    <p>Recipes for: </p>
                    <p id="title">{currentCocktail.name}</p>
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
