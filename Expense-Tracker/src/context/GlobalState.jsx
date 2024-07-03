import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: "Flowers", amount: -20},
        { id: 2, text: "Salary", amount: 300},
        { id: 3, text: "Book", amount: -10},
        { id: 4, text: "Camera", amount: 150}
    ]
};

// Creating global context
export const GlobalContext = createContext(initialState);

// Creating provider
export const GlobalProvider = ({children}) => {
    const [state, displatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        displatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        console.log(transaction);
        console.log(typeof(transaction.amount));
        displatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}