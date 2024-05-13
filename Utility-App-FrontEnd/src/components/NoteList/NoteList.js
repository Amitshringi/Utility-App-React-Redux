import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { actions, noteSelector } from "../../redux/reducers/noteReducer";
// import { deleteNote } from "../../redux/actions/noteActions";



function NoteList() {
    const notes=useSelector(noteSelector);
    const dispatch=useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            {note.createdOn && <p>{new Date(note.createdOn).toLocaleDateString()}</p>}
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=> dispatch(actions.delete(index))}
            >Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
