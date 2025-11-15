import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  // Cargar contactos al iniciar
  useEffect(() => {
    fetch("http://www.raydelto.org/agenda.php")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error al cargar contactos:", err));
  }, []);

  // Agregar nuevo contacto
  const addNewContact = async (contact) => {
    await fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    // Actualizar lista
    setContacts([...contacts, contact]);
  };

  return (
    <div className="container">
      <h1>📒 Agenda React</h1>
      <AddContact onAdd={addNewContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
