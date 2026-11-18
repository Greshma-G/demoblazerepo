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

