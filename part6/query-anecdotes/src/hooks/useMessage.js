import { useContext } from "react"
import { MessageContext } from "../context/MessageContext"

const useMessage = () => {
    const contextData = useContext(MessageContext)

    if(contextData === null)
    {
        console.error("Can't use MessageContext in this part")
    }

    return contextData

}

export default useMessage