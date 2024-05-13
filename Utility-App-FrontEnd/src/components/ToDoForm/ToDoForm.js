import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector } from "react-redux";
import {  notificationSelector, resetNotifications } from "../../redux/reducers/notificationReducer";
import {actions, addTodoAsync} from "../../redux/reducers/todoReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch=useDispatch();
  const message=useSelector(notificationSelector);

  if(message){
    setTimeout(()=>{
      dispatch(resetNotifications());

    },3000);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(addTodoAsync(todoText));
  };

  return (
    <div className="container">
      {message && 
      <div className="alert alert-success" role="alert">
      {message}
         </div>
      }
      
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
