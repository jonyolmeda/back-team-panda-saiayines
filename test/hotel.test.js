const app = require('../app')
const chai = require ('chai');
const assert = chai.assert;
const request = require('supertest');

 describe('GET /api/hotels', function(){
    it('status 404 no hotel found',
        function (done){
        request(app).get(`/api/hotels/?name=athina`).expect(404,done)
        })
    }
) 

describe("DELETE /api/hotel/:id", () => {
    it("Delete a hotel by id.", (done) => {
        request(app).del("/api/hotels/63705a14a2c3190ac7044f50").expect(200).end(done)   });
    }
);