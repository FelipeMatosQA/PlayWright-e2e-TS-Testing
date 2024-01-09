import { Locator, Page ,expect} from "@playwright/test";
import { BasePage } from "./BasePage";
const systemURL = require("../fixtures/systemURL.json")



export class CheckoutOnePage extends BasePage{

    readonly page: Page
    readonly firstNameForm: Locator
    readonly lastNameForm: Locator
    readonly postalCodeForm: Locator
    readonly continueBtn: Locator

    constructor(page){
        super(page)
        this.firstNameForm = page.locator("#first-name")
        this.lastNameForm = page.locator("#last-name")
        this.postalCodeForm = page.locator("#postal-code")
        this.continueBtn = page.locator("#continue")
    }

    async fillCheckoutInformation(firstName : string ,lastName: string, postalCode:string){
        await this.firstNameForm.fill(firstName)
        await expect(this.firstNameForm).toHaveValue(firstName)

        await this.lastNameForm.fill(lastName)
        await expect(this.lastNameForm).toHaveValue(lastName)

        await this.postalCodeForm.fill(postalCode)
        await expect(this.postalCodeForm).toHaveValue(postalCode)
        
    }

    async clickCountinueToCheckoutTwo({page}){
        await this.continueBtn.click()
        await this.validadeCurrentUrl({page},systemURL.checkoutTwo)
        

    }
}