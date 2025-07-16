import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type CheckboxModalProps = ComponentPropsWithoutRef<'div'> & {
  className?: string
  children: React.ReactNode
}

export const CheckboxModal = (props: CheckboxModalProps) => {
  const { className = '', children, ...otherProps } = props

  return (
    <div
      className={clsx('fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm peer-checked:block', className)}
      {...otherProps}
    >
      <div className="flex min-h-full items-center justify-center p-4">{children}</div>
    </div>
  )
}
