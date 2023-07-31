const request = require('supertest');
const app = require('../app');
require('../models')

let id;

test('GET/ /genres must get all genres', async() => {
    const res = await request(app).get('/genres');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
})

test('POST/ /genres must add a genre', async() => {
    const genre = {
        name: "Horror"
    }
    const res = await request(app).post('/genres').send(genre)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.name).toBe(genre.name);
    expect(res.body.id).toBeDefined();
})

test('PUT/ /genres/:id must update genre', async() => {

    const genre = {
        name: "Sci-fi",
    };

    const res = await (request(app).put(`/genres/${id}`)).send(genre)
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(genre.name);
    
})

test('DELETE/ /genres/:id must delete a genre', async() => {
    const res = await request(app).delete(`/genres/${id}`);
    expect(res.status).toBe(204)
})