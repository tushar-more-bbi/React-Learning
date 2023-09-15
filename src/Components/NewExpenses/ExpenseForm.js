import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = () => {
  
   const [enteredTitle,setEnteredTitle] = useState('');
   const [enteredAmount,setEnteredAmount] =  useState('');
   const [EnteredDate,setEnteredDate] =  useState('');


  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  return (
    <form>
      <div className="new-Expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
