SELECT * from pictures p
JOIN user_faves uf
ON p.picture_id = uf.picture_id
WHERE p.user_id = ${user_id}