import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:4042/api/tareas'

function App() {
  const [tareas, setTareas] = useState([])
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    axios.get(API).then(res => setTareas(res.data))
  }, [])

  const crearTarea = async () => {
    const res = await axios.post(API, { titulo, completada: false })
    setTareas([...tareas, res.data])
    setTitulo('')
  }

  const eliminarTarea = async (id) => {
    await axios.delete(`${API}/${id}`)
    setTareas(tareas.filter(t => t._id !== id))
  }

  const toggleCompletar = async (tarea) => {
    const res = await axios.put(`${API}/${tarea._id}`, {
      ...tarea,
      completada: !tarea.completada
    })
    setTareas(tareas.map(t => t._id === tarea._id ? res.data : t))
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>App de Tareas</h1>
      <input value={titulo} onChange={e => setTitulo(e.target.value)} />
      <button onClick={crearTarea}>Agregar</button>
      <ul>
        {tareas.map(t => (
          <li key={t._id}>
            <span style={{ textDecoration: t.completada ? 'line-through' : '' }} onClick={() => toggleCompletar(t)}>
              {t.titulo}
            </span>
            <button onClick={() => eliminarTarea(t._id)}></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
