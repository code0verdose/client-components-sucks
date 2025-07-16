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
    <div className="space-y-8 p-8">
      {/* Example 1: Checkbox-based Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Пример 1: Модальное окно на основе Checkbox</h2>

        {/* Trigger button with hidden checkbox */}
        <CheckboxTrigger checkboxId="modal-toggle">Открыть модальное окно (Checkbox)</CheckboxTrigger>

        {/* Checkbox Modal */}
        <CheckboxModal>
          <CheckboxModalContent checkboxId="modal-toggle" />
        </CheckboxModal>

        {/* Checkbox approach info */}
        <ApproachInfo data={APPROACH_INFO.checkbox} colorScheme={COLOR_SCHEMES.checkbox} />
      </div>

      {/* Example 2: Popover API Modal */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Пример 2: Модальное окно с Popover API</h2>

        {/* Trigger button */}
        <PopoverTrigger popoverTarget="popover-modal">Открыть модальное окно (Popover API)</PopoverTrigger>

        {/* Popover Modal */}
        <PopoverModal popoverId="popover-modal">
          <PopoverModalContent popoverId="popover-modal" />
        </PopoverModal>

        {/* Popover approach info */}
        <ApproachInfo data={APPROACH_INFO.popover} colorScheme={COLOR_SCHEMES.popover} />
      </div>

      {/* Additional approaches info */}
      <AdditionalApproaches approaches={ADDITIONAL_APPROACHES} />

      {/* General comparison */}
      <ComparisonTable />
    </div>
  )
}
