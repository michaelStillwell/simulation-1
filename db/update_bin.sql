UPDATE shelf
SET title = $2, price = $3
WHERE id = $1;