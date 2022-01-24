
/// <reference types="Cypress" />

import {PlanetsbyID, PlanetsByIDRequest} from "../../support/Pages/PlanetsPage"



context("Test service - Planets", () => {

    it("Test - verify from GET", ()=>{
       
        PlanetsbyID.VerifyRespHeaders();
        PlanetsbyID.VerifyResp();
        PlanetsbyID.VerifyRespTime();
    });

  

    it("Mock response to return new value", () => {
        cy.intercept({method: 'GET', url: 'api/planets/3', },
                    {"name":"Damilola Akintomide"}).as('getplanet');
    
    });

  
    it("Test POST with service", () =>{
        PlanetsbyID.VerifyRespPOST();
    })


});
