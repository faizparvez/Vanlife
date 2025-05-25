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
      // Hosts - More diverse and realistic
      server.create('host', { 
        id: '123', 
        name: 'Alice Johnson', 
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        joinedDate: '2022-03-15',
        totalVans: 4,
        rating: 4.8
      });
      server.create('host', { 
        id: '456', 
        name: 'Bob Thompson',   
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        joinedDate: '2021-08-22',
        totalVans: 3,
        rating: 4.6
      });
      server.create('host', { 
        id: '789', 
        name: 'Carol Martinez', 
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
        joinedDate: '2023-01-10',
        totalVans: 2,
        rating: 4.9
      });
      server.create('host', { 
        id: '321', 
        name: 'David Chen', 
        avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        joinedDate: '2022-11-05',
        totalVans: 5,
        rating: 4.7
      });
      server.create('host', { 
        id: '654', 
        name: 'Emma Wilson', 
        avatarUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
        joinedDate: '2023-06-18',
        totalVans: 3,
        rating: 4.9
      });
      server.create('host', { 
        id: '987', 
        name: 'Frank Rodriguez', 
        avatarUrl: 'https://randomuser.me/api/portraits/men/58.jpg',
        joinedDate: '2021-12-03',
        totalVans: 2,
        rating: 4.5
      });
      server.create('host', { 
        id: '147', 
        name: 'Grace Kim', 
        avatarUrl: 'https://randomuser.me/api/portraits/women/82.jpg',
        joinedDate: '2022-09-14',
        totalVans: 4,
        rating: 4.8
      });
      server.create('host', { 
        id: '258', 
        name: 'Henry Davis', 
        avatarUrl: 'https://randomuser.me/api/portraits/men/91.jpg',
        joinedDate: '2023-02-28',
        totalVans: 1,
        rating: 4.6
      });

      // Vans - Expanded with realistic data
      // Simple Vans (Budget-friendly)
      server.create('van', {
        id: '1', 
        name: 'Modest Explorer',    
        price: 60,
        description: 'Perfect for budget-conscious adventurers! This cozy van features solar panels, a composting toilet, and basic cooking facilities. Ideal for couples or solo travelers looking to explore nature without breaking the bank.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
        type: 'simple', 
        hostId: '123',
        sleeps: 2,
        transmission: 'Manual',
        year: 2018,
        mileage: 85000,
        features: ['Solar panels', 'Composting toilet', 'Basic kitchen', 'Bed', 'Storage']
      });

      server.create('van', {
        id: '4', 
        name: 'Dreamfinder',         
        price: 65,
        description: 'Compact yet comfortable with 2.1m headroom and GRP floor. Perfect for weekend getaways with essential amenities and reliable performance on any road adventure.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png',
        type: 'simple', 
        hostId: '789',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2019,
        mileage: 72000,
        features: ['High roof', 'GRP floor', 'Compact kitchen', 'Double bed', 'LED lighting']
      });

      server.create('van', {
        id: '7', 
        name: 'Budget Wanderer',         
        price: 55,
        description: 'Your gateway to affordable van life! Clean, simple, and reliable. Features include a comfortable sleeping area, basic cooking setup, and plenty of storage for your adventures.',
        imageUrl: 'https://images.unsplash.com/photo-1544265942-8f60b606c5a6?w=800&h=600&fit=crop',
        type: 'simple', 
        hostId: '456',
        sleeps: 2,
        transmission: 'Manual',
        year: 2017,
        mileage: 95000,
        features: ['Double bed', 'Portable stove', 'Water tank', 'Storage compartments', 'USB charging']
      });

      server.create('van', {
        id: '8', 
        name: 'Cozy Camper',         
        price: 58,
        description: 'Simple comfort meets affordable adventure. This well-maintained van offers a cozy interior with all the basics you need for a memorable road trip experience.',
        imageUrl: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=600&fit=crop',
        type: 'simple', 
        hostId: '321',
        sleeps: 2,
        transmission: 'Manual',
        year: 2020,
        mileage: 45000,
        features: ['Comfortable bedding', 'Kitchenette', 'Fresh water system', 'Ventilation fan', 'Outdoor awning']
      });

      server.create('van', {
        id: '9', 
        name: 'Nomad Basic',         
        price: 62,
        description: 'Start your van life journey with this reliable and affordable option. Clean, maintained, and ready for your next adventure with essential amenities included.',
        imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
        type: 'simple', 
        hostId: '654',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2019,
        mileage: 68000,
        features: ['Queen bed', 'Sink', 'Refrigerator', 'Storage', 'Interior lighting']
      });

      // Rugged Vans (Adventure-focused)
      server.create('van', {
        id: '2', 
        name: 'Beach Bum',           
        price: 80,
        description: 'Surf-inspired adventure van with a home-away-from-home feel. Built for coastal adventures with enhanced durability, outdoor shower, and gear storage for all your beach essentials.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png',
        type: 'rugged', 
        hostId: '123',
        sleeps: 3,
        transmission: 'Manual',
        year: 2020,
        mileage: 55000,
        features: ['Outdoor shower', 'Surfboard storage', 'All-terrain tires', 'Roof rack', 'Beach chairs']
      });

      server.create('van', {
        id: '6', 
        name: 'Green Wonder',        
        price: 70,
        description: 'Eco-friendly adventure machine ready to go anywhere! Solar power, water filtration, and rugged construction make this perfect for off-grid exploration and sustainable travel.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/green-wonder.png',
        type: 'rugged', 
        hostId: '123',
        sleeps: 2,
        transmission: 'Manual',
        year: 2021,
        mileage: 42000,
        features: ['Solar power system', 'Water filtration', '4WD capability', 'Roof tent', 'External storage']
      });

      server.create('van', {
        id: '10', 
        name: 'Mountain Explorer',        
        price: 85,
        description: 'Built for the mountains! High clearance, all-wheel drive, and rugged construction. Perfect for accessing remote camping spots and tackling challenging terrain with confidence.',
        imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
        type: 'rugged', 
        hostId: '987',
        sleeps: 4,
        transmission: 'Manual',
        year: 2022,
        mileage: 35000,
        features: ['All-wheel drive', 'High clearance', 'Winch', 'Camping gear', 'GPS system']
      });

      server.create('van', {
        id: '11', 
        name: 'Desert Warrior',        
        price: 90,
        description: 'Conquer the desert with this tough adventure van. Extra cooling, sand-ready tires, and reinforced construction make it perfect for hot climate adventures and desert exploration.',
        imageUrl: 'https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?w=800&h=600&fit=crop',
        type: 'rugged', 
        hostId: '321',
        sleeps: 3,
        transmission: 'Automatic',
        year: 2023,
        mileage: 18000,
        features: ['Desert tires', 'Extra cooling', 'Sand ladders', 'Navigation system', 'Emergency kit']
      });

      server.create('van', {
        id: '12', 
        name: 'Trail Blazer',        
        price: 75,
        description: 'Off-road champion with enhanced suspension and trail-ready features. Built for adventurers who want to explore beyond the beaten path with comfort and reliability.',
        imageUrl: 'https://images.unsplash.com/photo-1533720815566-9172d18bff11?w=800&h=600&fit=crop',
        type: 'rugged', 
        hostId: '147',
        sleeps: 2,
        transmission: 'Manual',
        year: 2021,
        mileage: 48000,
        features: ['Enhanced suspension', 'Trail lights', 'Rock sliders', 'Recovery gear', 'Map storage']
      });

      server.create('van', {
        id: '13', 
        name: 'Forest Ranger',        
        price: 82,
        description: 'Navigate forest trails with ease! This rugged van features tree-friendly height, forest camouflage, and all the gear needed for woodland adventures and camping.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
        type: 'rugged', 
        hostId: '654',
        sleeps: 3,
        transmission: 'Automatic',
        year: 2020,
        mileage: 62000,
        features: ['Forest camouflage', 'Low profile', 'Hiking gear', 'Water purification', 'Wildlife camera']
      });

      // Luxury Vans (Premium experience)
      server.create('van', {
        id: '3', 
        name: 'Reliable Red',        
        price: 100,
        description: 'Premium comfort meets reliability! Featuring a cozy interior, fully equipped kitchen, luxury bedding, and modern amenities. Perfect for those who want to travel in style and comfort.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/reliable-red.png',
        type: 'luxury', 
        hostId: '456',
        sleeps: 4,
        transmission: 'Automatic',
        year: 2022,
        mileage: 28000,
        features: ['Full kitchen', 'Luxury bedding', 'Entertainment system', 'Climate control', 'Premium interior']
      });

      server.create('van', {
        id: '5', 
        name: 'The Cruiser',         
        price: 120,
        description: 'Ultimate luxury on wheels! Windows everywhere for panoramic views, ample storage, premium finishes, and top-of-the-line amenities. Your mobile five-star hotel experience.',
        imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
        type: 'luxury', 
        hostId: '789',
        sleeps: 4,
        transmission: 'Automatic',
        year: 2023,
        mileage: 15000,
        features: ['Panoramic windows', 'Premium finishes', 'Entertainment center', 'Wine fridge', 'Heated floors']
      });

      server.create('van', {
        id: '14', 
        name: 'Executive Escape',         
        price: 135,
        description: 'Business class travel redefined. High-end finishes, mobile office setup, premium entertainment system, and luxury accommodations. Perfect for working remotely in style.',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        type: 'luxury', 
        hostId: '258',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2024,
        mileage: 8000,
        features: ['Mobile office', 'Leather seating', 'Premium sound', 'Wine storage', 'Marble counters']
      });

      server.create('van', {
        id: '15', 
        name: 'Royal Retreat',         
        price: 110,
        description: 'Experience van life royalty! Spacious interior with premium materials, gourmet kitchen, spa-like bathroom, and luxury sleeping quarters. Every detail crafted for comfort.',
        imageUrl: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
        type: 'luxury', 
        hostId: '147',
        sleeps: 4,
        transmission: 'Automatic',
        year: 2023,
        mileage: 22000,
        features: ['Gourmet kitchen', 'Spa bathroom', 'Premium bedding', 'Smart home tech', 'Hardwood floors']
      });

      server.create('van', {
        id: '16', 
        name: 'Platinum Cruiser',         
        price: 125,
        description: 'The pinnacle of luxury van travel. Custom interior design, state-of-the-art technology, premium appliances, and unmatched comfort. Your home away from home, elevated.',
        imageUrl: 'https://images.unsplash.com/photo-1606660265514-358ebbadc80d?w=800&h=600&fit=crop',
        type: 'luxury', 
        hostId: '321',
        sleeps: 3,
        transmission: 'Automatic',
        year: 2024,
        mileage: 12000,
        features: ['Custom interior', 'Premium appliances', 'Surround sound', 'Mood lighting', 'Luxury bathroom']
      });

      server.create('van', {
        id: '17', 
        name: 'Diamond Explorer',         
        price: 140,
        description: 'Ultimate luxury adventure vehicle. Combines off-road capability with five-star amenities. Premium leather, advanced technology, and uncompromising comfort for discerning travelers.',
        imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0c28ba7fe11?w=800&h=600&fit=crop',
        type: 'luxury', 
        hostId: '987',
        sleeps: 4,
        transmission: 'Automatic',
        year: 2024,
        mileage: 5000,
        features: ['Premium leather', 'Advanced tech', 'Luxury amenities', 'All-terrain', 'Concierge service']
      });

      server.create('van', {
        id: '18', 
        name: 'Prestige Wanderer',         
        price: 115,
        description: 'Sophisticated travel in ultimate comfort. Designer interior, gourmet amenities, premium entertainment, and luxury bedding. Perfect for those who refuse to compromise on quality.',
        imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&h=600&fit=crop',
        type: 'luxury', 
        hostId: '654',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2023,
        mileage: 19000,
        features: ['Designer interior', 'Gourmet amenities', 'Premium entertainment', 'Luxury bedding', 'Smart controls']
      });

      // More Simple Vans
      server.create('van', {
        id: '19', 
        name: 'Weekend Warrior',         
        price: 68,
        description: 'Perfect for weekend adventures! Clean, reliable, and well-equipped with everything you need for short trips. Great for first-time van renters and budget-conscious travelers.',
        imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
        type: 'simple', 
        hostId: '147',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2021,
        mileage: 38000,
        features: ['Weekend essentials', 'Comfortable bed', 'Basic kitchen', 'Storage space', 'Easy to drive']
      });

      server.create('van', {
        id: '20', 
        name: 'City Escape',         
        price: 72,
        description: 'Escape the city in style! Compact and maneuverable, perfect for urban adventures and short getaways. Features modern amenities in a user-friendly package.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        type: 'simple', 
        hostId: '258',
        sleeps: 2,
        transmission: 'Automatic',
        year: 2022,
        mileage: 25000,
        features: ['Urban friendly', 'Modern amenities', 'Easy parking', 'Fuel efficient', 'Clean interior']
      });

      // Reviews - Much more comprehensive and realistic
      const reviewTexts = [
        // Positive reviews
        'Absolutely amazing experience! The van was spotless and had everything we needed.',
        'Perfect for our weekend getaway. Great communication from the host.',
        'Beautiful van with stunning interior. Highly recommend!',
        'Everything was exactly as described. Will definitely rent again!',
        'Great value for money. The van was comfortable and reliable.',
        'Loved the attention to detail. Host was very helpful and responsive.',
        'Perfect for our adventure! The van handled mountain roads beautifully.',
        'Clean, comfortable, and well-equipped. Exceeded our expectations!',
        'Great experience from start to finish. Professional and friendly service.',
        'The van was perfect for our road trip. Comfortable and stylish!',
        
        // Mixed reviews
        'Great van overall, but the water tank could be bigger.',
        'Lovely van, just had some minor issues with the electrical system.',
        'Good experience, though the bed was a bit smaller than expected.',
        'Nice van but could use some updates to the kitchen equipment.',
        'Overall positive experience, minor wear and tear but still comfortable.',
        
        // Specific praise
        'The solar panels worked perfectly for our off-grid adventure!',
        'Kitchen was fully equipped - we cooked amazing meals!',
        'So comfortable - felt like a luxury hotel on wheels!',
        'Perfect for beach trips - loved the outdoor shower!',
        'Great for mountain adventures - handled rough roads like a champ!',
        'Spotless interior and fantastic amenities throughout.',
        'Host provided excellent local recommendations and trip planning help.',
        'Van was ready early and return process was seamless.',
        'Perfect size for two people - cozy but not cramped.',
        'All the luxury features worked perfectly - what an experience!'
      ];

      const reviewAuthors = [
        'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'William',
        'Mia', 'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Harper', 'Henry', 'Evelyn', 'Alexander',
        'Abigail', 'Michael', 'Emily', 'Daniel', 'Elizabeth', 'Matthew', 'Mila', 'Jackson', 'Ella', 'David',
        'Grace', 'Logan', 'Victoria', 'Joseph', 'Aria', 'Samuel', 'Scarlett', 'Sebastian', 'Chloe', 'Owen',
        'Zoey', 'Caleb', 'Riley', 'Nathan', 'Nora', 'Ryan', 'Lily', 'Jack', 'Eleanor', 'Luke'
      ];

      // Generate reviews for each van
      let reviewId = 900;
      const vanIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
      
      vanIds.forEach(vanId => {
        // Each van gets 2-5 reviews
        const numReviews = Math.floor(Math.random() * 4) + 2;
        
        for (let i = 0; i < numReviews; i++) {
          const rating = Math.random() < 0.8 ? 5 : (Math.random() < 0.7 ? 4 : 3); // Mostly 4-5 stars
          const authorIndex = Math.floor(Math.random() * reviewAuthors.length);
          const textIndex = Math.floor(Math.random() * reviewTexts.length);
          
          server.create('review', {
            id: String(reviewId++),
            vanId: vanId,
            author: reviewAuthors[authorIndex],
            rating: rating,
            text: reviewTexts[textIndex],
            date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
          });
        }
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

      this.get('/vans/:id/reviews', (schema, request) => {
        let vanId = request.params.id;
        return schema.reviews.where({ vanId });
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