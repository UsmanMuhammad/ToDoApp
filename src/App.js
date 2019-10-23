import React from "react"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './add.png'
import tasksList from './tasks'
import Task from './Task'


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: tasksList,
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }
    
    //this functions add the task into our task array and display it on the board
    handleClick(e) {
      e.preventDefault();
      var heading = this.heading.value;
      var counter = this.state.counter;
      const data = this.state.data.slice(0);

      data.push({
        id: counter,
        heading: heading,
        done: false,
        edit: true
      });

      this.setState({
        data,
        counter: counter + 1
      });
    }
    
    render() {    
        var taskListComponent = this.state.data.map((item) => 
            <Task id = {item.id} heading = {item.heading} status = {item.done} edit = {item.edit} />
        )
      return (
        <div className="app">
          <header className="app-header">
            <h1>todo</h1>
          </header>

          {//<div className="input">
          }
          <div className = "container">
            <form className="input" onSubmit={this.handleClick.bind(this)}>
              <input type="text" ref={(c) => this.heading = c} name="title" className="inputElement" name="task"/>
              {/*<span className = "add1" onClick = {this.handleClick}><i className="material-icons iconAdd">add</i></span>*/}
              <button className="add1" onClick = {this.handleClick}>Create</button>
          {//</div>
          }
            </form>
          {taskListComponent}
          </div>
        </div>
      );
    }
  }

export default App