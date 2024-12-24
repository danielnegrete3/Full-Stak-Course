const Total = (props) => {
    let sum = props.course.parts.reduce((acc, cur) => acc + cur.exercises, 0);
    return (
      <p className="total">Number of exercises {sum}</p>
    )
}

export default Total;