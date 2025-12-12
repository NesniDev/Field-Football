import { IoMdCloseCircle   } from "react-icons/io";
import { useContext } from "react"
import { NameContext } from "../context/InfoContext"
import { NavLink } from "react-router-dom";

export const Receipt = () => {
    const context = useContext(NameContext)
    if(!context) return <p>Nombre no encontrado</p>
    const {name} = context
    return (
        <section className="grid place-items-center max-w-3xl mt-3 mx-auto bg-white p-8 rounded-lg">
            <IoMdCloseCircle className="text-7xl text-green-500 bg-green-200 rounded-full p-1 mx-auto"/>
            <h1 className="text-black text-center font-extrabold text-4xl mt-5">Tu cancha está reservada!</h1>
            <span className="text-sm font-light text-gray-500 flex items-center justify-center gap-2 my-2 mb-7 mx-auto">Hemos enviado un correo de confirmación a <span className="font-bold text-black">tu.email@ejemplo.com</span> cospandos los detalles. </span>
            <div className="flex flex-col gap-2 bg-gray-100 px-10 py-5 rounded-lg max-w-lg mx-auto">
                <span className=" flex flex-col font-normal">Código de Reserva: <span className="font-bold">#123456</span></span>
                <hr />
                <div className="">
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>Cancha Sintética {name}</span></span>
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>Lunes, 25 de diciembre de 2025</span></span>
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>Av. siempre Viva.</span></span>
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>12:00 pm</span></span>
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>1 hora</span></span>
                    <span className="flex items-center gap-2"><IoMdCloseCircle/> <span>$10.000</span></span>
                </div>
            </div>
            <span className="text-sm font-light flex flex-col items-center justify-center my-7 mx-auto bg-green-100 p-4 rounded-lg text-btn-dark">Recibirás un recordatorio automáticos una hora antes de tu reserva. <span>Prepárate para jugar!</span></span>
            <NavLink to='/reservations'>
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-bold font-orbitron cursor-pointer">Ver mis reservas</button>
            </NavLink>
        </section>
    )
}