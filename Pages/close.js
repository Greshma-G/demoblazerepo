export class ClosePage {
    constructor(page)
     {
        this.page = page;

         //Signup details
        this.signupbutton = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.button = page.locator("//button[text()='Sign up']");

        //close button in login 
        this.closebutton = page.locator('#signInModal button.btn-secondary');


    }

    async openApplication()
     {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async close(username,password)
    {
    await this.signupbutton.click();
    await this.username.waitFor({ state: 'visible' });
    await this.username.fill(username);
    await this.password.fill(password);
    await this.closebutton.click();

    }
}