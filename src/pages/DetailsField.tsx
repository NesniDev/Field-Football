import { fields } from '@/lib/fields'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Calendar } from '@/components/ui/calendar'
import { horarios } from '@/lib/horarios'

export const DetailsField = () => {
  const [date, setDate] = useState(
    new Date()
  )
  const [time, setTime] = useState('Seleccione una hora')
  const [reserve, setReserve] = useState(false)
  const { slug } = useParams()
    const [activeTab, setActiveTab] = useState('description')
  const info = fields.find(item => item.slug === slug)

  if(!info) return <p>Info no encontrada</p>

  return (
    <>
      <main className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 mt-5'>
        <section className='flex flex-col gap-2 w-full'>
          <img src={info.image} alt={info.title} className='h-[430px] w-full object-cover rounded-xl' />
          <div className='flex flex-col gap-1 my-5 font-orbitron'>
            <span className='whitespace-nowrap text-xl font-bold capitalize'>Cancha Sintética {info.title}</span>
            <span className='text-sm text-gray-500'>Chiquinquirá, {info.address}</span>
          </div>
          <div className='flex gap-2 font-orbitron'>
            <button onClick={() => setActiveTab('description')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition text-xs ${activeTab === 'description' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Descripción</button>
            <button onClick={() => setActiveTab('services')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition text-xs ${activeTab === 'services' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Servicios</button>
            <button onClick={() => setActiveTab('ubication')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition text-xs ${activeTab === 'ubication' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Ubicación</button>
          </div>
          <hr className='my-2 border-gray-300'/>
          <div className='text-gray-500'>
            {activeTab === 'description' && <div className='text-base '>
              <p className='text-sm'>{info.description}</p>
              <ol className='list-disc list-inside my-5 text-sm'>
                <li><span className='font-bold'>Tipo de césped:</span> {info.characteristics.grassType}</li>
                <li><span className='font-bold'>Dimensiones:</span> {info.characteristics.dimensions}</li>
                <li><span className='font-bold'>Iluminación:</span> {info.characteristics.lighting}</li>
                <li><span className='font-bold'>Disponibilidad:</span> {info.characteristics.availability}</li>
              </ol>
              </div>}
            {activeTab === 'services' && <ul className='list-disc list-inside text-sm'>{info.services.map((service, index) => <li key={index}>{service}</li>)}</ul>}
            {activeTab === 'ubication' && <iframe src={info.ubication} width="500" height="250" loading="lazy" className='w-full rounded-2xl'></iframe>}
          </div>
        </section>
        <aside className='flex flex-col gap-2 bg-white p-8 rounded-lg h-full'>
            <div className='flex flex-col gap-1 font-orbitron'>
                <span className='whitespace-nowrap text-xl font-bold capitalize'>Seleccionar fecha y hora</span>
                <span className='text-sm text-gray-500'>Precio por hora: ${info.price} COP</span>
            </div>
            <div>
              <Calendar
                required
                mode="single"
                selected={date}
                onSelect={setDate}
                className={`rounded-lg border [--cell-size:--spacing(9)] md:[--cell-size:--spacing(10)] my-5`}
                buttonVariant="ghost"
              />
            </div>
            <h2 className='font-orbitron text-xl  capitalize'>Horario Disponible</h2>
            {/* {
              date.setHours(0,0,0,0) < new Date().setHours(0,0,0,0)  ? 'Es muy antigua la fecha' : date.toLocaleDateString()
            } */}
            <div className='flex flex-wrap justify-between items-center gap-2'>
              {
                horarios.map((tiempo, index) => (
                  <button key={index} onClick={() => setTime(tiempo)} className={`px-4 py-2 rounded-lg transition ${time === tiempo
                  ? `bg-white text-gray-950 border-gray-600`
                  : `${reserve ? 'bg-gray-400/80 text-gray-400 pointer-events-none' : 'bg-gray-950 text-white border-transparent'}`}
                } text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border`}>{tiempo}</button>
                ))
              }
            </div>
            <div>
              <button className='block bg-amber-500 text-white border-transparent py-1.5 px-3 text-xs rounded-lg mx-auto cursor-pointer' onClick={() => {setTime('Seleccione una hora'); setReserve(false)}}>Reiniciar</button>
            </div>
            <hr className='my-4'/>
            <div>
              <div className='flex justify-between items-center'>
                <span className='font-bold text-xs'>Selección:</span>
                <span className='text-gray-600'>{time}</span>
              </div>
              <div className='flex justify-between items-center gap-5 font-orbitron'>
                <span className='font-bold text-lg'>Total:</span>
                <span className='text-green-400 text-lg font-bold'>${time === 'Seleccione una hora' ? 0 : info.price}</span>
              </div>
            </div>
            <div className={`${time === 'Seleccione una hora' && reserve ? 'flex justify-center items-center' : 'hidden'}`}>
              <span className='inline-flex items-center rounded-md bg-red-400/40 px-2 py-1 font-medium text-xs text-red-400 inset-ring inset-ring-red-500/50'>{time === 'Seleccione una hora' && reserve ? 'Seleccione una hora' : ``}</span>
            </div>
            <button className='w-full bg-green-600 text-white py-2 rounded-lg font-orbitron cursor-pointer' onClick={() => setReserve(true)}>Reservar</button>
        </aside>
      </main>
    </>
  )
}
