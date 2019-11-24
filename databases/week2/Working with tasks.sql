
	-- Write the following sql queries:--
	-- 1- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID --
		INSERT INTO `task` (`title`, `description`,`created`, `updated`, `due_Date`,`status_ID`, `user_ID`) 
		VALUES ('complete_homework_week 2', 'Its about db', '2019-11-18 19:31:00','2019-11-18 20:31:00','2019-12-18 20:31:00', '3','8');

	-- 2- Change the title of a task with these attributes: taskID, newTitle --
		update task set title = 'Do some shopping for dark winter' where id = 1;

	-- 3-Change the task due date with these attributes: taskID, newDueDate -- 
		update task SET due_date = '2019-12-31 20:58:03' WHERE task.id = 1;

	-- 4-Change the task status with these attributes: taskID, newStatus -- 
		UPDATE task SET status_id = 2 WHERE id = 1;

	-- 5-Mark a task as complete with this attribute: taskID -- 
		UPDATE task SET status_id = 3 WHERE id = 5;

	-- 6- Delete task with this attribute: taskID -- 
		DELETE FROM task WHERE id = 36;


	-- SCHOOL DATABASE!! -- 
	-- 1- Create a new database containing the following tables: -- 
	-- Class: with the columns: id, name, begins (date), ends (date) -- 
	-- Student: with the columns: id, name, email, phone, class_id (foreign key)-- 

		create database school_db;
		use school_db; 
		create table `Class` (`id` int(10) unsigned not null auto_increment, `name` varchar(255) not null,`begins` DATETIME NULL DEFAULT NULL,`ends` DATETIME NULL DEFAULT NULL);

		insert into Class (id, name, begins, ends)values (1, 'Aarika Ellingworth', '2019-08-04 12:00:00''2020-02-04 16:00:00');

		create table `student` (`id` int(10) unsigned not null auto_increment, `name` varchar(255) not null,`email` varchar(255) not null,`phone` varchar(255) not null, 
		`class_id` int(10) unsigned not null);
		insert into student (id, name,  email,  phone, class_id) values ('1', 'Aarika Ellingworth', 'ael@outlook.com','+45 1111 2222', '11');

	-- 2- If you are done with the above tasks, you can continue with these advanced tasks: -- 
	-- Create an index on the name column of the student table.-- 
	-- CREATE INDEX indexed on student(name);-- 

		-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).-- 
		use school_db;
		ALTER TABLE `class` ADD COLUMN status  varchar(255) NOT NULL AFTER ends;
		update school_db.class SET status = 'finished' WHERE id IN (8,9);

		-- OR -- 
		alter table school_db.class
		add status enum ('not started', 'on going', 'finished') NOT NULL DEFAULT 'not started';
