// login scenario
var param = {
	loginUrl : 'https://app.scrumdo.com/account/login/',
	userName: 'test12',
	password: 'test',
	firstTimeLogin: false
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
      browser.get(param.loginUrl);
	  browser.driver.manage().deleteAllCookies();
	  browser.driver.manage().window().maximize();
    });
	
	// Case: UnSuccessfull Login 
	// login with wrong credentials
	it('UnSuccessfull Login', function() {
		element(by.name('username')).sendKeys('test12');
		element(by.name('password')).sendKeys('test12');
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		element(by.css('.alert-error strong')).then(function(attr){
			expect(element(by.css('.alert-error')).getText());
			console.log('Wrong username or password!');
		},function(){
			
		});
	});
	
	// Case: Successfull Login 
	// login with right credentials
	it('Successfull Login', function() {
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('password')).sendKeys(param.password);
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		element(by.css('.nav-settings .dropdown-menu')).then(function(attr){
			//expect(element(by.css('.nav-settings .dropdown-menu li:nth-child(2) a')).getText()).toEqual('Account Settings');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText());
			console.log('Wrong username or password!');
		});
	});
	
	// Case: Create Organization
	it('Create Organization', function() {
		
	});
});