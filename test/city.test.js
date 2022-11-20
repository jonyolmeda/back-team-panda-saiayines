const app = require('../app')
const chai = require ('chai');
const assert = chai.assert;
const request = require('supertest');


describe('GET /api/cities', function(){
    it('Must give us an array of objects of cities', function(done){

request(app)
    .get('/api/cities/')
        .expect(response => {
             assert.typeOf(response.body.response, 'array')
             response.body.response.forEach( element => {
                assert.typeOf(element, 'object')
             })
        })
        .end(function(err, res){
            if(err){
                return done(err);
            }

            done();
        })
    })
}) //ordena de manera visual