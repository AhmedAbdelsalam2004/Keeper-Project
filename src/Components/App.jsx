import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import CreateNote from "./CreateNote";
import ManageNotes from "./ManageNotes";



function App() {
  return (
    <div>
      <Header />
      {notes.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
