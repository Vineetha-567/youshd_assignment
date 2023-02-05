
const { By } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .forBrowser(webdriver.Browser.CHROME)
    .setChromeOptions()
    .build();

// Get the credentials from the JSON file
let { number, otp } = require("./credentials.json");

// Step 1 - Opening the youshould.com sign in page
let tabToOpen =
    driver.get("https://app-staging.youshd.com");
    tabToOpen
        .then(function () {

            let findTimeOutP =
                driver.manage().setTimeouts({
				    implicit: 20000, // 10 seconds
			    });
		    return findTimeOutP;
	    })
	    .then(function () {

		// Step 2 - Finding the username input
		    let promiseUsernameBox =
                driver.findElement(webdriver.By.xpath((`//*[@id="root"]/div/div/div[1]/div[2]/input`)));
		    return promiseUsernameBox;
	    })
	    .then(function (usernameBox) {

		// Step 3 - Entering the mobile number
		    let promiseFillUsername =
			    usernameBox.sendKeys(number);
		    return promiseFillUsername;
	    })
        .then(function () {
		    console.log("mobile nbr entered successfully!" );

		// Step 6 - Finding the Sign In button
		    let promiseSignInB = driver.findElement(
	
			    webdriver.By.xpath((`//*[@id="root"]/div/div/div[2]/button[2]`))
		    );
		    return promiseSignInB;
	    })
	    .then(function (signInBt) {

		// Step 7 - Clicking the Sign In button
		    let promiseClickSign = signInBt.click();
		    return promiseClickSign;
	    })
	    .then(function () {
		    console.log("Enter otp");

		// Step 4 - Finding the password input
		    let promisePasswordBox =	
            	driver .findElement(webdriver.By.className("verify-input"));
		    return promisePasswordBox;
	    })
	    .then(function (passwordBox) {

		// Step 5 - Entering the password
		    let promiseFillPassword =
			    passwordBox.sendKeys(otp);
		    return promiseFillPassword;
	    })
	    .then(function () {
		    console.log("otp entered successfully in");

		// Step 6 - Finding the Sign In button
		    let promiseSignInBtn =  driver.findElement(
                webdriver.By.xpath((`//*[@id="root"]/div/div/div[2]/button[2]`))
		    );
		    return promiseSignInBtn;
	    })
	    .then(function (signInBtn) {

		// Step 7 - Clicking the Sign In button
		    let promiseClickSignIn = signInBtn.click();
		    return promiseClickSignIn;
	    })
	    .then(function () {
		    console.log("Successfully signed ");
	    })
	    .catch(function (err) {
		    console.log("err");
	    });
