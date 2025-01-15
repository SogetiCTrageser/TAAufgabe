import {expect, test,} from '@playwright/test'
import NavigateComp from '../components/navigate.component'
import CountryDataArray from '../testdata/countryURLs.json'
import FooterComp from '../components/footer.component'
import ContactUsPage from '../pages/ContactUs.page'
import { faker } from '@faker-js/faker'

test.describe('TA Aufgaben', () => {
    

    //Test Case 1: Loading the Service - Quality Engineering an verify the navigation links of the selected page
    test('TC1: Open Service - Quality Engineering', async ({ page }) => {
        
        //Initialitz Navigate class
        const navigateComp= new NavigateComp(page);

        //Loading the Service - Quality Engineering page
        await navigateComp.openQualityEngineeringPage();

        //Verify the navigation links
        await navigateComp.verifyNavigationLinks('Services','Quality Engineering');
    })
    

    //Test Case 2: Loading and fill out the "Contact Us"-form entering partial random data
    test('TC2: Verify Contact us page', async ({ page }) => {
        //Initialitz NavigateComp, FooterComp and ContactUsPage class
        const navigateComp= new NavigateComp(page);
        const footerComp= new FooterComp(page);
        const contactUsPage= new ContactUsPage(page);

        //Loading the Service - Quality Engineering page
        await navigateComp.openQualityEngineeringPage();

        //Loading the Contact Us page via footer link
        await footerComp.openContactUsPage();

        //Enter partial random data into the contact form
        await contactUsPage.inputContactDataRandomText
        (
            'Alumni',
            faker.person.firstName(),
            faker.person.lastName(),
            'Automatisierer',
            'Consultant/Senior Consultant',
            faker.internet.email({provider:'sogeti.de'}),
            'DE',
            faker.phone.number({ style: 'international' }),
            'Sogeti',
            faker.lorem.paragraph()
        );

        //Check the agreement checkbox
        await contactUsPage.setAgreeCBox(true);
    })


    //Test Case 3: : Verify the links to the internal landingpage versions
    for (const countryData of CountryDataArray){
        test('TC3: Verify link to the landingpage versions of ' + countryData.country, async ({ page }) =>{
            //Initialitz Navigate class
            const navigateComp= new NavigateComp(page);

            console.log("Verify the link of",countryData.country);
            await navigateComp.selectCountry(countryData.country);

            console.log("Expect URL ",countryData.url);
            await expect(page).toHaveURL(countryData.url);

        })
    }
    
})
