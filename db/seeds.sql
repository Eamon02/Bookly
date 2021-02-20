use bookly_db;

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


INSERT INTO authors (id, author, bio, createdAt, updatedAt) 
VALUES 
    (0020, "J.K Rowling", " ","2020-05-07 15:41:58","2020-05-07 15:41:58"),
    (0030, "Harry", " ","2020-05-07 15:41:58","2020-05-07 15:41:58"),
    (0040, "Larry", " ","2020-05-07 15:41:58","2020-05-07 15:41:58");

