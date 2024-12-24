import Content from "./Content";
import Header from "./Header";

const Course = ({course}) => {

    return(
        <div key={`course-${course.id}`}>
            < Header >{course.name}</Header>
            <Content parts={course.parts} />
        </div>
    )
}

export default Course;