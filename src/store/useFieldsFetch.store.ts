import { create } from "zustand";
import type { InfoField } from "../models/types";

interface FieldsFetchStore {
    data: InfoField[];
    isLoading: boolean;
    error: Error | null;
    fetchData: () => Promise<void>;
}

const useFieldsFetchStore = create<FieldsFetchStore>((set)=>({
    data: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
      try {
        set({ isLoading: true })
        const response = await fetch('https://backend-eight-rose-88.vercel.app/fields')
        const data = await response.json()
        set({ data })
      } catch (error) {
        set({ error: error as Error })
      } finally {
        set({ isLoading: false })
      }
    },
    
}))

export default useFieldsFetchStore
