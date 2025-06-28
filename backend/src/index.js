const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Modelo
const Tarea = mongoose.model('Tarea', {
  titulo: String,
  completada: Boolean,
});

// Endpoints
app.get('/api/tareas', async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});

app.post('/api/tareas', async (req, res) => {
  const nueva = new Tarea(req.body);
  await nueva.save();
  res.json(nueva);
});

app.delete('/api/tareas/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.put('/api/tareas/:id', async (req, res) => {
  const actualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizada);
});

// Conexión Mongo y arranque
mongoose.connect('mongodb://mongo:27017/tareas')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(4043, () => console.log('API escuchando en puerto 4043'));
  })
  .catch(err => console.error('Error de conexión MongoDB:', err));
