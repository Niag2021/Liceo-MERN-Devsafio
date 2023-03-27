import {pool} from '../db.js';

export const getProfesorJefes = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM profesor_jefe ORDER BY id_profesor_jefe ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getProfesorJefe = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM profesor_jefe WHERE id_profesor_jefe = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Profesor Jefe no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createProfesorJefe = async (req, res) => {
    try {
        const { nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe, curso_jefatura, edad, telefono, email } = req.body;
        const [result] = await pool.query("INSERT INTO profesor_jefe (nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe, curso_jefatura, edad, telefono, email) VALUES (?,?,?,?,?,?,?,?)", [nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe, curso_jefatura, edad, telefono, email]);
        res.json({ id_profesor_jefe: result.insertId, nombre1_profesor_jefe, nombre2_profesor_jefe, apellido1_profesor_jefe, apellido2_profesor_jefe, curso_jefatura, edad, telefono, email });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProfesorJefe = async (req, res) => {
    try {
        const result = await pool.query("UPDATE profesor_jefe SET ? WHERE id_profesor_jefe = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProfesorJefe = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM profesor_jefe WHERE id_profesor_jefe = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Profesor Jefe no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}