///<reference types = 'cypress'/>
///<reference types = '@cypress/xpath'/>

//const { describe } = require("mocha");

describe('Orangehrm', ()=> {
    it(' Orange login', ()=> {
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('input[name = "username"]').type('Admin')
        // cy.get('input[name = "password"]').type('admin123')
        // cy.get('button[type = "submit"]').click()

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name = "username"]').type('Admin')
        cy.get('input[name = "password"]').type('admin123')
        cy.get('button[type = "submit"]').click()


    });
});
