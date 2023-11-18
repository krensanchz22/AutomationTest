import { faker } from '@faker-js/faker';
describe('Student Registration form Test in mobile viewport size', () => {

    beforeEach(() =>{
      cy.viewport('iphone-xr')
      cy.visit(Cypress.config('baseUrl'))
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.wait(5000)
    })

    //Submit the formulario with only the required fields (name, last name, phonenumber, gender)
   it('Test Case 1: Verify the form allows successfully registration of an student with only required fields', () => {
      cy.get('#firstName').type(faker.person.firstName())
      cy.get('#lastName').type(faker.person.lastName())
      cy.getOption('[type="radio"]')
      cy.get('#userNumber').type(faker.phone.number('##########'))
      cy.get('#submit').click({ force: true }) 
      cy.get('.modal-content').should('be.visible')
      cy.get('#example-modal-sizes-title-lg').should('be.visible').contains('Thanks for submitting the form')
   
     
    })

    //Submit the formulario with all information
    it('Test Case 2: Verify the form allows successfully registration of an student with all theinformation', () =>  { 
      cy.get('#firstName').type(faker.person.firstName())
      cy.get('#lastName').type(faker.person.lastName())
      cy.get('#userEmail').type(faker.internet.email())
      cy.getOption('[type="radio"]')
      cy.get('#userNumber').type(faker.phone.number('##########'))
      cy.get('#userNumber').type('5441254784')
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__year-select').select('2000')
      cy.get('.react-datepicker__month-select').select('June')
      cy.get(`.react-datepicker__day--0${23}`).first().click()
     
      cy.get('#subjectsInput').type('a')
      cy.get('.subjects-auto-complete__menu').should('be.visible')
      cy.get('#subjectsInput').type('{enter}')
      cy.getOption('[type="checkbox"]') 
      cy.upload('#uploadPicture')
      cy.get('#currentAddress').type(faker.location.streetAddress())
    
      cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click({ force: true })
      cy.get('.css-11unzgr').should('be.visible')
      cy.get('#react-select-3-option-1').click({ force: true })
      cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click({ force: true })
      cy.get('#react-select-4-option-0').click({ force: true })
      cy.get('#submit').click({ force: true })
      
      cy.get('.modal-content').should('be.visible')
      cy.get('#example-modal-sizes-title-lg').should('be.visible').contains('Thanks for submitting the form')
    
     })

     //Submit the formulario with without phone number information
     it('Test Case 3: Verify the form prevents student registration without phone number', () =>  { 
      cy.get('#firstName').type(faker.person.firstName())
      cy.get('#lastName').type(faker.person.lastName())
      cy.get('#userEmail').type(faker.internet.email())
      cy.getOption('[type="radio"]')
      cy.get('#userNumber').should('have.css', 'border-color').and('eq', 'rgb(206, 212, 218)')
     
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__year-select').select('2000')
      cy.get('.react-datepicker__month-select').select('June')
      cy.get(`.react-datepicker__day--0${23}`).first().click()
     
      cy.get('#subjectsInput').type('a')
      cy.get('.subjects-auto-complete__menu').should('be.visible')
      cy.get('#subjectsInput').type('{enter}')
      cy.getOption('[type="checkbox"]') 
      cy.upload('#uploadPicture')
      cy.get('#currentAddress').type(faker.location.streetAddress())

      cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click({ force: true })
      cy.get('.css-11unzgr').should('be.visible')
      cy.get('#react-select-3-option-1').click({ force: true })
      cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click({ force: true })
      cy.get('#react-select-4-option-0').click({ force: true })

      cy.get('#submit').click({ force: true })
      cy.get('#userNumber').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)')
      cy.get('.modal-content').should('not.exist')
     })
   
})


//subjects-auto-complete__menu css-2613qy-menu