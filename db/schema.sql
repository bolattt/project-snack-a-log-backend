DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    fiber INT, 
    protein INT, 
    added_sugar INT, 
    is_healthy BOOLEAN, 
    image VARCHAR(255));



