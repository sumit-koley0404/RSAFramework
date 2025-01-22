const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageObject/POManager');
//cnst dataset=(JSON.parse(JSON.stringify(require('../utils/login.json'))));

test('valid LogIn',async({page})=>
{
    
    const username ="sumitkoley727@gmail.com";
    const password ="Sumit@123";
    const textContent = page.locator("div[class='left mt-1'] h3");
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage(); 
    loginPage.LogIn(username,password);
    await expect(textContent).toHaveText("Automation");
})
test('Invalid LogIn',async({page})=>
{
    const username ="sumitkoley727@gmail.comm";
    const password ="Sumit@123";
    const invalidLoginMessage =page.locator("div[aria-label='Incorrect email or password.']");
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    loginPage.LogIn(username,password);
    await expect(invalidLoginMessage).toHaveText("Incorrect email or password."); 
})