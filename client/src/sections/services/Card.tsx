type Card = {
  img: string
  alt: string
  heading: string
  description: string
}

const Card = ({ img, alt, heading, description }: Card) => {
  return (
    <div key={heading} className="group rounded-2xl overflow-hidden border border-muted/15 last:md:col-span-2 last:lg:col-span-1">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold group-hover:text-primary">{heading}</h3>
        </div>
        <p className="text-muted">{description}</p>
      </div>
    </div>

  )
}

export default Card