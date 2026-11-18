import{test,expect}from'@playwright/test';
import {LoginBothInvalid} from '../Pages/loginbothinvalid'


test('Verify Login with invalid username and valid password',async({page})=>{
    const loginpage = new LoginBothInvalid(page)
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login('Gresh','1236')
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('User does not exist.');
// Accept alert
    await dialog.accept();
})