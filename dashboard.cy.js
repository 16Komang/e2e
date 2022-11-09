describe('kalender', () => {
  const email = 'polsri-jgd-a21';
  const password = 'PB#vsgA2121';
  beforeEach(() => {
    cy.visit('https://lms.kominfo.go.id/login/index.php');
    cy.setCookie('botble_cookie_newsletter', '1');
    cy.get('#username').type(email);
    cy.get('#password').type(password);
    cy.get('#loginbtn').click();
  });
  it('Site Home', () => { 
    cy.get('.active > .ml-0 > .media > .media-body').click();
    cy.get('[href="https://lms.kominfo.go.id/calendar/view.php?view=month"]').click();
  });
});