import { experience } from "../lib/experience"

export const Experience = () => {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center gap-y-4 my-20">
            <h2 className="text-4xl font-bold capitalize text-center">¿Por Qué Reservar con Nosotros?</h2>
            <p className="text-center text-gray-600/70">Te ofrecemos la mejor experiencia para que solo te preocupes por jugar.</p>
            <div className="flex justify-center gap-4 items-center flex-wrap mt-6">
                    {experience.map((item, index) => (
                        <div key={index} className="flex flex-col border border-gray-400/30 justify-between gap-4 items-center bg-white rounded-xl py-4 px-6">
                            <span className="text-4xl text-btn-dark">
                                {item.icon}
                            </span>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="text-center text-gray-800/50 text-sm max-w-[335px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}