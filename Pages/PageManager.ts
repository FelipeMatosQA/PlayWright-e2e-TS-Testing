import { Page } from "playwright";

import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";
import { CheckoutOnePage } from "./CheckoutOnePage";
import { CheckoutTwoPage } from "./CheckoutTwoPage";
import { CheckoutCompletePage } from "./CheckoutCompletePage";
import { ProductInventoryPage } from "./ProductInventoryPage";



export class PageManager{

    private readonly page: Page
    private readonly basePage: BasePage
    private readonly loginPage: LoginPage
    private readonly invetoryPage: InventoryPage
    private readonly cartPage: CartPage
    private readonly checkoutOnePage: CheckoutOnePage
    private readonly checkoutTwoPage: CheckoutTwoPage
    private readonly checkoutCompletePage: CheckoutCompletePage
    private readonly productInventoryPage: ProductInventoryPage

    

    constructor(page: Page){
        this.page = page

        this.basePage = new BasePage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.invetoryPage = new InventoryPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.checkoutOnePage = new CheckoutOnePage(this.page)
        this.checkoutTwoPage = new CheckoutTwoPage(this.page)
        this.checkoutCompletePage = new CheckoutCompletePage(this.page)
        this.productInventoryPage = new ProductInventoryPage(this.page)
       
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

    onCheckoutOnePage(){
        return this.checkoutOnePage
    }

    onCheckoutTwoPage(){
        return this.checkoutTwoPage
    }

    onCheckoutCompletePage(){
        return this.checkoutCompletePage
    }

    onProductInventoryPage(){
        return this.productInventoryPage
    }
}