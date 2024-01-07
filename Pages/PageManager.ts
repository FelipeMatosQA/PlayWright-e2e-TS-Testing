import { Page } from "playwright";

import { ExemplePage } from "./ExemplePage";//Classe importada automaticamente
import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";


export class PageManager{

    private readonly page: Page
    private readonly exemplePage: ExemplePage
    private readonly basePage: BasePage
    private readonly loginPage: LoginPage
    private readonly invetoryPage: InventoryPage
    private readonly cartPage: CartPage

    //suas pages serão incluídas nos parâmetros como private

    constructor(page: Page){
        this.page = page
        this.exemplePage = new ExemplePage(this.page)
        this.basePage = new BasePage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.invetoryPage = new InventoryPage(this.page)
        this.cartPage = new CartPage(this.page)
        //instânciar a page no construtor do PM
    }

    onExemplePage(){
        return this.exemplePage
        //Nos testes para instanciar o objeto dessa classe utilizar esse método
    }

    onBasePage(){
        return this.basePage
    }

    onLoginPage(){
        return this.loginPage
    }

    onInvetoryPage(){
        return this.invetoryPage
    }

    onCartPage(){
        return this.cartPage
    }
}