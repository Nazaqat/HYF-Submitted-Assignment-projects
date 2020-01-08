const express = require("express");
const connection = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Returns all reviewss
router.get("/", (request, response) => {
    connection.query("SELECT * FROM reviews", function(error, results, fields) {
        if (error) {
            return response.send(error);
        }
        response.json(results);

    });
});

// Returns reviewss by id
router.get("/:id", (request, response) => {
    const { id } = request.params;
    connection.query(`SELECT * FROM reviews WHERE id = ${id}`,
        function(error, results, fields) {
            response.json(results);

        });
});

// Adds a new reviews
router.post("/", (request, response) => {
    const newreviews = request.body;
    connection.query(`INSERT INTO reviews SET ?`, newreviews,
        function(error, results, fields) {
            response.json(results);

        });
});

// Updates the reviews by id
router.put("/:id", (request, response) => {
    connection.query(
        `UPDATE reviews SET title = ?, description = ?, stars = ? 
        WHERE id = ?`, [
            request.body.title,
            request.body.description,
            request.body.stars,
            request.params.id
        ],
        function(error, results, fields) {
            response.send("reviewss updated");

        }
    );
});

// Deletes the reviews by id
router.delete("/:id", (request, response) => {
    const reviewsId = request.params.id;
    connection.query("DELETE FROM reviews WHERE reviews.id =?", reviewsId,
        function(error, results, fields) {
            response.send("reviews deleted successfully");

        });
});

module.exports = router;