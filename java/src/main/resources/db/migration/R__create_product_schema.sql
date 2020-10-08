/*
  This is for reference only, please create your own database structure.
  This script will run every time the application is executed.
 */
DROP TABLE IF EXISTS product.product;

CREATE TABLE product.product
(
  id          SERIAL PRIMARY KEY,
  name        CHARACTER VARYING,
  description CHARACTER VARYING,
  test CHARACTER VARYING
);

