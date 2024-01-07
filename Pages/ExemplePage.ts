import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class ExemplePage extends BasePage{
//classes de page devem extender a basePage

    readonly page: Page
  //readonly nomeDoElemento: Locator

//Elementos devem constar acima como parâmetros da classe
    constructor(page: Page){
        super(page)
      //this.nomeDoElemento = this.findElement("#locator")
        
//Elementos também devem constam no construtor   
    }


    async funcExemple(){
        (await this.findElement("#aaa")).click()
    }

}