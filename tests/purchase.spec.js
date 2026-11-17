
import { test, expect } from '@playwright/test';
import { PurchasePage } from '../Pages/purchasePage';

test.describe('Demoblaze Product Purchase', () => {

    let purchasePage;

    const username = 'Greshma';
    const password = '123456';

    const customerDetails = {
        name: 'Greshma',
        country: 'India',
        city: 'Kerala',
        creditCard: '1234567890123456',
        month: 'November',
        year: '2026'
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
