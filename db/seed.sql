CREATE TABLE users(
user_id SERIAl PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(150),
password VARCHAR(150),
profile_pic TEXT,
user_bio VARCHAR(250)
)

CREATE TABLE pictures(
picture_id SERIAL PRIMARY KEY,
picture_name VARCHAR(50),
picture_pic TEXT,
user_id int REFERENCES users(user_id)
)

CREATE TABLE favorites
(
favorite_id INTEGER NOT NULL,
user_id INTEGER REFERENCES users(user_id),
picture_id INTEGER 
)

CREATE TABLE user_faves
(
ID INTEGER PRIMARY KEY,
user_id INTEGER,
picture_id INTEGER
)