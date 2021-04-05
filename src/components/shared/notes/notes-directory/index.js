import React from "react";
import NoteBox from "../note-box";
import Styles from "./notes-directory.module.scss";

const NotesDirectory = (props) => {
  const noteList = [
    {
      type: "portal communication",
      body: "some portal info goes here..",
      date: new Date(),
      lname: "lnamne",
      fname: "fname",
    },
    {
      type: "internal",
      body: "some portal info goes here..",
      date: new Date(),
      lname: "lnamne",
      fname: "fname",
    },
    {
      body: "some portal info goes here..",
      date: new Date(),
      lname: "lnamne",
      fname: "fname",
    },
  ];

  const renderNoteList = () => {
    return noteList.map(({ type, body, date, fname, lname }) => {
      return (
        <NoteBox
          type={type}
          body={body}
          date={date}
          fname={fname}
          lname={lname}
        />
      );
    });
  };
  return <div>{renderNoteList()}</div>;
};

export default NotesDirectory;
