import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type PopoverModalProps = ComponentPropsWithoutRef<'div'> & {
  className?: string
  children: React.ReactNode
  popoverId: string
}

export const PopoverModal = (props: PopoverModalProps) => {
  const { children, className = '', popoverId, ...otherProps } = props

  return (
    <div
      id={popoverId}
      popover="auto"
      className={clsx('fixed inset-0 z-50 h-dvh w-screen bg-black/50 p-4 backdrop-blur-sm', className)}
      {...otherProps}
    >
      {children}
    </div>
  )
}
