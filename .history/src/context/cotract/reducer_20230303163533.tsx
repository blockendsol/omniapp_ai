import React, { ReactNode, useContext, useState, createContext } from 'react'

interface IProps {
    account: string,
    setAccount?: (account: string) => void
}

const initialState:IProps = {
    account: '',
}

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
  