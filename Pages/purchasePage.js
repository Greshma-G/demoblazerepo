
import { expect } from '@playwright/test';

export class PurchasePage {

    constructor(page) {
        this.page = page;

        // Login locators
        this.loginLink = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator('button[onclick="logIn()"]');
        this.welcomeUser = page.locator('#nameofuser');

        // Category locators
        this.phonesCategory = page.getByText('Phones', { exact: true });
        this.monitorsCategory = page.getByText('Monitors', { exact: true });

        // Product locator
        this.productList = page.locator('.card-title a');

        // Add to cart
        this.addToCartButton = page.getByText('Add to cart', { exact: true });

        // Cart locators
        this.cartLink = page.locator('#cartur');
        this.placeOrderButton = page.getByRole('button', {
            name: 'Place Order'
        });

        // Order form locators
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');

        this.purchaseButton = page.locator(
            '#orderModal button:has-text("Purchase")'
        );

        // Purchase confirmation
        this.confirmationMessage = page.getByText(
            'Thank you for your purchase!',
            { exact: true }
        );
    }

    // Open website
    async openWebsite() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    // Login
    async login(username, password) {
        await this.loginLink.click();

        await this.username.fill(username);
        await this.password.fill(password);

        await this.loginButton.click();

        await expect(this.welcomeUser).toBeVisible();
    }

    // Select category and product
    async selectProduct(category) {

        if (category === 'Phones') {
            await this.phonesCategory.click();
        }
        else if (category === 'Monitors') {
            await this.monitorsCategory.click();
        }

        // Wait until products are displayed
        await expect(this.productList.first()).toBeVisible();

        // Select the first available product
        await this.productList.first().click();
    }

    // Add product to cart and handle popup
    async addProductToCart() {

        const dialogPromise = this.page.waitForEvent('dialog');

        await this.addToCartButton.click();

        const dialog = await dialogPromise;

        const message = dialog.message();

        await dialog.accept();

        return message;
    }

    // Navigate to cart
    async openCart() {
        await this.cartLink.click();

        await expect(this.placeOrderButton).toBeVisible();
    }

    // Place order
    async placeOrder(customerDetails) {

        await this.placeOrderButton.click();

        await this.name.fill(customerDetails.name);
        await this.country.fill(customerDetails.country);
        await this.city.fill(customerDetails.city);
        await this.creditCard.fill(customerDetails.creditCard);
        await this.month.fill(customerDetails.month);
        await this.year.fill(customerDetails.year);

        await this.purchaseButton.click();
    }

    // Verify purchase
    async verifyPurchase() {
        await expect(this.confirmationMessage).toBeVisible();
    }
}
