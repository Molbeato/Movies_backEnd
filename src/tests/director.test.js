const request = require('supertest');
const app = require('../app');
require('../models')

let id;

test('GET/ /directors must get all directors', async() => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
})

test('POST/ /directors must add a director', async() => {
    const director = {
        firstName: "Gabrielle",
        lastName: "Muccino",
        nationality: "American",
        image: "url.com",    
        birthday: "05/20/1967"
    }
    const res = await request(app).post('/directors').send(director)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.firstName).toBe(director.firstName);
    expect(res.body.id).toBeDefined();
})

test('PUT/ /directors/:id must update director', async() => {

    const director = {
        firstName: "Roger",
    };

    const res = await (request(app).put(`/directors/${id}`)).send(director)
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(director.firstName);
    
})

test('DELETE/ /directors/:id must delete a director', async() => {
    const res = await request(app).delete(`/directors/${id}`);
    expect(res.status).toBe(204)
})