import type { CoursePart } from "../App"
import { CourseCountentPart } from "./CourseContentPart"

interface Props{
    courseParts:CoursePart[]
}

export const CourseCountent = (props:Props) => {
    return(
        <>
            {
                props.courseParts.map((part:CoursePart)=>(
                    <CourseCountentPart part={part}/>
                ))
            }
        </>
    )
}