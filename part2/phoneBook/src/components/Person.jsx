
const Person = ({ person, deletePerson }) => {
    return (
        <li style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
            Name: {person.name} Phone: {person.number}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
        </li>
    )
}

export default Person;