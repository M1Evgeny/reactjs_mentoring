describe("Searching movie scenario", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("input is blank", () => {
      cy.get("#title").should("have.value", "");
    });
  
    const inputText = "Deadpool";
    it("enter input", () => {
      cy.get("#title").type(inputText).should("have.value", inputText);
    });
  
    it("form submit and get searched movies", () => {
      cy.get("#title").type(inputText).type("{enter}");
      cy.get(".movie-card-title")
        .should("have.length", 2)
        .each(($el) => {
          expect($el).to.contain(inputText);
        });
    });
  
    it("open movie information", () => {
      cy.get("#title").type(inputText).type("{enter}");
      cy.get(".movie-card").first().click();
  
      cy.get(".fullmovie-card-title").should("contain", inputText);
      cy.get(".fullmovie-card-genre_list").should(
        "contain",
        "Action, Comedy, Science Fiction"
      );
  
      cy.get(".fullmovie-card-release_date").first().should("contain", "2018");
      cy.get(".fullmovie-card-movie_rating").last().should("contain", "0");
      cy.get(".fullmovie-card-movie_overview").should(
        "contain",
        "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life."
      );
    });
  });