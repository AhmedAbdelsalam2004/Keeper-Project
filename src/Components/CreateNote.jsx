import React, {useState} from "react";
import Note from "./Note";

function CreateNote(props){

    return (
    <Note 
    key = {props.key} 
    title = {props.title} 
    content = {props.content}
    />
   );
  }

  export default CreateNote;