export type TagVariant = 'success' | 'warning' | 'info'

export type ApproachTag = {
  text: string
  variant: TagVariant
}

export type ApproachData = {
  title: string
  description: string
  tags: Array<ApproachTag>
}

export const ADDITIONAL_APPROACHES: readonly ApproachData[] = [
  {
    title: 'Dialog API (требует JavaScript):',
    description:
      'Нативный HTML элемент <dialog> с методами showModal() и close(). Обеспечивает лучшую доступность и автоматическое управление фокусом, но требует JavaScript для открытия/закрытия.',
    tags: [
      { text: 'Автоматическая доступность', variant: 'success' },
      { text: 'Управление фокусом', variant: 'success' },
      { text: 'Требует JavaScript', variant: 'warning' },
    ],
  },
] as const
