import { useState } from "react";

import logoSvg from "../../assets/logo.svg";
import arrowUpRightSvg from "../../assets/arrow-up-right.svg";

import { NoteCard } from "../../components/NoteCard";
import { NewNoteModal } from "../../components/NewNoteModal";

import { Container } from "./style";

interface Note {
  id: string,
  date: Date,
  content: string,
}

export function Home() {
  const [ notes, setNotes ] = useState<Note[]>((): Array<Note> => {
    const notesLocalStorage = localStorage.getItem("notes");

    if(notesLocalStorage) {
      return JSON.parse(notesLocalStorage);
    };

    return [];
  });
  const [ search, setSearch ] = useState("");

  const filteredNotes = search != "" ? 
    notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : notes;

  function handleOpenModalNewNote(): void {
    (document.querySelector(".dialogNewNote")! as HTMLElement).style.display = "block";
  }

  function handleNewNote(content: string): void {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: content
    };

    setNotes([ newNote, ...notes ]);
    localStorage.setItem("notes", JSON.stringify([ newNote, ...notes ]));
  }

  function handleDeleteNote(id: string): void {
    event?.preventDefault();
    const newNotesArray = notes.filter((note: {
      id: string,
      date: Date,
      content: string
    }) => {
      return note.id != id;
    });

    setNotes(newNotesArray);
    localStorage.setItem("notes", JSON.stringify(newNotesArray));
    (document.querySelector(".dialogNoteCard")! as HTMLDialogElement).style.display = "none";
  }

  return (
    <Container>
      <img src={ logoSvg } alt="logo expert notes" />

      <input type="text" placeholder="Busque em suas notas..." onChange={(event) => setSearch(event.target.value)} />

      <div className="border"></div>

      <main>
        <button className="newNote" onClick={ handleOpenModalNewNote }>
          <div className="buttonIcon"> <img src={ arrowUpRightSvg } alt="" /> </div>
          <h2>Adicionar nota</h2>
          <p>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </button>

        {
          filteredNotes &&
          filteredNotes.map((note, index) => (
            <NoteCard key={ index } id={ note.id } date={ note.date } content={ note.content } handleDeleteNote={ handleDeleteNote } />
          ))
        }
      </main>

      <NewNoteModal className="dialogNewNote" handleNewNote={ handleNewNote } />
    </Container>
  )
}