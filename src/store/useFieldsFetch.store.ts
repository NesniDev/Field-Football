import { create } from "zustand";
import type { InfoField } from "../models/types";

interface FieldsFetchStore {
    data: InfoField[];
    isLoading: boolean;
    error: Error | null;
    fetchData: () => Promise<void>;
    getFieldBySlug: (slug: string) => InfoField | undefined;
}

const useFieldsFetchStore = create<FieldsFetchStore>((set)=>({

    
    data: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
      const { data } = useFieldsFetchStore.getState()
      if(data.length > 0) return
      try {
        set({ isLoading: true })
        const response = await fetch('https://backend-eight-rose-88.vercel.app/fields')
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: no se pudieron cargar las canchas`)
        }
        const data = await response.json()
        set({ data })
      } catch (error) {
        set({ error: error as Error })
      } finally {
        set({ isLoading: false })
      }
    },

    getFieldBySlug: (slug: string): InfoField | undefined => {
  return useFieldsFetchStore
    .getState()
    .data
    .find(field => field.slug === slug)
}
    
}))

export default useFieldsFetchStore
