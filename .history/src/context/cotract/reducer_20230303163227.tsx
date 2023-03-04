import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'

interface IProps {
    account: string,
    setAccount?: (account: string) => void
}

const initialState:IProps = {
    account: '',
}

function Reducer({children}:{children: ReactNode}) {
    const ContractContext = createContext<IProps | null>(initialState);
	const [account, setAccount] = useState<string>('');

  return (
    <ContractContext.Provider value={{account, setAccount}}>
        {children}
    </ContractContext.Provider>
  )
}

export default Reducer