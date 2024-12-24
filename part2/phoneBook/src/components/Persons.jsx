
const Persons = ({persons}) => {

    return(
        <ul>
            {persons.map(person => (
                <li key={person.id}>name: {person.name} phone: {person.number}</li>
            ))}
        </ul>
    )
}

export default Persons;