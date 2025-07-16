export type NavigationItem = {
  href: string
  label: string
}

export const NAVIGATION_LINKS: NavigationItem[] = [
  { href: '/about', label: 'О нас' },
  { href: '/services', label: 'Услуги' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/blog', label: 'Блог' },
  { href: '/contact', label: 'Контакты' },
]

export const CTA_LINK: NavigationItem = {
  href: '/get-started',
  label: 'Начать',
}
