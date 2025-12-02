import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail  } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";



export const Contact = () => {

    return (
        <section className="flex flex-col max-w-5xl mx-auto my-14 flex-1">
            <h1 className="text-5xl font-bold ">Contáctanos</h1>
            <p className="text-gray-500 mb-10">Estamos aquí para ayudarte. Completa el formulario o utiliza uno de nuestros canales de contacto.</p>
            <section className="flex justify-between gap-12">
                <form action="" className="bg-white p-10 flex-1 rounded-lg">
                    <h2 className="text-3xl font-bold">Envíanos un mensaje</h2>
                    <div className="flex justify-between gap-4 items-center mt-7 mb-7 w-full">
                        <label htmlFor="nombre" className="flex flex-col gap-2 justify-between w-full">
                            Nombre
                            <input type="text" id="nombre" name="nombre" className="px-3 py-2 border rounded-lg" placeholder="Su nombre completo"/>
                        </label>
                        <label htmlFor="email" className="flex flex-col gap-2 justify-between w-full">
                            Email
                            <input type="email" id="email" name="correo" className="px-3 py-2 border rounded-lg" placeholder="su.email@ejemplo.com"/>
                        </label>
                    </div>
                    <label htmlFor="asunto" className="flex flex-col gap-2 justify-between mb-7">
                        Asunto
                        <input type="email" id="asunto" name="asunto" className="px-3 py-2 border rounded-lg" placeholder="Título sobre el que quiere hablar"/>
                    </label>
                    <label htmlFor="mensaje" className="flex flex-col gap-2 justify-between mb-3">
                        Mensaje
                        <textarea name="mensaje" id="mensaje" className="px-3 py-2 border rounded-lg h-40" placeholder="Escriba su mensaje aquí..." ></textarea>
                    </label>
                    <button className="bg-btn-dark px-3 py-2 rounded-lg w-full">Enviar Mensaje</button>
                </form>
                <aside className="">
                    <h2 className="text-2xl">Otras formas de contacto</h2>
                    <section className="text-sm flex flex-col justify-between items-start gap-2 my-5">
                        <div className="flex justify-start items-center gap-3">
                            <span className="bg-green-300/20 p-3 rounded-lg text-btn-dark text-lg">
                                <FaPhoneAlt/>
                            </span>
                            <address className="not-italic flex flex-col justify-between items-start">Teléfono: <a href="/" className="text-gray-500/80">+57 300 123 4567</a></address>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <span className="bg-green-300/20 p-3 rounded-lg text-btn-dark text-xl">
                                <MdEmail />
                            </span>
                            <address className="not-italic flex flex-col justify-between items-start">Email: <a href="/" className="text-gray-500/80">soporte@reservacancha.com</a></address>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <span className="bg-green-300/20 p-3 rounded-lg text-btn-dark text-lg">
                                <FaLocationDot/>
                            </span>
                            <address className="not-italic flex flex-col justify-between items-start">Oficina: <a href="/" className="text-gray-500/80">Cra 10 #20-30, Chiquinquirá, Boyacá</a></address>
                        </div>
                    </section>
                    <div>
                        <h2>Síguenos</h2>
                        <nav className="flex gap-3 items-center justify-start mt-3">
                            <a href="/" className="text-2xl bg-blue-950 text-white rounded-full p-2 hover:bg-blue-950/80 transition delay-75 ease-in-out">
                                <FaFacebookF />
                            </a>
                            <a href="/" className="text-2xl bg-blue-950 text-white rounded-full p-2 hover:bg-blue-950/80 transition delay-75 ease-in-out">
                                <FaInstagram  />
                            </a>
                            <a href="/" className="text-2xl bg-blue-950 text-white rounded-full p-2 hover:bg-blue-950/80 transition delay-75 ease-in-out">
                                <FaWhatsapp  />
                            </a>
                        </nav>
                    </div>
                </aside>
            </section>
        </section>
    )
}