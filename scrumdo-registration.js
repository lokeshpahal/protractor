// login scenario
var param = {
	registrationUrl : 'https://app.scrumdo.com/account/signup/',
	loginUrl : 'https://app.scrumdo.com/account/login/',
	userName: 'test13',
	fullName: 'test Name',
	email: '',
	password: 'test',
	registerd: false,
	loggedIn: false
}
describe('Scrumdo', function() {
	
	beforeEach(function() {
		if(param.loggedIn==false && param.registerd==false){
			browser.get(param.registrationUrl);
			browser.driver.manage().deleteAllCookies();
			browser.driver.manage().window().maximize();
		}
		if(param.registerd==true && param.loggedIn==false){
			browser.get(param.loginUrl);
			browser.driver.manage().deleteAllCookies();
		}
    });
	
	//Case: Successfull Registration
	it('Successfull Registration', function() {
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('fullname')).sendKeys(param.fullName);
		element(by.name('email')).sendKeys(param.email);
		element(by.name('password')).sendKeys(param.password);
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		
	});
	
	//Case: Successfull Login
	it('Successfull Login', function() {
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('password')).sendKeys(param.password);
		element(by.css('.scrumdo-btn')).click();
		
		element(by.css('.btn-primary')).then(function(){
			element(by.css('.scrumdo-btn')).click();
		},function(){});
		
		element(by.css('.nav-settings .dropdown-menu')).then(function(attr){
			param.loggedIn = true;
			//expect(element(by.css('.nav-settings .dropdown-menu li:nth-child(2) a')).getText()).toEqual('Account Settings');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText());
			console.log('Wrong username or password!');
		});
	});
	
});