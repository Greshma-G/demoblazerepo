export class AddtoCart{
    constructor(page)
    {
        this.page = page;
        //Login details
        this.loginbutton = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.button = page.locator('//button[@onclick="logIn()"]');
        this.product = page.getByRole('link', { name: 'Samsung galaxy s6'});
        this.addtocart = page.getByRole('link', {name: 'Add to cart'});
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

    async addToCart()
     {
        await this.addtocart.click();
    }

}