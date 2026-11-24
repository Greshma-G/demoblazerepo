# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: monitorpurchase.spec.js >> Monitor purchase
- Location: tests\monitorpurchase.spec.js:6:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#name') to be visible
    66 × locator resolved to hidden <input id="name" type="text" class="form-control"/>

```

# Test source

```ts
  1   | 
  2   | export class MonitorPurchase {
  3   |     constructor(page) {
  4   |         this.page = page;
  5   | 
  6   |         // Login details
  7   |         this.loginbutton = page.locator('#login2');
  8   |         this.username = page.locator('#loginusername');
  9   |         this.password = page.locator('#loginpassword');
  10  |         this.button = page.locator('//button[@onclick="logIn()"]');
  11  |         this.logoutbutton = page.locator('#logout2');
  12  | 
  13  |         // Monitor purchase
  14  |         this.monitor = page.getByRole('link', {
  15  |             name: 'Monitors',
  16  |             exact: true
  17  |         });
  18  | 
  19  |         // DemoBlaze product card link
  20  |         this.product = page.locator('a.hrefch', {
  21  |             hasText: 'Apple monitor 24'
  22  |         });
  23  | 
  24  |         this.addtocart = page.getByRole('link', {
  25  |             name: 'Add to cart',
  26  |             exact: true
  27  |         });
  28  | 
  29  |         this.cart = page.locator('#cartur');
  30  | 
  31  |         // Place Order details
  32  |         this.placeorder = page.getByRole('button', {
  33  |             name: 'Place Order'
  34  |         });
  35  |         this.name = page.locator('#name');
  36  |         this.country = page.locator('#country');
  37  |         this.city = page.locator('#city');
  38  |         this.creditcard = page.locator('#card');
  39  |         this.month = page.locator('#month');
  40  |         this.year = page.locator('#year');
  41  |         this.purchasebutton = page.locator(
  42  |             '//button[@onclick="purchaseOrder()"]'
  43  |         );
  44  |     }
  45  | 
  46  |     async openApplication() {
  47  |         await this.page.goto('https://www.demoblaze.com/');
  48  |     }
  49  | 
  50  |     async login(username, password) {
  51  |         await this.loginbutton.click();
  52  |         await this.username.fill(username);
  53  |         await this.password.fill(password);
  54  |         await this.button.click();
  55  | 
  56  |         // Wait until login is successful
  57  |         await this.logoutbutton.waitFor({
  58  |             state: 'visible',
  59  |             timeout: 15000
  60  |         });
  61  |     }
  62  | 
  63  |     async selectMonitorProduct() {
  64  |         await this.monitor.click();
  65  | 
  66  |         // Wait for the dynamically loaded product
  67  |         await this.product.waitFor({
  68  |             state: 'visible',
  69  |             timeout: 15000
  70  |         });
  71  | 
  72  |         await this.product.click();
  73  |     }
  74  | 
  75  |     async addToCart() {
  76  |         await this.addtocart.waitFor({ state: 'visible' });
  77  |         await this.addtocart.click();
  78  |     }
  79  | 
  80  |     async order(name, country, city, creditcard, month, year) {
  81  |         await this.cart.click();
  82  |         await this.placeorder.click();
  83  | 
> 84  |         await this.name.waitFor({ state: 'visible' });
      |                         ^ Error: locator.waitFor: Target page, context or browser has been closed
  85  | 
  86  |         await this.name.fill(name);
  87  |         await this.country.fill(country);
  88  |         await this.city.fill(city);
  89  |         await this.creditcard.fill(creditcard);
  90  |         await this.month.fill(month);
  91  |         await this.year.fill(year);
  92  | 
  93  |         this.page.once('dialog', async dialog => {
  94  |             console.log('Purchase message:', dialog.message());
  95  |             await dialog.accept();
  96  |         });
  97  | 
  98  |         await this.purchasebutton.click();
  99  |     }
  100 | }
  101 | 
```