export class ClosePage {
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


    }

    async openApplication()
     {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async close(username,password)
    {
    await this.loginbutton.click();
    await this.username.waitFor({ state: 'visible' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.closebutton.click();

    }
}