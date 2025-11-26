import { fields } from '@/lib/fields'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Calendar } from '@/components/ui/calendar'

export const DetailsField = () => {
  const [date, setDate] = useState(
    new Date(2025, 5, 12)
  )
  const { slug } = useParams()
    const [activeTab, setActiveTab] = useState('description')
  const info = fields.find(item => item.slug === slug)

  if(!info) return <p>Info no encontrada</p>
  
  return (
    <>
      <main className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 mt-5'>
        <section className='flex flex-col gap-2 w-full'>
          <img src={info.image} alt={info.title} className='h-[430px] w-full object-cover rounded-xl' />
          <div className='flex flex-col gap-1 my-5'>
            <span className='whitespace-nowrap text-xl font-bold capitalize'>Cancha Sintética {info.title}</span>
            <span className='text-sm text-gray-500'>Chiquinquirá, {info.address}</span>
          </div>
          <div className='flex gap-2'>
            <button onClick={() => setActiveTab('description')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition ${activeTab === 'description' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Descripción</button>
            <button onClick={() => setActiveTab('services')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition ${activeTab === 'services' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Servicios</button>
            <button onClick={() => setActiveTab('ubication')} className={`cursor-pointer px-3 py-1.5 rounded-lg transition ${activeTab === 'ubication' ? 'bg-green-600 text-green-300' : 'bg-gray-950 text-white'}`}>Ubicación</button>
          </div>
          <hr className='my-2 border-gray-300'/>
          <div>
            {activeTab === 'description' && <div className='text-base text-gray-500'>
              <p>{info.description}</p>
              <ol className='list-disc list-inside my-5'>
                <li><span className='font-bold'>Tipo de césped:</span> {info.characteristics.grassType}</li>
                <li><span className='font-bold'>Dimensiones:</span> {info.characteristics.dimensions}</li>
                <li><span className='font-bold'>Iluminación:</span> {info.characteristics.lighting}</li>
                <li><span className='font-bold'>Disponibilidad:</span> {info.characteristics.availability}</li>
              </ol>
              </div>}
            {activeTab === 'services' && <ul className='list-disc list-inside'>{info.services.map((service, index) => <li key={index}>{service}</li>)}</ul>}
            {activeTab === 'ubication' && <iframe src={info.ubication} width="600" height="450" loading="lazy" className='w-full rounded-2xl'></iframe>}
          </div>
        </section>
        <aside className='flex flex-col gap-2 bg-white p-8 rounded-lg h-full'>
            <div className='flex flex-col gap-1'>
                <span className='whitespace-nowrap text-xl font-bold capitalize'>Seleccionar fecha y hora</span>
                <span className='text-sm text-gray-500'>Precio por hora: ${info.price} COP</span>
            </div>
            <div>
              <Calendar
                required
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border [--cell-size:--spacing(9)] md:[--cell-size:--spacing(10)] my-5"
                buttonVariant="ghost"
              />
            </div>
            <h2>Horario Disponible</h2>
            <div className='flex flex-wrap justify-between items-center gap-2'>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>15:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>16:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>17:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>18:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>19:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>20:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>21:00</button>
              <button className='px-4 py-2 rounded-lg transition bg-gray-950 text-white text-xs cursor-pointer active:bg-transparent active:text-gray-950 active:border-gray-600 border'>22:00</button>
            </div>
            <hr className='my-4'/>
            <div>
              <div className='flex justify-between items-center'>
                <span className='font-bold text-xs'>Selección:</span>
                <span className='text-gray-600'>{date.toLocaleDateString()}</span>
              </div>
              <div className='flex justify-between items-center gap-5'>
                <span className='font-bold text-lg'>Total:</span>
                <span className='text-green-400 text-lg'>${info.price}</span>
              </div>
            </div>
            <button className='w-full bg-green-600 text-white py-2 rounded-lg mt-5'>Reservar</button>
        </aside>
      </main>
    </>
  )
}
