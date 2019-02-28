SELECT * FROM favorites f
INNER JOIN pictures p
ON p.picture_id = f.picture_id
WHERE f.user_id = ${user_id}