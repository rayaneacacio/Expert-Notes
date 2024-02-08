import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import closeSvg from "../../assets/close.svg";
import ellipseSvg from "../../assets/ellipse.svg";

import { Container, NewNoteDiv } from "./style";

interface DialogProps {
  newNote?: boolean,
  audioNote?: boolean,
  note?: {
    date: Date,
    content: string
  }
}

export function Dialog(props: DialogProps) {
  return (
    <Container>
      <div>
        <button className="buttonIcon">
          <img src={ closeSvg } alt="" />
        </button>

        {
          props.newNote &&
          <NewNoteDiv>
            <h2>Adicionar nota</h2>

            <div>
              <p>Comece</p>
              <button>gravando uma nota em áudio</button>
              <p>ou se preferir</p>
              <button>utilize apenas texto.</button>
            </div>

            <button className="lastButton">Salvar nota</button>
          </NewNoteDiv>
        }

        {
          props.audioNote &&
          <div>
            <h2>Adicionar nota</h2>
            <p>
              Testando aqui o microfone enquanto eu gravo essa nova nota para a aplicação
            </p>
            <button className="lastButton">
              <img src={ ellipseSvg } alt="" />
              <p>Gravando! (clique para interromper)</p>
            </button>
          </div>
        }

        {
          props.note &&
          <div>
            <h2>{ formatDistanceToNow(props.note.date, { locale: ptBR, addSuffix: true}) }</h2>
            <p>{ props.note.content }</p>
            <button className="lastButton">
              <p>
                Deseja
                <span> apagar essa nota</span>
                ?
              </p>
            </button>
          </div>
        }
      </div>
    </Container>
  )
}