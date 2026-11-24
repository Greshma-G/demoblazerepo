# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Demoblaze Product Purchase >> Purchase a Phone
- Location: tests\purchase.spec.js:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - dialog "Place order" [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total: 760"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: 760 Name:" [ref=f3e13]': Greshma
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [active] [ref=f3e16]: India
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [ref=f3e28]
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e48]:
          - link "Log out" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e50]:
          - link "Welcome Greshma" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup [ref=f3e64]:
          - row [ref=f3e65]:
            - cell [ref=f3e66]
            - cell "Samsung galaxy s6" [ref=f3e68]
            - cell "360" [ref=f3e69]
            - cell [ref=f3e70]:
              - link "Delete" [ref=f3e71] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e72]:
            - cell [ref=f3e73]
            - cell "Apple monitor 24" [ref=f3e75]
            - cell "400" [ref=f3e76]
            - cell [ref=f3e77]:
              - link "Delete" [ref=f3e78] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e79]:
      - heading "Total" [level=2] [ref=f3e80]
      - heading "760" [level=3] [ref=f3e83]
      - button "Place Order" [ref=f3e84]
  - generic [ref=f3e86]:
    - generic [ref=f3e89]:
      - heading "About Us" [level=4] [ref=f3e90]
      - paragraph [ref=f3e91]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e94]:
      - heading "Get in Touch" [level=4] [ref=f3e95]
      - paragraph [ref=f3e96]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e97]: "Phone: +440 123456"
      - paragraph [ref=f3e98]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e102]
  - contentinfo [ref=f3e104]:
    - paragraph [ref=f3e105]: Copyright © Product Store
```

# Test source

```ts
  15  | 
  16  |         // Category locators
  17  |         this.phonesCategory = page.getByText('Phones', { exact: true });
  18  |         this.monitorsCategory = page.getByText('Monitors', { exact: true });
  19  | 
  20  |         // Product locator
  21  |         this.productList = page.locator('.card-title a');
  22  | 
  23  |         // Add to cart
  24  |         this.addToCartButton = page.getByText('Add to cart', { exact: true });
  25  | 
  26  |         // Cart locators
  27  |         this.cartLink = page.locator('#cartur');
  28  |         this.placeOrderButton = page.getByRole('button', {
  29  |             name: 'Place Order'
  30  |         });
  31  | 
  32  |         // Order form locators
  33  |         this.name = page.locator('#name');
  34  |         this.country = page.locator('#country');
  35  |         this.city = page.locator('#city');
  36  |         this.creditCard = page.locator('#card');
  37  |         this.month = page.locator('#month');
  38  |         this.year = page.locator('#year');
  39  | 
  40  |         this.purchaseButton = page.locator(
  41  |             '#orderModal button:has-text("Purchase")'
  42  |         );
  43  | 
  44  |         // Purchase confirmation
  45  |         this.confirmationMessage = page.getByText(
  46  |             'Thank you for your purchase!',
  47  |             { exact: true }
  48  |         );
  49  |     }
  50  | 
  51  |     // Open website
  52  |     async openWebsite() {
  53  |         await this.page.goto('https://www.demoblaze.com/');
  54  |     }
  55  | 
  56  |     // Login
  57  |     async login(username, password) {
  58  |         await this.loginLink.click();
  59  | 
  60  |         await this.username.fill(username);
  61  |         await this.password.fill(password);
  62  | 
  63  |         await this.loginButton.click();
  64  | 
  65  |         await expect(this.welcomeUser).toBeVisible();
  66  |     }
  67  | 
  68  |     // Select category and product
  69  |     async selectProduct(category) {
  70  | 
  71  |         if (category === 'Phones') {
  72  |             await this.phonesCategory.click();
  73  |         }
  74  |         else if (category === 'Monitors') {
  75  |             await this.monitorsCategory.click();
  76  |         }
  77  | 
  78  |         // Wait until products are displayed
  79  |         await expect(this.productList.first()).toBeVisible();
  80  | 
  81  |         // Select the first available product
  82  |         await this.productList.first().click();
  83  |     }
  84  | 
  85  |     // Add product to cart and handle popup
  86  |     async addProductToCart() {
  87  | 
  88  |         const dialogPromise = this.page.waitForEvent('dialog');
  89  | 
  90  |         await this.addToCartButton.click();
  91  | 
  92  |         const dialog = await dialogPromise;
  93  | 
  94  |         const message = dialog.message();
  95  | 
  96  |         await dialog.accept();
  97  | 
  98  |         return message;
  99  |     }
  100 | 
  101 |     // Navigate to cart
  102 |     async openCart() {
  103 |         await this.cartLink.click();
  104 | 
  105 |         await expect(this.placeOrderButton).toBeVisible();
  106 |     }
  107 | 
  108 |     // Place order
  109 |     async placeOrder(customerDetails) {
  110 | 
  111 |         await this.placeOrderButton.click();
  112 | 
  113 |         await this.name.fill(customerDetails.name);
  114 |         await this.country.fill(customerDetails.country);
> 115 |         await this.city.fill(customerDetails.city);
      |                         ^ Error: locator.fill: Target page, context or browser has been closed
  116 |         await this.creditCard.fill(customerDetails.creditCard);
  117 |         await this.month.fill(customerDetails.month);
  118 |         await this.year.fill(customerDetails.year);
  119 | 
  120 |         await this.purchaseButton.click();
  121 |     }
  122 | 
  123 |     // Verify purchase
  124 |     async verifyPurchase() {
  125 |         await expect(this.confirmationMessage).toBeVisible();
  126 |     }
  127 | }
  128 | 
```