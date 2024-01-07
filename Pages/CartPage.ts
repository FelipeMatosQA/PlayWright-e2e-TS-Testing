import { Locator ,Page} from "playwright";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    
    readonly page: Page
    readonly nameItem: Locator
    readonly priceItem: Locator

    constructor(page){
        super(page)
        this.priceItem = page.locator('.inventory_item_price')
        this.nameItem = page.locator('.inventory_item_name')
    }


    async getPriceAndNameItem({page}){

        const price = await page.locator('.inventory_item_price').textContent()//await this.priceItem.textContent()

        console.log("preCO page = " + price)
        const name = await page.locator('.inventory_item_name').textContent()//this.nameItem.textContent()

        console.log("nome= page= " + name)
        return {
            price,
            name
        }
    }

    async getPriceAndNameOfMultiplesItens({page}){
        
        const prices = await this.priceItem.allTextContents()
        const names = await this.nameItem.allTextContents()
        return {
            prices,
            names
        }
    }
}