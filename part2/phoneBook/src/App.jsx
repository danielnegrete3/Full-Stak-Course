import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject));
    setNewName("");
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input type="text" value={newName} onChange={handleNewName} placeholder='Write your name'/>
        <button type='submit'>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
