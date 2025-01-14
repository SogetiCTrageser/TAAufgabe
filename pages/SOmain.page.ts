import {Locator, Page} from '@playwright/test'

class SOmainPage{
    //class properties
    page:Page;
    countrySelector: Locator;


    
    constructor(page: Page){
        this.countrySelector = page.locator('//li[@class="header-lang-open"]');
    
    }

    //Funktion to select country
    async selectCountry(country:string){
        //Open list of countrys
        await this.countrySelector.click();

        //Create the xpath statement for the locator
        let xpathLocator = './/span[@class="inner location-span" and contains(text(), "'+ country +'")]';
        console.log(xpathLocator);



    }

}

export default SOmainPage