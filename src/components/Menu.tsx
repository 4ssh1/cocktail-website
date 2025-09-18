import { useState } from "react"
import { sliderLists } from "../consts"

function Menu() {
    const [currIndex, setCurrIndex] = useState(0)
    const allCocktails = sliderLists.length

    const goToSlide = (ind:number)=> {
        const newInd = (ind + allCocktails) % allCocktails
        setCurrIndex(newInd)
    }

    const cocktailAt = (indexwith: number)=>{
        return sliderLists[(currIndex + indexwith + allCocktails) % allCocktails]
    }

    const currentCocktail = cocktailAt(0)
    const prevCocktail = cocktailAt(-1)
    const nextCocktail = cocktailAt(1)

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <div className="flex justify-between">
          <img src="/hero-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
          <img src="/hero-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
      </div>

      <h2 id="menu-heading" className="sr-only"> Cocktail Menu</h2>

      <div className="">
        {sliderLists.map((cocktail, index)=> {
            const isActive = index === currIndex

            return(
                <button key={cocktail.id} className={`w-20 ${isActive ? 'text-white border-white': "text-white/50 border-white/50"}`}
                onClick={()=> goToSlide(index)}> 
                    {cocktail.name}
                </button>
            )
        })}
      </div>

        <div className="content">
            <div className="arrow">
                <button className="text-left" onClick={()=> goToSlide(currIndex - 1)}>
                    <span>{prevCocktail.name}</span>
                    <img src="" alt="" />
                </button>

                <button className="text-right" onClick={()=> goToSlide(currIndex + 1)}>
                    <span>{nextCocktail.name}</span>
                    <img src="" alt="" />
                </button>
            </div>
        </div>

        <div className="cocktail">
            <img src={currentCocktail.image} className="object-contain" alt="img" />
        </div>

    </section>
  )
}

export default Menu
