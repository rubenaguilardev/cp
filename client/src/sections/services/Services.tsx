import Card from "./Card"
import patch from '../../assets/services/patch.png'
import smooth from '../../assets/services/smooth.jpg'
import remodeled from '../../assets/services/remodeled.jpg'

const serviceData = [
  {
    img: patch,
    alt: 'drywall patched around electrical wiring',
    heading: 'Drywall Patching',
    description: 'From small nail holes to large damaged sections, we restore your walls to a flawless finish — seamlessly blending with your existing surface.'
  },
  {
    img: smooth,
    alt: 'contractor smoothing out finished drywall repair',
    heading: 'Crack & Damage Repair',
    description: 'We identify and fix cracks, dents, and water damage before they worsen — leaving your walls structurally sound and smooth.'
  },
  {
    img: remodeled,
    alt: 'freshly remodeled room',
    heading: 'Wall Restoration',
    description: 'We bring damaged and worn walls back to life — matching your existing texture and finish so the repair blends in perfectly, like it was never touched.'
  },
]

const Services = () => {
  return (
    <section id='services' className="relative overflow-hidden py-32">
      <div className="text-center mx-auto max-w-3xl px-6 mb-16">
        <span className="text-primary text-sm font-medium tracking-wider uppercase">WHAT WE DO</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Expert Drywall Repair Services</h2>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map(({ img, alt, heading, description }) => (
          <Card img={img} alt={alt} heading={heading} description={description} />
        ))}
      </div>
    </section>
  )
}

export default Services