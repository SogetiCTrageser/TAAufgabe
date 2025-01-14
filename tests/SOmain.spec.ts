import {expect, test,} from '@playwright/test'
import Navigate from '../components/navigate.component'
import CountryDataArray from '../testdata/countryURLs.json'

test.describe('Erster Test zur verifzierung', () => {
    let navigate:Navigate;

    //Loading the Service - Quality Engineering an verify the navigation links of the selected page
    test('TC1: Open Service - Quality Engineering', async ({ page }) => {
        //Initialitz Navigate class
        navigate= new Navigate(page);

        await navigate.openQualityEngineeringPage();
        await navigate.verifyNavigationLinks('Services','Quality Engineering');
    })
    

    //Loading the Service - Quality Engineering an verify the navigation links of the selected page
    test('TC2: Verify Contact us page', async ({ page }) => {
        //Initialitz Navigate class
        navigate= new Navigate(page);

        await navigate.openQualityEngineeringPage();

    })


    //TC3: Verify the links to the internal landingpage versions
    test('TC3: Verify links of internal landingpage versions', async ({ page }) =>{
        //Initialitz Navigate class
        navigate= new Navigate(page);

        //Open global landingpage
        //await navigate.openLandingPage();

        for (const countryData of CountryDataArray){
            console.log("Verify the link of ",countryData.country)
            await navigate.selectCountry(countryData.country);

            console.log("Expect URL ",countryData.url)
            await expect(page).toHaveURL(countryData.url);
        }
        

    })
    
    
})
