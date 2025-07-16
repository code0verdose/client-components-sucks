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
        className="relative inline-flex size-12 items-center justify-center overflow-hidden rounded-xl transition-transform duration-200 hover:scale-110"
        aria-label="Главная страница"
      >
        {/* Вращающийся градиентный фон */}
        <div className="size-22 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

        {/* Внутренний квадрат с фоном */}
        <div className="relative flex size-10 items-center justify-center rounded-lg bg-white/50">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
            CCS
          </span>
        </div>

        {/* Сияющий эффект */}
        <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20" />
      </a>
    </div>
  )
}
