import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { MODAL_DATA } from '../../../lib'

type PopoverModalContentProps = ComponentPropsWithoutRef<'div'> & {
  popoverId: string
  className?: string
}

export const PopoverModalContent = (props: PopoverModalContentProps) => {
  const { popoverId, className = '', ...otherProps } = props

  return (
    <div
      className={clsx(
        'absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-xl',
        className,
      )}
      {...otherProps}
    >
      {/* Close button */}
      <button
        popoverTarget={popoverId}
        popoverTargetAction="hide"
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        aria-label={MODAL_DATA.closeAriaLabel}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{MODAL_DATA.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{MODAL_DATA.popoverDescription}</p>
      </div>

      {/* Modal body */}
      <div className="mb-6">
        <p className="text-gray-700">{MODAL_DATA.popoverContent}</p>
      </div>

      {/* Modal footer */}
      <div className="flex justify-end space-x-3">
        <button
          popoverTarget={popoverId}
          popoverTargetAction="hide"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          {MODAL_DATA.cancelText}
        </button>
        <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          {MODAL_DATA.confirmText}
        </button>
      </div>
    </div>
  )
}
