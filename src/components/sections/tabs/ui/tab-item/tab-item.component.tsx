import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import type { TabItem } from '../../lib'

type TabItemProps = ComponentPropsWithoutRef<'div'> & {
  tab: TabItem
  index: number
  className?: string
}

export const TabItemComponent = (props: TabItemProps) => {
  const { tab, index, className = '', ...otherProps } = props

  return (
    <div
      className={clsx(`tab-content-${tab.id} ${index === 0 ? 'block' : 'hidden'}`, className)}
      role="tabpanel"
      aria-labelledby={`tab-${tab.id}`}
      {...otherProps}
    >
      <div className="prose prose-gray max-w-none">
        <div className="rounded-lg bg-gray-50 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            {tab.icon && <span className="text-2xl">{tab.icon}</span>}
            <h3 className="text-xl font-semibold text-gray-900">{tab.label}</h3>
          </div>
          <p className="leading-relaxed text-gray-600">{tab.content}</p>
        </div>
      </div>
    </div>
  )
}
