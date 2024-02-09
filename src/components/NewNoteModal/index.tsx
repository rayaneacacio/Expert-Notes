import { toast } from "sonner";
import { useEffect, useState } from "react";

import closeSvg from "../../assets/close.svg";
import ellipseSvg from "../../assets/ellipse.svg";

import { Container } from "./style";

interface DialogProps {
  className?: string,
  handleNewNote: (content: string) => void,
}

export function NewNoteModal(props: DialogProps) {
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
    const textarea: HTMLTextAreaElement = document.querySelector("textarea")!;
    
    (document.querySelector(".choseAudioOrTextDiv")! as HTMLElement).style.display = "none";

    textarea.style.display = "block";
    textarea.focus();
  }

  function handleCloseTextarea(): void {
    event?.preventDefault();
    (document.querySelector(".choseAudioOrTextDiv")! as HTMLElement).style.display = "flex";
    document.querySelector("textarea")!.style.display = "none";
  }

  function handleOpenNewAudio(): void {
    event?.preventDefault();
    (document.querySelector(".formTextNote")! as HTMLElement).style.display = "none";
    (document.querySelector(".formAudioNote")! as HTMLElement).style.display = "block";
  }

  function handleSaveNote(): void {
    event?.preventDefault();
    props.handleNewNote(text);
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
        <form className="formTextNote" onSubmit={ handleSaveNote }>
          <h2>Adicionar nota</h2>

          <div>
            <div className="choseAudioOrTextDiv">
              <p>Comece</p>
              <button onClick={ handleOpenNewAudio }>gravando uma nota em áudio</button>
              <p>ou se preferir</p>
              <button onClick={ handleOpenTextarea }>utilize apenas texto.</button>
            </div>

            <textarea autoFocus name="" id="" onChange={(event) => setText(event.target.value)}></textarea>
          </div>

          <button className="lastButton">Salvar nota</button>
        </form>
        }

        {
          <form className="formAudioNote">
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
      </div>
    </Container>
  )
}