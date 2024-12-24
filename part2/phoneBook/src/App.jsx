import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import servicePersons from './services/servicePersons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("");
  const {getAll, create, update,deletePerson} = servicePersons;

  useEffect(() => {
    getAll().then(initialPersons => {
      setPersons(initialPersons);
    }).catch(error => {
      alert(`Fail to fetch data: ${error}`);
    });
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

    const alreadyExist = persons.find(person => person.name === newName);
    console.log(alreadyExist);

    if (alreadyExist) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirmUpdate) {
        const updatedPerson = { ...alreadyExist, number: newPhone };
        update(alreadyExist.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== alreadyExist.id ? person : returnedPerson));
        })
        .catch(error => {
          alert(`Fail to update: ${error}`);
        });
      }
    }else{
      const personObject = {
        name: newName,
        number: newPhone,
      };
  
      create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
      }).catch(error => {
        alert(`Fail to add : ${error}`);
      });
    }

    setNewName("");
    setNewPhone("");
  }

  const handleDeletePerson = (id) => {
    const confirmDelete = window.confirm(`Delete ${persons.find(person => person.id === id).name}`);
    if (confirmDelete) {
      deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        alert(`Fail to delete: ${error}`);
      });
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
        <Form onSubmit={addPerson} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone} />
      <h3>phones</h3>
        <Persons persons={personsToShow} deletePerson={handleDeletePerson} />
    </>
  )
}

export default App;
