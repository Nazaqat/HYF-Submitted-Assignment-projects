const express = require("express");
const connection = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Returns all reservationss
router.get("/", (request, response) => {
    connection.query("SELECT * FROM reservations", function(error, results, fields) {
        if (error) {
            return response.send(error);
        }
        // results will contain the results of the query
        response.json(results);

    });
});

// Returns reservations by id
router.get("/:id", (request, response) => {
    const { id } = request.params;
    connection.query(`SELECT * FROM reservations WHERE id = ${id}`, function(
        error,
        results,
        fields
    ) {
        response.json(results);

    });
});

// Adds a new reservations
router.post("/", (request, response) => {
    const newreservations = request.body;
    connection.query(`INSERT INTO reservations SET ?`, newreservations, function(
        error,
        results,
        fields
    ) {
        response.json(results);

    });
});

// Updates the meal by id
router.put("/:id", (request, response) => {
    connection.query(
        `UPDATE reservations SET number_of_guests = ?, meal_id = ?, created_date = ? 
        WHERE id = ?`, [
            request.body.number_of_guests,
            request.body.meal_id,
            request.body.created_date,
            request.params.id
        ],
        function(error, results, fields) {
            response.send("meal updated");
            // console.log("meal updated");
        }
    );
});

// Deletes the meal by id
router.delete("/:id", (request, response) => {
    const reservationsId = request.params.id;
    connection.query(
        "DELETE FROM reservations WHERE reservations.id =?",
        reservationsId,
        function(error, results, fields) {
            response.send("meal deleted successfully");
            // console.log("meal deleted successfully");
        }
    );
});

module.exports = router;