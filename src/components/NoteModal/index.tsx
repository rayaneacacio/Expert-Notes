import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import closeSvg from "../../assets/close.svg";

interface NoteModalProps {
  className?: string,
  handleDeleteNote: (id: string) => void,
  note: {
    id: string,
    date: Date,
    content: string
  }
}

export function NoteModal(props: NoteModalProps) {
  function handleCloseModal(): void {
    event?.preventDefault();
    Array.from(document.querySelectorAll("dialog")).map((element: HTMLDialogElement): void => {
      element.style.display = "none";
    });
  }
  
  return (
    <dialog className={props.className}>
      <div>
        <button className="buttonIcon" onClick={ handleCloseModal }>
          <img src={ closeSvg } alt="" />
        </button>

          <form>
            <h2>{ formatDistanceToNow(props.note.date, { locale: ptBR, addSuffix: true}) }</h2>
            <p>{ props.note.content }</p>
            <button className="lastButton" onClick={() => props.handleDeleteNote(props.note.id) }>
              <p>
                Deseja
                <span> apagar essa nota</span>
                ?
              </p>
            </button>
          </form>
      </div>
    </dialog>
  )
}