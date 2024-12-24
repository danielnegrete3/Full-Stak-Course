import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "" || newPhone === "") {
      alert("Name and phone cannot be empty");
      return;
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      phone: newPhone
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewPhone("");
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input type="text" value={newName} onChange={handleNewName} placeholder='Write your name'/>
        <br />
        <input type="text" value={newPhone} onChange={handleNewPhone} placeholder='Write yur phone her' />
        <br />
        <button type='submit'>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>name: {person.name} phone: {person.phone}</li>
        ))}
      </ul>
    </>
  )
}

export default App
