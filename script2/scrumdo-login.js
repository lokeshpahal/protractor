// login scenario
var param = {
	loginUrl : 'https://app.scrumdo.com/account/login/',
	userName: 'test31',
	password: 'test',
	firstTimeLogin: false,
	projectName: 'My Test Project'
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
		//browser.driver.manage().window().maximize();
		//browser.waitForAngular();
    });
	
	// Case: Successfull Login 
	// login with right credentials
	it('Successfull Login', function() {
		browser.get(param.loginUrl);
		browser.driver.manage().deleteAllCookies();
		
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('password')).sendKeys(param.password);
		element.all(by.css('.scrumdo-btn')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		
		element(by.css('.nav-settings .dropdown-menu')).then(function(attr){
			//expect(element(by.css('.nav-settings .dropdown-menu li:nth-child(2) a')).getText()).toEqual('Account Settings');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText());
			console.log('Wrong username or password!');
		});
	});
	
	// Case: Create Project
	it('Create Project', function() {
		element.all(by.tagName('a')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === 'Projects';
			});
		}).then(function(filteredElements) {
			filteredElements[0].click();
		});
		
		element(by.css('#boardTable .scrumdo-wrapper-navigation .col-lg-offset-8 .scrumdo-btn')).click();
		element(by.css('#id_name')).sendKeys(param.projectName);
		
		element.all(by.buttonText('Create Personal Project')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
	});
	
	//Case: Setup Project
	it('Setup Project',function(){
		console.log('Running Project Setup Wizard');
		element.all(by.buttonText('Board Wizard')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		element.all(by.buttonText('Next')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		element.all(by.buttonText('Next')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
	});
	
	it('Setup Project step3',function(){
		element.all(by.buttonText('Done')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
	});
});