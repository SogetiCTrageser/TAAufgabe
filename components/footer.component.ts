import {Page,Locator} from '@playwright/test'

//Component class to open control the footer of the sogeti pages
class FooterComp{

    //class properties
    page:Page;
    contactUs: Locator;
    footer: Locator;    

    constructor(page: Page){
        this.page = page;
        this.contactUs = page.locator('//ul[@class="wp-block-list"]//a[text()="Contact us"]');
        this.footer = page.locator('//footer');
    }

    //Open Funktions - Loading pages via URL or links-------------------------------------------------------------------------------------------
    
    //Open the "Contact Us" page via Link in the footer
    async openContactUsPage(){
    
        //Set fokus on footer(Not needed because of autofokus, but was explizit requested in the requiement.)
        await this.fokusFooter();

        //Click on the Contact Us link and wait until page is loaded
        await this.contactUs.click();
        await this.page.waitForLoadState();
    }


    //Utility Funktions - Supporting working with the component-------------------------------------------------------------------------------------------

    //Set the focus of the browser on the Footer (Not needed because of autofokus, but was explizit requested in the requiement.)
    async fokusFooter(){
        //Set the focus on the Footer
        await this.footer.scrollIntoViewIfNeeded();
    }
}

export default FooterComp