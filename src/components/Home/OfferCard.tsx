import React, { useState } from 'react'

export const OfferCard = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className="relative overflow-hidden rounded-4xl mb-10">
      <div className="absolute inset-0 bg-gray-500/5"></div>
      <div className="absolute top-0 left-0 size-72 bg-lime-400/50 rounded-full blur-[120px]"></div>
      <div className="relative z-10 flex flex-col justify-center px-10 py-20">
        <h2 className="text-6xl uppercase font-extrabold text-center italic text-black">
          Sé el primero en <span className="text-btn-dark">enterarte</span>
        </h2>

        <p className="text-sm text-black/40 my-5 mx-auto text-center max-w-xl">
          Recibe ofertas exclusivas, invitaciones a torneos y noticias del mundo
          del fútbol sintético
        </p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex justify-center gap-7"
        >
          <input
            type="text"
            placeholder="Tu correo electrónico"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-96 px-6 py-3 bg-black/5 border border-black/10 rounded-full placeholder:text-black/40 text-black focus:outline-none focus:ring-1 focus:ring-lime-400/40"
          />

          <button
            className="bg-btn-dark px-6 py-3 rounded-full uppercase font-bold text-xs hover:brightness-110 transition duration-300 cursor-pointer"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </div>
  )
}
