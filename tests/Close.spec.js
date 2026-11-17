import{test,expect} from '@playwright/test'
import { ClosePage } from '../Pages/close'
import validLogindata from '../Utils/logincredentials.json'

test('close signup',async({page})=>{
    const closepage = new ClosePage(page)
    const usernamevalue = validLogindata.username
    const passwordvalue = validLogindata.password 
    await closepage.openApplication()
    await closepage.close(usernamevalue,passwordvalue)
})