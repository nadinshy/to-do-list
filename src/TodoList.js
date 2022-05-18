import { Component } from 'react';
import iconbee from './iconbee.png';

export class ToDoList extends Component {

    state = {
        userInput: " ",
        todoList: [ ]
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem (input) {
        if (input === '') {
            alert ('Please enter what TO-DO')
        }
        else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: ''})
    }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }

    clearItem() {
        let listArray = this.state.todoList;
        listArray = [ ];
        this.setState({todoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
            <div>
                <input type="text" placeholder="To Do..."
                onChange={ (e) => {this.onChangeEvent (e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div>
                <button className="btn add" onClick={() => this.addItem (this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.todoList.map((item,index) => (
                    <li onClick={this.crossedWord} key={index}><img src={iconbee} width="30px" alt="iconbee"/>{ item }</li>
                ))}
            </ul>
            <div >
                <button  className="btn clear" onClick={() => this.clearItem()}>Clear</button>
            </div>
            </form>
        )
    }

}