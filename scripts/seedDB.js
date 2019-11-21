const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/...?"
);

const orderSeed = [
  {
    clientName: "The Dead Zone",
    pointOfContact: "Stephen King",
    email: "carrie@gmail.com",
    phone: "6666666666",
    orderRequest: "1 cat, 1 goldfish, 1 cup",
    date: new Date(Date.now())
  },
  {
    clientName: "On The Road",
    pointOfContact: "Jack Kerouac",
    email: "bigsur@gmail.com",
    phone: "9999999999",
    orderRequest: "case of tea, 2 packs of cigarettes, 1 new Buick",
    date: new Date(Date.now())
  },
  {
    clientName: "Flashee",
    pointOfContact: "Max Reinmueller",
    email: "MaxAttax@gmail.com",
    phone: "1234567890",
    orderRequest: "1 wedding dress, 1 tuxedo, 5 bridesmaids dresses, 5 tuxedo rentals",
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