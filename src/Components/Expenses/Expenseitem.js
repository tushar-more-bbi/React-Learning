import "./Expenseitem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseDate.css";
import Card from "../UI/Card.js";
import "../UI/Card.css"

function ExpenseItem(props) {
  return (
    //ALTERNATE WAYS OF PASSING PROPS
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
