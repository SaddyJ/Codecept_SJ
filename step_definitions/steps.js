const { I } = inject();

// Add in your custom step files

 

Given('I Login into Orange HRM', () => {

    I.amOnPage('https://opensource-demo.orangehrmlive.com');

    I.see('LOGIN Panel');

    I.fillField("//input[@id='txtUsername']","Admin");

    // I.fillField({xpath: "//input[@id='txtUsername']"},"Admin");

    I.fillField({id: 'txtPassword'},"admin123");

    I.click('#btnLogin');

});

 

Then('I should see the Dashboard page', () => {

     I.see('Dashboard');

});

 

When('I go to Admin Tab', () => {

  I.click("//b[contains(text(),'Admin')]")

});

 

Then('I should see the "{word}"', (seetext) => {

  I.see(seetext);

});