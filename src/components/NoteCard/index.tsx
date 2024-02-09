import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import closeSvg from "../../assets/close.svg";

import { Container } from "./style"

interface NoteCardProps {
  id: string,
  date: Date,
  content: string,
  handleDeleteNote: (id: string) => void,
}

export function NoteCard(props: NoteCardProps) {
  function handleOpenModal(): void {
    (document.querySelector(".dialogNoteCard")! as HTMLElement).style.display = "block";
  }

  function handleCloseModal(): void {
    event?.preventDefault();
    Array.from(document.querySelectorAll("dialog")).map((element: HTMLDialogElement): void => {
      element.style.display = "none";
    });
  }

  return (
    <Container>
      <button onClick={ handleOpenModal }>
        <h2>{ formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true }) }</h2>
        <p>{ props.content }</p>
      </button>

      <dialog className="dialogNoteCard">
        <div>
          <button className="buttonIcon" onClick={ handleCloseModal }>
            <img src={ closeSvg } alt="" />
          </button>

            <form>
              <h2>{ formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true}) }</h2>
              <p>{ props.content }</p>
              <button className="lastButton" onClick={() => props.handleDeleteNote(props.id) }>
                <p>
                  Deseja
                  <span> apagar essa nota</span>
                  ?
                </p>
              </button>
            </form>
        </div>
    </dialog>
    </Container>
  )
}