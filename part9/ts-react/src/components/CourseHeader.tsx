
interface Props{
    name:string
}

export const CourseHeader = (props:Props) => {
    return(
        <h1>{props.name}</h1>
    )
}