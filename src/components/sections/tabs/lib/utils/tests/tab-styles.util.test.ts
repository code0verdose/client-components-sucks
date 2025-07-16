import type { TabItem } from '../../constants/tabs-data.constant'
import { generateTabStyles } from '../tab-styles.util'

describe('generateTabStyles', () => {
  it('should generate styles for single tab', () => {
    const singleTab: readonly TabItem[] = [{ id: 'test', label: 'Test', content: 'Test content' }]

    const result = generateTabStyles(singleTab)

    expect(result).toContain('tab-test')
    expect(result).toContain('background-color: white')
    expect(result).toContain('color: #2563eb')
    expect(result).toContain('display: block')
  })

  it('should generate styles for multiple tabs with hide rules', () => {
    const multipleTabs: readonly TabItem[] = [
      { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
      { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
    ]

    const result = generateTabStyles(multipleTabs)

    // Проверяем, что есть правила скрытия
    expect(result).toContain('display: none')
    // Проверяем, что для каждого таба есть стили
    expect(result).toContain('tab-tab1')
    expect(result).toContain('tab-tab2')
  })

  it('should return empty string for empty array', () => {
    const emptyTabs: readonly TabItem[] = []

    const result = generateTabStyles(emptyTabs)

    expect(result).toBe('')
  })

  it('should generate correct CSS structure', () => {
    const testTabs: readonly TabItem[] = [{ id: 'features', label: 'Features', content: 'Features content' }]

    const result = generateTabStyles(testTabs)

    // Проверяем структуру CSS
    expect(result).toMatch(/\.tabs-container input\[id="tab-features"\]:checked/)
    expect(result).toMatch(/background-color: white/)
    expect(result).toMatch(/color: #2563eb/)
    expect(result).toMatch(/box-shadow: 0 1px 3px 0 rgba\(0, 0, 0, 0\.1\)/)
    expect(result).toMatch(/opacity: 1/)
    expect(result).toMatch(/display: block/)
  })

  it('should generate hide rules for all other tabs when one is active', () => {
    const threeTabs: readonly TabItem[] = [
      { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
      { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
      { id: 'tab3', label: 'Tab 3', content: 'Content 3' },
    ]

    const result = generateTabStyles(threeTabs)

    // Проверяем, что для tab1 есть правила скрытия tab2 и tab3
    expect(result).toContain('tab-tab1"]:checked ~ .tab-content .tab-content-tab2 { display: none; }')
    expect(result).toContain('tab-tab1"]:checked ~ .tab-content .tab-content-tab3 { display: none; }')

    // Проверяем, что для tab2 есть правила скрытия tab1 и tab3
    expect(result).toContain('tab-tab2"]:checked ~ .tab-content .tab-content-tab1 { display: none; }')
    expect(result).toContain('tab-tab2"]:checked ~ .tab-content .tab-content-tab3 { display: none; }')
  })

  it('should handle tabs with special characters in id', () => {
    const specialTabs: readonly TabItem[] = [
      { id: 'tab-with-dash', label: 'Tab with dash', content: 'Content' },
      { id: 'tab_with_underscore', label: 'Tab with underscore', content: 'Content' },
    ]

    const result = generateTabStyles(specialTabs)

    expect(result).toContain('tab-tab-with-dash')
    expect(result).toContain('tab-tab_with_underscore')
    expect(result).toContain('tab-content-tab-with-dash')
    expect(result).toContain('tab-content-tab_with_underscore')
  })

  it('should generate active indicator styles', () => {
    const testTabs: readonly TabItem[] = [{ id: 'test', label: 'Test', content: 'Test content' }]

    const result = generateTabStyles(testTabs)

    expect(result).toContain('.active-indicator')
    expect(result).toContain('opacity: 1')
  })
})
