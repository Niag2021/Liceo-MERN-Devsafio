import {pool} from '../db.js';

export const getApoderados = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM apoderados ORDER BY id_apoderados ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getApoderado = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM apoderados WHERE id_apoderados = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Apoderado no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createApoderado = async (req, res) => {
    try {
        const { nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, direccion, email } = req.body;
        const [result] = await pool.query("INSERT INTO apoderados (nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, direccion, email) VALUES (?,?,?,?,?,?,?)" , [nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, direccion, email]);
        res.json({id_apoderados: result.insertId, nombre1_apoderado, nombre2_apoderado, apellido1_apoderado, apellido2_apoderado, telefono, direccion, email});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateApoderado = async (req, res) => {
    try {
        const result = await pool.query("UPDATE apoderados SET ? WHERE id_apoderados = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteApoderado = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM apoderados WHERE id_apoderados = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Apoderado no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}