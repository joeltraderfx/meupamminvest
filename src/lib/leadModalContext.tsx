import { createContext, useContext, useState, type ReactNode } from "react";

interface LeadModalContextValue {
  isOpen: boolean;
  destinationUrl: string;
  openModal: (destinationUrl: string) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState("");

  const openModal = (url: string) => {
    setDestinationUrl(url);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <LeadModalContext.Provider value={{ isOpen, destinationUrl, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal precisa estar dentro de um LeadModalProvider");
  return ctx;
}
