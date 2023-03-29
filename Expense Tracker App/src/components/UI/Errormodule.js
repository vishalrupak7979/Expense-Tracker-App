import Card from "./Card";
import Button from "./Button";
import classes from "./Errormodule.module.css"
export default function Errormodule(props){
    return(
        <div>

        <div className={classes.backdrop} onClick={props.onconform}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
            <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onconform}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}