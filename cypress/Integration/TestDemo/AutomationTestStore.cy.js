///<reference types = 'cypress'/>
///<reference types = '@cypress/xpath'/>

//const { describe } = require("mocha");

describe('AutomationTestStore', ()=> {
    it(' Automation Page', ()=> {
        cy.visit('https://automationteststore.com/')
        cy.xpath('(//*[text() = "Contact Us"])[2]').click()

        cy.get('#ContactUsFrm_first_name').type('John doe').should('have.value','John doe')
        cy.get('#ContactUsFrm_email').type('johndoe@gmail.com').should('have.attr','name','email')

        cy.get('#ContactUsFrm_enquiry').type('Cypress training going on')
        
        //using xpath
        cy.xpath("//button[@title='Submit']").click()
        cy.xpath("//*[contains(text(),'successfully')]").should('have.text',"Your enquiry has been successfully sent to the store owner!")

        cy.log("Test completed and registered")
    });
});
