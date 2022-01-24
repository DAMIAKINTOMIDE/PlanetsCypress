/// <reference types="Cypress" />

describe("Test service", () => {

    it("Test - verify from GET", ()=>{
        cy.request('GET',"api/planets/3").then((response) => {
            expect(response).has.property("headers");
            expect(response.headers).to.include({'allow': "GET, HEAD, OPTIONS",
            'connection': "keep-alive",
            'content-type': "application/json",
            'etag': '"ccbca9ad5dbcc6c73413df0765660c26"',
            'server': "nginx/1.16.1",
            'strict-transport-security': "max-age=15768000",
            'transfer-encoding': "chunked",
            'vary': "Accept, Cookie",
            'x-frame-options': "SAMEORIGIN"});
            expect(response.status).to.eq(200);
            expect(response.body).has.property("name","Yavin IV");
        });

        cy.request('GET',"api/planets/3").then((response) => {
           
            expect(response.duration).lessThan(3);
        });
    });

    it("Mock response to retrun new value", () => {
        cy.intercept(
            {
              method: 'GET', 
              url: 'api/planets/3', 
            },{"name":"Damilola Akintomide"}).as('getplanet') 
    
    });
  
    it("Test POST with service", () =>{
        cy.request({
            method:'POST',
            url:'api/planets/3',
            failOnStatusCode: false,
            body: {
                "name": "Automated testing",
                "Completed": true
            }
        }).then((res) =>{
            expect(res.status).to.eq(405);
            expect(res.body).has.property("detail","Method 'POST' not allowed." );
        })
    })


});
