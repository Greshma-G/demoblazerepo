import{test,expect} from '@playwright/test'
import { LogoutPage } from '../Pages/logout'
import validLogindata from '../Utils/logincredentials.json'

test('Logout',async({page})=>{
    const logoutpage = new LogoutPage(page)
    const usernamevalue = validLogindata.username
    const passwordvalue = validLogindata.password 
    await loginpage.openApplication()
    await loginpage.login(usernamevalue,passwordvalue)
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
    
    await logoutpage.logout()
    await expect(page.locator('#login2')).toContainText('Log in');

})