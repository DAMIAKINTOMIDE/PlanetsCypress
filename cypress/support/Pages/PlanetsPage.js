/// <reference types ="Cypress" />

export class PlanetsByIDRequest {
    ReadData(){
       cy.fixture("planets").as("planets");
       
    }


    VerifyRespHeaders(){
        PlanetsbyID.ReadData();
        cy.request("@planets".endpointplantid+"3").then((response) => {
            expect(response).has.property("headers");
            expect(response.headers).to.include({'allow': "GET, HEAD, OPTIONS",
            'connection': "keep-alive",
            'content-type': "application/json"});
            expect(response.status).to.eq(200);
           
        });
     
    }

    VerifyResp(){ 
        PlanetsbyID.ReadData();
        cy.request("@planets".endpointplantid+"3").then((response) => {
           
            expect(response.body).has.property("name","Yavin IV");
            expect(response.body.property).has.value();
          
        });
   
    }

    VerifyRespTime(){
       
        PlanetsbyID.ReadData();
        cy.request("@planets".endpointplantid+"3").then((response) => {
         
            expect(response.duration/1000).lessThan(3);
        });
    
     
    }

    VerifyRespPOST(){
        PlanetsbyID.ReadData();
        cy.get("@planets").then((planets) =>{
            cy.request({
                method:'POST',
                url: planets.endpointplantid+"3",
                body:planets.planetbody,
                failOnStatusCode: false
            }).then((res) =>{
            expect(res.status).to.eq(405);
            expect(res.body).has.property("detail","Method 'POST' not allowed.");
            });
       
        });
    }
   
}

export const PlanetsbyID = new PlanetsByIDRequest();