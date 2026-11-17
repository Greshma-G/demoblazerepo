# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Verify Login with valid credentials
- Location: tests\Login.spec.js:5:6

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import { Loginpage } from '../Pages/login'
  2  | import{test,expect} from '@playwright/test'
  3  | import validLogindata from '../Utils/logincredentials.json'
  4  | 
  5  | test.only('Verify Login with valid credentials',async({page})=>{
> 6  |     const loginpage = new LoginPage(page)
     |                       ^ ReferenceError: LoginPage is not defined
  7  |     const usernamevalue = validLogindata.username
  8  |     const passwordvalue = validLogindata.password 
  9  |     await loginpage.openApplication()
  10 |     await loginpage.login(usernamevalue,passwordvalue)
  11 |     await expect(page.locator('#nameofuser')).toContainText('Welcome');
  12 | })
  13 | 
  14 | test('Verify Login with invalid username and valid password',async({page})=>{
  15 |     const loginpage = new LoginPage(page)
  16 |     await loginpage.openApplication()
  17 |     const dialogPromise = page.waitForEvent('dialog');
  18 |     await loginpage.login('Gresh','123456')
  19 | // Wait for alert popup
  20 |     const dialog = await dialogPromise;
  21 | // Verify alert message
  22 |     expect(dialog.message()).toBe('User does not exist.');
  23 | // Accept alert
  24 |     await dialog.accept();
  25 | })
  26 | 
  27 | test('Verify Login with valid username and invalid password',async({page})=>{
  28 |     const loginpage = new LoginPage(page)
  29 |     await loginpage.openApplication()
  30 |     const dialogPromise = page.waitForEvent('dialog');
  31 |     await loginpage.login('Greshma','1236')
  32 | // Wait for alert popup
  33 |     const dialog = await dialogPromise;
  34 | // Verify alert message
  35 |     expect(dialog.message()).toBe('User does not exist.');
  36 | // Accept alert
  37 |     await dialog.accept();
  38 | })
  39 | 
  40 | test('Verify Login with invalid credentials',async({page})=>{
  41 |     const loginpage = new LoginPage(page)
  42 |     await loginpage.openApplication()
  43 |     const dialogPromise = page.waitForEvent('dialog');
  44 |     await loginpage.login('Gresh','1236')
  45 |  // Wait for alert popup
  46 |     const dialog = await dialogPromise;
  47 | // Verify alert message
  48 |     expect(dialog.message()).toBe('User does not exist.');
  49 | // Accept alert
  50 |     await dialog.accept();
  51 | })
```