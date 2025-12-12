import { createContext, useState, type ReactNode } from "react";

interface NameContextType {
  name: string;
  setName: (value: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);

export function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");

  return (
    <NameContext value={{ name, setName }}>
      {children}
    </NameContext>
  );
}