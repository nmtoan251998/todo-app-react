import React from 'react';
import './TodoItem.css';

const TodoItem = ({isCompleted, description, index, itemStatus}) => {           
    // console.log(props)      
    const completedTextStyled = {
        textDecoration: 'line-through',
        opacity: .95,
        color: 'lightgrey',
        fontStyle: 'italic'
    }

    if(isCompleted === true) {
        return (
            <tr>
                <th scope="col">{index}</th>
                <td style={completedTextStyled}>{description}</td>
                <td>
                    <i 
                        className="checkBtn fas fa-check-circle fa-2x"
                        data-id={index} 
                        style={{"color": "lightgreen"}}
                        onClick={itemStatus}
                    ></i>
                </td>
            </tr>
        )          
    }
        
    return (
        <tr>
            <th scope="col">{index}</th>
            <td>{description}</td>
            <td>
                <i 
                    className="checkBtn far fa-circle fa-2x"
                    data-id={index} 
                    onClick={itemStatus}
                >&nbsp;</i>
            </td>
        </tr>
    )  
}

export default TodoItem;