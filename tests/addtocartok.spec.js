import{test,expect} from '@playwright/test'
import { AddtoCart } from '../Pages/addtocart';
import validLogindata from '../Utils/logincredentials.json'

test('Product Add to Cart',async({page})=>{
    const loginpage = new AddtoCart(page)
    const usernamevalue = validLogindata.username
    const passwordvalue = validLogindata.password 
    await loginpage.openApplication()
    await loginpage.login(usernamevalue,passwordvalue)
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
    const dialogProductadded = page.waitForEvent('dialog');
    await loginpage.addToCart()
})