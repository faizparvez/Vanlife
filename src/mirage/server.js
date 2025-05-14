// src/mirage/server.js
import { createServer, Model, RestSerializer } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    // ——— Models ———
    models: {
      van: Model,
      host: Model,
      review: Model,
    },

    // ——— Serialization ———
    serializers: {
      application: RestSerializer,
      van: RestSerializer.extend({
        include: ['host', 'reviews'],
        embed: true,
      }),
    },

    // ——— Seed Data ———
    seeds(server) {
      // hosts
      server.create('host', { id: '123', name: 'Alice', avatarUrl: '/avatars/alice.png' });
      server.create('host', { id: '456', name: 'Bob',   avatarUrl: '/avatars/bob.png' });
      server.create('host', { id: '789', name: 'Carol', avatarUrl: '/avatars/carol.png' });

      // vans (with host relationships)
      server.create('van', {
        id: '1', name: 'Modest Explorer',    price: 60,
        description: '…solar panels, composting toilet…',
        imageUrl: 'https://…/modest-explorer.png',
        type: 'simple', hostId: '123'
      });
      server.create('van', {
        id: '2', name: 'Beach Bum',           price: 80,
        description: '…surf-inspired, home-away-from-home…',
        imageUrl: 'https://…/beach-bum.png',
        type: 'rugged', hostId: '123'
      });
      server.create('van', {
        id: '3', name: 'Reliable Red',        price: 100,
        description: '…cozy interior, small kitchen…',
        imageUrl: 'https://…/reliable-red.png',
        type: 'luxury', hostId: '456'
      });
      server.create('van', {
        id: '4', name: 'Dreamfinder',         price: 65,
        description: '…2.1m headroom, GRP floor…',
        imageUrl: 'https://…/dreamfinder.png',
        type: 'simple', hostId: '789'
      });
      server.create('van', {
        id: '5', name: 'The Cruiser',         price: 120,
        description: '…windows everywhere, ample storage…',
        imageUrl: 'https://…/the-cruiser.png',
        type: 'luxury', hostId: '789'
      });
      server.create('van', {
        id: '6', name: 'Green Wonder',        price: 70,
        description: '…eco-friendly, go anywhere…',
        imageUrl: 'https://…/green-wonder.png',
        type: 'rugged', hostId: '123'
      });

      // reviews (linked to vans)
      server.create('review', {
        id: '900',
        vanId: '1',
        author: 'Emma',
        rating: 5,
        text: 'Best trip ever! Van was spotless and stocked.'
      });
      server.create('review', {
        id: '901',
        vanId: '1',
        author: 'Liam',
        rating: 4,
        text: 'Great van, but the water tank was a bit small.'
      });
      server.create('review', {
        id: '902',
        vanId: '3',
        author: 'Olivia',
        rating: 5,
        text: 'Reliable Red didn’t disappoint—super comfy!'
      });
    },

    // ——— Routes ———
    routes() {
      this.namespace = 'api';
      this.timing = 750; // simulate network latency

      // VANS
      this.get('/vans', (schema, request) => {
        let { type } = request.queryParams;
        if (type) {
          return schema.vans.where({ type });
        }
        return schema.vans.all();
      });

      this.get('/vans/:id', (schema, request) => {
        let id = request.params.id;
        return schema.vans.find(id);
      });

      // HOSTS
      this.get('/hosts', (schema) => {
        return schema.hosts.all();
      });

      this.get('/hosts/:id', (schema, request) => {
        return schema.hosts.find(request.params.id);
      });

      // NESTED: vans for a specific host
      this.get('/hosts/:id/vans', (schema, request) => {
        let hostId = request.params.id;
        return schema.vans.where({ hostId });
      });

      // REVIEWS
      this.get('/reviews', (schema) => {
        return schema.reviews.all();
      });

      this.post('/reviews', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.reviews.create(attrs);
      });

      // fallback for unhandled requests
      this.passthrough();
    },
  });
}
