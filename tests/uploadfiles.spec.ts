import {test} from '@playwright/test'


test('Upload Files', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

//   const filePath = path.resolve(
//     'C:/Users/ADMIN/Desktop/exl Interview.txt'
//   );
  
 await page.setInputFiles('#multipleFilesInput',[
    'C:/Users/ADMIN/Desktop/exl Interview.txt',
    'C:/Users/ADMIN/Desktop/exl Interview.txt'
])
})