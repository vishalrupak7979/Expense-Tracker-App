import React,{useState} from "react";
import './ExpenseForm.css';
export default function ExpenseForm(props){
    const [oldTitle,setTitle]=useState(" ");
    const [oldamount,setAmount]=useState(" ");
    const [olddate,setdate]=useState(" ");
    const titleChange = (event) => {

        setTitle(event.target.value);

    };
    const amountChange = (event) => {

        setAmount(event.target.value);

    };
    const dateChange = (event) => {

        setdate(event.target.value);

    };
    const formSubmit=(event)=>{
          event.preventDefault();

          const result={
            title:oldTitle,
            amount:+oldamount,
            date:new Date(olddate)
          };
          props.onparentDataPass(result);
          setTitle('');
          setAmount('');
          setdate('');
    };
    return(
          <form onSubmit={formSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={oldTitle} onChange={titleChange}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={oldamount} min="0.01" step="0.01"onChange={amountChange}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={olddate} min="2019-01-01" max="2031-12-1"onChange={dateChange}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.cancel}>Cancel</button>
            <button type="submit">Add Expense</button>
            </div>
            
          </form>
    );
}