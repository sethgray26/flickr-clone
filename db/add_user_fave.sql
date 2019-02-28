INSERT INTO user_faves
(user_id, picture_id)
VALUES
(${user_id}, ${picture_id})
returning *;