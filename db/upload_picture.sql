INSERT INTO pictures
(picture_name, picture_pic, user_id)
VALUES
(${picture_name}, ${picture_pic}, ${user_id})
returning *;