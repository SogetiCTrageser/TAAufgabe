import { chromium, firefox, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await firefox.launch();
    const page = await browser.newPage();

    await page.goto('https://www.sogeti.com/',{timeout: 30000,waitUntil:"load"});

    // Wait until the accept button for the cookies is visible
    const acceptCookies = page.locator('//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]');
    await acceptCookies.waitFor({ timeout: 30000 });

    //Accept the cookies and wait until the form disappeared
    await acceptCookies.click();
    await acceptCookies.waitFor({ timeout: 10000, state:"hidden" });

    // Save the state for confirmed cookies
    await page.context().storageState({ path: 'cookiesConfirmedState.json' });

    await browser.close();
}

export default globalSetup;
