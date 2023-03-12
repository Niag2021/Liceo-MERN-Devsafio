import {pool} from '../db.js';

export const getAsignaturas = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM asignaturas ORDER BY id_asignaturas ASC");
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getAsignatura = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM asignaturas WHERE id_asignaturas = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Asignatura no encontrada."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createAsignatura = async (req, res) => {
    try {
        const { nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, telefono, direccion, email } = req.body;
        const [result] = await pool.query("INSERT INTO asignaturas (nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, telefono, direccion, email) VALUES (?,?,?,?,?,?,?)" , [nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, telefono, direccion, email]);
        res.json({id_asignatura: result.insertId, nombre1_profesor, nombre2_profesor, apellido1_profesor, apellido2_profesor, telefono, direccion, email});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateAsignatura = async (req, res) => {
    try {
        const result = await pool.query("UPDATE asignaturas SET ? WHERE id_asignaturas = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteAsignatura = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM asignaturas WHERE id_asignaturas = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Asignatura no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}