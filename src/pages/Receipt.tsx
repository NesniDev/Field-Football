import { GiSoccerBall, GiTimeBomb } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaRegCircleCheck  } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbCoinFilled } from "react-icons/tb";


import { useContext } from "react"
import { NameContext } from "../context/InfoContext"
import { NavLink } from "react-router-dom";

export const Receipt = () => {
    const context = useContext(NameContext)
    if(!context) return <p>Nombre no encontrado</p>
    const {name, address, hour, dateSelection, price} = context

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    return (
        <section className="grid place-items-center max-w-3xl my-3 mx-auto bg-white px-8 py-3 rounded-lg">
            <FaRegCircleCheck  className="text-7xl text-green-500 bg-green-200 rounded-full p-2 mx-auto"/>
            <h1 className="text-black text-center font-extrabold text-4xl mt-5">Tu cancha está reservada!</h1>
            <span className="text-sm font-light text-gray-500 flex items-center justify-center gap-2 my-2 mb-7 mx-auto">Hemos enviado un correo de confirmación a <span className="font-bold text-black">tu.email@ejemplo.com</span> con todos los detalles. </span>
            <div className="flex flex-col gap-2 bg-gray-100 px-10 py-5 rounded-lg max-w-lg mx-auto">
                <span className=" flex flex-col font-normal text-gray-400/90">Código de Reserva: <span className="font-bold text-black">#123456</span></span>
                <hr />
                <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2"><GiSoccerBall className="text-btn-dark text-xl"/> <span>Cancha Sintética {name }</span></span>
                    <span className="flex items-center gap-2"><FaRegCalendarAlt className="text-btn-dark text-xl"/> {dateSelection ? <span>{dateSelection.toLocaleDateString().split('/')[0]} de {months[dateSelection.getMonth()]} de {dateSelection.toLocaleDateString().split('/')[2]}</span> : <span>Seleccione una fecha</span>}</span>
                    <span className="flex items-center gap-2"><FaLocationDot className="text-btn-dark text-xl"/> <span>{address || 'Seleccione una fecha'}</span></span>
                    <span className="flex items-center gap-2"><MdAccessTimeFilled className="text-btn-dark text-xl"/> <span>{hour || 'Seleccione una hora'}</span></span>
                    <span className="flex items-center gap-2"><GiTimeBomb className="text-btn-dark text-xl"/> <span>Tiempo de 1 hora</span></span>
                    <span className="flex items-center gap-2"><TbCoinFilled className="text-btn-dark text-xl"/> <span>{price ? `$${price}` : 'Precio no encontrado'}</span></span>
                </div>
            </div>
            <span className="text-sm font-light flex flex-col items-center justify-center my-7 mx-auto bg-green-100 p-4 rounded-lg text-btn-dark">Recibirás un recordatorio automáticos una hora antes de tu reserva. <span>Prepárate para jugar!</span></span>
            <NavLink to='/reservations'>
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-bold font-orbitron cursor-pointer">Ver mis reservas</button>
            </NavLink>
        </section>
    )
}