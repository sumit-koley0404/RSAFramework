const{LoginPage}=require('./LogInPage');
class POManager
{
    constructor(page)
    {
        this.page = page;
        this.logInPage = new LoginPage(this.page);
    }
    getLoginPage()
    {
        return this.logInPage;
    }
}
module.exports={POManager};