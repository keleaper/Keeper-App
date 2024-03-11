import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Create a const that keeps track of the title and content
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote, // spread operator. Spread all key value pairs
        [name]: value, // [] changes name from a string to a value of our name const
      };
    });
  }

  // Pass the new note back to the App
  function submitNote(event) {
    props.onAdd(note); // passing the current created note
    setNote({
      title: "", // after you create a new note we can reset the value to an empty title and content
      content: "",
    });
    event.preventDefault(); // prevents full screen reload
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
