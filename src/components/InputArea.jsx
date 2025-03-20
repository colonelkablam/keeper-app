import React, { useState } from "react";

function InputArea(props) {

    const [titleText, setTitleText] = useState("");
    const [noteText, setNoteText] = useState("");
    const maxLines = 5;

    function handleTitleTextChange(event) {
        setTitleText(event.target.value);
    }

    function handleNoteTextChange(event) {
        const lines = event.target.value.split('\n');
        console.log("lines arr:", lines, "number of lines:", lines.length)

        if (lines.length <= maxLines) {
            setNoteText(event.target.value)
        } else {
            setNoteText(lines.slice(0, maxLines).join('\n'));
        }
    }

    function handleAddNote() {

        const title = titleText === "" ? "no title" : titleText;
        const note = noteText === "" ? "..." : noteText;

        props.onAddNote(title, note)

        // reset
        setTitleText("");
        setNoteText("");
    }

    return (
        <div className="input-area">
            <input
                value={titleText}
                onChange={handleTitleTextChange}
                className="note-title"
                type="text" 
                placeholder="Title" 
            />
            <textarea
                value={noteText}
                onChange={handleNoteTextChange}
                className="note-text"
                placeholder={`Note text (max ${maxLines} lines) ...`} 
            />
            <button
                className="add-button"
                onClick={handleAddNote}
            >
                add
            </button>
        </div>
    );


}

export default InputArea;