
# 🗂️ Proyecto Node.js + MongoDB

Este proyecto utiliza **Express** y **MongoDB** para construir un backend moderno y modular.  
Incluye conexión a base de datos, enrutamiento y soporte para variables de entorno.

---

## 🚀 Requisitos previos

- [Node.js](https://nodejs.org) instalado
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o MongoDB local
- [Git](https://git-scm.com/)

---

## 🛠️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/kattrr/back-dia-28-reto-30-dias-de-front.git
cd proyecto-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env`

En la raíz del proyecto, crea un archivo llamado `.env` con las siguientes variables:

```env
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<base_de_datos>?retryWrites=true&w=majority
PORT= ' '
```

> 🔐 **Importante:** No compartas tu `.env` ni subas credenciales a repositorios públicos.

---

## 📦 Ejecutar el servidor en desarrollo

```bash
nodemon ./index.js  
```

> Usa `nodemon` para recargar automáticamente los cambios. Asegurate de tenerlo instalado globalmente o como dependencia.

---

## 🌐 Variables de entorno

| Variable     | Descripción                                  |
|--------------|----------------------------------------------|
| `MONGO_URI`  | URL de conexión a tu base de datos MongoDB   |
| `PORT`       | Puerto donde se ejecutará el servidor local  |

---

## 📬 Contacto

Desarrollado por **Kathering Rivera**.  

