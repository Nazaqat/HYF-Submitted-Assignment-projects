const express = require("express");
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));

/*Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews"
property will be an empty array. (watch the GIF below to understand how it should be structured)*/

app.get("/meals", (req, res) => {

    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealId === meal.id ? meal.reviews.push(review) : review)
        );

    })
    res.send(meals);
});

//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

app.get("/cheap-meals", (req, res) => {

    const cheapMeals = meals.filter(mealPrice => mealPrice.price < 100);
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealId === meal.id ? meal.reviews.push(review) : review)
        );
    })
    res.json(cheapMeals);
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", (req, res) => {

    const largeMeals = meals.filter(mealPrice => mealPrice.price > 100);
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealId === meal.id ? meal.reviews.push(review) : review)
        );

    })
    res.json(largeMeals);
});

//Respond with the json for a random meal (including it's reviews)

app.get("/random-meals", (req, res) => {
    const random = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[random]
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealId === meal.id ? meal.reviews.push(review) : review)
        );

    })
    res.json(randomMeal);
});

//Respond with the json for all reservations

app.get("/reservations", (req, res) => {
    res.json(reservations);
});

//Respond with the json for a random reservation

app.get("/random-reservations", (req, res) => {
    const random = Math.floor(Math.random() * reservations.length);
    const randomreservation = reservations[random]

    res.json(randomreservation);
});




app.listen(3500, () => console.log("server started"));
