
import { test, expect } from '@playwright/test';
import { PurchasePage } from '../Pages/purchasePage';
import purchasecredentials from '../Utils/purchasecredentials.json';

test.describe('Demoblaze Product Purchase', () => {

    test.setTimeout(60000);

    let purchasePage;

    const username = purchasecredentials.username;
    const password = purchasecredentials.password;
    const name = purchasecredentials.name;
    const country = purchasecredentials.country;
    const city = purchasecredentials.city;
    const creditCard = purchasecredentials.creditcard;
    const month = purchasecredentials.month;
    const year = purchasecredentials.year;

    const customerDetails = {
        name: name,
        country: country,
        city: city,
        creditCard: creditCard,
        month: month,
        year: year
    };

    test.beforeEach(async ({ page }) => {

        purchasePage = new PurchasePage(page);

        await purchasePage.openWebsite();

        await purchasePage.login(username, password);
    });

    // TASK 1 - Phone Purchase
    test('Purchase a Phone', async ({ page }) => {

        // Select Phones category and product
        await purchasePage.selectProduct('Phones');

        // Add product to cart
        const message = await purchasePage.addProductToCart();

        expect(message).toBe('Product added.');

        // Navigate to cart
        await purchasePage.openCart();

        // Enter details and purchase
        await purchasePage.placeOrder(customerDetails);

        // Verify successful purchase
        await purchasePage.verifyPurchase();

    });

    // TASK 2 - Monitor Purchase
    test('Purchase a Monitor', async ({ page }) => {

        // Select Monitors category and product
        await purchasePage.selectProduct('Monitors');

        // Add product to cart
        const message = await purchasePage.addProductToCart();

        expect(message).toBe('Product added.');

        // Navigate to cart
        await purchasePage.openCart();

        // Enter details and purchase
        await purchasePage.placeOrder(customerDetails);

        // Verify successful purchase
        await purchasePage.verifyPurchase();

    });

});
