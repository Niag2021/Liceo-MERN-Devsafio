// =>
import axios from "axios";

export const createAlumnosRequest = async (alumno) =>
    await axios.post('http://localhost:4000/alumnos', alumno);