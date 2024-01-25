import { Locator, Page } from "playwright";
import {expect} from '@playwright/test'
import { BasePage } from "./BasePage";
const systemURL = require("../fixtures/systemURL.json")


export class InventoryPage extends BasePage{

    readonly page: Page
    readonly headerLogo: Locator
    readonly twitterLink: Locator
    readonly linkedinLink: Locator
    readonly facebookLink: Locator
    readonly cartLink: Locator
    readonly itemBadgeCounter : Locator
    readonly item1link: Locator
    
    

    constructor(page){
        super(page)
        this.headerLogo = page.locator(".app_logo")
        this.twitterLink = page.locator(".social").getByText("Twitter")
        this.linkedinLink = page.locator(".social").getByText("LinkedIn")
        this.facebookLink = page.locator(".social").getByText("Facebook")
        this.cartLink = page.locator(".shopping_cart_link")
        this.itemBadgeCounter = page.locator(".shopping_cart_badge")
        this.item1link = page.locator("#item_4_img_link")
        
    }

    
    getTwitterlink(){
        return this.twitterLink
    }
    getFacebookLink(){
        return this.facebookLink
    }
    getLinkedinLink(){
        return this.linkedinLink
    }

    async selectItemByIndex({page},index: number){
        
        const itemContainer = page.locator(`//div[@class="inventory_list"]/div[${index}]`)
        const price = await itemContainer.locator('.inventory_item_price').textContent()
        const name =  await itemContainer.locator('.inventory_item_name').textContent() 
        const description =  await itemContainer.locator('.inventory_item_desc').textContent()
        const addToCartBtn = itemContainer.getByRole('button')
        await addToCartBtn.click()
        return {price,name,description}
    }

    async navigateToCart({page}){
        await this.cartLink.click()
        await this.waitForNetwork({page})
        await this.validadeCurrentUrl({page},systemURL.cart)
         
    }

    async getNumberOfItensInTheCart(){
        const numberOfItens = await this.itemBadgeCounter.textContent()
        return numberOfItens
    }

    async validateSucessfullLogin({page}){
        await this.validadeCurrentUrl({page},systemURL.inventory)
        await expect(this.headerLogo).toBeVisible()
    }

    async accessInvetoryOfItem1({page}){
        await this.item1link.click()
        await this.validadeCurrentUrl({page},systemURL.product_Inventory)
    }


}