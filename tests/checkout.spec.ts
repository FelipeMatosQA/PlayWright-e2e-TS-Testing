import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
import {faker} from '@faker-js/faker'
const users = require("../fixtures/users.json")


test.beforeEach("Visit URL",async({page})=>{
    const pm = new PageManager(page)
    await page.goto("/")
    await pm.onLoginPage().performLogin(users.standard,users.password)
    await pm.onInvetoryPage().validateSucessfullLogin({page})
})

test("Sucessfull checkout of a single item", async ({page})=>{
    const pm = new PageManager(page)
    
    
    const itemOnStore = await pm.onInvetoryPage().selectItemByIndex({page},1)
    
    await pm.onInvetoryPage().navigateToCart({page})
    
    const itemOnCart = await pm.onCartPage().getPriceAndNameItem()

    expect(itemOnStore.name).toEqual(itemOnCart.name)
    expect(itemOnStore.price).toEqual(itemOnCart.price)

    
    await pm.onCartPage().clickCheckoutButton({page})
    
    await pm.onCheckoutOnePage().fillCheckoutInformation(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.location.zipCode('########'))
    await pm.onCheckoutOnePage().clickCountinueToCheckoutTwo({page})
    
    const price = await pm.onCheckoutTwoPage().getPriceValues()
    
    expect(await pm.onBasePage().convertStringToNumber(itemOnCart.price)).toEqual(price.totalItem)
    expect(price.tax + price.totalItem).toEqual(price.totalPrice)

    await pm.onCheckoutTwoPage().clickFinishButton({page})
    await pm.onCheckoutCompletePage().validateCheckout()
})