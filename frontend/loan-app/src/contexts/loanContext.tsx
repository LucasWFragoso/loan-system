import { ReactNode, createContext, useContext, useState } from "react"
import { api } from "@/services"
import { TValueDataRequest } from "@/schemas/valueSchema"
import { TInstallment, TInstallmentResponse } from "@/schemas/installmentSchema"
import { toast } from 'react-toastify';
import { TClient } from "@/schemas/clientSchema";
import { TDataCardRequest, TDataCardResponse } from "@/schemas/dataCardSchema";


interface IContextProviderProps {
    children: ReactNode
}

interface IContextProps {
    postInstallments: (value: TValueDataRequest) => Promise<void>
    installments: TInstallmentResponse | undefined
    setInstallments: React.Dispatch<React.SetStateAction<TInstallmentResponse | undefined>>
    installment: TInstallment | undefined
    setInstallment: React.Dispatch<React.SetStateAction<TInstallment | undefined>>
    getClient: (cpf: string) => Promise<void>
    client: TClient | undefined
    setClient: React.Dispatch<React.SetStateAction<TClient | undefined>>
    postLoan: (data: TDataCardRequest) => Promise<void>
    loan: TDataCardResponse | undefined
    setLoan: React.Dispatch<React.SetStateAction<TDataCardResponse | undefined>>
    dataLoanRequest: TDataCardRequest | undefined
    setDataLoanRequest: React.Dispatch<React.SetStateAction<TDataCardRequest | undefined>>
}

export const ContextLoan = createContext<IContextProps>({} as IContextProps)

export const ContextProvider = ({ children }: IContextProviderProps) => {
    const [installments, setInstallments] = useState<TInstallmentResponse>()
    const [installment, setInstallment] = useState<TInstallment>()
    const [client, setClient] = useState<TClient>()
    const [loan, setLoan] = useState<TDataCardResponse>()
    const [dataLoanRequest, setDataLoanRequest] = useState<TDataCardRequest>()

    const postInstallments = async (value: TValueDataRequest) => {
        try {
            const response = await api.post("installment/", value)
            setInstallments(response.data)
        } catch (error) {
            console.log(error)
            toast.error('Erro ao calcular parcelas')
        }
    }

    const getClient = async (cpf: string) => {
        try {
            const response = await api.get(`cliente/?cpf=${cpf}`)
            setClient(response.data)
        } catch (error) {
            console.log(error)
            toast.error('Erro ao buscar cliente')
        }
    }

    const postLoan = async (data: TDataCardRequest) => {
        try {
            const response = await api.post("solicitacao-emprestimo/", data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            toast.error('Erro ao solicitar emprestimo')
        }
    }
    
    return (
        <ContextLoan.Provider value={{
            postInstallments,
            installments,
            setInstallments,
            installment,
            setInstallment,
            getClient,
            client,
            setClient,
            postLoan,
            loan,
            setLoan,
            dataLoanRequest,
            setDataLoanRequest
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