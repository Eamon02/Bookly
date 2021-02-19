DROP DATABASE IF EXISTS bookly_db;
CREATE DATABASE bookly_db;
USE bookly_db;

CREATE TABLE book_table(
    id INT NOT NULL AUTO_INCREMENT, 
    title  VARCHAR (50) NOT NULL,
    author VARCHAR (30) NOT NULL,
    user_rating VARCHAR (50) NOT NULL,
    reading_status VARCHAR (50) NOT NULL,
    category VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);