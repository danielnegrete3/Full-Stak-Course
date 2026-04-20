
interface Props{
    total:number
}

export const CourseTotalExercises = (props:Props) => {
    return(
        <p>
            Number of exercises {props.total}
        </p>
    )
}