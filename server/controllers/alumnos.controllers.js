//Le da una respuesta al cliente con req 
// =>  
import { pool } from '../db.js';

export const getAlumnos = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM alumnos ORDER BY nombre1 ASC");
    res.json(result)
}

export const getAlumno = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM alumnos WHERE id_alumnos=?', [req.params.id]);

    if(result.length === 0)
        return res.status(404).json({message: "Alumno no encontrado."}); 

    res.json(result[0]); 
}

export const createAlumno = async (req, res) => {
const { nombre1, edad } = req.body;
const [result] = await pool.query("INSERT INTO alumnos(nombre1, edad) VALUES (?,?)"
, [nombre1, edad]);
//console.log(result);
res.json({id_alumnos:result.insertId,
nombre1, edad, });
};

export const updateAlumno = async (req, res) => {
    const result = await pool.query("UPDATE alumnos SET ? WHERE id_alumnos = ?"
    , [req.body, req.params.id,]);
    res.json(result)    ;
}

export const deleteAlumno = async (req, res) => {
    const [result] = await pool.query("DELETE FROM alumnos WHERE id_alumnos = ?", [req.params.id,]);
    

    if(result.affectedRows === 0){
        return res.status(404).json({message: "Alumno no encontrado."}); 
    }

    return res.sendStatus(204); 
}
