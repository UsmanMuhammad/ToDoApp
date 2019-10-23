import React from "react"
import tasksList from './tasks'

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.taskDone = this.taskDone.bind(this)
        this.taskDelete = this.taskDelete.bind(this)
        this.renderEditForm = this.renderEditForm.bind(this)

        this.state = {
            data: tasksList
        }   
    }

    taskDone(e) {
        //e.preventDefault();
        const data = this.state.data.slice(0);
        console.log(e)
        this.setState({
            done: true
          });
        this.id.firstChild.style.textDecoration = "line-through"
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
                data    : undefined
            });
            this.id.style.display = 'none'
            console.log(e)
        }
        //add code here to change the status of the task in the backend
    }

    renderEditForm(e) {
            this.setState ({
                edit: true
            })
            return this.data
    }

    render() {
        
        return (
            <div className = "taskWrapper" ref={(c) => this.id = c}>
                <h3 className= "heading">
                    {this.props.heading}
                </h3>
                <div className = "actions">
                        <button className="done1" onClick = {() => this.taskDone(this.props)}>Done</button>
                        <button className="delete1" onClick = {() => this.taskDelete(this.props)}>Delete</button>
                        <button className="edit" onClick = {() => this.renderEditForm(this.props)}>Edit</button>
                </div>
            </div>
        )
    }
}

export default Task