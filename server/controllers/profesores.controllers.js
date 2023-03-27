import {pool} from '../db.js';

export const getProfesores = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM profesor ORDER BY id_profesor ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getProfesor = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM profesor WHERE id_profesor = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Profesor no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createProfesor = async (req, res) => {
    try {
        const { nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, nombre_asignatura, edad, telefono, email } = req.body;
        const [result] = await pool.query("INSERT INTO profesor (nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, nombre_asignatura, edad, telefono, email) VALUES (?,?,?,?,?,?,?,?)", [nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, nombre_asignatura, edad, telefono, email]);
        res.json({ id_profesor: result.insertId, nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, nombre_asignatura, edad, telefono, email });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProfesor = async (req, res) => {
    try {
        const result = await pool.query("UPDATE profesor SET ? WHERE id_profesor = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProfesor = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM profesor WHERE id_profesor = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Profesor no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}