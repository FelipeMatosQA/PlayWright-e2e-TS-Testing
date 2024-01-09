import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
const systemURL = require("../fixtures/systemURL.json")

export class CheckoutTwoPage extends BasePage{

    readonly page: Page
    readonly totalItemPrice: Locator
    readonly taxPrice: Locator
    readonly totalAmoutPrice: Locator
    readonly finishBtn: Locator

    constructor(page){
        super(page)
        this.totalItemPrice = page.locator(".summary_subtotal_label")
        this.taxPrice = page.locator(".summary_tax_label")
        this.totalAmoutPrice = page.locator(".summary_info_label.summary_total_label")
        this.finishBtn = page.locator("#finish")
    }


    async getPriceValues(){
        const totalItem = await this.convertStringToNumber(await this.totalItemPrice.innerText())
        const tax = await this.convertStringToNumber(await this.taxPrice.innerText())
        const totalPrice = await this.convertStringToNumber(await this.totalAmoutPrice.innerText())

        return {totalItem, tax, totalPrice}
    }

    async clickFinishButton({page}){
        await this.finishBtn.click()
        await this.waitForNetwork({page})
        await this.validadeCurrentUrl({page},systemURL.checkoutComplete)
    }
}