INSERT INTO pictures
(picture_name, picture_pic, user_id, picture_description)
VALUES
(${picture_name}, ${picture_pic}, ${user_id}, ${picture_description})
returning *;