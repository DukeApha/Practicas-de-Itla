import React, { useState } from "react";

function AddContact({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono) {
      alert("Por favor completa todos los campos");
      return;
    }
    const nuevoContacto = { nombre, apellido, telefono };
    onAdd(nuevoContacto);
    setNombre("");
    setApellido("");
    setTelefono("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Agregar contacto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddContact;
