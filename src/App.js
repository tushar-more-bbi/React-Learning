import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/Expenses/Expenseitem";
// import ExpenseDate from "./Components/ExpenseDate";
import "./Components/Expenses/Expenses.css"


const App = () => {
  const data = [
    {
      title: "Title1",
      amount: "230",
      date: new Date(2023, 9, 23),
    },
    {
      title: "Title2",
      amount: "250",
      date: new Date(2023, 9, 22),
    },
    {
      title: "Title3",
      amount: "270",
      date: new Date(2023, 9, 21),
    },
  ];

  return (
    //ALTERNATE WAYS OF PASSING PROPS
    <div>
    <h1>Let's get started!</h1>
     <div className="expenses">
      <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date}></ExpenseItem>
      <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date}></ExpenseItem>
      <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date}></ExpenseItem>
     </div>
     </div> 

 
  );
}

export default App;
