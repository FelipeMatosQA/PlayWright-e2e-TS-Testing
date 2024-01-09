import { test, Page, Browser,expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
const users = require("../fixtures/users.json")
const url = require("../fixtures/socialURL.json")




test("click on twitter", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await page.goto("/")
    pm.onLoginPage().performLogin(users.standard,users.password)
    pm.onInvetoryPage().validateSucessfullLogin({page})
    
    
    const link = pm.onInvetoryPage().getTwitterlink()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await link.click()
    ])
    await newPage.waitForLoadState('domcontentloaded')
    await newPage.waitForLoadState('networkidle')
    expect(newPage.url()).toBe(url.twitterURL)
})

test("click on LINKEDIN", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await page.goto("/")
    pm.onLoginPage().performLogin(users.standard,users.password)
    pm.onInvetoryPage().validateSucessfullLogin({page})
    
    
    const link = pm.onInvetoryPage().getLinkedinLink()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await link.click()
    ])
    await newPage.waitForLoadState('domcontentloaded')
    await newPage.waitForLoadState('networkidle')
    expect(newPage.url()).toBe(url.linkedinURL)
})

test("click on Facebook", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)
    


    await page.goto("/")
    pm.onLoginPage().performLogin(users.standard,users.password)
    pm.onInvetoryPage().validateSucessfullLogin({page})
    
    
    const link = pm.onInvetoryPage().getFacebookLink()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await link.click()
    ])
    await newPage.waitForLoadState('domcontentloaded')
    await newPage.waitForLoadState('networkidle')
    expect(newPage.url()).toBe(url.facebookURL)
})



