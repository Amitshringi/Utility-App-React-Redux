import { useState } from "react";
import "./NoteForm.css";
import { useDispatch ,useSelector} from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { notificationSelector, resetNotifications } from "../../redux/reducers/notificationReducer";
// import { addNote } from "../../redux/actions/noteActions";




function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch=useDispatch();
  const message=useSelector(notificationSelector);
 
  if(message){
    setTimeout(()=>{
      dispatch(resetNotifications());

    },3000);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      {message && 
      <div className="alert alert-success" role="alert">
      {message}
         </div>
      }
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
