import { goodLists } from "../consts"

const Art = () => {
  return (
    <div id="work" className="radial-gradient">
      <div className="container mx-auto h-[100vh] pt-20 will-fade">
        <h2 className="text-center text-6xl">The Art</h2>

        <div className="content">
            <ul className="space-y-4 will-fade">
               {goodLists.map((feat, index)=> (
                <li key={index}>
                    <p className="exo-2">{feat}</p>
                </li>
               ))}
            </ul>
        </div>

        <div className="cocktail-img relative">
            <img src="under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain"/>
        </div>
      </div>
    </div>
  )
}

export default Art
