import { SectionLayout } from '@layouts'
import { ADDITIONAL_APPROACHES, APPROACH_INFO, COLOR_SCHEMES } from './lib'
import {
  AdditionalApproaches,
  ApproachInfo,
  CheckboxModal,
  CheckboxModalContent,
  CheckboxTrigger,
  ComparisonTable,
  PopoverModal,
  PopoverModalContent,
  PopoverTrigger,
} from './ui'

export const Popup = () => {
  return (
    <SectionLayout>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Примеры модальных окон с использованием различных подходов
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Выберите интересующий пример и узнайте больше о наших возможностях
        </p>
      </div>

      <div className="max-md:space-y-8 md:flex md:justify-between md:gap-x-10">
        {/* Example 1: Checkbox-based Modal */}
        <div className="flex w-full flex-col items-stretch gap-y-8">
          <h3 className="text-2xl font-bold text-gray-900">Пример 1: Модальное окно на основе Checkbox</h3>

          {/* Trigger button with hidden checkbox */}
          <CheckboxTrigger checkboxId="modal-toggle">Открыть модальное окно (Checkbox)</CheckboxTrigger>

          {/* Checkbox Modal */}
          <CheckboxModal>
            <CheckboxModalContent checkboxId="modal-toggle" />
          </CheckboxModal>

          {/* Checkbox approach info */}
          <ApproachInfo
            data={APPROACH_INFO.checkbox}
            colorScheme={COLOR_SCHEMES.checkbox}
            className="md:flex-1"
          />
        </div>

        {/* Example 2: Popover API Modal */}
        <div className="flex w-full flex-col gap-y-8">
          <h3 className="text-2xl font-bold text-gray-900">Пример 2: Модальное окно с Popover API</h3>

          {/* Trigger button */}
          <PopoverTrigger popoverTarget="popover-modal">Открыть модальное окно (Popover API)</PopoverTrigger>

          {/* Popover Modal */}
          <PopoverModal popoverId="popover-modal">
            <PopoverModalContent popoverId="popover-modal" />
          </PopoverModal>

          {/* Popover approach info */}
          <ApproachInfo
            data={APPROACH_INFO.popover}
            colorScheme={COLOR_SCHEMES.popover}
            className="md:flex-1"
          />
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <AdditionalApproaches approaches={ADDITIONAL_APPROACHES} />
        <ComparisonTable />
      </div>
    </SectionLayout>
  )
}
