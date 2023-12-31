import React, { useState } from 'react';
import "./Expenseitem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseDate.css";
import Card from "../UI/Card.js";
import "../UI/Card.css"

function ExpenseItem(props) {
  

   const [ title , setTitle ] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated');
  } 
  
  
  return (
    //ALTERNATE WAYS OF PASSING PROPS
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
