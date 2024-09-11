///<reference types = 'cypress'/>
///<reference types = '@cypress/xpath'/>

//const { describe } = require("mocha");

describe('Heroku', ()=> {
    it('Heroku login', ()=> {
        cy.visit('https://the-internet.herokuapp.com/login')
        
        //typing the inputs
        cy.get('input[name = "username"]').type('tomsmith')
        cy.get('input[name = "password"]').type('SuperSecretPassword!')
        
        //norm way
        //cy.get('button[type = "submit"]').click()
        //cy.contains('Logout').click()

        //using xpath
        cy.xpath("//button[@type = 'submit']").click()
        cy.xpath('//a[@href = "/logout"]').click()
    });
});
