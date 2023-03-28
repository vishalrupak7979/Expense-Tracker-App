import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.js';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(props) {
    // const [title,setTitle]=useState(props.title);
    
    // function myEvent(){
    //     setTitle("update!");
    //     console.log(title);
    // }

    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>RS.{props.amount}</div>
            </div>
            
        </Card>
    );
}
export default ExpenseItem