// Create Account scenario
var param = {
	registrationUrl : 'https://app.scrumdo.com/account/signup/',
	userName: 'test32',
	fullName: 'test Name',
	email: 'test@test.com',
	password: 'test',
	organizationName: 'My Organization',
	projectName: 'My Project'
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
		browser.driver.manage().window().maximize();
    });
	
	//**************************************** Case: Registration **************************************/
	it('Successfull Registration', function() {
		browser.get(param.registrationUrl);
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('fullname')).sendKeys(param.fullName);
		element(by.name('email')).sendKeys(param.email);
		element(by.name('password')).sendKeys(param.password);
		element(by.css('.scrumdo-btn')).click().then(function(){});
	});
	
	//****************************************** Case: Setup Organization ****************************************/
	it('Setup Organization',function(){
		console.log('Registration Successful');
		element(by.css('.scrumdo-signup-title')).then(function(){
			element(by.name('organization_name')).sendKeys(param.organizationName);
			element.all(by.css('.scrumdo-btn')).filter(function(elem) {
				return elem.isDisplayed(); 
			}).click();
			
			element(by.name('project_name')).sendKeys(param.projectName);
			element.all(by.css('.scrumdo-btn')).filter(function(elem) {
				return elem.isDisplayed(); 
			}).click();
			
			element.all(by.css('.scrumdo-btn')).filter(function(elem) {
				return elem.isDisplayed(); 
			}).click();
		},function(){});
	});
	
	//********************************************************* Case: Setup Project ***************************************/
	it('Setup Project',function(){
		expect(element(by.css('.overview-project-link')).getText()).toEqual(param.projectName).then(function(){
			console.log('Project Created Successfully');
		});
		element(by.css('.overview-project-link')).click();
	});
	it('Setup Project step2',function(){
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
	
	//****************************** Case: Logout ************************************/
	it('Logout',function(){
		element.all(by.css('.nav-settings a')).get(0).click().then(function(){
			element.all(by.css('.nav-settings .dropdown-menu li')).get(6).element(by.tagName('a')).click();
			expect(element.all(by.css('.nav-settings .dropdown-menu li')).isPresent()).toBe(false);
		});
	});
});