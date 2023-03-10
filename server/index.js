import express from "express";
import cors from 'cors';
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js"; 
import alumnosRoutes from "./routes/alumnos.routes.js"; 
import cursosRoutes from "./routes/cursos.routes.js";
import asignaturasRoutes from "./routes/asignaturas.routes.js";
import apoderadosRoutes from "./routes/apoderados.routes.js";

const app = express();

//Funcion de express llamada json
//procesa los datos del cliente 

//para que se conecte a un solo servidor
app.use(cors());
//para que se conecte a un solo servidor en esta caso el servidor 3000 
//app.use(cors({ origin: 'http://localhost:3000' })); 

app.use(express.json());

app.use(indexRoutes);
app.use(alumnosRoutes); 
app.use(cursosRoutes);
app.use(asignaturasRoutes); 
app.use(apoderadosRoutes);

app.listen(PORT)
console.log(`Server is running on port ${PORT}`);