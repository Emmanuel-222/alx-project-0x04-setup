import { createContext, useContext,  useState, ReactNode } from "react" // import necessary hooks

interface CountContextProps {  //define the shape of my context
  count: number
  increment: () => void
  decrement: () => void
}

export const CountContext = createContext<CountContextProps | undefined>(undefined) //use createContext to create the context

export const CountProvider = ({ children }: { children: ReactNode}) => {

  const [count, setCount] = useState<number>(0)

  const increment = () => setCount((count ) =>count + 1)  //the action is to increment the count
  const decrement = () => setCount((count) => count > 0 ? count - 1 : 0) //the action is to decrement the count

  return (
     // USe the created context
    <CountContext.Provider value={{ count, increment, decrement }}>   
      {children}
    </CountContext.Provider>
  )
}



export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be within a Count Provider")
  }

  return context
}