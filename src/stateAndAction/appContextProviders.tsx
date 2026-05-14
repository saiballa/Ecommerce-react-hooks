import { initialState,formReducer } from "./appReducer";
import { createContext,useReducer,type ReactNode } from "react";
import type { FormStateData,navigateSteps } from "../types/type";

interface AppContextType{
    state:FormStateData,
    dispatch:React.Dispatch<navigateSteps>
}

export const FormContext = createContext<AppContextType | null>(null);

 const AppReducerProvider= ({children}:{children:ReactNode})=>{

    const [state,dispatch] = useReducer(formReducer,initialState);

    return(
        <>
            <FormContext.Provider value={{state,dispatch}}>
                {children}
            </FormContext.Provider>
        </>
    )
}

export default AppReducerProvider;

