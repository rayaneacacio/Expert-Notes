import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import closeSvg from "../../assets/close.svg";
import ellipseSvg from "../../assets/ellipse.svg";

import { Container, NewNoteDiv } from "./style";

interface DialogProps {
  newNote?: boolean,
  audioNote?: boolean,
  className?: string,
  note?: {
    date: Date,
    content: string
  }
}

export function Dialog(props: DialogProps) {
  const [ text, setText ] = useState("");

  function handleCloseModal(): void {
    event?.preventDefault();
    Array.from(document.querySelectorAll("dialog")).map((element: HTMLDialogElement): void => {
      element.style.display = "none";
    });

    handleCloseTextarea();
  }

  function handleOpenTextarea(): void {
    event?.preventDefault();
    const textarea: HTMLTextAreaElement = document.querySelector(".modalNewNote textarea")!;
    
    (document.querySelector(".modalNewNote div div")! as HTMLElement).style.display = "none";

    textarea.style.display = "block";
    textarea.focus();
  }

  function handleCloseTextarea(): void {
    event?.preventDefault();
    (document.querySelector(".modalNewNote div div")! as HTMLElement).style.display = "flex";
    (document.querySelector(".modalNewNote textarea")! as HTMLElement).style.display = "none";
  }

  function handleOpenNewAudio(): void {
    event?.preventDefault();
    (document.querySelector(".dialogNewNote")! as HTMLElement).style.display = "none";
    (document.querySelector(".dialogAudioNote")! as HTMLElement).style.display = "block";
  }

  function handleSaveNote(): void {
    event?.preventDefault();
    toast.success("Nota criada com sucesso!");
  }

  useEffect(() => {
    if(text == "") {
      handleCloseTextarea();
    }

  }, [ text ]);

  return (
    <Container className={props.className}>
      <div>
        <button className="buttonIcon" onClick={ handleCloseModal }>
          <img src={ closeSvg } alt="" />
        </button>

        {
          props.newNote &&
          <NewNoteDiv className="modalNewNote" onSubmit={ handleSaveNote }>
            <h2>Adicionar nota</h2>

            <div>
              <div>
                <p>Comece</p>
                <button onClick={ handleOpenNewAudio }>gravando uma nota em áudio</button>
                <p>ou se preferir</p>
                <button onClick={ handleOpenTextarea }>utilize apenas texto.</button>
              </div>

              <textarea autoFocus name="" id="" onChange={(event) => setText(event.target.value)}></textarea>
            </div>

            <button className="lastButton">Salvar nota</button>
          </NewNoteDiv>
        }

        {
          props.audioNote &&
          <form>
            <h2>Adicionar nota</h2>
            <p>
              Testando aqui o microfone enquanto eu gravo essa nova nota para a aplicação
            </p>
            <button className="lastButton">
              <img src={ ellipseSvg } alt="" />
              <p>Gravando! (clique para interromper)</p>
            </button>
          </form>
        }

        {
          props.note &&
          <form>
            <h2>{ formatDistanceToNow(props.note.date, { locale: ptBR, addSuffix: true}) }</h2>
            <p>{ props.note.content }</p>
            <button className="lastButton">
              <p>
                Deseja
                <span> apagar essa nota</span>
                ?
              </p>
            </button>
          </form>
        }
      </div>
    </Container>
  )
}