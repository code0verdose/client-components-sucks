import { CTA_LINK, NAVIGATION_LINKS } from './lib'
import { BurgerMenu, CTAButton, Logo, NavigationLink } from './ui'

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm">
      {/* Hidden checkbox for mobile menu toggle */}
      <input type="checkbox" id="burger-toggle" className="peer hidden" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {NAVIGATION_LINKS.map((link) => (
              <NavigationLink key={link.href} href={link.href}>
                {link.label}
              </NavigationLink>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <CTAButton href={CTA_LINK.href}>{CTA_LINK.label}</CTAButton>
          </div>

          {/* Mobile menu button */}
          <BurgerMenu id="burger-toggle" />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out peer-checked:max-h-96 peer-checked:opacity-100 md:hidden"
        id="mobile-menu"
      >
        <div className="space-y-1 border-t border-gray-200 bg-white px-2 pb-3 pt-2 sm:px-3">
          {NAVIGATION_LINKS.map((link) => (
            <NavigationLink key={link.href} href={link.href} isMobile>
              {link.label}
            </NavigationLink>
          ))}
          <div className="border-t border-gray-200 pb-3 pt-4">
            <CTAButton href={CTA_LINK.href} isMobile>
              {CTA_LINK.label}
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  )
}
