import type { CoursePart } from "../App"

interface Props{
    part:CoursePart
}

export const CourseCountentPart = (props:Props) => {
    if(props.part.kind === 'basic') 
        return(<p>{props.part.name} {props.part.exerciseCount} <br/> {props.part.description}</p>)
    if(props.part.kind === 'group') 
        return(
                <p>
                    {props.part.name} {props.part.exerciseCount} 
                    <br/> 
                    Project exercises: {props.part.groupProjectCount}
                </p>
            )
    if(props.part.kind === 'background') 
        return(
                <p>
                    {props.part.name} {props.part.exerciseCount} 
                    <br/> 
                    {props.part.description}
                    <br/> 
                    Material: {props.part.backgroundMaterial}
                </p>
            )


    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(props.part)}`)
}