
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/blazemobilepurchase';
import validLogindata from '../Utils/logincredentials.json';

test('Phone Purchase', async ({ page }) => {

    test.setTimeout(60000);

    const loginpage = new LoginPage(page);

    const usernamevalue = validLogindata.username;
    const passwordvalue = validLogindata.password;

    await loginpage.openApplication();

    await loginpage.login(usernamevalue, passwordvalue);

    await expect(page.locator('#nameofuser'))
        .toContainText('Welcome');

    // Handle Add to Cart alert
    page.once('dialog', async dialog => {

        expect(dialog.message()).toBe('Product added.');

        await dialog.accept();

    });

    await loginpage.addToCart();

    // Place Order
    await loginpage.order(
        'Sathvik',
        'India',
        'Adoor',
        '12345678',
        'May',
        '2024'
    );

});
