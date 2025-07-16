import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { useId } from 'react'

type CheckboxTriggerProps = ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
  className?: string
  checkboxId?: string
}

export const CheckboxTrigger = (props: CheckboxTriggerProps) => {
  const { children, className = '', checkboxId, ...otherProps } = props
  const generatedId = useId()
  const id = checkboxId || generatedId

  return (
    <>
      {/* Hidden checkbox for modal toggle */}
      <input type="checkbox" id={id} className="peer hidden" />

      <label
        htmlFor={id}
        className={clsx(
          'inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          className,
        )}
        {...otherProps}
      >
        {children}
      </label>
    </>
  )
}
