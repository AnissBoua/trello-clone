import React, { Component } from 'react';

class NewTask extends Component {
    state = { 
        hasFocus: false,
        taskName: '',
     }
    
    render() { 
        return ( 
            <React.Fragment>
                <input value={this.state.taskName} onChange={this.updateTaskValue} onKeyDown={this.enterTask} onFocus={this.haveFocus} onBlur={this.props.addingTask} className='taskinput bg-transparent rounded text-white w-75 my-2 mx-3 px-3' type="text" name="taskname" id="todotaskname" placeholder="Add task name" autoFocus/>
            </React.Fragment>
         );
    }

    updateTaskValue = (newValue) =>{
        this.setState({taskName: newValue.target.value})
    }

    enterTask = (e) =>{
        if(e.key ==='Enter' || e.key === 13){
            console.log(this.state.taskName)
        }
    }
    
    haveFocus = () => {
        if(this.state.hasFocus){
            this.setState({hasFocus: false})
        }
        else{
            this.setState({hasFocus: true})
        }
    }
}
 
export default NewTask;