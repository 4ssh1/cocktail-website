
function Hero() {
  return (
    <>
    <section id="hero" className="noisy">
        <h1 className="title">DURAZNOS</h1>
        <img src="/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
        <img src="/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">Sip the Spirit <br /> of Summer</p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair and timeless recipes- designed to delight your senses
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>

    </section>  
    </>
  )
}

export default Hero
