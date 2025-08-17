import { cocktailList } from "../consts/navlinks"


const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
      <img src="" alt="" />
      <img src="" alt="" />

      <div className="list">
        <div className="popular">
             <h2>Most popular cocktails: </h2>
             <ul>
                {cocktailList.map((drink)=>(
                    <li key={drink.name}>
                        <div className="md:me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail} </p>
                        </div>
                        <span>- {drink.price}</span>
                    </li>
                ))}
             </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
