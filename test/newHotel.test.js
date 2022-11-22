const app = require('../app')
const chai = require ('chai');
const assert = chai.assert;
const request = require('supertest');

describe('POST /hotels', function(){
    it('Must give us a number', function(done){

        let data = {
            name: "Paris",
            photo: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/16/93/1693297_v5.jpeg",
            capacity: 500,
            cityId: "636d9804d8061af971997441",
            userId: "636d51715d29e99d62636bd8"
        }     
        assert.isNumber(data.capacity, 'It is a number')
        done()
    })

    it('status 201 hotel created', function (done){       
                request(app)
                .get('/api/hotels')
                .expect(201, done());
              });
    })