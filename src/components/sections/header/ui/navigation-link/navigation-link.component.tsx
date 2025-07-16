import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

type NavigationLinkProps = ComponentPropsWithRef<'a'> & {
  href: string
  children: React.ReactNode
  className?: string
  isMobile?: boolean
}

export const NavigationLink = (props: NavigationLinkProps) => {
  const { href, children, className = '', isMobile = false, ...otherProps } = props

  const baseClasses = isMobile
    ? 'block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200'
    : 'text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'

  return (
    <a href={href} className={clsx(baseClasses, className)} {...otherProps}>
      {children}
    </a>
  )
}
