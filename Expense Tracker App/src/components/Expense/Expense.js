import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import ExpenseChart from "./ExpenseChart";

export default function Expense(pro){
    const [oldyear,setyear]=useState("2020");
    const myfun=(data)=>{
          setyear(data);
    };
    const filteredData=pro.item.filter((data)=>{
        return data.date.getFullYear().toString()===oldyear
    });
    return(
        <div>
            
        <Card className="expenses ">
            
        <ExpensesFilter sendvalue={oldyear} onDataPass={myfun}></ExpensesFilter>
        <ExpenseChart expenses={filteredData}/>
        {filteredData.length === 0 ? (<h3 className="some">No Expense Found</h3>): filteredData.map((result)=>(
              <ExpenseItem 
              key={result.id}
              title={result.title}
              amount={result.amount}
              date={result.date}
              />
        ))
        }
       
       
        </Card>
        </div>
    );
}