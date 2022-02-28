/*
Abrir cmd y poner: 

C:\Users\afdm\Desktop\PortableGit\Develop\mysql-8.0.27-winx64\bin>mysqld --console

Abrir otro cmd e incicializar sql:

C:\Users\afdm\Desktop\PortableGit\Develop\mysql-8.0.27-winx64\bin>mysql.exe -u root
*/

DROP DATABASE IF EXISTS concesionario;

CREATE DATABASE concesionario;

USE concesionario;

CREATE TABLE persona(
id_persona VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE coche(
    id DECIMAL(3) PRIMARY KEY,
    matricula VARCHAR(50) UNIQUE NOT NULL,
    modelo VARCHAR(30),
    marca VARCHAR(30),
    km DECIMAL(9),
    precio DECIMAL(9),
    id_persona VARCHAR(10),
    alquiler_venta VARCHAR(10) CHECK (alquiler_venta='venta' OR alquiler_venta='alquiler'),
    CONSTRAINT fk_persona FOREIGN KEY (id_persona) REFERENCES persona(id_persona) 
)ENGINE=InnoDB;