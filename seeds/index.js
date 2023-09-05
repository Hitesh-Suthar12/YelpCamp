const express = require("express");
const cities = require("./cities");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const Campground = require("../models/campground");
const { places, descriptors } = require("./seedHelpers");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      // YOUR USER ID
      author: '64a1b8b94835dbe939e19a61',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)}, ${sample(places)}`,
      // image: "https://source.unsplash.com/collection/483251",
      description:
        "Welcome to our cozy campground nestled amidst nature beauty. Experience the tranquility and serenity of the great outdoors while enjoying modern amenities and recreational activities. Whether you're seeking a peaceful retreat or an adventure-filled getaway, our campground offers something for everyone",
      price,
      geometry: {
        type : "Point", 
        coordinates : [
            cities[random1000].longitude,
            cities[random1000].latitude,
        ]
      },
      images: [
          {
            url: 'https://res.cloudinary.com/dz1r7lx8b/image/upload/v1688035118/YelpCamp/uinnxzs67ucw5tsmlgx2.jpg',
            filename: 'YelpCamp/uinnxzs67ucw5tsmlgx2',
          },
          {
            url: 'https://res.cloudinary.com/dz1r7lx8b/image/upload/v1688035116/YelpCamp/hy0o1nphn5l7c7aoktqi.jpg',
            filename: 'YelpCamp/hy0o1nphn5l7c7aoktqi',
          }
      ]
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close(); // use for diconnect to mongoose after adding data to database
});
