import React, { Component } from 'react';
import NewTask from './inputTaskField'
import TaskList from './taskList'

class MainTrello extends Component {
    state = { 
        showTaskInput: false,
        toDoTaskName: '',
        doingTaskName: '',
        doneTaskName: '',
        taskList:[],
     }
    render() { 
        return ( 
            <div className='text-white'>
                <header className='d-flex bg-dark py-1 px-3'>
                    <h1 className='h3'>Trello Clone</h1>
                </header>
                <div className='d-flex justify-content-around align-items-start bg-warning py-3'>
                    <TaskList/>
                    <div className='bg-dark rounded w-25'>
                        <h3 className='h5 py-1 px-4'>Doing</h3>
                        <ul>

                        </ul>
                        { this.state.showTaskInput ? <NewTask /> : null }
                        <button onClick={this.addingTask} className='d-flex justify-self-start btn bg-dark text-white rounded border-0 w-100 py-1 px-4'>Add element</button>
                    </div>
                    <div className='bg-dark rounded w-25'>
                        <h3 className='h5 py-1 px-4'>Done</h3>
                        <ul>

                        </ul>
                        <input value={this.state.taskName} onChange={this.updateTaskValue} onKeyDown={this.enterTask} className='taskinput bg-transparent rounded text-white w-75 mx-3 px-3' type="text" name="taskname" id="donetaskname" placeholder="Add task name"/>
                        <button onClick={this.addingTask} className='d-flex justify-self-start btn bg-dark text-white rounded border-0 w-100 py-1 px-4'>Add element</button>
                    </div>
                    <button className='btn bg-dark text-white rounded border-0 p-2'>Add List</button>
                </div>
            </div>
         );
    }

    updateTaskValue = (newValue) =>{
        this.setState({
            toDoTaskName: newValue.target.value
        })
    }

    enterTask = (e) =>{
        if(e.key ==='Enter' || e.key === 13){
            console.log(this.state.toDoTaskName)
        }
    }

    addingTask = () =>{
        if(this.state.showTaskInput){
            this.setState({showTaskInput: false})
        }
        else{
            this.setState({showTaskInput: true})
        }
    }
}
 
export default MainTrello;