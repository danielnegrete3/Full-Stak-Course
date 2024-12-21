
const Header = (props) => {
  return (
    <h1 className="header">{props.course}</h1>
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
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = props.exercises.reduce((acc, cur) => acc + cur.exercises, 0);
  return (
    <p className="total">Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={[part1,part2,part3]}/>
    </div>
  )
}

export default App