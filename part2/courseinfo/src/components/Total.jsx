const Total = ({parts}) => {
    let sum = parts.reduce((acc, cur) => acc + cur.exercises, 0);
    return (
      <p className="total"><strong>Total of {sum} exercises</strong></p>
    )
}

export default Total;