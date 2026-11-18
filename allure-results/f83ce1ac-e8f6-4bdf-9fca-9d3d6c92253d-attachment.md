# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logininvaliduser.spec.js >> Verify Login with invalid username and valid password
- Location: tests\logininvaliduser.spec.js:5:1

# Error details

```
TypeError: _logininvaliduser.Logininvaliduser is not a constructor
```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | import {Logininvaliduser} from '../Pages/logininvaliduser'
  3  | 
  4  | 
  5  | test('Verify Login with invalid username and valid password',async({page})=>{
> 6  |     const loginpage = new Logininvaliduser(page)
     |                       ^ TypeError: _logininvaliduser.Logininvaliduser is not a constructor
  7  |     await loginpage.openApplication()
  8  |     const dialogPromise = page.waitForEvent('dialog');
  9  |     await loginpage.login('Gresh','123456')
  10 | // Wait for alert popup
  11 |     const dialog = await dialogPromise;
  12 | // Verify alert message
  13 |     expect(dialog.message()).toBe('User does not exist.');
  14 | // Accept alert
  15 |     await dialog.accept();
  16 | })
```