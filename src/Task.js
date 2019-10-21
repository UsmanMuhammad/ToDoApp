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

        this.setState({
            data,
          });
        this.id.firstChild.style.textDecoration = "line-through"
        console.log(this.id.firstChild)

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

    renderEditForm(e) {
        console.log(this.state.data)
            return (
                <div className = "editForm">
                    <input type="text" name="updatedItem" className="item" defaultValue={this.state.heading} />
                    <button className="update-add-item">Update</button>
                </div>
            )
    }

    render() {
        return (
            <div className = "taskWrapper" ref={(c) => this.id = c}>
                <h3 className= "heading">
                    {this.props.heading}
                </h3>
                <div className = "actions">
                    {/*<button className = "done" onClick = {this.taskDone}>Done</button>
                    <button className = "delete" onClick = {() => this.taskDelete(this.props.id)}>Delete</button>*/}
                    <span className = "done1" onClick = {() => this.taskDone(this.props.id)}><i className="material-icons iconDone">done</i></span>
                    <span className = "delete1" onClick = {() => this.taskDelete(this.props.id)}><i className="material-icons iconDelete">remove</i></span>
                    <span className = "edit" onClick = {() => this.renderEditForm(this.props.id)}><i className="material-icons iconEdit">edit</i></span>
                </div>
            </div>
        )
    }
}

export default Task