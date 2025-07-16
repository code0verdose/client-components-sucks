import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import type { ApproachData } from '../../lib'

interface AdditionalApproachesProps extends ComponentPropsWithoutRef<'div'> {
  approaches: readonly ApproachData[]
  className?: string
}

const tagVariants = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
} as const

export const AdditionalApproaches = (props: AdditionalApproachesProps) => {
  const { approaches, className = '', ...otherProps } = props

  return (
    <div className={clsx('mt-12 rounded-lg bg-gray-50 p-6', className)} {...otherProps}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Другие подходы</h3>
      <div className="space-y-4 text-sm text-gray-700">
        {approaches.map((approach, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900">{approach.title}</h4>
            <p className="mt-2">{approach.description}</p>
            <div className="mt-2 flex gap-2">
              {approach.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={clsx(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                    tagVariants[tag.variant],
                  )}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
