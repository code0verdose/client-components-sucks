interface NavigationLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  isMobile?: boolean
}

export const NavigationLink = ({ href, children, className = '', isMobile = false }: NavigationLinkProps) => {
  const baseClasses = isMobile
    ? 'block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200'
    : 'text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'

  return (
    <a href={href} className={`${baseClasses} ${className}`}>
      {children}
    </a>
  )
}
