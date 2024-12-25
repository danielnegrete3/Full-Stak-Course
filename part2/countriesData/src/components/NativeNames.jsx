

const NativeNames = ({ nativeNames }) => {
    return (
        <div>
        <h2>Native Names</h2>
        <ul>
            {nativeNames.map(([key, value]) => <li key={key}>{key} : {value.official} ({value.common})</li>)}
        </ul>
        </div>
    );
};

export default NativeNames;
