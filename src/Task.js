import React from "react"
import tasksList from './tasks'

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.taskDone = this.taskDone.bind(this)
        this.taskDelete = this.taskDelete.bind(this)

        this.state = {
            data: tasksList
        }   
    }

    taskDone(e) {
        //e.preventDefault();
        const data = this.state.data.slice(0);

        this.setState({
            data,
          });
        this.id.style.textDecoration = "line-through"

        //add code here to change the status of the task in the backend
    }

    taskDelete(e) {
        //e.preventDefault();
        const data = this.state.data.slice(0);
        this.setState({
            data,
          });
        
        if (e !== -1) {
            data.splice(e, 1);
            this.setState({
                data: data
            });
            this.id.style.display = 'none'
            console.log(data)
        }
        //add code here to change the status of the task in the backend
    }

    render() {
        function taskDone() {
        }

        return (
            <div className = "taskWrapper" ref={(c) => this.id = c}>
                <h3 className= "heading">
                    {this.props.heading}
                </h3>
                <div className = "actions">
                    <button className = "done" onClick = {this.taskDone}>Done</button>
                    <button className = "delete" onClick = {() => this.taskDelete(this.props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Task