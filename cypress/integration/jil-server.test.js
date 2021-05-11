describe('My First Test', () => {


    beforeEach(() => {
        cy.visit('http://bam-test-1.nr-local.net:3333/')
      })

      it('works on a known test that fails with cypress', () => {
        cy.get('a').contains('tests/browser/spa/cancelled-timer-twice.test.js').each(e => {
            cy.log(e[0].innerText)
            cy.visit(e[0].href)
            cy.contains('ok 1 interaction should be null at first').should('be.visible')
            cy.contains('ok 2 first timer fired').should('be.visible')
        })
      })

    // it('navigates to all tests in the list', () => {
    //     cy.get('a').each(e => {
    //         cy.log(e[0].innerText)
    //         cy.visit(e[0].href, {timeout: 30000})
    //         cy.contains('TAP', {timeout: 30000}).should('be.visible')
    //     })
    // })
  })