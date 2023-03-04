import React, { ReactNode, useContext, useState, createContext } from 'react'

interface IProps {
    account: string,
    setAccount?: (account: string) => void
}

const initialState:IProps = {
    account: '',
}

const ContractContext = createContext<any | null>(initialState);


function ContractProvider({children}:{children: ReactNode}) {
	const [account, setAccount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ContractContext.Provider value={{account, setAccount}}>
        {children}
    </ContractContext.Provider>
  )
}

export default ContractProvider


export const useContractHook = () => {
    return useContext(ContractContext);
  };
  