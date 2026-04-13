import { Menu, X, Paintbrush, HardHat, Image, Star, BadgeQuestionMark  } from 'lucide-react'
import logo from '../assets/header/logo.svg'
import { useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services', icon: Paintbrush },
  { href: '#about', label: 'About', icon: HardHat },
  { href: '#gallery', label: 'Gallery', icon: Image },
  { href: '#reviews', label: 'Reviews', icon: Star },
  { href: '#faq', label: 'FAQ', icon: BadgeQuestionMark}
]

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <section className="fixed top-0 w-full md:border-b md:border-foreground/20 bg-white/20 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className='flex items-end space-x-1 group cursor-pointer'>
            <div>
              <img src={logo} alt="CiscoPatch logo" className='h-10 md:h-12'/>
            </div>
            <span className='text-lg sm:text-xl md:text-2xl font-bold leading-none'>CiscoPatch</span>
          </div>
          <div className='hidden md:flex items-center font-medium space-x-6 lg:space-x-8'>
            {navLinks.map(({href, label}) => (
              <a 
                key={label}
                href={href} 
                className='font-medium hover:text-black/50 text-sm lg:text-base'
              >
                {label}
              </a>
            ))}
            <button className='text-white bg-foreground text-sm font-semibold px-6.5 py-3 rounded-[10px] cursor-pointer'>
              Contact Today
            </button>
          </div>
          
          <button 
            onClick={() => setMobileMenuIsOpen(prev => !prev)}
            className='md:hidden p-2 hover:text-black/50'
          >
            {mobileMenuIsOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {mobileMenuIsOpen && 
          <div className='md:hidden bg-foreground bg-blur-lg text-white font-medium animate-in slide-in-from-top duration-300'>
            <div className='px-4 py-10 sm:py-6 space-y-6 sm:space-y-4'>
              {navLinks.map(({href, label, icon: Icon}) => (
                <a 
                  key={label}
                  href={href} 
                  onClick={() => setMobileMenuIsOpen(false)}
                  className='block hover:text-muted lg:text-base'
                >
                  <div className='flex gap-2'>
                    {<Icon />} 
                    {label}
                  </div>
                  
                </a>
              ))}
            </div>
          </div>
        }
    </section>
  )
}

export default Header