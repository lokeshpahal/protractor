// login scenario
var cred = {
	LOGINURL : 'http://integration.scrumdo.com/account/login/',
	USERNAME : 'ajay1',
	PASSWORD : 'klug'
}
describe('Scrumdo', function() {
	it('user should able to login', function() {
		browser.get(cred.LOGINURL);
		element(by.name('username')).sendKeys(cred.USERNAME);
		element(by.name('password')).sendKeys(cred.PASSWORD);
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){
			
		});
		
		element(by.css('.organization-picker')).then(function(attr){
			expect(element(by.css('.pull-right')).getText()).toEqual('Create New Organization');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText()).toEqual('The username and/or password you specified are not correct.');
			console.log('Login error!');
		});
	});
});