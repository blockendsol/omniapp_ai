import React, { useState } from 'react'
import { createContext } from 'react'


function Reducer() {
    const ContractContext = createContext<null>(null);
	const [account, setAccount] = useState<string>('');

  return (
    <ContractContext.Provider>

    </ContractContext.Provider>
  )
}

export default Reducer