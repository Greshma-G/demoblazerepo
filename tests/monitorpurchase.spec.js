
import { test, expect } from '@playwright/test';
import { MonitorPurchase } from '../Pages/blazemonitorpurcahse';
import purchasecredentials from '../Utils/purchasecredentials.json';

test('Monitor purchase', async ({ page }) => {

    test.setTimeout(60000);

    const loginpage = new MonitorPurchase(page);

    await loginpage.openApplication();

    await loginpage.login(
        purchasecredentials.username,
        purchasecredentials.password
    );

    // Verify successful login
    await expect(page.locator('#nameofuser'))
        .toContainText('Welcome');

    // Select monitor category and product
    await loginpage.selectMonitorProduct();

    // Handle Add to Cart alert
    page.once('dialog', async dialog => {
        console.log('Add to cart message:', dialog.message());
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });

    await loginpage.addToCart();

    // Place order
    await loginpage.order(
        purchasecredentials.name,
        purchasecredentials.country,
        purchasecredentials.city,
        purchasecredentials.creditcard,
        purchasecredentials.month,
        purchasecredentials.year
    );
});
