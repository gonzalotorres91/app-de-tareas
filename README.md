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
https://private-user-images.githubusercontent.com/185436611/460263970-5eb64715-34e3-4dad-9b4a-496212fd53aa.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTExNTUwNzIsIm5iZiI6MTc1MTE1NDc3MiwicGF0aCI6Ii8xODU0MzY2MTEvNDYwMjYzOTcwLTVlYjY0NzE1LTM0ZTMtNGRhZC05YjRhLTQ5NjIxMmZkNTNhYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyOFQyMzUyNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZTc3NzFhNGVjZDEyMzc4NmIzZjUxMDkzZmJlNjFlN2UzMDc0ZTk2NWUzMmQ4NTVhNTA4OTMyODRjMWM2OTU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SBn9wwl8NeeHuh6-H18kCQbr4VLYJ2VsHG793MXQM78

✅ API Backend respondiendo
https://private-user-images.githubusercontent.com/185436611/460264022-08ee9fc6-190c-40f4-9604-def54f4e5c31.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTExNTUxMjMsIm5iZiI6MTc1MTE1NDgyMywicGF0aCI6Ii8xODU0MzY2MTEvNDYwMjY0MDIyLTA4ZWU5ZmM2LTE5MGMtNDBmNC05NjA0LWRlZjU0ZjRlNWMzMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyOFQyMzUzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNTM2YWI2ZDE2NWYwZTFjZDkwMWIwYzM2NDM3YjFlMWIxNTAyNDNiMTY5ZDQ3M2MyYmIyMmViYTMwYzIwM2VjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rZHFc232vRt9vNP89bSuuIOtU9sgXC2FPd8vQZvyjkM


📌 Notas técnicas
El backend expone una API RESTful en /api/tareas para operaciones CRUD (GET, POST, PUT, DELETE).

El frontend consume esta API y permite interacción completa con las tareas.

MongoDB corre en un contenedor y es accedido por el backend vía red interna de Docker Compose.

El código está listo para ser probado localmente o desplegado en un entorno cloud como AWS EC2.

👨‍💻 Sobre mí
Este proyecto fue desarrollado como parte de mi formación como DevOps Engineer, combinando desarrollo fullstack, Docker, despliegue y buenas prácticas de documentación técnica.

🔗 GitHub: @gonzalotorres91

📎 Este repositorio busca demostrar mi capacidad para integrar múltiples tecnologías y preparar entornos reproducibles mediante Docker.
