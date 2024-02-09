import { toast } from "sonner";
import { useEffect, useState } from "react";

import closeSvg from "../../assets/close.svg";
import ellipseSvg from "../../assets/ellipse.svg";

import { Container } from "./style";

interface NewNoteModalProps {
  className?: string,
  handleNewNote: (content: string) => void,
}

let speechRecognition: SpeechRecognition | null = null;

export function NewNoteModal(props: NewNoteModalProps) {
  const [ audioNote, setAudioNote ] = useState(false);
  const [ textNote, setTextNote ] = useState(false);
  const [ text, setText ] = useState("");
  const [ isRecording, setIsRecording ] = useState(false);

  function handleCloseModal(): void {
    event?.preventDefault();
    Array.from(document.querySelectorAll("dialog")).map((element: HTMLDialogElement): void => {
      element.style.display = "none";
    });

    handleCloseTextarea();
    handleCloseAudio();
  }

  function handleOpenTextarea(): void {
    event?.preventDefault();
    setTextNote(true);
  }

  function handleCloseTextarea(): void {
    event?.preventDefault();
    setTextNote(false);
  }

  function handleOpenNewAudio(): void {
    event?.preventDefault();
    setAudioNote(true);
    setIsRecording(true);
  }

  function handleCloseAudio(): void {
    event?.preventDefault();
    setAudioNote(false);
  }

  function handleSaveNote(): void {
    event?.preventDefault();

    if(text == "") {
      return;
    }

    props.handleNewNote(text);
    toast.success("Nota criada com sucesso!");
    setText("");
    setTextNote(false);
    setAudioNote(false);
    handleCloseModal();
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

    if(!isSpeechRecognitionAPIAvailable) {
      alert("Infelizmente seu navegador não suporta a API de gravação :(");
      return;
    }

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();
    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, '');

      setText(transcription);
    }

    speechRecognition.onerror = (event) => {
      console.error(event);
    }

    speechRecognition.start();
  }

  function handleStopRecording() {
    event?.preventDefault();
    
    if(speechRecognition != null) {
      speechRecognition.stop();
    }

    setIsRecording(false);
  }

  useEffect(() => {
    if(text == "") {
      setTextNote(false);
      setAudioNote(false);
    }

  }, [ text ]);

  useEffect(() => {
    if(textNote) {
      const textarea: HTMLTextAreaElement = document.querySelector(".formTextNote textarea")!;
      textarea.focus();
    }

  }, [ textNote ]);

  useEffect(() => {
    if(audioNote) {
      handleStartRecording();
    }

  }, [ audioNote ]);

  return (
    <Container className={props.className}>
      <div>
        <button className="buttonIcon" onClick={ handleCloseModal }>
          <img src={ closeSvg } alt="" />
        </button>

        {
          !audioNote &&
          <form className="formTextNote" onSubmit={ handleSaveNote }>
            <h2>Adicionar nota</h2>

            <div>
              {
                textNote ?
                <textarea autoFocus onChange={(event) => setText(event.target.value)}></textarea>
                :
                <div className="choseAudioOrTextDiv">
                  <p>Comece</p>
                  <button onClick={ handleOpenNewAudio }>gravando uma nota em áudio</button>
                  <p>ou se preferir</p>
                  <button onClick={ handleOpenTextarea }>utilize apenas texto.</button>
                </div>
              }
            </div>
            <button className="lastButton buttonSave">Salvar nota</button>
          </form>
        }

        {
          audioNote &&
          <form className="formAudioNote">
            <div>
              <h2>Adicionar nota</h2>
              <textarea autoFocus defaultValue={ text }></textarea>
            </div>
            {
              isRecording ?
              <button className="lastButton" onClick={ handleStopRecording }>
                <img src={ ellipseSvg } alt="" />
                <p>Gravando! (clique para interromper)</p>
              </button>
              :
              <button className="lastButton buttonSave" onClick={ handleSaveNote }>Salvar nota</button>
            }
          </form>
        }
      </div>
    </Container>
  )
}