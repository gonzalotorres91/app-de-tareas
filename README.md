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


📌 Notas técnicas
El backend expone una API RESTful en /api/tareas para operaciones CRUD (GET, POST, PUT, DELETE).

El frontend consume esta API y permite interacción completa con las tareas.

MongoDB corre en un contenedor y es accedido por el backend vía red interna de Docker Compose.

El código está listo para ser probado localmente o desplegado en un entorno cloud como AWS EC2.


Gracias por revisar este proyecto de App de Tareas.

Este repositorio demuestra habilidades en desarrollo fullstack con React y Node.js, integración con MongoDB, y despliegue con Docker y Docker Compose. Además, refleja buenas prácticas en gestión de código, documentación clara y uso de herramientas modernas para garantizar calidad y mantenibilidad.

Estoy abierto a feedback, colaboraciones y oportunidades laborales para seguir creciendo y aportar valor en proyectos DevOps y desarrollo de software.

¡No dudes en contactarme!

🔗 GitHub: https://github.com/gonzalotorres91
🔗 www.linkedin.com/in/gonzalotorres-devops




