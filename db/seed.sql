CREATE TABLE users(
user_id SERIAl PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(150),
password VARCHAR(150),
profile_pic TEXT,
user_bio VARCHAR(250)
)