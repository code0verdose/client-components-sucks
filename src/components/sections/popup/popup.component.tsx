export const Popup = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Example 1: Checkbox-based Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Пример 1: Модальное окно на основе Checkbox</h2>

        {/* Hidden checkbox for modal toggle */}
        <input type="checkbox" id="modal-toggle" className="peer hidden" />

        {/* Trigger button */}
        <label
          htmlFor="modal-toggle"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Открыть модальное окно (Checkbox)
        </label>

        {/* Modal overlay */}
        <div className="fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm peer-checked:block">
          {/* Modal content */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl transition-all">
              {/* Close button */}
              <label
                htmlFor="modal-toggle"
                className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-gray-600"
                aria-label="Закрыть модальное окно"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>

              {/* Modal header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Заголовок модального окна</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Это пример модального окна, созданного с использованием только HTML и CSS через checkbox.
                </p>
              </div>

              {/* Modal body */}
              <div className="mb-6">
                <p className="text-gray-700">
                  Здесь может быть любой контент: формы, изображения, текст или другие компоненты.
                </p>
              </div>

              {/* Modal footer */}
              <div className="flex justify-end space-x-3">
                <label
                  htmlFor="modal-toggle"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Отмена
                </label>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Подтвердить
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox approach info */}
        <div className="mt-4 rounded-lg bg-blue-50 p-4">
          <h4 className="font-medium text-blue-900">Checkbox подход:</h4>
          <div className="mt-2 text-sm text-blue-800">
            <div className="mb-2">
              <span className="font-medium">Плюсы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Работает во всех браузерах</li>
                <li>Не требует JavaScript</li>
                <li>Использует CSS :checked псевдокласс</li>
                <li>Поддерживает анимации через CSS transitions</li>
                <li>Полный контроль над стилизацией</li>
              </ul>
            </div>
            <div>
              <span className="font-medium">Минусы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Нет автоматического управления фокусом</li>
                <li>Нужно вручную добавлять ARIA атрибуты</li>
                <li>Нет встроенной поддержки Escape</li>
                <li>Требует дополнительной работы для доступности</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Dialog API Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Пример 2: Модальное окно с Dialog API</h2>

        {/* Dialog trigger using form method */}
        <form method="dialog">
          <button
            formAction="dialog-modal"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Открыть модальное окно (Dialog API)
          </button>
        </form>

        <dialog
          id="dialog-modal"
          className="rounded-lg border-0 bg-transparent p-0 shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl">
            {/* Close button using form method */}
            <form method="dialog">
              <button
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                aria-label="Закрыть модальное окно"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>

            {/* Modal header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Заголовок модального окна</h3>
              <p className="mt-2 text-sm text-gray-600">
                Это пример модального окна, созданного с использованием нативного Dialog API.
              </p>
            </div>

            {/* Modal body */}
            <div className="mb-6">
              <p className="text-gray-700">
                Dialog API предоставляет нативную поддержку модальных окон с автоматическим управлением
                фокусом и доступностью.
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end space-x-3">
              <form method="dialog">
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Отмена
                </button>
              </form>
              <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Подтвердить
              </button>
            </div>
          </div>
        </dialog>

        {/* Dialog approach info */}
        <div className="mt-4 rounded-lg bg-green-50 p-4">
          <h4 className="font-medium text-green-900">Dialog API подход:</h4>
          <div className="mt-2 text-sm text-green-800">
            <div className="mb-2">
              <span className="font-medium">Плюсы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Нативный HTML элемент dialog</li>
                <li>Автоматическое управление фокусом</li>
                <li>Встроенная поддержка escape для закрытия</li>
                <li>Лучшая доступность из коробки</li>
                <li>Поддерживается во всех современных браузерах</li>
                <li>Автоматический backdrop</li>
              </ul>
            </div>
            <div>
              <span className="font-medium">Минусы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Ограниченная кастомизация backdrop</li>
                <li>Нужен JavaScript для программного открытия</li>
                <li>Меньше контроля над анимациями</li>
                <li>Требует form method для CSS-only закрытия</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3: Popover API Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Пример 3: Модальное окно с Popover API</h2>

        {/* Trigger button */}
        <button
          popoverTarget="popover-modal"
          className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Открыть модальное окно (Popover API)
        </button>

        <div
          id="popover-modal"
          popover="auto"
          className="fixed inset-0 z-50 h-dvh w-screen items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl">
            {/* Close button */}
            <button
              popoverTarget="popover-modal"
              popoverTargetAction="hide"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              aria-label="Закрыть модальное окно"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal header */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Заголовок модального окна</h3>
              <p className="mt-2 text-sm text-gray-600">
                Это пример модального окна, созданного с использованием Popover API.
              </p>
            </div>

            {/* Modal body */}
            <div className="mb-6">
              <p className="text-gray-700">
                Popover API - современный способ создания модальных окон с улучшенной доступностью.
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end space-x-3">
              <button
                popoverTarget="popover-modal"
                popoverTargetAction="hide"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Отмена
              </button>
              <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Подтвердить
              </button>
            </div>
          </div>
        </div>

        {/* Popover approach info */}
        <div className="mt-4 rounded-lg bg-purple-50 p-4">
          <h4 className="font-medium text-purple-900">Popover API подход:</h4>
          <div className="mt-2 text-sm text-purple-800">
            <div className="mb-2">
              <span className="font-medium">Плюсы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Современный нативный API</li>
                <li>Автоматическое управление фокусом</li>
                <li>Встроенная поддержка escape для закрытия</li>
                <li>Лучшая доступность из коробки</li>
                <li>Гибкая система управления состоянием</li>
                <li>Поддержка light dismiss</li>
              </ul>
            </div>
            <div>
              <span className="font-medium">Минусы:</span>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Экспериментальный API</li>
                <li>Ограниченная поддержка браузеров</li>
                <li>Может потребовать полифиллов</li>
                <li>Меньше документации и примеров</li>
                <li>Изменения в спецификации</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* General comparison */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Сравнение подходов</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 text-left font-medium text-gray-900">Критерий</th>
                <th className="py-2 text-left font-medium text-blue-900">Checkbox</th>
                <th className="py-2 text-left font-medium text-green-900">Dialog</th>
                <th className="py-2 text-left font-medium text-purple-900">Popover</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 font-medium">Поддержка браузеров</td>
                <td className="py-2 text-blue-800">100%</td>
                <td className="py-2 text-green-800">95%+</td>
                <td className="py-2 text-purple-800">70%+</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">JavaScript</td>
                <td className="py-2 text-blue-800">Не нужен</td>
                <td className="py-2 text-green-800">Минимальный</td>
                <td className="py-2 text-purple-800">Не нужен</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Доступность</td>
                <td className="py-2 text-blue-800">Ручная настройка</td>
                <td className="py-2 text-green-800">Автоматическая</td>
                <td className="py-2 text-purple-800">Автоматическая</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Кастомизация</td>
                <td className="py-2 text-blue-800">Полная</td>
                <td className="py-2 text-green-800">Ограниченная</td>
                <td className="py-2 text-purple-800">Средняя</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Простота</td>
                <td className="py-2 text-blue-800">Простой</td>
                <td className="py-2 text-green-800">Средний</td>
                <td className="py-2 text-purple-800">Сложный</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
