import { useContext } from "react"
import { NameContext } from "../context/InfoContext"

export const Receipt = () => {
    const context = useContext(NameContext)
    if(!context) return <p>Nombre no encontrado</p>
    const {name} = context
    return (
        <div>
            <h1 className="text-black">El nombre es: {name}</h1>
        </div>
    )
}