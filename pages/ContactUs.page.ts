import {Page,Locator, expect} from '@playwright/test'

//Component class to open control the footer of the sogeti pages
class ContactUsPage{
    //class properties
    page:Page;
    purposeSlct: string;
    firstNameTxt: Locator;
    lastNameTxt: Locator;
    jobTitleTxt: Locator;
    positionSlct: string;
    emailTxt: Locator;
    countryTxt: string;
    phoneTxt: Locator;
    companyTxt: Locator;
    messageTxt: Locator;
    agreeCBox: Locator;
    submitBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.purposeSlct = '//label[text()="Purpose of contact "]/parent::div/select';
        this.firstNameTxt = page.locator('//input[@placeholder="First name"]');
        this.lastNameTxt = page.locator('//input[@placeholder="Last name"]');
        this.jobTitleTxt = page.locator('//input[@placeholder="Job Title"]');
        this.positionSlct = '//label[text()="Position/Level "]/parent::div/select';
        this.emailTxt = page.locator('//input[@type="email"]');
        this.countryTxt = '//select[@class="form-control mf_field__input empty mf-country-selectbox form_country_select"]';
        this.phoneTxt = page.locator('//input[@class="form-control custom-phone"]');
        this.companyTxt = page.locator('//input[@placeholder="Company"]');
        this.messageTxt = page.locator('//textarea[@placeholder="Your Message"]');
        this.agreeCBox = page.locator('//input[@class="form-check-input" and @type="checkbox"]');
        this.submitBtn = page.locator('//input[@name="submit_btn_txt"]');
    }

    //Input Funktions - Entering data or interact with elements-------------------------------------------------------------------------------------------
 
    //Fill all fields of the contact us form with valid data. All text and numbers are randomized
    async inputContactDataRandomText(purpose:string, firstName:string,lastName:string,jobTitle:string, position:string,email:string,country:string, phone:string,company:string,message:string){     
        
        //Select purpose from the list
        await this.page.selectOption(this.purposeSlct,{value:purpose});

        //Select position from the list
        await this.page.selectOption(this.positionSlct,{value:position});

        //Select country from the list
        await this.page.selectOption(this.countryTxt,{value:country});

        //Enter firstname, lastname, jobTitel, email, company, phone and message
        await this.firstNameTxt.pressSequentially(firstName);
        await this.lastNameTxt.pressSequentially(lastName);
        await this.jobTitleTxt.pressSequentially(jobTitle);
        await this.emailTxt.pressSequentially(email);
        await this.companyTxt.pressSequentially(company);
        await this.phoneTxt.pressSequentially(phone);
        await this.messageTxt.pressSequentially(message);
    }

    //Check or uncheck the agreeCBox depending on the give parameter
    async setAgreeCBox(toBeChecked:boolean){
        
        if (toBeChecked==true) {
            this.agreeCBox.check();
            await expect(this.agreeCBox).toBeChecked({checked:true,timeout:5000});
        } else {
            this.agreeCBox.uncheck();
            await expect(this.agreeCBox).toBeChecked({checked:false,timeout:5000});
        }

    }
}

export default ContactUsPage