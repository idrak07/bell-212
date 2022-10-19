CREATE DATABASE `kms`;
CREATE USER 'moon'@'localhost' IDENTIFIED BY 'moon';
GRANT ALL PRIVILEGES ON kms . * TO 'moon'@'localhost';
FLUSH PRIVILEGES;
