create database node;
use node;

create table users (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(50) not null,
tel varchar(10) not null,
address varchar (65)
);
insert into users (name,tel,address)
values('Juan Carlos', '04325485', 'Calle 23');

insert into users (name,tel,address)
values('Andres Castle', '0485565685', 'Calle 53');
