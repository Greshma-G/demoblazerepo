
export class MonitorPurchase {
    constructor(page) {
        this.page = page;

        // Login details
        this.loginbutton = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.button = page.locator('//button[@onclick="logIn()"]');
        this.logoutbutton = page.locator('#logout2');

        // Monitor purchase
        this.monitor = page.getByRole('link', {
            name: 'Monitors',
            exact: true
        });

        // DemoBlaze product card link
        this.product = page.locator('a.hrefch', {
            hasText: 'Apple monitor 24'
        });

        this.addtocart = page.getByRole('link', {
            name: 'Add to cart',
            exact: true
        });

        this.cart = page.locator('#cartur');

        // Place Order details
        this.placeorder = page.getByRole('button', {
            name: 'Place Order'
        });
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditcard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchasebutton = page.locator(
            '//button[@onclick="purchaseOrder()"]'
        );
    }

    async openApplication() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async login(username, password) {
        await this.loginbutton.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();

        // Wait until login is successful
        await this.logoutbutton.waitFor({
            state: 'visible',
            timeout: 15000
        });
    }

    async selectMonitorProduct() {
        await this.monitor.click();

        // Wait for the dynamically loaded product
        await this.product.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.product.click();
    }

    async addToCart() {
        await this.addtocart.waitFor({ state: 'visible' });
        await this.addtocart.click();
    }

    async order(name, country, city, creditcard, month, year) {
        await this.cart.click();
        await this.placeorder.click();

        await this.name.waitFor({ state: 'visible' });

        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.creditcard.fill(creditcard);
        await this.month.fill(month);
        await this.year.fill(year);

        this.page.once('dialog', async dialog => {
            console.log('Purchase message:', dialog.message());
            await dialog.accept();
        });

        await this.purchasebutton.click();
    }
}
