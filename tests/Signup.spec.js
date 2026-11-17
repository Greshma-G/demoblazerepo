import{test,expect} from "@playwright/test"
import { SignupPage } from "../Pages/signup"

test('Sign Up',async({page})=>{
    const signuppage = new SignupPage(page)
    await signuppage.openApplication()  
    await signuppage.signupbutton.click()
    await signuppage.username.fill('Renoop')
    await signuppage.password.fill('1234567')
    await signuppage.button.click()
})