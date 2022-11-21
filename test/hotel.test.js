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