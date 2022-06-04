describe('spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('/')
  })
})
//teste com falha inicial

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
//teste que passa

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

//teste de falha

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})

//teste que carrega a página do kitchen
