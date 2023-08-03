const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones

    //* Iteracion 2
    //   return Recipe.create( {
    //   title: "Pad Thai - Sergio Puyod & Rishi Daryanani",
    //   level: "UltraPro Chef",
    //   ingredients: [
    //     "1/2 cup rice vinegar",
    //     "2 tablespoons honey",
    //     "5 cup soy sauce (such as Silver Swan®)",
    //     "1/2 cup Asian (toasted) sesame oil",
    //     "Spicy Sour Sauce",
    //     "Oyster Sauce",
    //     "3 tablespoons Asian chili garlic sauce",
    //     "3 tablespoons minced garlic",
    //     "salt to taste",
    //     "10 Shrimps",
    //     "100g Thai Rice Noodles",
    //     "A Handfull Of Peanuts"
    //   ],
    //   cuisine: "Asian",
    //   dishType: "main_course",
    //   image: "https://media.istockphoto.com/id/510163478/es/foto/pad-thai.jpg?s=2048x2048&w=is&k=20&c=HheFbuvuATWBGkVuAQFHcT0INs52ffA2Uj5vNbkEMBQ=",
    //   duration: 40,
    //   creator: "Chef Puyi & Keko"
    // })

    //* Iteracion 3
    // return Recipe.insertMany(data)

    //* Iteracion 4
    //return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100})

    //* Iteracion 5
    return Recipe.findOneAndDelete({ title: "Carrot Cake" })

    // return Recipe.deleteMany()
  })
  .then((response) => {

    //* Iteracion 2
    // console.log("la receta es "+ response.title)

    //* Iteracion 3
    // return Recipe
    // .find( )
    // .select({ title: 1 })

    //* Iteracion 4
    //  console.log("Bello Bambino Tutto Benne")

    //* Iteracion 5
    console.log("Bugs Bunny doesn't agree with you modification")
  })
  .then((response) => {
    return mongoose.connection.close()
  })
  .then(() => {
    console.log("clossing conection")
  })

  // Run your code here, after you have insured that the connection was made
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
