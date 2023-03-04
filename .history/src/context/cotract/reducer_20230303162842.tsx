import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'


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