import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Shopping","type":"Expense","date":"2021-04-14","id":"db1fbc64-b3a0-48c9-b67f-b490b24ad3cb"},{"amount":100,"category":"Salary","type":"Income","date":"2021-04-19","id":"07805011-7e0b-4cee-add9-be5735926205"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  
  // Action Creators
  const deleteTransaction = (id) => dispatch({ type:'DELETE_TRANSACTION', payload: id});
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}