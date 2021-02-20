use bookly_db;

<<<<<<< HEAD
INSERT INTO booktables (title,userRating,readingStatus, category, author_id, createdAt, updatedAt)  
VALUES 
    ("Harry Potter and the Sorcerer's","Awesome", "Read", "Fantasy",0020,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Harry Potter and the Chamber of Secrets", "Awesome", "Read", "Fantasy",0020,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Harry Potter and the Prisoner of Azkaban","Awesome", "Reading", "Fantasy",0020,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Harry Potter and the Goblet of Fire","Not Yet Rated", "On List", "Fantasy",0020,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Harry Potter and the Order of the Phoenix", "Not Yet Rated", "On List", "Fantasy",0020,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Complete Book of Classic John Deere Tractors", "Boring", "Read", "Classic",0030,"2020-05-07 15:41:58","2020-05-07 15:41:58"),
    ("Eight Perfect Murders", "Not Yet Rated", "On List", "Mistery",0040,"2020-05-07 15:41:58","2020-05-07 15:41:58")
    ;
=======
INSERT INTO book_table (title , author, user_rating, reading_status, category) 
VALUES 
    ("Harry Harry Potter and the Sorcerer's", "J.K. Rowling", "Awesome", "Read", "Fantasy"),
    ("Harry Potter and the Chamber of Secrets", "J.K.Rowling", "Awesome", "Read", "Fantasy"),
    ("Harry Potter and the Prisoner of Azkaban", "J.K.Rowling", "Awesome", "Reading", "Fantasy"),
    ("Harry Potter and the Goblet of Fire", "J.K.Rowling", "Not Yet Rated", "On List", "Fantasy"),
    ("Harry Potter and the Order of the Phoenix", "J.K. Rowling", "Not Yet Rated", "On List", "Fantasy"),
    ("Complete Book of Classic John Deere Tractors", "Don Mcmillan", "Boring", "Read", "Classic"),
    ("Eight Perfect Murders", "Peter", "Swanson", "Not Yet Rated", "On List", "Mystery");
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198


INSERT INTO authors (id, author, bio, createdAt, updatedAt) 
VALUES 
    (0020, "J.K Rowling", " ","2020-05-07 15:41:58","2020-05-07 15:41:58"),
    (0030, "Harry", " ","2020-05-07 15:41:58","2020-05-07 15:41:58"),
    (0040, "Larry", " ","2020-05-07 15:41:58","2020-05-07 15:41:58");

