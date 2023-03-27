import {pool} from '../db.js';

export const getUsuarios = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM usuario ORDER BY id_usuario ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getUsuario = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM usuario WHERE id_usuario = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Usuario no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createUsuario = async (req, res) => {
    try {
        const { rut, clave, perfil } = req.body;
        const [result] = await pool.query("INSERT INTO usuario(rut, clave, perfil) VALUES (?,?,?)" , [rut, clave, perfil]);
        res.json({id_usuario: result.insertId, rut, clave, perfil});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const result = await pool.query("UPDATE usuario SET ? WHERE id_usuario = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM usuario WHERE id_usuario = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}