UPDATE shelf
SET name = $2, price = $3
WHERE id = $1;