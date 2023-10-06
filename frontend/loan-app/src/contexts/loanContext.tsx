import { ReactNode, createContext, useContext, useState } from "react"
import { api } from "@/services"
import { TValueDataRequest } from "@/schemas/valueSchema"
import { TInstallment, TInstallmentResponse } from "@/schemas/installmentSchema"
import { toast } from 'react-toastify';


interface IContextProviderProps {
    children: ReactNode
}

interface IContextProps {
    postInstallments: (value: TValueDataRequest) => Promise<void>
    installments: TInstallmentResponse | undefined
    setInstallments: React.Dispatch<React.SetStateAction<TInstallmentResponse | undefined>>
    installment: TInstallment | undefined
    setInstallment: React.Dispatch<React.SetStateAction<TInstallment | undefined>>
}

export const ContextLoan = createContext<IContextProps>({} as IContextProps)

export const ContextProvider = ({ children }: IContextProviderProps) => {
    const [installments, setInstallments] = useState<TInstallmentResponse>()
    const [installment, setInstallment] = useState<TInstallment>()

    const postInstallments = async (value: TValueDataRequest) => {
        try {
            const response = await api.post("installment/", value)
            setInstallments(response.data)
        } catch (error) {
            console.log(error)
            toast.error('Erro ao calcular parcelas')
        }
    }
    
    return (
        <ContextLoan.Provider value={{
            postInstallments,
            installments,
            setInstallments,
            installment,
            setInstallment
        }}>
            {children}
        </ContextLoan.Provider>
    )
}

export const useLoan = () => {
  const loanContext = useContext(ContextLoan)
  if (!loanContext) {
    throw new Error("useLoan must be used within a ContextLoanProvider")
  }
  return loanContext
}