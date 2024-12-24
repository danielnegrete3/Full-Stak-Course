
const Filter = ({ filter, handleFilter }) => {
    return (
        <p>Filter show with <input type="text" value={filter} onChange={handleFilter}/></p>
    );
}

export default Filter;