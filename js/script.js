const entradaUsuario = {
    nombre: 'Ana',
    apellido: 'Lopez',
    email: 'ana@email.com',
    telefono: '3001234567',
    ciudad: 'Bogota',
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

const usuarioFormateado ={
    identidad: {...{nombre, apellido}},
    contacto: {...{correo, contacto}},
    ubicacion: {...{ciudad, pais}},
    activo
};

console.log(usuarioFormateado);