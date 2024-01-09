import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
const users = require("../fixtures/users.json")


test.beforeEach("Visit URL",async({page})=>{
    const pm = new PageManager(page)
    await page.goto("/")
    await pm.onLoginPage().performLogin(users.standard,users.password)
    await pm.onInvetoryPage().validateSucessfullLogin({page})
})
test('Validate that the item has been addicioned to the cart', async ({ page }) => {
    const pm = new PageManager(page)
    
    const expectedNameAndPrice = await pm.onInvetoryPage().selectItemByIndex({page},1)
    await pm.onInvetoryPage().navigateToCart({page})
    const currentNameAndPrice = await pm.onCartPage().getPriceAndNameItem()
    
    
    expect(currentNameAndPrice.name).toEqual(expectedNameAndPrice.name)
    expect(expectedNameAndPrice.price).toEqual(currentNameAndPrice.price)
});

test('Validate that multiples itens has been addicioned to the cart', async ({page}) =>{
    const pm = new PageManager(page)

    const expectedNameAndPrice1 = await pm.onInvetoryPage().selectItemByIndex({page},4)
    const expectedNameAndPrice2 = await pm.onInvetoryPage().selectItemByIndex({page},3)
    await pm.onInvetoryPage().navigateToCart({page})
    const currentNameAndPrice = await pm.onCartPage().getPriceAndNameOfMultiplesItens()
    
    expect(expectedNameAndPrice1.name).toEqual(currentNameAndPrice.names[0])
    expect(expectedNameAndPrice2.name).toEqual(currentNameAndPrice.names[1])
    expect(expectedNameAndPrice1.price).toEqual(currentNameAndPrice.prices[0])
    expect(expectedNameAndPrice2.price).toEqual(currentNameAndPrice.prices[1])
})

test('Validate if the cart icon counter is counting correctly the numbers of itens added to cart', async ({page})=>{
    const pm = new PageManager(page)

    await pm.onInvetoryPage().selectItemByIndex({page},1)
    await pm.onInvetoryPage().selectItemByIndex({page},2)
    expect( await pm.onInvetoryPage().getNumberOfItensInTheCart()).toEqual("2")
    await pm.onInvetoryPage().selectItemByIndex({page},3)
    await pm.onInvetoryPage().selectItemByIndex({page},4)
    expect(await pm.onInvetoryPage().getNumberOfItensInTheCart()).toEqual("4")
})

test("Validate if the item has been removed from the cart after click 'Remove' button", async({page})=>{
    const pm = new PageManager(page)

    await pm.onInvetoryPage().selectItemByIndex({page},1)
    await pm.onInvetoryPage().navigateToCart({page})
    await pm.onCartPage().checkIfThereIsAItemInTheCart()
    await pm.onCartPage().removeItemFromTheCart()

})