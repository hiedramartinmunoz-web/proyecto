import express from 'express';

const router = express.Router();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("API del proyecto RPG funcionando");
});

app.listen(PORT,()=>{
    console.log('Servidor corriendo en puerto ' + PORT);
});