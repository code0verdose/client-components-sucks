export interface ApproachData {
  title: string
  description: string
  tags: Array<{
    text: string
    variant: 'success' | 'warning' | 'info'
  }>
}

export const ADDITIONAL_APPROACHES: readonly ApproachData[] = [
  {
    title: 'Dialog API (требует JavaScript):',
    description:
      'Нативный HTML элемент <dialog> с методами showModal() и close(). Обеспечивает лучшую доступность и автоматическое управление фокусом, но требует JavaScript для открытия/закрытия.',
    tags: [
      { text: 'Автоматическая доступность', variant: 'success' as const },
      { text: 'Управление фокусом', variant: 'success' as const },
      { text: 'Требует JavaScript', variant: 'warning' as const },
    ],
  },
] as const
