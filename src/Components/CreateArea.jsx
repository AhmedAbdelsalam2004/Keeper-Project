import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [allNotes, setAllNotes] = useState([]);

  function inputChange(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;

    if (inputName === "title") {
      setNote((prevValue) => {
        return {
          title: newValue,
          content: prevValue.content,
        };
      });
    } else if (inputName === "content") {
      setNote((prevValue) => {
        return {
          title: prevValue.title,
          content: newValue,
        };
      });
    }
  }

  function addNote(event) {
    event.preventDefault();

    const newAllNotes = allNotes.concat(note);

    setAllNotes(newAllNotes);

    setNote({
      title: "",
      content: "",
    });
  }

  function deleteNote(id) {
    setAllNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={inputChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <input
          onChange={inputChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
        />
        <button onClick={addNote}>Add</button>
      </form>
      {allNotes.map((oneNote, index) => (
        <Note
          key={index}
          id={index}
          title={oneNote.title}
          content={oneNote.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default CreateArea;
