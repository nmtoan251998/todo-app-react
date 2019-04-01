import React from 'react';
import Header from './Header';
import InputBar from './InputBar';
import TodoList from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: 'Todo List',            
            value: ''
        }

        this.todoList = [
            {
                id: 1,
                isCompleted: false,
                description: 'Buy some food for my stupid cat'
            },
            {
                id: 2,
                isCompleted: true,
                description: 'Feed my fucking stupid cat'
            },
            {
                id: 3,
                isCompleted: true,
                description: 'Borrow some books from the library'
            }
        ]
    }

    handleSubmit = (event) => {
        event.preventDefault();       
        console.log(event)
    }

    onInputChange = (event) => {                  
        this.setState({value: event.target.value});                
    }    

    // updateTodo = (dataFromChild) => {
    //     this.setState({value: dataFromChild});
    // }

    render() {
        console.log(this.state.value);
        return (
            <div className="container">
                <Header headerName={this.state.header} />            
                <InputBar value={this.state.value} onInputChange={this.onInputChange} onFormSubmit={this.handleSubmit}/>
                <TodoList todoList={this.todoList}/>                
            </div>            
        )
    }
}

export default App;