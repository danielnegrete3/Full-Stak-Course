
const Header = (props) => {
  return (
    <h1 className="header">{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p className="part">{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = props.course.parts.reduce((acc, cur) => acc + cur.exercises, 0);
  return (
    <p className="total">Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App