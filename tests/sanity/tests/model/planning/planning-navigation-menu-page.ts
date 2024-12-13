import { type Locator, type Page, expect } from '@playwright/test'

export class PlanningNavigationMenuPage {
  readonly page: Page

  constructor (page: Page) {
    this.page = page
  }

  readonly buttonToDoAll = (): Locator =>
    this.page.locator('button[class*="emberNavItem-container"] span[class*="emberNavItem-label"]', {
      hasText: 'All'
    })

  readonly buttonToDoUnplanned = (): Locator =>
    this.page.locator('button[class*="emberNavItem-container"] span[class*="emberNavItem-label"]', {
      hasText: 'Unplanned'
    })

  readonly buttonToDoPlanned = (): Locator =>
    this.page.locator('button[class*="emberNavItem-container"] span[class*="emberNavItem-label"]:text-is("Planned")')

  readonly accordionContainerToDoUnplanned = (): Locator =>
    this.page.locator('div.toDos-container div.emberAccordionItem-container', { hasText: 'Unplanned' })

  async clickOnButtonToDoAll (): Promise<void> {
    await this.buttonToDoAll().click()
  }

  async clickOnButtonUnplanned (): Promise<void> {
    await this.buttonToDoUnplanned().click()
  }

  async clickOnButtonToDoPlanned (): Promise<void> {
    await this.buttonToDoPlanned().click()
  }

  async compareCountersUnplannedToDos (): Promise<void> {
    const navCount = parseInt(
      await this.buttonToDoUnplanned().locator('xpath=..').locator('span.emberNavItem-count').innerText(),
      10
    )
    const accCount = await this.accordionContainerToDoUnplanned().locator('button.emberToDoLine-container').count()
    expect(accCount).toBe(navCount)
  }
}
