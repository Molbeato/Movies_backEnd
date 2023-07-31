const request = require('supertest');
const app = require('../app');
require('../models')
const Genre = require('../models/Genre');
const Actor = require('../models/Actor');
const Director = require('../models/Director');

let id;

test('GET/ /movies must get all movies', async() => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
})

test('POST/ /movies must add a movie', async() => {
    const movie = {
        name: "Pursuit of Happiness",
        image: "url.com",
        synopsis: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
        image: "url.com",    
        releaseYear: 2006
    }
    const res = await request(app).post('/movies').send(movie)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.name).toBe(movie.name);
    expect(res.body.id).toBeDefined();
})

test('PUT/ /movies/:id must update movie', async() => {

    const movie = {
        name: "Roger",
    };

    const res = await (request(app).put(`/movies/${id}`)).send(movie)
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movie.name);
    
})

test('POST /movies/:id/genres must add a genre to a movie', async() => {
    const genre = await Genre.create({
        name: "Action"
})

    const res = await request(app)
    .post(`/movies/${id}/genres`)
    .send([genre.id])

    await genre.destroy()
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
});

test('POST /movies/:id/actors must add a genre to a movie', async() => {
    const actor = await Actor.create({
        firstName: "Will",
        lastName: "Smith",
        nationality: "American",
        image: "url.com",    
        birthday: "09/26/1968"
    })

    const res = await request(app)
    .post(`/movies/${id}/actors`)
    .send([actor.id])

    await actor.destroy()
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
});

test('POST /movies/:id/directors must add a genre to a movie', async() => {
    const director = await Director.create({
        firstName: "Gabrielle",
        lastName: "Muccino",
        nationality: "American",
        image: "url.com",    
        birthday: "05/20/1967"
    })

    const res = await request(app)
    .post(`/movies/${id}/directors`)
    .send([director.id])

    await director.destroy()
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
});

test('DELETE/ /movies/:id must delete a movie', async() => {
    const res = await request(app).delete(`/movies/${id}`);
    expect(res.status).toBe(204)
})

