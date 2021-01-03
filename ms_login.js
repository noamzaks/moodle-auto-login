// URL: login.microsoftonline.com/**/... redirect_uri=https://moodle.technion.ac.il/auth/oidc
var mysuperemailaddress = '';

const mysupermain = () => {
    var mysuperddlogin = document.querySelector(`div[aria-label="Sign in with ${mysuperemailaddress} work or school account."]`)
    if (mysuperddlogin) mysuperddlogin.click();
}

setInterval(mysupermain, 1000);
