import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList}) => {            
    
    const todos = todoList.map( (todo) => {             
        // console.log(todo);
        return <TodoItem key={todo.id} description={todo.description} isCompleted={todo.isCompleted} index={todo.id}/>            
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