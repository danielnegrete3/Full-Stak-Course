import { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, []);
  

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
      number: newPhone,
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
        <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
        <Form onSubmit={addPerson} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone} />
      <h3>phones</h3>
        <Persons persons={personsToShow} />
    </>
  )
}

export default App
