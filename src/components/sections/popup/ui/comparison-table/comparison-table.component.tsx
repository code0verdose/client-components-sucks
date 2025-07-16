import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { COMPARISON_DATA } from '../../lib'

type ComparisonTableProps = ComponentPropsWithoutRef<'div'> & {
  className?: string
}

export const ComparisonTable = (props: ComparisonTableProps) => {
  const { className = '', ...otherProps } = props

  return (
    <div className={clsx('mt-8 rounded-lg bg-gray-50 p-6', className)} {...otherProps}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Сравнение подходов</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left font-medium text-gray-900">Критерий</th>
              <th className="py-2 text-left font-medium text-blue-900">Checkbox</th>
              <th className="py-2 text-left font-medium text-purple-900">Popover</th>
              <th className="py-2 text-left font-medium text-gray-900">Dialog API</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {COMPARISON_DATA.map((row, index) => (
              <tr key={index}>
                <td className="py-2 font-medium">{row.criterion}</td>
                <td className="py-2 text-blue-800">{row.checkbox}</td>
                <td className="py-2 text-purple-800">{row.popover}</td>
                <td className="py-2 text-gray-800">{row.dialog}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
