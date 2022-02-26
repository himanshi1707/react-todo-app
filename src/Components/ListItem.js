import React, { useState } from 'react'
import './css/Todoapp.css';

function ListItem(props) {
    const [changeStyle, setChangeStyle] = useState('mystyle');
    const [txtStyle, settxtStyle] = useState('mytxt')

    const background = {
        padding: "5px",
    }

    const deletebtn = {
        fontSize: '22px',
        fontWeight: 900,
        padding: '10px',
    }

    const doneTask = ()=>{
        setChangeStyle('mystyle1')
        settxtStyle('mytxt1')
    }

    return (
        <div>
        <div style={background}>
            <ul className={changeStyle} onClick={doneTask}>
                <li className={txtStyle}>
                    {props.text}
                </li>
                <div style={deletebtn}>
                    <span style={{cursor: "pointer"}} onClick={props.handleDeletes}>X</span>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default ListItem
