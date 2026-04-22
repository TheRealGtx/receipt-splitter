const request = require('supertest')
const server = require('../src/server')

describe('App endpoints', () => {
    beforeAll((done) => {
        if (!server.listening) {
            server.listen(8080, done)
        }
        else {
            done()
        }
    });
    
    afterAll((done) => {
        server.close(done);
    });

    test('Home page', async () => {
        const response = await request(server).get('/')
        expect(response.status).toBe(200);
        expect(response.text).toContain('Production version on AWS');
    });
});