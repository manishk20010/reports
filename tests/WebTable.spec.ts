import { test, expect } from '@playwright/test';

test('WebTable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Header cells in the first static table
  
   const table = page.locator('table[name="BookTable"]')    
   const column = table.locator('th')   
   const rows = table.locator('tr')
   const rowscount = await rows.count()

   await expect(table).toBeVisible()
   await expect(column).toHaveCount(4)
   await expect(rows).toHaveCount(7)

   for(let i=0;i<rowscount;i++){

     let cell = await rows.nth(i).innerText()      
     console.log(`Row ${i+1}: ${cell}`)

      
   }
  
    



})