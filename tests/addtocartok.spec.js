import{test,expect} from '@playwright/test'
import { AddtoCart } from '../Pages/addtocart';

test('Product Add to Cart',async({page})=>{
    const loginpage = new AddtoCart(page)
    await loginpage.openApplication()
    await loginpage.login('Greshma','123456')
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
    const dialogProductadded = page.waitForEvent('dialog');
    await loginpage.addToCart()
})