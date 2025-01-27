const {test,expect}=require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require('../utils/registration.json')));
for(const data of dataset)
{
test.only('Register with valid Email',async({page})=>
{
    const registerBtn = page.locator(".btn1");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const mobileNo = page.locator("#userMobile");
    const gender = page.locator("input[value='Male']");
    const userPassword = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const checkBox = page.locator(".col-md-1");
    const submit = page.locator("#login");
    const successValidation = page.locator(".headcolor");

    await page.goto("https://rahulshettyacademy.com/client/");
    await registerBtn.click();
    await firstName.fill(data.firstName);
    await lastName.fill(data.lastName);
    await email.fill(data.email);
    await mobileNo.fill(data.mobileNo);
    await page.selectOption(".custom-select","Engineer");
    await gender.click();
    await userPassword.fill(data.userPassword);
    await confirmPassword.fill(data.confirmPassword);
    await checkBox.click();
    //Scroll to the buttom of the page
    await page.evaluate(() => {
        window.scrollBy(0, 200);
      })
    await page.waitForTimeout(1000);  
    await submit.click();
    await expect(successValidation).toHaveText(data.successMessage);


})}