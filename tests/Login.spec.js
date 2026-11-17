import { Loginpage } from '../Pages/login'
import{test,expect} from '@playwright/test'
import validLogindata from '../Utils/logincredentials.json'

test.only('Verify Login with valid credentials',async({page})=>{
    const loginpage = new Loginpage(page)
    const usernamevalue = validLogindata.username
    const passwordvalue = validLogindata.password 
    await loginpage.openApplication()
    await loginpage.login(usernamevalue,passwordvalue)
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
})

test('Verify Login with invalid username and valid password',async({page})=>{
    const loginpage = new Loginpage(page)
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

test('Verify Login with valid username and invalid password',async({page})=>{
    const loginpage = new Loginpage(page)
    await loginpage.openApplication()
    const dialogPromise = page.waitForEvent('dialog');
    await loginpage.login('Greshma','1236')
// Wait for alert popup
    const dialog = await dialogPromise;
// Verify alert message
    expect(dialog.message()).toBe('User does not exist.');
// Accept alert
    await dialog.accept();
})

test('Verify Login with invalid credentials',async({page})=>{
    const loginpage = new Loginpage(page)
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