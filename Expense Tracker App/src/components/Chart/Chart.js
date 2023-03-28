import ChartBar from "./ChartBar";
import './Chart.css';
export default function Chart(props){

    const viewpoint=props.data.map(property=>property.value)
    const totalmax=Math.max(...viewpoint)
    return (<div className="chart">
     {props.data.map((pointdata)=><ChartBar
        key={pointdata.lable}
        value={pointdata.value}
        maxvalue={totalmax}
        lable={pointdata.lable}
     
     />)}
    </div>);
     }