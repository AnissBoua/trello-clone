import React, { Component } from 'react';
import NewTask from './inputTaskField'

class TaskList extends Component {
    state = { 
        showTaskInput: false,
        taskName: '',
    }

    render() { 
        return ( 
            <div className='bg-dark rounded w-25'>
                        <h3 className='h5 py-1 px-4'>To Do</h3>
                        <ul className='bg-secondary'>
                            <li></li>
                        </ul>
                        { this.state.showTaskInput ? <NewTask addingTask={this.addingTask}/> : null}
                        { this.state.showTaskInput ? null : <button onClick={this.addingTask} className=' d-flex justify-self-start btn bg-dark text-white rounded border-0 w-100 py-1 px-4'>Add element</button>}
                        
                    </div>
         );
    }

    addingTask = () =>{
        if(this.state.showTaskInput){
            this.setState({showTaskInput: this.props.hasFocus})
        }
        else{
            this.setState({showTaskInput: true})
        }
    }
}
 
export default TaskList;