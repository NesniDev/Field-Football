import { createContext, useState, type ReactNode } from "react";

interface NameContextType {
  name: string;
  dateSelection: Date;
  hour: string;
  address: string;
  price: string;
  setName: (value: string) => void;
  setDateSelection: (value: Date) => void;
  setHour: (value: string) => void;
  setAddress: (value: string) => void;
  setPrice: (value: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);

export function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [dateSelection, setDateSelection] = useState(new Date())
  const [hour, setHour] = useState("")
  const [address, setAddress] = useState("")
  const [price, setPrice] = useState('')

  return (
    <NameContext value={{ name, setName, dateSelection, setDateSelection, hour, setHour, address, setAddress, price, setPrice }}>
      {children}
    </NameContext>
  );
}