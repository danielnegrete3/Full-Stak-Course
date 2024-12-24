import Person from "./Person";

const Persons = ({persons, deletePerson}) => {
    return(
        <ul>
            {persons.map(person => (
                <Person key={person.id} deletePerson={deletePerson} person={person}/>
            ))}
        </ul>
    )
}

export default Persons;