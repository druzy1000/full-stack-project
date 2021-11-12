CREATE DATABASE IF NOT EXISTS employee;

USE employee;
create table EMPLOYEES (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	address VARCHAR(50),
	city VARCHAR(50),
	state VARCHAR(50),
	zip_code VARCHAR(50),
	phone VARCHAR(50),
	email VARCHAR(50),
	UNIQUE (email)
);
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (1, 'Vinita', 'Brandin', '23454 Maple Wood Circle', 'Orlando', 'Florida', '32813', '321-130-7635', 'vbrandin0@nih.gov');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (2, 'Georgia', 'Normansell', '0725 Shelley Circle', 'Sandy', 'Utah', '84093', '801-127-4357', 'gnormansell1@alibaba.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (3, 'Chickie', 'Peatman', '9060 Sundown Street', 'Tacoma', 'Washington', '98442', '253-464-2733', 'cpeatman2@thetimes.co.uk');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (4, 'Urban', 'Sacher', '76 Atwood Park', 'Madison', 'Wisconsin', '53726', '608-867-4208', 'usacher3@huffingtonpost.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (5, 'Ertha', 'Brislane', '0 Paget Trail', 'Trenton', 'New Jersey', '08619', '609-564-1531', 'ebrislane4@etsy.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (6, 'Antonin', 'Bausor', '4007 International Plaza', 'El Paso', 'Texas', '88525', '915-891-6242', 'abausor5@yelp.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (7, 'Corilla', 'Baison', '37633 Weeping Birch Plaza', 'Pensacola', 'Florida', '32590', '850-576-2044', 'cbaison6@aboutads.info');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (8, 'Bernice', 'Beckerleg', '050 Nancy Court', 'El Paso', 'Texas', '79989', '915-823-4328', 'bbeckerleg7@cyberchimps.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (9, 'Doris', 'Storrah', '49 Lerdahl Trail', 'Erie', 'Pennsylvania', '16565', '814-448-7038', 'dstorrah8@who.int');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (10, 'Burlie', 'Mebes', '2501 Mariners Cove Court', 'Fresno', 'California', '93762', '559-376-3899', 'bmebes9@simplemachines.org');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (11, 'Davie', 'Jako', '599 Anniversary Avenue', 'Midland', 'Michigan', '48670', '989-756-2759', 'djakoa@t-online.de');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (12, 'Leif', 'Nickerson', '93 Arapahoe Way', 'Albuquerque', 'New Mexico', '87105', '505-463-7800', 'lnickersonb@apache.org');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (13, 'Lavinie', 'Wallsworth', '74 Katie Park', 'Waco', 'Texas', '76705', '254-647-1051', 'lwallsworthc@studiopress.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (14, 'Lynne', 'Toffolini', '0003 Coleman Terrace', 'Washington', 'District of Columbia', '20470', '202-192-9248', 'ltoffolinid@si.edu');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (15, 'Linus', 'Natte', '51511 Carey Way', 'Tempe', 'Arizona', '85284', '602-475-8735', 'lnattee@unicef.org');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (16, 'Ally', 'Raddon', '42 Mayer Street', 'Augusta', 'Georgia', '30905', '706-601-5650', 'araddonf@msn.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (17, 'Daveen', 'Pinson', '247 Canary Road', 'Newark', 'New Jersey', '07104', '973-195-2814', 'dpinsong@vkontakte.ru');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (18, 'Catarina', 'Nutman', '18187 Fremont Parkway', 'New York City', 'New York', '10045', '212-508-2716', 'cnutmanh@1und1.de');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (19, 'Hedda', 'Beslier', '3186 Manitowish Pass', 'Santa Fe', 'New Mexico', '87592', '505-130-7115', 'hbeslieri@wix.com');
insert into EMPLOYEES (id, first_name, last_name, address, city, state, zip_code, phone, email) values (20, 'Emilee', 'Magnay', '97 Menomonie Court', 'San Antonio', 'Texas', '78285', '210-357-1427', 'emagnayj@engadget.com');