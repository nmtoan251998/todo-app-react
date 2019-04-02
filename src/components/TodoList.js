import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, itemStatus}) => {            
    
    const todos = todoList.map( ({id, description, isCompleted}) => {             
        // console.log(todo);
        return <TodoItem 
                    key={id} 
                    description={description} 
                    isCompleted={isCompleted} 
                    index={id}
                    itemStatus={itemStatus} />
    })    
    // console.log(todos)

    return (        
        <div>            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>                
                    {todos}
                </tbody>
            </table>
        </div>
    )
}    

export default TodoList;