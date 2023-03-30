import { Children } from "react"
import Context from "./Context"
import useStorage from ''
  const storeProvider = ({children})=>{

  
  return (
    <Context.provider
    value={{
      token,
      setToken,
    }}>
      {children}
    </Context.provider>
  )
  }

export default storeProvider