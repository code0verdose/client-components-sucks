interface LogoProps {
  className?: string
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <a
        href="/"
        className="text-2xl font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600"
      >
        Logo
      </a>
    </div>
  )
}
