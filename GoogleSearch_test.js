Feature('GoogleSearch');

 

Scenario('test something', ({ I }) => {

 

    I.amOnPage('/');

    I.wait(2);

 

});

 

Scenario('2.TestCase2-Test',({ I }) => {

    I.amOnPage('https://opensource-demo.orangehrmlive.com');

    I.see('LOGIN Panel');

    I.fillField("//input[@id='txtUsername']","Admin");

    // I.fillField({xpath: "//input[@id='txtUsername']"},"Admin");

    I.fillField({id: 'txtPassword'},"admin123");

    I.click('#btnLogin');

    I.see('Dashboard');

    I.dontSee('LOGIN Panel');

 

})

 

Scenario('3.Grab Text-Test',({ I }) => {

    I.amOnPage('http://the-internet.herkouapp.com/checkboxes');

    let a = await I.grabTextFrom('#checkboxes'); // whenever grabText is used using async await function

    console.log(a);

   

})

 

 

Scenario('4.SelectOption-Test',({ I }) => {

    I.amOnPage('http://the-internet.herkouapp.com/dropdown');

    I.selectOption('#dropdown',"Option 1");

    I.wait(1);

   

})

 

Scenario('5.Wait-Test for Smart wait',({ I }) => {

    I.amOnPage('http://the-internet.herkouapp.com/dynamic_loading/1');

    I.click("//button[contains(text(),'Start')]");

    I.waitForText("Hello World!",20);

   

})