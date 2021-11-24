import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  
    const [allHeros, setAllHeros] = useState([])

    useEffect(()=>{
        axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans').then((response) => {
            setAllHeros(response.data)
        })
    },[])

  return (
    <DataContext.Provider
      value={{
        allHeros,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}