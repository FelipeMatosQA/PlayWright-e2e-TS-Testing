import { Page } from "playwright";
import { expect} from '@playwright/test'



export class BasePage{

    readonly page: Page

    constructor(page: Page){//Construtor que recebe a page
        this.page = page
    }
    

    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }

    async findElement(element){
        return await this.page.locator(element)
    }

    async visitDefaultUrl(){
        await this.page.goto('https://demoqa.com/')
    }

    async validadeCurrentUrl({page},url: string){

        await page.waitForURL(url)
        expect(page.url()).toBe(url)

    }



    //demais métodos da base page aqui
}