
const Form = ({onSubmit, newName,handleNewName,newPhone,handleNewPhone}) =>{

    return(
        <form onSubmit={onSubmit}>
            <input type="text" value={newName} onChange={handleNewName} placeholder='Write your name'/>
            <br />
            <input type="text" value={newPhone} onChange={handleNewPhone} placeholder='Write yur phone her' />
            <br />
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form;