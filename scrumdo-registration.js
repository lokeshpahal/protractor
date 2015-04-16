// login scenario
var param = {
	registrationUrl : 'https://app.scrumdo.com/account/signup/',
	loginUrl : 'https://app.scrumdo.com/account/login/',
	userName: 'test28',
	fullName: 'test Name',
	email: 'test@test.com',
	password: 'test',
	registerd: false,
	loggedIn: false,
	organizationName: 'My Organization',
	projectName: 'My Project'
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
		browser.driver.manage().window().maximize();
    });
	
	//Case: Successfull Registration
	it('Successfull Registration', function() {
		browser.get(param.registrationUrl);
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('fullname')).sendKeys(param.fullName);
		element(by.name('email')).sendKeys(param.email);
		element(by.name('password')).sendKeys(param.password);
		element(by.css('.scrumdo-btn')).click().then(function(){
			param.registerd=true;
		});
		
	});
	
	//Case: Setup Organization
	it('Setup Organization',function(){
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
	
	//Case: Setup Project
	it('Setup Project',function(){
		element(by.css('.overview-project-link')).click();
	});
	it('Setup Project step2',function(){
		element.all(by.buttonText('Board Wizard')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		element.all(by.buttonText('Next')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		element.all(by.buttonText('Next')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		element.all(by.buttonText('Done')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		
	});
	it('Setup Project step3',function(){
		//element.all(by.css('.scrumdo-column-title')).get(0).element(by.tagName('button')).click();
		//element.all(by.css('.scrumdo-column-title')).get(0).element(by.css('.dropdown-menu li')).get(0).click();
	});
	
	
});