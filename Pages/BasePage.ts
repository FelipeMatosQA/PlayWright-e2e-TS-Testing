import { Page } from "playwright";
import { expect} from '@playwright/test'



export class BasePage{

    readonly page: Page
    

    constructor(page: Page){//Construtor que recebe a page
        this.page = page
        
    }
    

    async waitForNumberOfSeconds({page},timeInSeconds: number){
        await page.waitForTimeout(timeInSeconds * 1000)
    }
    async waitForNetwork({page}){
        await page.waitForLoadState('networkidle')
    }

    

    

    async validadeCurrentUrl({page},url: string){

        await page.waitForURL(url)
        expect(page.url()).toBe(url)
    }

    async convertStringToNumber(value){
        const digits = value.replace(/[^\d\-.]/g, ""); 
        return Number(digits);
    }



    //demais métodos da base page aqui
}