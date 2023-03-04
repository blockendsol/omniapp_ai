import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'


function Reducer({Children}:{children: ReactNode}) {
    const ContractContext = createContext<null>('');
	const [account, setAccount] = useState<string>('');

  return (
    <ContractContext.Provider value={{account, setAccount}}>
        {Children}
    </ContractContext.Provider>
  )
}

export default Reducer