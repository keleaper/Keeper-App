import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Add new note to an array
  const [notes, setNotes] = useState([]); // whats inside the () is our initial value/state
  // notes is the name of the number our state is at
  // There are two items the first is a value, and the second is a function
  // setNotes is a function that will update the value of notes

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; // Use spread operator so we get a hold of all our previous notes and add the newNote at the end
    });
  }

  function deleteNote(id) {
    //need the id of each of the notes
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        // filter can take up to 3 arguments. 1st- value were currently looping throught in the array. 2nd- the index of our item
        return index !== id; // return all of the notes where the index does not = the id of the note that needs to be deleted
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        // loop through our notes array and grab each of the noteItems and execute our function
        return (
          <Note
            key={index} // When the Note is rendered were going to be passing over the index of the noteItem from the notes array as the id. Which is picked up in the Note component
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
