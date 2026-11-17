export class LogoutPage {
    constructor(page) {
        this.page = page;

        //Login details
        this.loginbutton = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.button = page.locator('//button[@onclick="logIn()"]');

        //Logout details
        this.logoutbutton = page.locator('#logout2');
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
    }

    async logout()
    {
    await this.logoutbutton.click()
   }
}