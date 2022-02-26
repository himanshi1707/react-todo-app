import React,{useState} from 'react';
import ListItem from './ListItem';
import './css/Todoapp.css'
import Header from './Header';

function TodoApp() {
    const [inputItem, setInputItem] = useState("")
    const [todoItem, setTodoItem] = useState([]);

    const handleChange = (e) =>{
        const listItem = e.target.value;
        if(listItem.length <= 22)
        {
            setInputItem(listItem);
        }
    }

    const handleAddItem = () =>{
        setTodoItem(oldItems => {
            return [...oldItems, inputItem];
        })
        setInputItem(" ");
    }

    const handleDelete = (id) =>{
        const arr = [...todoItem].filter((todo,index) => index !== id)
        setTodoItem(arr);
    }

    return (
        <div className='main'>
            <div className="background">
                <div className='subdiv'>
                    <Header/>
                    <div style={{display: 'flex',flexDirection:'row'}}>
                        <input
                            type="text"
                            placeholder='ADD TODO ITEM' 
                            onChange={handleChange} 
                            name="listItem" 
                            value={inputItem} 
                            className="todoinput"
                        />
                        <button className="addbtn" onClick={handleAddItem}>
                            <span>+</span>
                        </button>
                    </div>
                    <div style={{marginTop: '2em'}}>
                        <div >
                            {todoItem.map((items, index)=>{
                                return (
                                    <div style={{display:'flex',justifyContent:'flex-start'}}>
                                    <li style={{listStyleType: 'none'}} key={index}>
                                        <ListItem text={items} handleDeletes = {()=>handleDelete(index)} />
                                    </li>
                                    </div>
                                )
                            })}
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default TodoApp
