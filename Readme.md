# 🗂️ Transformación de Objeto Plano a Estructura Anidada

Ejercicio de JavaScript que transforma un objeto plano de datos de usuario en una estructura organizada lista para enviar a una API, aplicando **desestructuración con renombramiento** y el **operador spread**.

---

## 📋 Descripción

A partir de un objeto plano `entradaUsuario`, se construye un nuevo objeto `usuarioFormateado` con datos agrupados por categorías: identidad, contacto, ubicación y estado.

---

## 🧠 Conceptos aplicados

| Concepto | Descripción |
|---|---|
| Desestructuración | Extrae propiedades del objeto en variables |
| Renombramiento | `email: correo`, `telefono: contacto` |
| Spread operator (`...`) | Integra variables en nuevos sub-objetos |
| Shorthand property | `activo` en vez de `activo: activo` |
| Objetos anidados | Agrupación por `identidad`, `contacto`, `ubicacion` |

---

## 💻 Código

```javascript
const entradaUsuario = {
  nombre: 'Ana',
  apellido: 'López',
  email: 'ana@email.com',
  telefono: '3001234567',
  ciudad: 'Bogotá',
  pais: 'Colombia',
  activo: true
};

const {
  nombre,
  apellido,
  email: correo,
  telefono: contacto,
  ciudad,
  pais,
  activo
} = entradaUsuario;

const usuarioFormateado = {
  identidad: { ...{ nombre, apellido } },
  contacto:  { ...{ correo, contacto } },
  ubicacion: { ...{ ciudad, pais } },
  activo
};

console.log(usuarioFormateado);
```

---

## ✅ Resultado esperado

```js
{
  identidad: { nombre: 'Ana', apellido: 'López' },
  contacto:  { correo: 'ana@email.com', contacto: '3001234567' },
  ubicacion: { ciudad: 'Bogotá', pais: 'Colombia' },
  activo: true
}
```

---

## 🖥️ Prueba en consola

<a href="https://ibb.co/S4Brc9qC"><img src="https://i.ibb.co/wF4s7xDm/Captura-de-pantalla-2026-03-23-082818.png" alt="Captura-de-pantalla-2026-03-23-082818" border="0"></a><br /><a target='_blank' href='https://es.imgbb.com/'>subir y compartir memes</a><br />

---

## 📁 Estructura del proyecto

```
📦 Reto_JavaScript
 ┣ 📁 js
  ┣ 📄 script.js
 ┣ 📄 index.html
 ┗ 📄 README.md
```
