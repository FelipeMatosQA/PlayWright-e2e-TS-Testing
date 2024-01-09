import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
const users = require("../fixtures/users.json")


test.beforeEach("Visit URL",async({page})=>{
    const pm = new PageManager(page)
    await page.goto("/")
    await pm.onLoginPage().performLogin(users.standard,users.password)
    await pm.onInvetoryPage().validateSucessfullLogin({page})
})

test("Sucessfull checkout of a single item", async ({page})=>{
    const pm = new PageManager(page)
    
    //seleciona um item
    const itemOnStore = await pm.onInvetoryPage().selectItemByIndex({page},1)
    
    await pm.onInvetoryPage().navigateToCart({page})
    //valida o valor e nome do item na loja e na loja
    const itemOnCart = await pm.onCartPage().getPriceAndNameItem()

    expect(itemOnStore.name).toEqual(itemOnCart.name)
    expect(itemOnStore.price).toEqual(itemOnCart.price)

    //efetua o checkout
    await pm.onCartPage().clickCheckoutButton({page})
    //preenche form de checkout
    await pm.onCheckoutOnePage().fillCheckoutInformation("Roberval","Adagolbaldo","123456")// passar valores por fixures
    await pm.onCheckoutOnePage().clickCountinueToCheckoutTwo({page})
    //pega os valores do checkout
    const price = await pm.onCheckoutTwoPage().getPriceValues()
    //valida o preço do item no carrinho e compara com o valor do preço total- E valida o preço total preço+ taxa
    expect(await pm.onBasePage().convertStringToNumber(itemOnCart.price)).toEqual(price.totalItem)
    expect(price.tax + price.totalItem).toEqual(price.totalPrice)

    await pm.onCheckoutTwoPage().clickFinishButton({page})
    await pm.onCheckoutCompletePage().validateCheckout()




})