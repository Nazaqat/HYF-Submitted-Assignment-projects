const express = require("express");
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json", 'utf8'));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json", 'utf8'));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json", 'utf8'));

//Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)

app.get("/meals", (req, res) => {
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealsId === meals.id ? meal.reviews.push(review) : review)
        );

        res.json(meals);

    })
});

//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

app.get("/meals/cheapMeal", (req, res) => {
    const cheapMeal = meals.filter(mealPrice => mealPrice.price < 100);
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealsId === meals.id ? meal.reviews.push(review) : review)
        );

        res.json(cheapMeal);
    })
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people

app.get("/meals/largeMeal", (req, res) => {
    const largeMeal = meals.filter(mealPrice => mealPrice.maxNumberOfGuests > 25);
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealsId === meals.id ? meal.reviews.push(review) : review)
        );

        res.json(largeMeal);
    })
});

//Respond with the json for a random meal (including it's reviews)

app.get("/meals/randomMeal", (req, res) => {
    const random = Math.floor(Math.random() * meals.length);
    const randomMeal = meals.filter(mealReview => mealReview.id === random);
    meals.map(meal => {
        meal.reviews = [];
        reviews.forEach(
            review => (review.mealsId === meals.id ? meal.reviews.push(review) : review)
        );

        res.json(randomMeal);
    })
});

//Respond with the json for all reservations

app.get("/reservations", (req, res) => {

    res.json(reservations);
});

//Respond with the json for a random reservation

app.get("/reservations/random", (req, res) => {
    const random = Math.floor(Math.random() * reservations.length);
    const randomRes = reservations.filter(items => items.id === random);

    res.json(randomRes);
});






app.listen(3000, () => console.log("server started!"));
