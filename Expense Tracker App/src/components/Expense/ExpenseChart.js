import Chart from "../Chart/Chart";
export default function ExpenseChart(props){
    const chartdata=[
        {lable:'Jan' ,value:0},
        {lable:'Feb' ,value:0},
        {lable:'Mar' ,value:0},
        {lable:'Apr' ,value:0},
        {lable:'May' ,value:0},
        {lable:'Jun' ,value:0},
        {lable:'July' ,value:0},
        {lable:'Aug' ,value:0},
        {lable:'Sep' ,value:0},
        {lable:'Oct' ,value:0},
        {lable:'Nov' ,value:0},
        {lable:'Dec' ,value:0},
    ];
    for(const expense of props.expenses)
    {
        const mon= expense.date.getMonth();
        chartdata[mon].value +=expense.amount;
    }
    
    return(
       <Chart data={chartdata}  />
    );
}