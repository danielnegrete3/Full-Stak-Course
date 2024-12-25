

const Currencies = ({ currencies }) => {
    return (
        <div>
        <h2>Currencies</h2>
        <ul>
            {currencies.map(([prefix,{name, symbol}]) => (
                <aside key={prefix}>
                    <li > {prefix}</li>
                    <ul>
                        <li >Name: {name}</li>
                        <li >Symbol: {symbol}</li>
                    </ul>
                </aside>
            ))}
        </ul>
        </div>
    );
};

export default Currencies;