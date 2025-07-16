import type { TabItem } from '../constants/tabs-data.constant'

export const generateTabStyles = (tabsData: readonly TabItem[]): string => {
  const styles = tabsData
    .map((tab) => {
      const tabId = `tab-${tab.id}`

      return `
      .tabs-container input[id="${tabId}"]:checked ~ .tab-navigation label[for="${tabId}"] {
        background-color: white;
        color: #2563eb;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }
      
      .tabs-container input[id="${tabId}"]:checked ~ .tab-navigation label[for="${tabId}"] .active-indicator {
        opacity: 1;
      }
      
      .tabs-container input[id="${tabId}"]:checked ~ .tab-content .tab-content-${tab.id} {
        display: block;
      }
      
      ${tabsData
        .map((otherTab) =>
          otherTab.id !== tab.id
            ? `.tabs-container input[id="${tabId}"]:checked ~ .tab-content .tab-content-${otherTab.id} { display: none; }`
            : '',
        )
        .join('')}
    `
    })
    .join('')

  return styles
}
