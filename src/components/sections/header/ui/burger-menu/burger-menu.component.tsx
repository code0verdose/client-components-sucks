interface BurgerMenuProps {
  id: string
}

export const BurgerMenu = ({ id }: BurgerMenuProps) => {
  return (
    <div className="md:hidden">
      <label
        htmlFor={id}
        className="relative inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Открыть главное меню</span>

        {/* Burger Icon */}
        <div className="flex h-6 w-6 flex-col items-center justify-center">
          <span className="block h-0.5 w-5 -translate-y-1 transform bg-current transition-all duration-300 peer-checked:translate-y-1 peer-checked:rotate-45" />
          <span className="block h-0.5 w-5 bg-current opacity-100 transition-all duration-300 peer-checked:opacity-0" />
          <span className="block h-0.5 w-5 translate-y-1 transform bg-current transition-all duration-300 peer-checked:-translate-y-1 peer-checked:-rotate-45" />
        </div>
      </label>
    </div>
  )
}
