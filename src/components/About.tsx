
const About = () => {
  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
            <div className="md:col-span-8 pt-10">
                <p className="badge exo-2 bg-white py-1 px-1.5 rounded-2xl inline text-black text-sm">Best Cocktails</p>
                <h1 className="paytone pt-5">Where every details matters <span className="text-white">- </span>
                    from muddle to garnish
                </h1>
            </div>
            <div>
              <p className="text text-[15px] italic">
                Every cocktail we serve is a reflection of our obsession with detail - from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable
              </p>

              <div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white">
                  More than +1200 customers
                </p>
              </div>
            </div>

            <div className="top-grid grid grid-cols-12 gap-4">
              <div className="md:col-span-3 h-48 relative">
                <img 
                  src="drink-3.jpg" 
                  alt="grid-img-1" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="md:col-span-6 h-48 relative">
                <img 
                  src="drink-5.jpg" 
                  alt="grid-img-1" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="md:col-span-3 h-48 relative">
                <img 
                  src="drink-6.jpg" 
                  alt="grid-img-1" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                />
              </div>
            </div>

            <div className="bottom-grid grid grid-cols-12 gap-4 mt-4">
              <div className="md:col-span-8 h-48 relative">
                <img 
                  src="drink-4.jpg" 
                  alt="grid-img-1" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="md:col-span-4 h-48 relative">
                <img 
                  src="drink-4.jpg" 
                  alt="grid-img-1" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                />
              </div>
            </div> 
        </div>
      </div>
    </section>
  )
}

export default About
