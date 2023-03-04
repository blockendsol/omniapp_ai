import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'

interface IProps {
    account: string
}

function Reducer({children}:{children: ReactNode}) {
    const ContractContext = createContext<null>('');
	const [account, setAccount] = useState<string>('');

  return (
    <ContractContext.Provider value={{account, setAccount}}>
        {children}
    </ContractContext.Provider>
  )
}

export default Reducer