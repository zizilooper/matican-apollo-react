import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//*initial States*//

const dataState = {
  userData: [
    { id: "1", userName: "zahra", email: "zizi@yahoo.com", password: "1234" },
    { id: "2", userName: "behrang", email: "bigi@yahoo.com", password: "1234" },
    { id: "1", userName: "zahra", email: "zizi@yahoo.com", password: "1234" },
    { id: "2", userName: "behrang", email: "bigi@yahoo.com", password: "1234" }
  ]
};

const DataContext = createContext(dataState);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, dataState);

  const deleteData = id => {
    dispatch({
      type: "Delete-Data",
      payload: id
    });
  };

  const addData = userData => {
    dispatch({
      type: "Add-Data",
      payload: userData
    });
  };

  return (
    <DataContext.Provider
      value={{ userData: state.userData, deleteData, addData }}
    >
      {children}
    </DataContext.Provider>
  );
};

// * export provider and Reducer

export { DataContext, DataContextProvider };
