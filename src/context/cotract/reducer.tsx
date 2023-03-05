import React, { ReactNode, useContext, useState, createContext } from 'react'

interface IProps {
    account: string,
    setAccount?: (account: string) => void
}

const initialState = {
    account: '',
}

const ContractContext = createContext<any | null>(initialState);


function ContractProvider({children}:{children: ReactNode}) {
	const [account, setAccount] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const close = () => {
    setShow(false);
  }

  const toggle = () => {
    setShow(!show)
  }

  return (
    <ContractContext.Provider value={{account, setAccount, show, toggle, close}}>
        {children}
    </ContractContext.Provider>
  )
}

export default ContractProvider


export const useContractHook = () => {
    return useContext(ContractContext);
  };
  