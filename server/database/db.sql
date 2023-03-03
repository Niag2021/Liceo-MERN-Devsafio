-- Crear BD 
create database liceo;

-- Usar BD 
use liceo;

-- Crear tabla alumnos. 
/*
CREATE TABLE alumnos ( 
	id_alumnos INTEGER PRIMARY KEY auto_increment,
    nombre1 VARCHAR(200) NOT NULL,
    nombre2 VARCHAR(200) NOT NULL,
    apellido1 VARCHAR(200) NOT NULL,
    apellido2 VARCHAR(200) NOT NULL,
    edad INT NOT NULL,
    id_profesor_jefe INT(2) NOT NULL,
    id_curso INT(2) NOT NULL,
    id_sala INT(2) NOT NULL,
    telefono INT(10),
    telefono_apoderado INT(10) NOT NULL,
    parentesco_apoderado VARCHAR(25) NOT NULL,
    createdAt TimeStamp NOT NULL default current_timestamp,
    updatedAt TimeStamp NOT NULL default current_timestamp
);
*/

-- Crear tabla cursos. 
/*
CREATE TABLE cursos ( 
	id_cursos INTEGER PRIMARY KEY auto_increment,
    nombre VARCHAR(10) NOT NULL,
    id_alumno INTEGER(3) NOT NULL,
    id_sala INT(3) NOT NULL,
    id_profesor_jefe INT(3) NOT NULL,
    createdAt TimeStamp NOT NULL default current_timestamp,
    updatedAt TimeStamp NOT NULL default current_timestamp
);
*/