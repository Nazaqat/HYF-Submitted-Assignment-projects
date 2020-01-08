const express = require("express");
const connection = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (request, response) => {

    const { maxPrice } = request.query;
    const { availableReservations } = request.query;
    const { title } = request.query;
    const { createdAfter } = request.query;
    const { limit } = request.query;

    if (maxPrice) {
        connection.query(`SELECT * FROM meals WHERE price >= ${maxPrice}`, function(error, results, fields) {
            response.json(results);

        });
    }
    if (availableReservations) {
        connection.query(
            `SELECT meals.id AS meal_id, meals.title AS meal_title,  
    SUM(reservation.number_of_guests), 
    meals.max_reservations
    FROM meals 
    JOIN reservation ON reservation.meal_id = meals.id
    WHERE reservations.number_of_guests < meals.max_reservations
    GROUP BY reservations.meal_id`,
            function(error, results, fields) {
                response.json(results);

            }
        );
    }
    if (title) {
        connection.query(`SELECT * FROM meals WHERE title LIKE '%${title}%'`,
            function(error, results, fields) {
                response.json(results);

            });
    }
    if (createdAfter) {
        connection.query(
            `SELECT * FROM meal WHERE created_date >= '${createdAfter}'`,
            function(error, results, fields) {
                response.json(results);

            }
        );
    }
    if (limit) {
        connection.query(
            `SELECT meals.id, meals.title, meals.description, meals.created_date, meals.location
      FROM meals WHERE meals.price >= 100 ORDER BY id ASC LIMIT ${limit}`,
            function(error, results, fields) {
                response.json(results);

            }
        );
    } else {
        connection.query("SELECT * FROM meals", function(error, results, fields) {
            if (error) {
                return response.send(error);
            }
            response.json(results);

        });
    }
});

// Returns meal by id
router.get("/:id", (request, response) => {
    const { id } = request.params;
    connection.query(`SELECT * FROM meals WHERE id = ${id}`,
        function(error, results, fields) {
            response.json(results);

        });
});

// Adds a new meal
router.post("/", (request, response) => {
    const newMeal = request.body;
    connection.query(`INSERT INTO meals SET ?`, newMeal,
        function(error, results, fields) {
            response.json(results);

        });
});

// Deletes the meal by id
router.delete("/:id", (request, response) => {
    const mealID = request.params.id;
    connection.query("DELETE FROM meals WHERE meals.id =?", mealID,
        function(error, results, fields) {
            response.send("meal deleted successfully");

        });
});

// Updates the meal by id
router.put("/:id", (request, response) => {
    connection.query(
        `UPDATE meals SET title = ?, price = ?, max_reservations = ? 
  WHERE id = ?`, [
            request.body.title,
            request.body.price,
            request.body.max_reservations,
            request.params.id
        ],
        function(error, results, fields) {
            response.send("meal updated");

        }
    );
});





module.exports = router;