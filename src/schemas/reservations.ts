import {z} from 'zod'

export const reservationSchema = z.object({
    selectedField: z.object({
        title: z.string(),
        slug: z.string(),
        price: z.string(),
    }),
    date: z.date(),
    time: z.string().min(1, 'Por favor, seleccione una hora'),
})