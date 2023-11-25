import { createContext, useState } from "react";

export let aggContext = createContext();

export default function AggContextProvider(props) {
  
  let [isShown,setIsShown] =useState(false)

  return (
    <aggContext.Provider value={{ isShown, setIsShown}}>
      {props.children}
    </aggContext.Provider>
  );
}
