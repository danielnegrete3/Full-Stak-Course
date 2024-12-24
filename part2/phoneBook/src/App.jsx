import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  }

  const handleFilter= (event) => {
    setFilter(event.target.value);
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
      phone: newPhone,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewPhone("");
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h2>Phonebook</h2>
        <p>Filter show with <input type="text" value={filter} onChange={handleFilter}/></p>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <input type="text" value={newName} onChange={handleNewName} placeholder='Write your name'/>
        <br />
        <input type="text" value={newPhone} onChange={handleNewPhone} placeholder='Write yur phone her' />
        <br />
        <button type='submit'>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => (
          <li key={person.id}>name: {person.name} phone: {person.phone}</li>
        ))}
      </ul>
    </>
  )
}

export default App
