import React from 'react'
import { createContext } from 'react'


function Reducer() {
    const ContractContext = createContext<null>(null);
  return (
    <ContractContext.Provider>
        
    </ContractContext.Provider>
  )
}

export default Reducer