import { ArrowBigRight } from "lucide-react"
import heroImg from '../assets/hero/hero-img.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div >
            <h1 className="max-w-md text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              Your Trusted Partner for Quality Drywall Repair
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-muted max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Professional drywall patching, crack repair, and wall restoration for residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="w-full md:w-60 group px-6 gap-1 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-lg front-semibold text-sm transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer">
                Get a Free Estimate
                <ArrowBigRight className="w-4 h-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"/>
              </button>
            </div>
            <p className="text-muted text-xl font-bold leading-relaxed animate-in slide-in-from-bottom duration-700 delay-400">
              Serving Inland Empire & LA County   |   Fast & Reliable Service  |  Satisfaction Guaranteed   
            </p>
          </div>
          <div className="ml-auto">
            <img src={heroImg} alt="remodeled hallway" className="rounded-3xl animate-in slide-in-from-bottom duration-700 delay-400"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero