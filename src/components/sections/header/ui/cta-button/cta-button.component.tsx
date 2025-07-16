import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

type CTAButtonProps = ComponentPropsWithRef<'a'> & {
  href: string
  children: React.ReactNode
  className?: string
  isMobile?: boolean
}

export const CTAButton = (props: CTAButtonProps) => {
  const { href, children, className = '', isMobile = false, ...otherProps } = props

  const baseClasses = isMobile
    ? 'block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200'
    : 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'

  return (
    <a href={href} className={clsx(baseClasses, className)} {...otherProps}>
      {children}
    </a>
  )
}
