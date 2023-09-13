import "./ExpenseDate.css"


function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.date.toDateString().slice(4, 7)}</div>
      <div className="expense-date__year">{props.date.toDateString().slice(10, 14)}</div>
      <div className="expense-date__day">{props.date.toDateString().slice(8, 10)}</div>
    </div>
  );
}

export default ExpenseDate;
