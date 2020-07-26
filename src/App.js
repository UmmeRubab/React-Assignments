import React, {Component} from 'react';

class App extends Component {
  state = {
    todoList : []
  }
  
render(){
  return (

    <div>
    <h6 class="rubab">created by Umme Rubab</h6>
    <div className="jumbotron jumbotron-fluid py-2">
    <div className="container">
    <h1 id="text" className="display-2" >Todo Task App</h1>
    </div>
  </div>
  <form className="ab-3" onSubmit={this.handleSubmit}> 
    <div className="input-group"> 

    <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autocomplete="off" id="text"/>
      <div className="input-group-append">
    <button type="submit" className="btn btn-outline-success" id="todo" >Add Task</button>
      </div>
    </div>
      </form>
      <ul className="list-group">
        {
          this.state.todoList.map((
            (item, index) => {
              return <li className="list-group-item" key={index}>
                  {item}
                  <button className="btn btn-sm btn-outline-danger float -right" onClick={(event) => {this.deleteTodoTask(event,index)}}>
                    Delete
                  </button>
              </li>
            }
          ))
        }

      </ul>
    </div>
  );
  
}

handleSubmit = (event) => {
  var taskDescription = event.target.elements.todoTask.value;
  if(taskDescription.length > 0){ 
    this.setState({

      todoList : [...this.state.todoList, taskDescription]
    })
    event.target.reset();
  }
    event.preventDefault();
  }

  deleteTodoTask = (event,index) => {
      var taskArray =[...this.state.todoList]
      taskArray.splice(index,1);
      this.setState({todoList:taskArray})
  }
}
export default App;
