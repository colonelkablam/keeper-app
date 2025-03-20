import React from  "react";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props) {

  return (
      <div className="note">
        <span className="title-bar"><h1>{props.title}</h1><p>id: {props.id}</p></span>
        <p>{props.content}</p>
        <span className="delete-bar">
        <button
          className="delete-button"
          onClick={() => props.onDeleteNote(props.index)}
        >
          <DeleteIcon />
        </button>
        </span>

      </div>
  )
}

export default Note;