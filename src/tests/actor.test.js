const request = require('supertest');
const app = require('../app');
require('../models')

let id;

test('GET/ /actors must get all actors', async() => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
})

test('POST/ /actors must add a actor', async() => {
    const actor = {
        firstName: "Will",
        lastName: "Smith",
        nationality: "American",
        image: "url.com",    
        birthday: "09/26/1968"
    }
    const res = await request(app).post('/actors').send(actor)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.firstName).toBe(actor.firstName);
    expect(res.body.id).toBeDefined();
})

test('PUT/ /actors/:id must update actor', async() => {

    const actor = {
        firstName: "Roger",
    };

    const res = await (request(app).put(`/actors/${id}`)).send(actor)
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(actor.firstName);
    
})

test('DELETE/ /actors/:id must delete a actor', async() => {
    const res = await request(app).delete(`/actors/${id}`);
    expect(res.status).toBe(204)
})