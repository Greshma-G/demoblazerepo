import{test,expect} from '@playwright/test'
import{ MonitorPurchase } from '../Pages/blazemonitorpurcahse'
import validLogindata from '../Utils/logincredentials.json';


test('Monitor purchase',async({page})=>{

   test.setTimeout(60000);

    const loginpage = new MonitorPurchase(page);

    const usernamevalue = validLogindata.username;
    const passwordvalue = validLogindata.password;

    await loginpage.openApplication();

    await loginpage.login(usernamevalue, passwordvalue);

    await expect(page.locator('#nameofuser')).toContainText('Welcome');

    // Handle Add to Cart alert
    page.once('dialog', async dialog => {

        expect(dialog.message()).toBe('Product added.');

        await dialog.accept();

    });

    await loginpage.addToCart();

    // Place Order
    await loginpage.order(
        'Renoop',
        'India',
        'Ayoor',
        '0123456789',
        'February',
        '2024'
    );

});
