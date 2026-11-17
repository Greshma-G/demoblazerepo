export class SignupPage {
    constructor(page)  
    {
        this.page = page;
        this.signupbutton = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.button = page.locator("//button[text()='Sign up']");
    }

    async openApplication()
    {
        await this.page.goto('https://www.demoblaze.com/');
    }
}