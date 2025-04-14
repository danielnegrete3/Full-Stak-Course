import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const changeFilter = (e) => {
        dispatch(setFilter({filter: e.target.value}))
    }

    return(
        <section style={{marginBottom: "10px"}}>
            filter <input type="text" onChange={changeFilter}/>
        </section>
    )
}

export default Filter