import { Locator, Page,expect ,ElementHandle} from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage{
    readonly page: Page
    readonly image: Locator
    readonly orderMsgHeader: Locator
    readonly orderMsgBody: Locator
    readonly title: Locator

    constructor(page){
        super(page)
        this.image = page.locator(".pony_express")
        this.orderMsgHeader = page.locator(".complete-header")
        this.orderMsgBody = page.locator(".complete-text")
        this.title = page.locator(".title")
    }

    async validateCheckout(){

        await expect(this.title).toBeVisible()
        await expect(this.title).toHaveText("Checkout: Complete!")
        await expect(this.image).toBeVisible()
        await expect(this.orderMsgHeader).toHaveText("Thank you for your order!")
        await expect(this.orderMsgBody).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    }    
        
}