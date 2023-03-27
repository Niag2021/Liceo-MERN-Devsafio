-- Crear BD 
create database liceo;

-- Usar BD 
use liceo;

-- Crear tabla alumno. 
/*
CREATE TABLE usuario (
  id_usuario INTEGER PRIMARY KEY auto_increment,
  rut INTEGER NOT NULL,
  clave VARCHAR(10) NOT NULL,
  perfil VARCHAR(15) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
-------------------------------------------------------------
-- Crear tabla alumno. 
/*
CREATE TABLE alumno (
  id_alumno INTEGER PRIMARY KEY auto_increment,
  nombre1_alumno VARCHAR(15) NOT NULL,
  nombre2_alumno VARCHAR(15) NOT NULL,
  apellido1_alumno VARCHAR(15) NOT NULL,
  apellido2_alumno VARCHAR(15) NOT NULL,
  edad INTEGER NOT NULL,
  telefono INTEGER NOT NULL, 
  email VARCHAR(50) NOT NULL,
  nombre1_apoderado VARCHAR(15) NOT NULL,
  nombre2_apoderado VARCHAR(15) NOT NULL,
  apellido1_apoderado VARCHAR(15) NOT NULL,
  apellido2_apoderado VARCHAR(15) NOT NULL,
  nombre_curso VARCHAR(15) NOT NULL, 
  nombre1_profesor_jefe VARCHAR(15) NOT NULL,
  nombre2_profesor_jefe VARCHAR(15) NOT NULL,
  apellido1_profesor_jefe VARCHAR(15) NOT NULL,
  apellido2_profesor_jefe VARCHAR(15) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/
-------------------------------------------------------------
-- Crear tabla apoderado. 
/*
CREATE TABLE apoderado (
  id_apoderado INTEGER PRIMARY KEY auto_increment,
  nombre1_apoderado VARCHAR(15) NOT NULL,
  nombre2_apoderado VARCHAR(15) NOT NULL,
  apellido1_apoderado VARCHAR(15) NOT NULL,
  apellido2_apoderado VARCHAR(15) NOT NULL,
  telefono INTEGER NOT NULL, 
  email VARCHAR(50) NOT NULL,
  nombre1_alumno VARCHAR(15) NOT NULL,
  nombre2_alumno VARCHAR(15) NOT NULL,
  apellido1_alumno VARCHAR(15) NOT NULL,
  apellido2_alumno VARCHAR(15) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/
-------------------------------------------------------------
-- Crear tabla profesor. 
/*
CREATE TABLE profesor (
  id_profesor INTEGER PRIMARY KEY auto_increment,
  nombre1_profesor VARCHAR(15) NOT NULL,
  nombre2_profesor VARCHAR(15) NOT NULL,
  apellido1_profesor VARCHAR(15) NOT NULL,
  apellido2_profesor VARCHAR(15) NOT NULL,
  nombre_asignatura VARCHAR(20) NOT NULL, 
  edad INTEGER NOT NULL,
  telefono INTEGER NOT NULL, 
  email VARCHAR(50) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/
-------------------------------------------------------------
-- Crear tabla profesor jefe. 
/*
CREATE TABLE profesor_jefe (
  id_profesor_jefe INTEGER PRIMARY KEY auto_increment,
  nombre1_profesor_jefe VARCHAR(15) NOT NULL,
  nombre2_profesor_jefe VARCHAR(15) NOT NULL,
  apellido1_profesor_jefe VARCHAR(15) NOT NULL,
  apellido2_profesor_jefe VARCHAR(15) NOT NULL,
  curso_jefatura VARCHAR(20) NOT NULL, 
  edad INTEGER NOT NULL,
  telefono INTEGER NOT NULL,
  email VARCHAR(50) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/
-------------------------------------------------------------
-- Crear tabla curso. 
/*
CREATE TABLE curso (
  id_curso INTEGER PRIMARY KEY auto_increment,
  nombre_curso VARCHAR(15) NOT NULL,  
  sala INTEGER NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/
-------------------------------------------------------------
-- Crear tabla sala. 
/*
CREATE TABLE sala (
  id_sala INTEGER PRIMARY KEY auto_increment,
  numero_sala INTEGER NOT NULL,  
  ubicacion VARCHAR(50) NOT NULL,
  nombre_curso VARCHAR(15) NOT NULL,
  createdAt TimeStamp NOT NULL default current_timestamp,
  updatedAt TimeStamp NOT NULL default current_timestamp
);
*/