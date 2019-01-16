CREATE DATABASE wfynossiirgs4fio;
USE wfynossiirgs4fio;

CREATE TABLE activities (
	activity_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(50),
    event_city VARCHAR(50),
    event_link VARCHAR (150), 
    createdAt timeStamp default CURRENT_TIMESTAMP NOT NULL, 
    event_category VARCHAR(35),
    user_id INT(5) NOT NULL,
    post_id INT (10) NOT NULL
);

CREATE TABLE users (
  user_id Int(7) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR( 255) NOT NULL,
  email VARCHAR( 255 ) NOT NULL,
  interests VARCHAR( 255 ) NOT NULL,
  city VARCHAR (255) NOT NULL
);

CREATE TABLE interests (
  interest_id Int(7) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  user_id INT(5) NOT NULL,
  user_interest varchar(300)
);

CREATE TABLE cities (
  city_id  Int(7) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  city VARCHAR (255) NOT NULL
);


SELECT * FROM  activities;