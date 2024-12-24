
const Persons = ({persons}) => {

    return(
        <ul>
            {persons.map(person => (
                <li key={person.id}>name: {person.name} phone: {person.phone}</li>
            ))}
        </ul>
    )
}

export default Persons;