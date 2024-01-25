import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
const users = require("../fixtures/users.json")


test.beforeEach("Visit URL",async({page})=>{
    const pm = new PageManager(page)
    await page.goto("/")
    await pm.onLoginPage().performLogin(users.standard,users.password)
    await pm.onInvetoryPage().validateSucessfullLogin({page})
})

test("Valitade if the product information is correct on the inventory", async ({page})=>{

    const pm = new PageManager(page)

    const productInfo = await pm.onInvetoryPage().selectItemByIndex({page},1)
    await pm.onInvetoryPage().accessInvetoryOfItem1({page})
    const productPageInfo = await pm.onProductInventoryPage().getProductInformation()
    
    expect(productInfo.name).toEqual(productPageInfo.name)
    expect(productInfo.price).toEqual(productPageInfo.price)
    expect(productInfo.description).toEqual(productPageInfo.description)


    

})