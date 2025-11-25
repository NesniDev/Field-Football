import { fields } from '@lib/fields'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetailsField = () => {
  const { slug } = useParams()
    const [activeTab, setActiveTab] = useState('description')
  const info = fields.find(item => item.slug === slug)

  if(!info) return <p>Info no encontrada</p>
  
  return (
    <>
      <main className='container mx-auto flex flex-col md:flex-row justify-between gap-10 mt-10'>
        <section className='flex-1 flex flex-col gap-5'>
          <img src={info.image} alt={info.title} className='h-[500px] w-full object-cover rounded-lg' />
          <div className='flex flex-col gap-1 my-5'>
            <span className='whitespace-nowrap text-xl font-bold capitalize'>Cancha Sintética {info.title}</span>
            <span className='text-sm text-gray-500'>Chiquinquirá, {info.address}</span>
          </div>
          <div className='flex gap-2'>
            <button onClick={() => setActiveTab('description')} className='cursor-pointer border-b-2 border-black'>Descripción</button>
            <button onClick={() => setActiveTab('services')} className='cursor-pointer border-b-2 border-black'>Servicios</button>
            <button onClick={() => setActiveTab('ubication')} className='cursor-pointer border-b-2 border-black'>Ubicación</button>
          </div>
          <div>
            {activeTab === 'description' && <p className='text-base'>{info.description}</p>}
            {activeTab === 'services' && <p>dsaads</p>}
            {activeTab === 'ubication' && <p>dsaads</p>}
          </div>
        </section>
        <aside className='flex flex-col gap-2 bg-white p-8 rounded-lg'>
            <div className='flex flex-col gap-1'>
                <span className='whitespace-nowrap text-xl font-bold capitalize'>Seleccionar fecha y hora</span>
                <span className='text-sm text-gray-500'>Precio por hora: ${info.price.split('/')[0]} COP</span>
            </div>
        </aside>
      </main>
    </>
  )
}
