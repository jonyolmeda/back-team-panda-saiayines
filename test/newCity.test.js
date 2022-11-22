const app = require('../app')
const chai = require ('chai');
const assert = chai.assert;
const request = require('supertest');

describe('POST /cities', function(){
    it('Must give us a string', function(done){

        let data = {
            name: "Salta",
            continent: "America",
            photo: "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=",
            population: 50000,
            userId: "636d51715d29e99d62636bd8"
        }     
        assert.isString(data.name, 'It is a String')
        done()
    })
    
    it('status 400 no city created', function (done){       
                request(app)
                .get('/api/cities')
                .expect(400, done());
              });
    })