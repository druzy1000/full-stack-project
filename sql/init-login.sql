CREATE DATABASE IF NOT EXISTS login;

USE login;
CREATE TABLE IF NOT EXISTS USERS (
	id INT,
	user_name VARCHAR(50),
	password VARCHAR(50),
	UNIQUE (user_name)
);
insert into USERS (id, user_name, password) values (1, 'kdavydzenko0', 'zPydhVG9S142');
insert into USERS (id, user_name, password) values (2, 'bplatfoot1', 'cfvMqBotHLIt');
insert into USERS (id, user_name, password) values (3, 'iyurasov2', 'MuZfAicQn');