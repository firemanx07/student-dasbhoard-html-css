import React, {createContext, Dispatch, DispatchWithoutAction, ReducerAction, useReducer, useState} from 'react'
import './App.css'
import Layout from "./components/Layout";
import TabBar from "./components/TabBar";
import ChatComponent from "./components/chatComponent";

export type AppContextParams={
  menuStatus?:boolean;
}
export const AppContext =createContext<AppContextParams>({});
export const DispatchContext =createContext<Dispatch<any>>(()=>{});
function App() {

    const [tasks, dispatch] = useReducer(appReducer, initialState);

  return (
      <AppContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
          <>
              <Layout/>
              <div className={"overflow-chat"}>
              <ChatComponent/>
              </div>
              <TabBar/>
              </>
      </DispatchContext.Provider>
      </AppContext.Provider>
  )
}

function appReducer(state:AppContextParams, action:any):AppContextParams {
    switch (action.type) {
        case 'switchMenu': {
            return {menuStatus:!state.menuStatus};
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
const initialState:AppContextParams={
    menuStatus:false
}
export default App
