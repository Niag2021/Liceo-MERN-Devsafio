import {pool} from '../db.js';

export const getCursos = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM cursos ORDER BY id_cursos ASC");
        res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message}); 
    }
}

export const getCurso = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM cursos WHERE id_cursos = ?", [req.params.id]);

        if(result.length === 0)
            return res.status(404).json({ message: "Curso no encontrado."});

        res.json(result[0]);
    }catch(error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const createCurso = async (req, res) => {
    try {
        const { nombre, id_alumno, id_sala, id_profesor_jefe } = req.body;
        const [result] = await pool.query("INSERT INTO cursos(nombre, id_alumno, id_sala, id_profesor_jefe) VALUES (?,?,?,?)" , [nombre, id_alumno, id_sala, id_profesor_jefe]);
        res.json({id_cursos: result.insertId, nombre, id_alumno, id_sala, id_profesor_jefe});
    } catch (error){
        return res.status(500).json({ message: error.message});
    }
}

export const updateCurso = async (req, res) => {
    try {
        const result = await pool.query("UPDATE cursos SET ? WHERE id_cursos = ?", [req.body, req.params.id,]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCurso = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM cursos WHERE id_cursos = ?", [req.params.id,]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Curso no encontrado." });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}