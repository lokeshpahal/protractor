// login scenario
var param = {
	loginUrl : 'https://app.scrumdo.com/account/login/',
	userName: 'test31',
	password: 'test',
	firstTimeLogin: false,
	projectName: 'My Test Project',
	storySummery: 'This is a Story'
}
describe('Scrumdo', function() {

	// Case: Successfull Login 
	// login with right credentials
	it('Successfull Login', function() {
		browser.get(param.loginUrl);
		browser.driver.manage().deleteAllCookies();
		//browser.driver.manage().window().maximize();
		
		element(by.name('username')).sendKeys(param.userName);
		element(by.name('password')).sendKeys(param.password);
		element.all(by.css('.scrumdo-btn')).filter(function(elem) {
			return elem.isDisplayed(); 
		}).click();
		expect(element(by.css('.nav-settings .dropdown-menu li:nth-child(2) a')).getText()).toEqual('Account Settings');
		
		/*
		element(by.css('.nav-settings .dropdown-menu')).then(function(attr){
			//expect(element(by.css('.nav-settings .dropdown-menu li:nth-child(2) a')).getText()).toEqual('Account Settings');
			console.log('User logged in Successfully!');
		},function(){
			expect(element(by.css('.alert-error strong')).getText());
			console.log('Wrong username or password!');
		}); */
	});
	/*
	// Case: Create Project
	it('Create Project', function() {
		element.all(by.tagName('a')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === 'Projects';
			});
		}).then(function(filteredElements) {
			filteredElements[0].click();
		});
		
		element(by.css('#boardTable .scrumdo-wrapper-navigation .col-md-2 .scrumdo-btn')).click();
		element(by.css('#id_name')).sendKeys(param.projectName);
		
		element.all(by.buttonText('Create New Project')).filter(function(elem) {
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
	
	//Case Setup Story
	it('Setup Story',function(){
		browser.get('https://app.scrumdo.com');
		element(by.css('.overview-project-link')).click();
	});
	
	it('Setup Story step2',function(){
		element.all(by.css('.scrumdo-column-title')).get(0).element(by.tagName('button')).click().then(function(){
			element.all(by.css('.scrumdo-column-title')).get(0).all(by.css('.dropdown-menu li a')).get(0).click().then(function(){
				browser.actions().sendKeys(param.storySummery).perform();
				element.all(by.buttonText('Save')).filter(function(elem) {
					return elem.isDisplayed(); 
				}).click();
			});
		});
		element.all(by.css('span.cards-edit')).filter(function(elem){
			return elem.isDisplayed();
		}).click();
		
		element.all(by.css('.modal-dialog .modal-content button')).get(5).click().then(function(){
			element.all(by.buttonText('Yes')).filter(function(elem) {
				return elem.isDisplayed(); 
			}).click();
		});
	});
	
	it('Delete Project',function(){
		browser.get('https://app.scrumdo.com');
		element(by.css('.overview-project-link')).click();
	});
	it('Delete Project step2',function(){
		element.all(by.css('.full-actions .action-1')).get(1).element(by.tagName('a')).click().then(function(){
			element.all(by.css('.scrumdo-account-menu li')).get(3).element(by.tagName('a')).click().then(function(){
				element.all(by.buttonText('Delete Project')).filter(function(elem) {
					return elem.isDisplayed(); 
				}).click();
			});
		});
		element.all(by.css('.modal-dialog .modal-content .modal-footer button')).get(1).click();
	});
	*/
});