import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import  mainRouter  from  "../src/routes/main.routes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// Rutas
app.use(mainRouter); // Uso correcto del Router

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});