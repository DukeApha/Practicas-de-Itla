import React from "react";

function ContactList({ contacts }) {
  return (
    <div className="lista">
      <h2>Contactos guardados</h2>
      {contacts.length === 0 ? (
        <p>No hay contactos aún</p>
      ) : (
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>
              <strong>{c.nombre} {c.apellido}</strong> — {c.telefono}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
