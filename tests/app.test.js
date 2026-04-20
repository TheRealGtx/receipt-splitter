const request = require('supertest')
const server = require('../src/server')

describe('App endpoints', () => {
    afterAll(() => {
        server.close();
    });

    test('Home page', async () => {
        const response = await request(server).get('/')
        expect(response.status).toBe(200);
        expect(response.text).toContain('Website working');
    });
});