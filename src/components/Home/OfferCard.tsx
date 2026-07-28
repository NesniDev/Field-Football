import React, { useState } from 'react'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'

export const OfferCard = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Simular envío — reemplazar con llamada real a API
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="relative mb-10 mx-5 md:mx-0 overflow-hidden rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      {/* Goal net mesh — diamond pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 47%, rgba(19,237,91,0.07) 47%, rgba(19,237,91,0.07) 53%, transparent 53%),
          linear-gradient(-45deg, transparent 47%, rgba(19,237,91,0.07) 47%, rgba(19,237,91,0.07) 53%, transparent 53%)
        `,
        backgroundSize: '24px 24px'
      }} />

      {/* Net sag — curved mesh distortion */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(ellipse 120% 60% at 50% 100%, transparent 60%, rgba(19,237,91,0.03) 60%, rgba(19,237,91,0.03) 62%, transparent 62%)
        `
      }} />

      {/* Corner reinforcements — like the sewn patches where net meets post */}
      <div className="absolute top-0 left-0 size-20 bg-gradient-to-br from-btn-dark/[0.04] to-transparent" />
      <div className="absolute top-0 right-0 size-20 bg-gradient-to-bl from-btn-dark/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 size-20 bg-gradient-to-tr from-btn-dark/[0.04] to-transparent" />
      <div className="absolute bottom-0 right-0 size-20 bg-gradient-to-tl from-btn-dark/[0.04] to-transparent" />

      {/* Post shadows — left and right */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-r from-emerald-900/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-l from-emerald-900/10 to-transparent" />

      {/* Crossbar shadow — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-emerald-900/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row">
        {/* Main area */}
        <div className="flex-1 px-6 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10">
          {/* Badge — like a club crest on the jersey */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="size-8 rounded-full bg-btn-dark flex items-center justify-center">
              <span className="text-[0.5rem] font-black text-black font-orbitron">RC</span>
            </div>
            <span className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-emerald-800/40">
              ReservaCancha
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black font-orbitron leading-[1.05] tracking-tight text-gray-900">
            Sé el primero en{' '}
            <span className="text-emerald-700">enterarte</span>
          </h2>

          <p className="text-[0.8125rem] text-gray-400 mt-3 mb-6 max-w-sm leading-relaxed">
            Recibe ofertas exclusivas, invitaciones a torneos y noticias del mundo
            del fútbol sintético
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
              <CheckCircle className="size-4 shrink-0" />
              <p className="text-[0.8125rem] font-medium">¡Gracias! Próximamente te enviaremos novedades.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col sm:flex-row gap-2.5"
              aria-label="Suscripción al newsletter"
            >
              <div className="relative flex-1 group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-300 group-focus-within:text-emerald-600 transition-colors" aria-hidden="true" />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                  disabled={status === 'submitting'}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'email-error' : undefined}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[0.8125rem] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all disabled:opacity-50"
                />
              </div>

              {status === 'error' && (
                <p id="email-error" className="text-[0.75rem] text-red-500 sm:absolute sm:-bottom-5 sm:left-0">
                  Ingresá un correo electrónico válido.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="whitespace-nowrap bg-emerald-700 px-7 py-3 rounded-lg text-[0.6875rem] font-bold uppercase tracking-widest text-white hover:bg-emerald-600 hover:shadow-[0_4px_16px_rgba(5,150,105,0.3)] active:scale-[0.97] transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-700 disabled:hover:shadow-none disabled:active:scale-100"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-3 animate-spin" />
                    Enviando
                  </span>
                ) : (
                  'Suscribirme'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Side panel — net depth illusion */}
        <div className="hidden sm:flex flex-col items-center justify-center w-[100px] shrink-0 border-l border-gray-100 bg-gray-50/50">
          {/* Ball caught in the net */}
          <div className="relative size-14 mb-3">
            <div className="absolute inset-0 rounded-full bg-gray-100 border border-gray-200" />
            <div className="absolute inset-1 rounded-full bg-white border border-gray-200 shadow-inner" />
            {/* Pentagon pattern hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-gray-800 rounded-sm rotate-45" />
          </div>

          <div className="text-center">
            <p className="text-[0.5rem] uppercase tracking-[0.15em] text-gray-400">Gol</p>
            <p className="text-lg font-black font-orbitron text-emerald-700">1:0</p>
          </div>
        </div>
      </div>
    </section>
  )
}
