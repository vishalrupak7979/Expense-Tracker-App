
import React,{useState} from "react";
import './index.css';
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";
const temp = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
 const [expenses,setexpense]=useState(temp);
  
 const myfun=(data)=>{
    console.log(data);
     setexpense([data,...temp]);
  };
  return (
    <div>
      <NewExpense onParentDataPass={myfun}></NewExpense>
      <Expense item={expenses}></Expense>
    </div>
  );
}

export default App;
