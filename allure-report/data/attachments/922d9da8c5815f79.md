# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: phonepurchase.spec.js >> Phone Purchase
- Location: tests\phonepurchase.spec.js:6:1

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "dialog"
============================================================
```

# Test source

```ts
  6   |        
  7   |         //Login details
  8   |         this.loginbutton = page.locator('#login2');
  9   |         this.username = page.locator('#loginusername');
  10  |         this.password = page.locator('#loginpassword');
  11  |         this.button = page.locator('//button[@onclick="logIn()"]');
  12  | 
  13  |         //close button in login 
  14  |         this.closebutton = page.locator('#logInModal button.btn-secondary');
  15  | 
  16  |         //Logout details
  17  |         this.logoutbutton = page.locator('#logout2')
  18  | 
  19  |         this.product = page.getByRole('link', { name: 'Samsung galaxy s6'});
  20  | 
  21  |         this.addtocart = page.locator('//a[@onclick="addToCart(1)"]');
  22  | 
  23  |         this.cart = page.locator('#cartur');
  24  | 
  25  |         this.placeorder = page.getByRole('button', { name: 'Place Order'});
  26  | 
  27  |         // Place Order popup fields
  28  |         this.name = page.locator('#name');
  29  |         this.country = page.locator('#country');
  30  |         this.city = page.locator('#city');
  31  |         this.creditcard = page.locator('#card');
  32  |         this.month = page.locator('#month');
  33  |         this.year = page.locator('#year');
  34  | 
  35  |         this.purchase = page.getByRole('button', {name: 'Purchase'});
  36  | 
  37  |         // Success popup OK button
  38  |         this.okbutton = page.getByRole('button', {name: 'OK'});
  39  | 
  40  | 
  41  |     }
  42  | 
  43  |     async openApplication()
  44  |      {
  45  |         await this.page.goto('https://www.demoblaze.com/');
  46  |     }
  47  | 
  48  |     async login(username, password)
  49  |      {
  50  |         await this.loginbutton.click();
  51  |         await this.username.fill(username);
  52  |         await this.password.fill(password);
  53  |         await this.button.click();
  54  |         await this.product.click();
  55  |     }
  56  | 
  57  |     async close(username,password)
  58  |     {
  59  |     await this.loginbutton.click();
  60  |     await this.username.waitFor({ state: 'visible' });
  61  |     await this.username.fill(username);
  62  |     await this.password.fill(password);
  63  |     await this.closebutton.click();
  64  | 
  65  |     }
  66  | 
  67  |     async addToCart()
  68  |      {
  69  |         await this.addtocart.click();
  70  |     }
  71  | 
  72  |    
  73  | 
  74  | async order(name, country, city, creditcard, month, year) 
  75  | {
  76  | 
  77  |     await this.cart.click();
  78  | 
  79  |     await this.placeorder.click();
  80  | 
  81  |     // Wait for Place Order popup
  82  |     await this.name.waitFor({ state: 'visible' });
  83  | 
  84  |     console.log('Filling name');
  85  |     await this.name.fill(name);
  86  | 
  87  |     console.log('Filling country');
  88  |     await this.country.fill(country);
  89  | 
  90  |     console.log('Filling city');
  91  |     await this.city.fill(city);
  92  | 
  93  |     console.log('Filling credit card');
  94  |     await this.creditcard.waitFor({ state: 'visible' });
  95  |     await this.creditcard.fill(creditcard);
  96  | 
  97  |     console.log('Filling month');
  98  |     await this.month.fill(month);
  99  | 
  100 |     console.log('Filling year');
  101 |     await this.year.fill(year);
  102 | 
  103 |     console.log('Clicking Purchase');
  104 | 
  105 |     // Handle purchase browser dialog
> 106 |     const dialogPromise = this.page.waitForEvent('dialog');
      |                                     ^ Error: page.waitForEvent: Target page, context or browser has been closed
  107 |     await this.purchase.click();
  108 |     const dialog = await dialogPromise;
  109 |     console.log('Purchase message:', dialog.message());
  110 |     await expect(dialog.message()).toContain('Thank you for your purchase!');
  111 |     await dialog.accept();
  112 |     console.log('Purchase completed');
  113 | }
  114 | 
  115 | 
  116 | async logout()
  117 | {
  118 |     await this.logoutbutton.click()
  119 | }
  120 | 
  121 | }
  122 | 
  123 | 
```