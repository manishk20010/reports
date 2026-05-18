// https://testautomationpractice.blogspot.com/

import { test } from '@playwright/test'

test('Pagination Web Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //locate Rows
    // productTable
    //thead
    //tr
    //th
    const table = page.locator('#productTable th')
    const columnCount = table.count()
    console.log(await columnCount)
    //rows
    const rows = page.locator('#productTable tbody tr')
    console.log(await rows.count())

})


test('TC 2 Pagination Web Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //locate Rows
    // productTable
    //thead
    //tr
    //th
    const rows = page.locator('#productTable tbody tr')
    let rowCount = await rows.count()
    console.log(rowCount)

    let data = {}
    for (let i = 0; i < rowCount; i++) {
        const cells = rows.nth(i).locator('td');
        // Read values from each column
        const id = await cells.nth(0).textContent();
        const name = await cells.nth(1).textContent();
        const price = await cells.nth(2).textContent();

        console.log(id, name, price)
    }



})  