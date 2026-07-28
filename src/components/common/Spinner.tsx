import { Loader2 } from 'lucide-react'

interface SpinnerProps {
  text?: string
}

export const Spinner = ({ text = 'Cargando...' }: SpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      <Loader2 className="size-8 animate-spin text-btn-dark" />
      <p className="text-sm text-gray-400 font-medium">{text}</p>
    </div>
  )
}
