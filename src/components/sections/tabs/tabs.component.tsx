import { TABS_DATA, generateTabStyles } from './lib'
import { TabContent, TabNavigation } from './ui'

export const Tabs = () => {
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

        <div className="tabs-container relative">
          {/* Hidden radio inputs for tab functionality */}
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

          <TabNavigation tabs={TABS_DATA} />
          <TabContent tabs={TABS_DATA} />
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: generateTabStyles(TABS_DATA),
          }}
        />
      </div>
    </section>
  )
}
