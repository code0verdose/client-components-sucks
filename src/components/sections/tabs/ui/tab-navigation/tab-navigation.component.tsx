import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import type { TabItem } from '../../lib'

type TabNavigationProps = ComponentPropsWithoutRef<'div'> & {
  tabs: readonly TabItem[]
  className?: string
}

export const TabNavigation = (props: TabNavigationProps) => {
  const { tabs, className = '', ...otherProps } = props

  return (
    <div
      className={clsx(
        'tab-navigation scrollbar-hide mb-8 flex justify-center gap-2 overflow-x-auto border-b border-gray-200 max-md:justify-start',
        className,
      )}
      {...otherProps}
    >
      {tabs.map((tab) => (
        <label
          key={tab.id}
          htmlFor={`tab-${tab.id}`}
          className="group relative w-full cursor-pointer rounded-t-lg px-4 py-3 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span className="flex items-center gap-2">
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            {tab.label}
          </span>
          {/* Active indicator */}
          <div className="active-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 opacity-0 transition-opacity duration-200" />
        </label>
      ))}
    </div>
  )
}
