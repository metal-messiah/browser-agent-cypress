describe('My First Test', () => {


    beforeEach(() => {
        cy.visit('http://bam-test-1.nr-local.net:3333/')
      })

    it('navigates to all tests with XHR and known failing tests', () => {
        cy.get('a').each(e => {
            if (e[0].innerText.toLowerCase().includes('xhr') || e[0].innerText.toLowerCase().includes('timer')){
              cy.log(e[0].innerText)
              cy.visit(e[0].href, {timeout: 30000}) // waits for full page load
            }
        })
    })
  })