/// <reference types ="Cypress" />

export class PlanetsByIDRequest {
  

    VerifyRespHeaders(){
      
        cy.request("api/planets/3").then((response) => {
            expect(response).has.property("headers");
            expect(response.headers).to.include({'allow': "GET, HEAD, OPTIONS",
            'connection': "keep-alive",
            'content-type': "application/json"});
            expect(response.status).to.eq(200);
            
        });
        
       
     
    }

    VerifyResp(){ 
      
        cy.request("api/planets/3").then((response) => {
        
            expect(response.body).has.property("name","Yavin IV");
        
        });
      
   
    }

    VerifyRespTime(){
       
      
        cy.request("api/planets/3").then((response) => {
         
            expect(response.duration/1000).lessThan(3);
        });
       
     
    }

    VerifyRespPOST(){
      
            cy.request({
                method:'POST',
                url: "api/planets/3",
                body:  {
                    "id": 2,
                    "title": "Executeautomation",
                    "author": "KarthikKK"
                  },
                failOnStatusCode: false
            }).then((res) =>{
            expect(res.status).to.eq(405);
            expect(res.body).has.property("detail","Method 'POST' not allowed.");
            });
       
        
    }
   
}

export const PlanetsbyID = new PlanetsByIDRequest();