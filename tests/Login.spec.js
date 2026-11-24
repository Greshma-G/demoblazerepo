import { Loginpage } from '../Pages/login'
import{test,expect} from '@playwright/test'
import validLogindata from '../Utils/logincredentials.json'

test('Verify Login with valid credentials',async({page})=>{
    const loginpage = new Loginpage(page)
    const usernamevalue = validLogindata.username
    const passwordvalue = validLogindata.password 
    await loginpage.openApplication()
    await loginpage.login(usernamevalue,passwordvalue)
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
})

test.only('Verify Login with invalid username and valid password',async({page})=>{
    const loginpage = new Loginpage(page)
    const invalidusernamevalue = validLogindata.invalidusername
    const passwordvalue = validLogindata.password
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login(invalidusernamevalue,passwordvalue)
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('User does not exist.');
// Accept alert
    await dialog.accept();
})

test('Verify Login with valid username and invalid password',async({page})=>{
    const loginpage = new Loginpage(page)
    const usernamevalue = validLogindata.username
    const invalidpasswordvalue = validLogindata.invalidpassword
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login(usernamevalue,invalidpasswordvalue)
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('Wrong password.');
// Accept alert
    await dialog.accept();
})

test('Verify Login with invalid username and invalid password',async({page})=>{
    const loginpage = new Loginpage(page)
    const invalidusernamevalue = validLogindata.invalidusername
    const invalidpasswordvalue = validLogindata.invalidpassword
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login(invalidusernamevalue,invalidpasswordvalue)
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('User does not exist.');
// Accept alert
    await dialog.accept();
})

