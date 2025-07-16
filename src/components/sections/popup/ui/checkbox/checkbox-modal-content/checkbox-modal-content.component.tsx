import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { MODAL_DATA } from '../../../lib'

type CheckboxModalContentProps = ComponentPropsWithoutRef<'div'> & {
  checkboxId: string
  className?: string
}

export const CheckboxModalContent = (props: CheckboxModalContentProps) => {
  const { checkboxId, className = '', ...otherProps } = props

  return (
    <div
      className={clsx('relative w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl', className)}
      {...otherProps}
    >
      {/* Close button */}
      <label
        htmlFor={checkboxId}
        className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-gray-600"
        aria-label={MODAL_DATA.closeAriaLabel}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>

      {/* Modal header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{MODAL_DATA.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{MODAL_DATA.description}</p>
      </div>

      {/* Modal body */}
      <div className="mb-6">
        <p className="text-gray-700">{MODAL_DATA.content}</p>
      </div>

      {/* Modal footer */}
      <div className="flex justify-end space-x-3">
        <label
          htmlFor={checkboxId}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {MODAL_DATA.cancelText}
        </label>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {MODAL_DATA.confirmText}
        </button>
      </div>
    </div>
  )
}
