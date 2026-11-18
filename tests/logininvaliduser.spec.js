import{test,expect}from'@playwright/test';
import {LoginInvalidUser} from '../Pages/logininvaliduser'


test('Verify Login with invalid username and valid password',async({page})=>{
    const loginpage = new LoginInvalidUser(page)
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login('Gresh','123456')
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('User does not exist.');
// Accept alert
    await dialog.accept();
})