/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useContext, useState, createContext } from 'react'

interface IProps {
    account: string,
    setAccount?: (account: string) => void
}

const initialState:IProps = {
    account: '',
}

const ContractContext = createContext<IProps | null>(initialState);


function ContractProvider({children}:{children: ReactNode}) {
	const [account, setAccount] = useState<string>('');

  return (
    <ContractContext.Provider value={{account, setAccount}}>
        {children}
    </ContractContext.Provider>
  )
}

export default ContractProvider


export const usContractHook = () => {
    return useContext(ContractContext);
  };
  