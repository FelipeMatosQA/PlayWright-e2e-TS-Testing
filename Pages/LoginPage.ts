import { Locator, Page } from "playwright";
import { expect} from '@playwright/test'
import { BasePage } from "./BasePage";
const msg = require("../fixtures/systemMessages.json")


export class LoginPage extends BasePage{

    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginBtn: Locator
    readonly errorMessage: Locator

    constructor(page){
        super(page)
        this.usernameField = page.locator('#user-name')
        this.passwordField = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async performLogin(username: string ,password: string, ){
        await this.usernameField
            .fill(username)
        await this.passwordField
            .fill(password)
        await this.loginBtn
            .click()
    }

    async validateLockedLogin(){
        await expect(this.errorMessage)
            .toContainText(msg.locked_User)
    }

    
}