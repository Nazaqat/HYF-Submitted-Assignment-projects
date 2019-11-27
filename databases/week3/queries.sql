
	-- Meal --
	-- Get all meals--
		select title from food_db.meal;

	-- Add a new meal--
		use food_db;
		insert into meal VALUES (7, 'kheer', 'its so delicious wow', 'stenløse', '2020-02-02 12:00:00', 20, 300, '2019-11-20 12:01:00');

	-- Get a meal with any id, fx 1--
		select * from food_db.meal where id = 7;

	-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes--
		use food_db;
		update meal set title = 'Chicken Biryani', max_reservations = 20 where id = 1;

	-- Delete a meal with any id, fx 1 --
		use food_db;
		delete from meal where id = 7;

	///////////////////////////////////////////////////////////////

	-- Reservation --

	-- Get all reservations-- 
		use food_db;
		select * from reservation;

	-- Add a new reservation-- 
		use food_db;
		insert into reservation values (6,100,400,'2019-11-22 19:00:00');

	-- Get a reservation with any id, fx 1-- 
		use food_db;
		select * from reservation where id in (1,3,5);

	-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes-- 
		use food_db;
		update reservation set meal_id = 300, number_of_guests = 50 where id =1;

	-- Delete a reservation with any id, fx 1-- 
		use food_db;
		delete from reservation where id = 5;

	///////////////////////////////////////////////////////////////

	-- Review --
    
	-- Get all reviews-- 
		use food_db;
		select * from review;

	-- Add a new review-- 
		use food_db;
		insert into  review values ( 6, 'guest', 'its simply delicious', 115, 7, '2019-11-27 20:00:00');

	-- Get a review with any id, fx 1-- 
		use food_db;
		select * from review where id =5;

	-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes-- 
		use food_db;
		update review set stars = 9, meal_id = 150 where id = 4;

	-- Delete a review with any id, fx 1-- 
		use food_db;
		delete from review where id = 2 AND stars = 5;

	///////////////////////////////////////////////////////////////

	Additional queries/Functionality
	-- Get meals that has a price smaller than a specific price fx 90--
		use food_db;
		select * from meal where price <90;

	-- Get meals that still has available reservations--
		use food_db;
		select * from meal where max_reservations > 1;

	-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde--
		use food_db;
		select * from meal where title like '%biryani%';

	-- Get meals that has been created between two dates--
		use food_db;
		select * from meal where created_date >  '2019-11-20' AND  created_date < '2019-11-25';

	-- Get only specific number of meals fx return only 5 meals--
		use food_db;
		select * from meal where ID IN(6,2,3,4,5);

	-- Get the meals that have good reviews--
		use food_db;
		select * from review where stars > 5;

	-- Get reservations for a specific meal sorted by created_date--
		use food_db;
		select * from reservation where created_date = '2019-11-22';

	-- Sort all meals by average number of stars in the reviews--
		use food_db;
		select AVG(stars) 'Average Stars' from review;





































