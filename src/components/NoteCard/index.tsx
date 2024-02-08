import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Container } from "./style"

interface NoteCardProps {
  date: Date,
  content: string
}

export function NoteCard(props: NoteCardProps) {
  return (
    <Container>
      <h2>{ formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true }) }</h2>
      <p>{ props.content }</p>
    </Container>
  )
}