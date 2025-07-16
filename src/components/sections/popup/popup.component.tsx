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
      <div className="max-md:space-y-8 md:flex md:justify-between md:gap-x-10">
        {/* Example 1: Checkbox-based Modal */}
        <div className="flex w-full flex-col items-stretch gap-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Пример 1: Модальное окно на основе Checkbox</h2>

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
          <h2 className="text-2xl font-bold text-gray-900">Пример 2: Модальное окно с Popover API</h2>

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
