import React, { useState } from  "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";
import Note from "./Note";

let uuid = 3;

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Gardening",
      content:
        "Tidy back patio, sweep front."
    },
    {
      id: 2,
      title: "Exercise",
      content:
        "Run and arm strength today!"
    },
  ]);

  function addNote(titleText, noteText) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: uuid++,
          title: titleText,
          content: noteText
        },
      ]
    })

    console.log(notes);

  }

  function deleteNote(indexToDelete) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== indexToDelete)
    })
  }

  return (
      <div>
        <Header />

        <div className="input-container">
          <InputArea
            onAddNote={addNote}/>
        </div>

        <div className="notes-container">
          {notes.map((note, index) =>  (
            <Note 
              key={note.id}
              id={note.id}
              index={index}
              title={note.title}
              content={note.content}
              onDeleteNote={deleteNote}
            />
          ))}
        </div>

        <Footer />
      </div>
  )
}

export default App;
