import { test } from '@playwright/test'

test('dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')    
    page.on('dialog', async (dialog) =>{
    console.log(dialog.message())
    await dialog.accept()        
    })    
   await page.locator('#alertBtn').click()
})
test('child', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')  
  
    const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button',{name:'New Tab'}).click(),
    ])      

     await page.waitForLoadState()
     await childPage.getByPlaceholder('Search').fill('Playwright');
    
    })
    
test('child000', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')   
    
    const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a')).map(a => a.href)
  
  
    )      
    console.log(links)

})