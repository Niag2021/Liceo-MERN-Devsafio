//Le da una respuesta al cliente con req 
// =>  
//Para manejar un error es el try catch 
import { pool } from '../db.js';

export const getAlumnos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM alumno ORDER BY id_alumno ASC");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getAlumno = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM alumno WHERE id_alumno = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Alumno no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createAlumno = async (req, res) => {
    try {
        const { nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno, edad, telefono, email, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, nombre_curso, nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe } = req.body;
        const [result] = await pool.query("INSERT INTO alumno(nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno, edad, telefono, email, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, nombre_curso, nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno, edad, telefono, email, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, nombre_curso, nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe]);
        console.log(result);
        res.json({ id_alumno: result.insertId, nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno, edad, telefono, email, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, nombre_curso, nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateAlumno = async (req, res) => {
    try {
        const result = await pool.query("UPDATE alumno SET ? WHERE id_alumno = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM alumno WHERE id_alumno = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Alumno no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
