import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

type LogoProps = ComponentPropsWithRef<'div'> & {
  className?: string
}

export const Logo = (props: LogoProps) => {
  const { className = '', ...otherProps } = props

  return (
    <div className={clsx('flex-shrink-0', className)} {...otherProps}>
      <a
        href="/"
        className="text-2xl font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600"
      >
        Logo
      </a>
    </div>
  )
}
