import Header from "@/components/header";
import Info from "@/components/info";
import TitleIcon from "@/components/titleIcon";
import { useLoan } from "@/contexts/loanContext";


const LoanReceipt = () => {
    const { loan } = useLoan();
    
    return (
        <div>
            <Header/>
            <div className='container mx-auto p-8 px-48'>
                <TitleIcon textUp={'Solicitação'} textDown={'do Emprestimo'}/>
                <div className="flex mt-8 w-full justify-around ">
                    <div className="flex gap-8 w-1/2">
                        <div className="flex flex-col justify-center gap-12 bg-background-1 p-6 h-1/2 rounded-md w-1/2">
                            <p className="font-flexo text-heading6 text-primary-1">Valor Total</p>
                            <p className="font-flexo text-heading5 font-bold text-success-1">R${(loan?.installment.full_value)?.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col justify-center gap-12 bg-background-1 p-6 h-1/2 rounded-md w-1/2">
                            <p className="font-flexo text-heading6 text-primary-1">Valor a Depositar</p>
                            <p className="font-flexo text-heading5 font-bold text-success-1">R${(loan?.installment.full_value)?.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-background-1 p-4 rounded-md gap-4">
                        <div>
                            <p className="font-flexo text-heading6 text-primary-1">Modalidade:</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-around mb-2">
                                    <p className="font-flexo text-heading4 font-semibold text-primary-1">Cartão de Crédito</p>
                                    <img src="card.svg" alt="" />
                                </div>
                                <Info title="Número do Cartão" value={loan!.card_number}/>
                                <div className="flex justify-around p-4">
                                <Info title="Validade" value={loan!.valid_date}/>
                                <Info title="CVC" value={loan!.card_cvc}/>
                                </div>
                                <Info title={`${loan?.installment.installments} parcelas de`} value={`R$${(loan?.installment.installment_value)?.toFixed(2)} `}/>
                            </div>
                        </div>
                        <div>
                            <p className="font-flexo text-heading6 text-primary-1 mb-2">Informações do Cliente:</p>
                            <div className="flex flex-col gap-2">
                                <Info title="Nome" value={loan!.client.name}/>
                                <Info title="CPF" value={loan!.client.cpf}/>
                                <Info title="Agência" value={loan!.client.bank_label}/>
                                <Info title="Número da conta" value={loan!.client.account_number}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanReceipt;


