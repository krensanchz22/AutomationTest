import 'cypress-file-upload'

Cypress.Commands.add('getOption', ($item) => { 

    cy.get($item).then(($elements) => {
        const randomOption = Math.floor(Math.random() * $elements.length);
        cy.log('length is '+ $elements.length)
        cy.log('random option to be selected will be '+randomOption)
        cy.get($item).eq(randomOption).check({ force: true })
    })      
})

Cypress.Commands.add('upload', ($item) => { 
    const imageFile = 'picture.png'
    cy.get($item).attachFile(imageFile)
})
 