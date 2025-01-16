import {Page,Locator,expect} from '@playwright/test'

//Component class to open specific pages via URL
class NavigateComp{

    //class properties
    page:Page;
    countrySelector: Locator;
    serviceBtn: Locator;
    qualityEngineeringBtn: Locator;
    parentPageLink: Locator;
    currentPageLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.countrySelector = page.locator('//li[@class="header-lang-open"]//i[@class="ti ti-world"]');
        this.serviceBtn = page.locator('//a[@aria-label="Services menu"]');
        this.qualityEngineeringBtn = page.locator('//a[@aria-label="Quality Engineering menu"]');
        this.parentPageLink = page.locator('//ul[@class="sub-navigation__list"]//li[@class="menu-parent"]//span');
        this.currentPageLink = page.locator('//ul[@class="sub-navigation__list"]//a[@class="active"]//span');
    }


    //Open Funktions - Loading pages via URL or links-------------------------------------------------------------------------------------------

    //Open the sogeti landingpage
    async openLandingPage(){

        //Open the URL of the sogeti website
        await this.page.goto('https://www.sogeti.com/',{waitUntil:"load"});

        //Wait until loading is completed by waiting for country seletion listobject
        await this.countrySelector.waitFor({ timeout: 10000 ,state:"visible"});
    }

    //Open Service - Quality Engineering page
    async openQualityEngineeringPage(){

        //Open the Sogeti Landingpage
        await this.openLandingPage();

        //Hover the Mouse over the Services button, to open submenu
        await this.serviceBtn.hover();
        await expect(this.qualityEngineeringBtn).toBeVisible({timeout:5000});

        //Click the "Quality Engineering" button
        await this.qualityEngineeringBtn.click();
    }


    
    //Select country given via parameter. 
    //The parameter contains the country as text which is merged into an a xpath to identify the object
    async selectCountry(country:string){

        //Create the xpath statement for the locator
        let xpathLocator = '//div[@class="header-lang header_lang_menu"]//span[@class="inner location-span" and contains(text(), "'+ country +'")]';
        
        //Open Sogeti landing page
        await this.openLandingPage();

        //Open list of countrys 
        await this.countrySelector.click();
        await this.page.waitForLoadState("load");

        //Use xpath to identify and click the country given by the parameter
        await this.page.locator(xpathLocator).click();

        //Wait until loading has been finished
        await this.page.waitForLoadState("load");
    }
        
    
    //Verify Funktions - Verify content of the navigation bar-------------------------------------------------------------------------------------------

    //Verify navigation links of the current page
    async verifyNavigationLinks(parentPage:string, currentPage:string){

        //Verify the link of the parent page
        await expect(this.parentPageLink).toHaveText(parentPage);

        //Verify the link of the current page
        await expect(this.currentPageLink).toHaveText(currentPage);
    }

}

export default NavigateComp