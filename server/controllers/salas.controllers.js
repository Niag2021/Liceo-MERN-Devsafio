import {pool} from '../db.js';

export const getSalas = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM sala ORDER BY id_sala ASC");
        res.json(result);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getSala = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM sala WHERE id_sala = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Sala no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createSala = async (req, res) => {
    try {
        const { numero_sala, ubicacion, nombre_curso } = req.body;
        const [result] = await pool.query("INSERT INTO sala (numero_sala, ubicacion, nombre_curso) VALUES (?,?,?)" , [numero_sala, ubicacion, nombre_curso]);
        res.json({id_sala: result.insertId, numero_sala, ubicacion, nombre_curso});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateSala = async (req, res) => {
    try {
        const result = await pool.query("UPDATE sala SET ? WHERE id_sala = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteSala = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM sala WHERE id_sala = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Sala no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}