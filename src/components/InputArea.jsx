import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';




function InputArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function expandInput() {
        setIsExpanded(true);
    }

    function collaspseInput() {
        setIsExpanded(false);
    }

    function handleNoteChange(event) {

        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            }
        })
    }

    function handleAddNote() {
        const noteTitle = note.title === "" ? "no title" : note.title;
        const noteText = note.content === "" ||  note.content === null ? "..." : note.content;

        props.onAddNote(noteTitle, noteText)

        // reset input area
        setNote({
            title: "",
            content: "",
        });
        collaspseInput()
    }

    return (
        <div className="input-area">
            
            {isExpanded && ( 
                <input
                    name="title"
                    value={note.title}
                    onChange={handleNoteChange}
                    className="note-title"
                    type="text" 
                    placeholder="Title" 
                    maxLength={50}
                />
            )}
            
            <textarea
                name="content"
                value={note.content}
                onChange={handleNoteChange}
                className="note-text"
                placeholder={"Note text ..."}
                maxLength={256}
                rows={isExpanded ? 6 : 1}
                onFocus={expandInput}

            />
            <Zoom in={isExpanded}>
                <Fab
                    className="add-button"
                    onClick={handleAddNote}
                >
                    <AddIcon />
                </Fab>
            </Zoom>

        </div>
    );


}

export default InputArea;