import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import type { TabItem } from '../../lib'
import { TabItemComponent } from '../tab-item'

type TabContentProps = ComponentPropsWithoutRef<'div'> & {
  tabs: readonly TabItem[]
  className?: string
}

export const TabContent = (props: TabContentProps) => {
  const { tabs, className = '', ...otherProps } = props

  return (
    <div className={clsx('tab-content relative', className)} {...otherProps}>
      {tabs.map((tab, index) => (
        <TabItemComponent key={tab.id} tab={tab} index={index} />
      ))}
    </div>
  )
}
