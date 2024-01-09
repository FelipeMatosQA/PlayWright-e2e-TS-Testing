import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
const users = require("../fixtures/users.json")


test.beforeEach("Visit URL",async({page})=>{
    await page.goto("/")
})
test('Sucessfull Login', async ({ page }) => {
    const pm = new PageManager(page)
    
    await pm.onLoginPage().performLogin(users.standard,users.password)
    await pm.onInvetoryPage().validateSucessfullLogin({page})

    
});

test('Login with invalid user', async ({page})=>{
    const pm = new PageManager(page)
    await pm.onLoginPage().performLogin(users.locked_out,users.password)
    await pm.onLoginPage().validateLockedLogin()
})

