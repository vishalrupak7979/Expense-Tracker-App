import './ChartBar.css';
export default function ChartBar(props) {

    let filling = '0%';

    if (props.maxvalue > 0) {
        filling = Math.round((props.value / props.maxvalue) * 100) + "%"
    }
    return <div className="chart-bar ">
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: filling }}></div>
        </div>
        <div className='chart-bar__label'> {props.lable}</div>
    </div>


}