import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductInventoryPage extends BasePage{

    readonly page: Page
    readonly itemName: Locator
    readonly itemPrice: Locator
    readonly itemDesc: Locator
    

    constructor(page){
        super(page)
        this.itemDesc = page.locator(".inventory_details_desc")
        this.itemName = page.locator(".inventory_details_name")
        this.itemPrice = page.locator(".inventory_details_price")
    }


    async getProductInformation(){
        const name = await this.itemName.textContent()
        const description = await this.itemDesc.textContent()
        const price = await this.itemPrice.textContent()
        return{name,description,price}
    }
}