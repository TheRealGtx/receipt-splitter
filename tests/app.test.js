const http = require('http');
const request = require('supertest');
const app = require('../src/server');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(8080, done);
});

afterAll((done) => {
    server.close(done);
});

test('health', async () => {
    const response = await request(server).get('/health')
    expect(response.status).toBe(200);
});