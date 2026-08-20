var request = require('supertest');
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app)
            .get('/will')
            .expect(200)
            .expect(function(res) {
                if (res.body.response !== 'Hello World') {
                    throw new Error('Unexpected response');
                }
            })
            .end(done);
    });
});