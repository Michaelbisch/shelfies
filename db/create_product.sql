INSERT INTO products 
( product_name, price, imgurl)
values($1, $2, $3);

select *
from products
order by product_id asc;