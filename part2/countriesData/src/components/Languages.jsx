
const Languages = ({ languages }) => {
    return (
        <div>
        <h3>Languages</h3>
        <ul>
            {languages.map(([prefix,language]) => (
            <aside key={`language-${prefix}`}>
                <li>{prefix}: {language}</li>
            </aside>
            ))}
        </ul>
        </div>
    );
}

export default Languages;