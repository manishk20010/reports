import {test,expect} from '@playwright/test'

test('Automate a Dropsown with selectOption', async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/') 
 const color = page.locator('#colors')
 await color.selectOption('Green')

})

test('Automate a Animal with selectOption', async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/') 
 const color = page.locator('#animals')
 await color.selectOption('Deer')
 
})

test('Automate with mousehover', async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/') 
 const color = page.locator('.dropbtn')
  await color.waitFor({state:'visible',timeout:1000})
  await expect(color).toBeVisible()
  await color.hover()
 
})