import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js"; 
import alumnosRoutes from "./routes/alumnos.routes.js"; 

const app = express();

//Funcion de express llamada json
//procesa los datos del cliente 
app.use(express.json());

app.use(indexRoutes);
app.use(alumnosRoutes); 

app.listen(PORT)
console.log(`Server is running on port ${PORT}`);