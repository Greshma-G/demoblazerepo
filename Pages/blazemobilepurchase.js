
export class LoginPage {
    constructor(page)
     {
        this.page = page;
       
        //Login details
        this.loginbutton = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.button = page.locator('//button[@onclick="logIn()"]');

        //close button in login 
        this.closebutton = page.locator('#logInModal button.btn-secondary');

        //Logout details
        this.logoutbutton = page.locator('#logout2')

        this.product = page.getByRole('link', { name: 'Samsung galaxy s6'});

        this.addtocart = page.locator('//a[@onclick="addToCart(1)"]');

        this.cart = page.locator('#cartur');

        this.placeorder = page.getByRole('button', { name: 'Place Order'});

        // Place Order popup fields
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditcard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');

        this.purchase = page.getByRole('button', {name: 'Purchase'});

        // Success popup OK button
        this.okbutton = page.getByRole('button', {name: 'OK'});


    }

    async openApplication()
     {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async login(username, password)
     {
        await this.loginbutton.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();
        await this.product.click();
    }

    async close(username,password)
    {
    await this.loginbutton.click();
    await this.username.waitFor({ state: 'visible' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.closebutton.click();

    }

    async addToCart()
     {
        await this.addtocart.click();
    }

   
async order(name, country, city, creditcard, month, year) 
{
    await this.cart.click();
    await this.placeorder.click();
    
    await this.name.waitFor({ state: 'visible' });

    console.log('Filling name');
    await this.name.fill(name);

    console.log('Filling country');
    await this.country.fill(country);

    console.log('Filling city');
    await this.city.fill(city);

    console.log('Filling credit card');
    await this.creditcard.fill(creditcard);

    console.log('Filling month');
    await this.month.fill(month);

    console.log('Filling year');
    await this.year.fill(year);

    console.log('Clicking Purchase');

    // Handle purchase confirmation alert
    this.page.once('dialog', async dialog => {

        console.log('Purchase message:', dialog.message());

        expect(dialog.message()).toContain(
            'Thank you for your purchase!'
        );

        await dialog.accept();

        console.log('Purchase completed');

    });

    await this.purchase.click();

}



async logout()
{
    await this.logoutbutton.click()
}

}

