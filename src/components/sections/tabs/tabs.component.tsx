interface TabItem {
  id: string
  label: string
  content: string
  icon?: string
}

const TABS_DATA: TabItem[] = [
  {
    id: 'features',
    label: 'Возможности',
    icon: '⚡',
    content:
      'Наша платформа предоставляет широкий спектр возможностей для эффективной работы. Включает в себя автоматизацию процессов, аналитику в реальном времени, интеграцию с популярными сервисами и многое другое. Все инструменты разработаны с учетом современных потребностей бизнеса.',
  },
  {
    id: 'pricing',
    label: 'Тарифы',
    icon: '💰',
    content:
      'Гибкая система тарифов, адаптированная под различные потребности. От бесплатного стартового плана до корпоративных решений. Все тарифы включают базовый функционал, а премиум-планы открывают доступ к расширенным возможностям и приоритетной поддержке.',
  },
  {
    id: 'support',
    label: 'Поддержка',
    icon: '🛠️',
    content:
      'Наша команда поддержки работает 24/7 и готова помочь с любыми вопросами. Предоставляем техническую поддержку, обучение пользователей, документацию и видеоуроки. Среднее время ответа составляет 15 минут, а для премиум-клиентов - 5 минут.',
  },
  {
    id: 'security',
    label: 'Безопасность',
    icon: '🔒',
    content:
      'Безопасность данных - наш приоритет. Используем современные технологии шифрования, регулярно проводим аудиты безопасности, соблюдаем международные стандарты (GDPR, ISO 27001). Все данные хранятся в защищенных дата-центрах с резервным копированием.',
  },
  {
    id: 'integration',
    label: 'Интеграции',
    icon: '🔗',
    content:
      'Легкая интеграция с популярными сервисами и платформами. Поддерживаем API для разработчиков, вебхуки для автоматизации, готовые коннекторы для CRM, ERP и других систем. Простая настройка без технических знаний.',
  },
]

// ЧТОБЫ ДОБАВИТЬ/УДАЛИТЬ ИЛИ ИЗМЕНИТЬ ТАБ, НУЖНО ИЗМЕНИТЬ МАССИВ TABS_DATA, КОМПОНЕНТ РАБОТАЕТ БЕЗ КЛИЕНТСКОЙ ЛОГИКИ!!!

export const Tabs = () => {
  // Generate dynamic CSS for tabs
  const generateTabStyles = (): string => {
    const styles = TABS_DATA.map((tab) => {
      const tabId = `tab-${tab.id}`

      return `
        .tabs-container input[id="${tabId}"]:checked ~ .tab-content .tab-content-${tab.id} {
          display: block;
        }
        
        .tabs-container input[id="${tabId}"]:checked ~ .tab-navigation label[for="${tabId}"] {
          background-color: white;
          color: #2563eb;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        
        .tabs-container input[id="${tabId}"]:checked ~ .tab-navigation label[for="${tabId}"] .active-indicator {
          opacity: 1;
        }
        
        ${TABS_DATA.map((otherTab) =>
          otherTab.id !== tab.id
            ? `.tabs-container input[id="${tabId}"]:checked ~ .tab-content .tab-content-${otherTab.id} { display: none; }`
            : '',
        ).join('')}
      `
    }).join('')

    return styles
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Все что нужно для успеха
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Выберите интересующий раздел и узнайте больше о наших возможностях
          </p>
        </div>

        {/* Tabs Container */}
        <div className="tabs-container relative">
          {/* Hidden radio inputs - accessible via Tab */}
          {TABS_DATA.map((tab, index) => (
            <input
              key={tab.id}
              type="radio"
              name="tabs"
              id={`tab-${tab.id}`}
              defaultChecked={index === 0}
              className="sr-only"
              aria-label={`Переключить на таб: ${tab.label}`}
            />
          ))}

          {/* Tab Navigation */}
          <div className="tab-navigation scrollbar-hide mb-8 flex justify-center gap-2 overflow-x-auto border-b border-gray-200 max-md:justify-start">
            {TABS_DATA.map((tab) => (
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

          {/* Tab Content */}
          <div className="tab-content relative min-h-[300px]">
            {TABS_DATA.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-content-${tab.id} ${index === 0 ? 'block' : 'hidden'}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
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
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: generateTabStyles(),
          }}
        />
      </div>
    </section>
  )
}
