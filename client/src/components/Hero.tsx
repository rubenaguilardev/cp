import { ArrowBigRight } from "lucide-react"
import heroImg from '../assets/hero/hero-img.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              Your Trusted Partner for Quality Drywall Repairs
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-muted max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-100 leading-relaxed">
              Professional drywall patching, crack repair, and wall restoration for residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full flex items-center justify-center space-x-2 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 cursor-pointer">
                <span>Get a Free Estimate</span>
                <ArrowBigRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"/>
              </button>
            </div>
            <p className="text-muted text-lg lg:text-xl font-bold leading-relaxed animate-in slide-in-from-bottom duration-700 delay-400">
              Serving Inland Empire & LA County   |   Fast & Reliable Service  |  Satisfaction Guaranteed   
            </p>
          </div>
          <div className="relative animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-black/3 rounded-3xl p-2">
                <img src={heroImg} alt="remodeled hallway" className="w-full aspect-4/5 object-cover rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero