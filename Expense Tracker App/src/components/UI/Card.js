import React from 'react';
import './Card.css';
export default function Card(pro){
    const classes='card '+pro.className;
    return <div className={classes}>{pro.children}</div>
    
}