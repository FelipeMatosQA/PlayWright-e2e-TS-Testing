import { Locator ,Page} from "playwright";
import {expect} from '@playwright/test'
import { BasePage } from "./BasePage";
const systemURL = require("../fixtures/systemURL.json")

export class CartPage extends BasePage{
    
    readonly page: Page
    readonly labelItem: Locator
    readonly nameItem: Locator
    readonly descItem: Locator
    readonly priceItem: Locator
    readonly checkoutBtn: Locator
    readonly removeBtn: Locator
    readonly removedCartItem: Locator
    readonly cartCounterBadge:Locator

    constructor(page){
        super(page)
        this.priceItem = page.locator('.inventory_item_price')
        this.nameItem = page.locator('.inventory_item_name')
        this.descItem = page.locator('.inventory_item_desc')
        this.checkoutBtn = page.locator("#checkout")
        this.labelItem = page.locator(".cart_item_label")
        this.removeBtn= this.labelItem.getByRole("button")
        this.removedCartItem = page.locator(".removed_cart_item")
        this.cartCounterBadge = page.locator(".shopping_cart_badge")
    }


    async getPriceAndNameItem(){
        const price = await this.priceItem.textContent()
        const name = await this.nameItem.textContent()
        const description = await this.descItem.textContent()

        return {
            price,
            name,
            description
        }
    }

    async getPriceAndNameOfMultiplesItens(){
        
        const prices = await this.priceItem.allTextContents()
        const names = await this.nameItem.allTextContents()
        const description = await this.descItem.allTextContents()
        return {
            prices,
            names,
            description
        }
    }
    
    async clickCheckoutButton({page}){
        await this.checkoutBtn.click()
        await this.validadeCurrentUrl({page},systemURL.checkout_One)
    }

    async checkIfThereIsAItemInTheCart(){
        
        expect(this.labelItem.isVisible()).toBeTruthy()
        await expect(this.cartCounterBadge).toHaveText("1")
    }

    async removeItemFromTheCart({page}){
        await this.removeBtn.click()
        //const badge = this.cartCounterBadge
        //await page.waitForFunction(()=>{expect(this.cartCounterBadge.isHidden()).toBeTruthy()})
        //expect(this.cartCounterBadge.isHidden()).toBeTruthy()
        expect(this.labelItem.isHidden).toBeTruthy()
        expect(this.removedCartItem.isHidden).toBeTruthy()

    }
}