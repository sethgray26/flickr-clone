UPDATE users
SET user_bio = ${user_bio}
WHERE user_id = ${user_id}
returning *;