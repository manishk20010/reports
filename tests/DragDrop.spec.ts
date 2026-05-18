
import { test, expect } from '@playwright/test';

test('WebTable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const draggable = page.locator('#draggable')
  const droppable = page.locator('#droppable')
  await draggable.dragTo(droppable)
  

})