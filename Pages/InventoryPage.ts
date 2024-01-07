import { Locator, Page } from "playwright";
import { Browser,expect} from '@playwright/test'
import { BasePage } from "./BasePage";
import {Globals} from "../Global";




export class InventoryPage extends BasePage{

    readonly page: Page
    readonly headerLogo: Locator
    readonly twitterLink: Locator
    readonly linkedinLink: Locator
    readonly facebookLink: Locator
    readonly cartLink: Locator
    
    

    constructor(page){
        super(page)
        this.headerLogo = page.locator(".app_logo")
        this.twitterLink = page.locator(".social").getByText("Twitter")
        this.linkedinLink = page.locator(".social").getByText("LinkedIn")
        this.facebookLink = page.locator(".social").getByText("Facebook")
        this.cartLink = page.locator(".shopping_cart_link")
        
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
        const price = await itemContainer.locator('//div[@class="inventory_item_price"]').textContent()
        const name =  await itemContainer.locator('.inventory_item_name').textContent() 
        const addToCartBtn = itemContainer.getByRole('button')
        await addToCartBtn.click()
        return {price,name}
    }

    async navigateToCart({page}){
        await this.cartLink.click()
        expect(page.url()).toEqual("https://www.saucedemo.com/cart.html") 
    }

    async getNumberOfItensInTheCart({page}){
        const numeroNocarrinho = await page.locator(".shopping_cart_badge").textContent()
        return numeroNocarrinho
    }

    async validateSucessfullLogin({page}){
        await this.validadeCurrentUrl({page},"https://www.saucedemo.com/inventory.html")
        await expect(this.headerLogo).toBeVisible()
    }


}