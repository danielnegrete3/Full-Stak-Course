import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div className="content">
            {parts.map(({id,name,exercises}) => <Part key={id} name={name} exercises={exercises} />)}
        </div>
    )
}

export default Content;