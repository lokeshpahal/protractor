// login scenario
var cred = {
	LOGINURL : 'http://integration.scrumdo.com/account/login/'
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
      browser.get(cred.LOGINURL);
	  browser.driver.manage().deleteAllCookies();
	  browser.driver.manage().window().maximize();
    });
	
	it('user should able to login', function() {
		element(by.name('username')).sendKeys('ajay');
		element(by.name('password')).sendKeys('klug');
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		element(by.css('.organization-picker')).then(function(attr){
			expect(element(by.css('.pull-right')).getText()).toEqual('Create New Organization');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText()).toEqual('The username and/or password you specified are not correct.');
			console.log('Login error!');
		});
	});
	
	it('user should not able to login', function() {
		element(by.name('username')).sendKeys('test');
		element(by.name('password')).sendKeys('test');
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		element(by.css('.alert-error strong')).then(function(attr){
			expect(element(by.css('.alert-error strong')).getText()).toEqual('The username and/or password you specified are not correct.');
			console.log('Wrong username or password!');
		},function(){
			
		});
	});
	
});