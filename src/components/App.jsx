import React, { useState, useRef} from  "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";
import Note from "./Note";


function App() {
 
  const [notes, setNotes] = useState([
    {
      id: crypto.randomUUID(),
      title: "Gardening",
      content:
        "Tidy back patio, sweep front."
    },
    {
      id: crypto.randomUUID(),
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
          id: crypto.randomUUID(),
          title: titleText,
          content: noteText
        },
      ]
    })
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
              key={index}
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
