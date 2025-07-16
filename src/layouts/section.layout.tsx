import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'section'> & {
  className?: string
}

const SectionLayout = (props: Props) => {
  const { className, children, ...otherProps } = props

  return (
    <section className={clsx('py-10 md:py-20', className)} {...otherProps}>
      <div className="container">{children}</div>
    </section>
  )
}

export default SectionLayout
