import { useState } from 'react';
import servicePersons from '../services/servicePersons';

const Person = ({ person }) => {
    const [editing, setEditing] = useState(false);
    const [nameEdit, setNameEdit] = useState(person.name);
    const [phoneEdit, setPhoneEdit] = useState(person.number);
    const {update} = servicePersons;

    const handleNameEdit = (event) => {
        setNameEdit(event.target.value);
    }

    const handlePhoneEdit = (event) => {
        setPhoneEdit(event.target.value);
    }

    const handleEdit = () => {
        if (editing) {
            // send changes
            if (nameEdit === "" || phoneEdit === "") {
                alert("Name and phone cannot be empty");
                return;
            }

            if (nameEdit === person.name && phoneEdit === person.number) {
                alert("No changes");
                setEditing(false);
                return;
            }
            
            update(person.id, {name:nameEdit, number:phoneEdit});
            setEditing(false);
        }else{
            setEditing(true);
        }
    }

    return (
        <li style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
            {
                editing? <>Name: <input type="text" value={nameEdit} onChange={handleNameEdit}/> Phone: <input type="text" value={phoneEdit} onChange={handlePhoneEdit}/></>
                :<>Name: {person.name} Phone: {person.number} </>

            }
            <button onClick={handleEdit}>{editing? "Sent Change":"Edit person"}</button>
        </li>
    )
}

export default Person;