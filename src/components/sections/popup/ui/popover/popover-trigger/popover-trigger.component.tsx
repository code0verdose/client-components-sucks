import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type PopoverTriggerProps = ComponentPropsWithoutRef<'button'> & {
  popoverTarget: string
  children: React.ReactNode
  className?: string
}

export const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { popoverTarget, children, className = '', ...otherProps } = props

  return (
    <button
      popoverTarget={popoverTarget}
      className={clsx(
        'inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}
