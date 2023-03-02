//Le da una respuesta al cliente con req 
// =>  
//Para manejar un error es el try catch 
import { pool } from '../db.js';

export const getAlumnos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM alumnos ORDER BY id_alumnos ASC");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getAlumno = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM alumnos WHERE id_alumnos=?', [req.params.id]);

        if (result.length === 0)
            return res.status(404).json({ message: "Alumno no encontrado." });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createAlumno = async (req, res) => {
    try {
        const { nombre1, edad, matriculado } = req.body;
        const [result] = await pool.query("INSERT INTO alumnos(nombre1, edad, matriculado) VALUES (?,?,?)", [nombre1, edad, matriculado]);
        //console.log(result);
        res.json({ id_alumnos: result.insertId, nombre1, edad, matriculado });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateAlumno = async (req, res) => {
    try {
        const result = await pool.query("UPDATE alumnos SET ? WHERE id_alumnos = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM alumnos WHERE id_alumnos = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Alumno no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
