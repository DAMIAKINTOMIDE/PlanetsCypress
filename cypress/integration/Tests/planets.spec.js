
/// <reference types="Cypress" />

import {PlanetsbyID, PlanetsByIDRequest} from "../../support/Pages/PlanetsPage"



context("Test service - Planets", () => {

    it("Test - verify Headers", ()=>{
       
        PlanetsbyID.VerifyRespHeaders();
    });

    it("Test - verify Response from GET", ()=>{
       
        PlanetsbyID.VerifyResp();
    });

    it("Test - verify Response Time", ()=>{
       
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
