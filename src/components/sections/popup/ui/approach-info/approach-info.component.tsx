import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface ApproachInfoData {
  title: string
  pros: readonly string[]
  cons: readonly string[]
}

interface ColorScheme {
  bg: string
  title: string
  content: string
}

type ApproachInfoProps = ComponentPropsWithoutRef<'div'> & {
  data: ApproachInfoData
  colorScheme: ColorScheme
  className?: string
}

export const ApproachInfo = (props: ApproachInfoProps) => {
  const { data, colorScheme, className = '', ...otherProps } = props

  return (
    <div className={clsx('rounded-lg p-4', colorScheme.bg, className)} {...otherProps}>
      <h4 className={clsx('font-medium', colorScheme.title)}>{data.title}</h4>
      <div className={clsx('mt-2 text-sm', colorScheme.content)}>
        <div className="mb-2">
          <span className="font-medium">Плюсы:</span>
          <ul className="mt-1 list-inside list-disc space-y-1">
            {data.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-medium">Минусы:</span>
          <ul className="mt-1 list-inside list-disc space-y-1">
            {data.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
