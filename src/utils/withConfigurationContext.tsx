import React, { useState, createContext } from 'react'

import { IConfiguration } from '../interface/IConfiguration'

const defaultState: IConfiguration = { amount: 5, setAmount: () => {} }
export const ConfigurationContext = createContext(defaultState)

const withConfigurationContext = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const [amount, setAmount] = useState(defaultState.amount)

    return (
      <ConfigurationContext.Provider
        value={{ amount, setAmount: (value) => setAmount(value) }}
      >
        <Component {...(props as P)} />
      </ConfigurationContext.Provider>
    )
  }
}

export default withConfigurationContext
