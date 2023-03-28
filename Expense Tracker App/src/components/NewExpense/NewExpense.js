import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
export default function NewExpense(props){
  const [isEdit,setEdit] =useState(false);
    const gettingDataInChild=(data)=>{
          const resdata={
            ...data,
            id:Math.random().toString()
          };
          props.onParentDataPass(resdata);
    };
    const showContent=()=>{
          setEdit(true)
    };
    const stopentry=()=>{
      setEdit(false)
    }
    return (
       <div className='new-expense'>
        {!isEdit&&<button onClick={showContent}>Add New Expense</button>}
        {isEdit && <ExpenseForm onparentDataPass={gettingDataInChild} cancel={stopentry}></ExpenseForm>}
       </div>
    );

}