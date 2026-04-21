
interface Props{
    error:string|null
}

export const ErrorMassage = ({error}:Props) => {
    if(!error)return<></>
    return <span style={{ color: '#aa0000' }}>{error}</span>
}