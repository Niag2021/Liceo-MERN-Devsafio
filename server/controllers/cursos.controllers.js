import {pool} from '../db.js';

export const getCursos = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM curso ORDER BY id_curso ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getCurso = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM curso WHERE id_curso = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Curso no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createCurso = async (req, res) => {
    try {
        const { nombre_curso, sala } = req.body;
        const [result] = await pool.query("INSERT INTO curso (nombre_curso, sala) VALUES (?,?)" , [nombre_curso, sala]);
        res.json({id_curso: result.insertId, nombre_curso, sala});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateCurso = async (req, res) => {
    try {
        const result = await pool.query("UPDATE curso SET ? WHERE id_curso = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCurso = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM curso WHERE id_curso = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Curso no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}