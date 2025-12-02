import { MdOutlineDateRange } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiFootballLine } from "react-icons/ri";


export const Reservations = () => {
    return (
        <section className="max-w-5xl mx-auto my-10">
            <h1 className="text-5xl font-bold mb-5">Mis Reservas</h1>
            <h3 className="text-2xl font-semibold">Historial de Reservas</h3>
            <section className="my-5">
                <article className="flex gap-5 p-5 bg-white rounded-lg">
                    <figure>
                        <img src="/images/cancha-1.avif" alt="Imagen de cancha" className="w-96 h-auto rounded-lg"/>
                    </figure>

                    <section className="w-full">
                        <header className="flex justify-between items-center ">
                            <h2 className="text-xl font-semibold">Cancha El Campeón</h2>
                            <span className="bg-blue-900/30 px-3 py-1 rounded-4xl text-sm text-blue-950 font-semibold flex gap-1 items-center"><span className="text-lg"><RiFootballLine/></span>Completada</span>
                        </header>
                        <hr className="border-gray-400/10 my-3"/>

                        <section className="flex justify-between items-center gap-5 flex-1">
                            <div className="flex gap-3 justify-start items-center">
                                <span className="text-2xl text-green-500">
                                    <MdOutlineDateRange/>
                                </span>
                                <span className="flex flex-col font-semibold justify-start"><strong className="text-sm font-medium text-gray-500/50">Fecha</strong> 18 de Octubre</span>
                            </div>
                            <div className="flex gap-3 justify-start items-center">
                                <span className="text-2xl text-green-500">
                                    <TbClockHour3/>
                                </span>
                                <span className="flex flex-col font-semibold justify-start"><strong className="text-sm font-medium text-gray-500/50">Hora</strong> 19:00</span>
                            </div>
                            <div className="flex gap-3 justify-start items-center">
                                <span className="text-2xl text-green-500">
                                    <RiMoneyDollarCircleLine/>
                                </span>
                                <span className="flex flex-col font-semibold justify-start"><strong className="text-sm font-medium text-gray-500/50">Costo:</strong> $60.000</span>
                            </div>
                        </section>

                        <footer className="flex justify-center">
                            <button className="bg-btn-dark px-3 py-2 rounded-lg font-semibold mt-10 cursor-pointer hover:bg-btn-dark/80 transition delay-75">Volver a Reservar</button>
                        </footer>
                    </section>
                </article>
            </section>
        </section>
    )
}