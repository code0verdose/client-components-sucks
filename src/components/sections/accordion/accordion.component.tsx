import SectionLayout from '@layouts/section.layout'
import { FAQ_DATA } from './lib'

export const Accordion = () => {
  return (
    <SectionLayout className="bg-white py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Часто задаваемые вопросы
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Нашли ответы на самые популярные вопросы о нашем сервисе
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {FAQ_DATA.map((item) => (
          <details
            key={item.id}
            className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <span className="text-base sm:text-lg">{item.question}</span>
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6">
              <div className="prose prose-gray max-w-none">
                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </SectionLayout>
  )
}
