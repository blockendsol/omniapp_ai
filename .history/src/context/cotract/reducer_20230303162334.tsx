import React from 'react'
import { createContext } from 'vm'


function Reducer() {
    const ContractContext = createContext<any>(null);
  return (
    <div>Reducer</div>
  )
}

export default Reducer