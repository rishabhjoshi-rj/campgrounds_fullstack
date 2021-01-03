// const mongoose = require('mongoose');
// const cities = require('./cities');
// const { places, descriptors } = require('./seedHelpers');
// const Campground = require('../models/campground');

// mongoose.connect('mongodb://localhost:27017/yelpcamp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const price = Math.floor(Math.random()*20) +10;
//         const camp = new Campground({
//             author: '5fe34c795593c634b8416e94',
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             image: 'https://source.unsplash.com/collection/483251',
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint repellendus officiis accusantium, sed reprehenderit veritatis voluptas sit, impedit dolor voluptatum alias, deserunt adipisci. Eos necessitatibus vero totam non animi!',
//             price
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })



const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelpcamp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '5fe34c795593c634b8416e94',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry:{
                type:"Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                
                    {
                      
                      url: 'https://res.cloudinary.com/dmbwrp1ve/image/upload/v1609656300/YelpCamp/xumeydy2legzxgjdtude.jpg',
                      filename: 'YelpCamp/xumeydy2legzxgjdtude'
                    },
                    {
                     
                      url: 'https://res.cloudinary.com/dmbwrp1ve/image/upload/v1609656301/YelpCamp/kbpirztfthlwigofyfke.png',
                      filename: 'YelpCamp/kbpirztfthlwigofyfke'
                    }
                
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})









