import{test,expect}from'@playwright/test';
import {LoginInvalidPassword} from '../Pages/logininvalidpassword'


test('Verify Login with valid username and invalid password',async({page})=>{
    const loginpage = new LoginInvalidPassword(page)
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login('Greshma','1236')
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('Wrong password.');
// Accept alert
    await dialog.accept();
})