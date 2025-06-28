# 📋 App de Tareas - Proyecto Fullstack Dockerizado

Este proyecto es una aplicación fullstack simple de gestión de tareas (**TODO List**), desarrollada con **React** (frontend), **Node.js + Express** (backend) y **MongoDB** como base de datos. Toda la app está contenedorizada con **Docker** y orquestada con **Docker Compose**, ideal para demostrar habilidades DevOps.

---

## 🚀 Tecnologías utilizadas

- **Frontend:** React + Axios + Vite
- **Backend:** Node.js + Express + Mongoose
- **Base de datos:** MongoDB
- **Contenedores:** Docker & Docker Compose
- **Infraestructura:** AWS EC2 (para pruebas y despliegue)

---

## 📂 Estructura del proyecto

.
├── backend/ # API REST en Node.js
├── frontend/ # Aplicación React
├── docker-compose.yaml
└── README.md


## ✅ Funcionalidades principales

- Crear tareas
- Listar tareas
- Marcar tareas como completadas
- Eliminar tareas
- Persistencia de datos en MongoDB

---

## 🐳 Levantar la app con Docker Compose

### Requisitos

- Docker instalado
- Docker Compose instalado
- Conexión a internet (para bajar imágenes)

### Instrucciones

1. Clonar el repositorio:

```bash
git clone https://github.com/gonzalotorres91/app-de-tareas.git
cd app-de-tareas

Construir los contenedores:
docker-compose build

Levantar la aplicación:
docker-compose up -d
Acceder desde el navegador:

🖥️ Frontend: http://<IP>:4042

🔧 Backend API: http://<IP>:4043/api/tareas

🖥️ Capturas
✅ App funcionando (Frontend)

✅ API Backend respondiendo


📌 Notas técnicas
El backend expone una API RESTful en /api/tareas para operaciones CRUD (GET, POST, PUT, DELETE).

El frontend consume esta API y permite interacción completa con las tareas.

MongoDB corre en un contenedor y es accedido por el backend vía red interna de Docker Compose.

El código está listo para ser probado localmente o desplegado en un entorno cloud como AWS EC2.

👨‍💻 Sobre mí
Este proyecto fue desarrollado como parte de mi formación como DevOps Engineer, combinando desarrollo fullstack, Docker, despliegue y buenas prácticas de documentación técnica.

🔗 GitHub: @gonzalotorres91

📎 Este repositorio busca demostrar mi capacidad para integrar múltiples tecnologías y preparar entornos reproducibles mediante Docker.
