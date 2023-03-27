import { pool } from '../db.js';

export const getApoderados = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM apoderado ORDER BY id_apoderado ASC");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getApoderado = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM apoderado WHERE id_apoderado = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Apoderado no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createApoderado = async (req, res) => {
    try {
        const { nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, email, nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno } = req.body;
        const [result] = await pool.query("INSERT INTO apoderado (nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, email, nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno) VALUES (?,?,?,?,?,?,?,?,?,?)", [nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, email, nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno]);
        res.json({ id_apoderado: result.insertId, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, email, nombre1_alumno, nombre2_alumno, apellido1_alumno, apellido2_alumno });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateApoderado = async (req, res) => {
    try {
        const result = await pool.query("UPDATE apoderado SET ? WHERE id_apoderado = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteApoderado = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM apoderado WHERE id_apoderado = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Apoderado no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}