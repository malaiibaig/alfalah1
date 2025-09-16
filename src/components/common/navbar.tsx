import {useState } from 'react'
import { Link, useRouter } from '@tanstack/react-router'
import logo from '@/assets/images/logo.png'
import Bars from '@/assets/svg/bars.svg?react'
import Phone from '@/assets/svg/phone.svg?react'
import { Button } from '@/components/ui/button'
import { constants } from '@/lib/constants'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Cross from '@/assets/svg/cross.svg?react'
import Headphones from '@/assets/svg/headphones.svg?react'
import Careers from '@/assets/svg/careers.svg?react'
import Language from '@/assets/svg/language.svg?react'

const links = [
  {
    name: 'Our Services',
    href: '/services',
    highlight: true,
  },
  {
    name: 'Financials',
    href: '/financials',
  },
  {
    name: 'Media Room',
    href: '/media-room',
  },
  {
    name: 'Branch Locator',
    href: '/branch-locator',
  },
  {
    name: 'About Us',
    href: '/aboutus',
  },
]

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.state.location.pathname
  const isLightTheme = currentPath === '/ourteam' || currentPath === '/aboutus'

  const getLinkColor = (isCurrentPage: boolean) => {
    return isCurrentPage ? 'text-primary' : 'text-black hover:text-primary'
  }

  const getContactBgColor = () => {
    if (isLightTheme) {
      return 'bg-white text-black'
    }
    return 'bg-white text-black'
  }

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-colors duration-300 bg-transparent`}
    >
      <div className="glassDiv z-10"></div>
      <svg width="0" height="0" style={{position: 'absolute', overflow: 'hidden', zIndex: 10}}>
        <defs>
            <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="2" seed="92" result="noise" />
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                <feDisplacementMap in="SourceGraphic" in2="blurred" scale="82" xChannelSelector="R"
                    yChannelSelector="G" />
            </filter>
        </defs>
      </svg>

      <div className="flex justify-between items-center h-20 container mx-auto px-4 ">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-start lg:w-1/3 h-full">
          <img
            src={logo}
            alt="logo"
            className={`h-8 md:h-16 relative z-20 ${isLightTheme ? '' : ''}`}
          />
        </Link>

        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger className='relative z-20'>
            <Button variant="secondary">
              <Bars
                className={`w-5 h-5 ${isLightTheme ? 'text-black' : 'text-white'}`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={-44}
            className="w-[100vw] lg:w-[24rem]"
          >
            <div className="flex justify-center items-center px-2 py-1.5">
              <Button
                variant="default"
                className="h-5"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Cross
                  width="6"
                  height="6"
                  className={`w-2 h-2 text-white p-1`}
                />
              </Button>
            </div>
            {links.map((link) => (
              <DropdownMenuItem
                key={link.name}
                className="cursor-pointer border-b border-gray-100 rounded-none"
              >
                <Link
                  className={`transition-colors duration-300 w-full text-center my-1 ${getLinkColor(currentPath === link.href)}`}
                  to={link.href}
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
            ))}
            <div className="flex gap-4 w-full lg:hidden mb-2 justify-center">
              <Button className="w-[50%] text-xs h-8">
                + {constants.navbar.button}
              </Button>
            </div>
            <div className="flex justify-center items-center px-2 py-1.5 gap-4">
              <div className="h-5 inline-flex items-center gap-1">
                <Phone width="10" height="10" className={`text-black`} />
                <p className="text-[0.6rem]">{constants.navbar.phone}</p>
              </div>
              <Link
                to="/"
                className="h-5 inline-flex items-center gap-1"
              >
                <Headphones
                  width="10"
                  height="10"
                  className={`w-3 h-3 text-black`}
                />
                <p className="text-[0.6rem]">{constants.navbar.contact}</p>
              </Link>
              <Link to="/" className="h-5 inline-flex items-center gap-1">
                <Careers
                  width="10"
                  height="10"
                  className={`w-3 h-3 text-black`}
                />
                <p className="text-[0.6rem]">{constants.navbar.careers}</p>
              </Link>
              <div className="h-5 inline-flex items-center gap-1">
                <Language
                  width="10"
                  height="10"
                  className={`w-3 h-3 text-black`}
                />
                <Button
                  variant="ghost"
                  className="text-black text-[0.5rem] p-0"
                >
                  ENG
                </Button>
                /
                <Button
                  variant="ghost"
                  className="text-black text-[0.5rem] p-0"
                >
                  AED
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center justify-end lg:w-1/3">
          <div
            className={`flex items-center gap-2 px-1 py-1 rounded-full relative z-20 ${getContactBgColor()}`}
          >
            <div className="flex items-center gap-2 mx-4">
              <Phone className="w-5 h-5" />
              <p>{constants.navbar.phone}</p>
            </div>
            <Button>+ {constants.navbar.button}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
