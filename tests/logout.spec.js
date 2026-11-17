import{test,expect} from '@playwright/test'
import { LogoutPage } from '../Pages/logout'

test('Logout',async({page})=>{
    const logoutpage = new LogoutPage(page)
    await logoutpage.openApplication()
    await logoutpage.login('Greshma','123456')
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
    
    await logoutpage.logout()
    await expect(page.locator('#login2')).toContainText('Log in');

})