const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/...titlegoeshere?"
);

const bookSeed = [

  {
    clientName: "Alexis",
    pointOfContact: "Alex Sanschagrin",
    email: "as@gmail.com",
    phone: "7670700013",
    orderRequest: "All most all of the things",
    date: new Date(Date.now())
  },
  {
    clientName: "DoubleCross",
    pointOfContact: "Jon Cross",
    email: "jcrossguitar@gmail.com",
    phone: "7670700013",
    orderRequest: "All of the things",
    date: new Date(Date.now())
  },
  {
    clientName: "Sabatoge",
    pointOfContact: "Ralph Sablaon",
    email: "RS@gmail.com",
    phone: "7670700013",
    orderRequest: "Two things",
    date: new Date(Date.now())
  },
  {
    clientName: "Adraintis",
    pointOfContact: "Rob Adrain",
    email: "RA@gmail.com",
    phone: "7670700013",
    orderRequest: "450 things",
    date: new Date(Date.now())
  },
  {
    clientName: "Get Good n' Rich",
    pointOfContact: "Scott Goodrich",
    email: "SG@gmail.com",
    phone: "7670700013",
    orderRequest: "2 jumpropes, 1 can of tuna",
    date: new Date(Date.now())
  }
];

db.viewOrder
  .remove({})
  .then(() => db.viewOrder.collection.insertMany(viewOrderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
