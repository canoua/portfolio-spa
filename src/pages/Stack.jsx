import { StackInner, StackBox, StackBoxInner, StackList, StackListItem } from "../constants/stack"

function Stack() {
  return <>
    <StackInner>
      <StackBox>
        <StackBoxInner>
          <StackList>
            <StackListItem>HTML (Pug)</StackListItem>
            <StackListItem>Sass</StackListItem>
            <StackListItem>JavaScript</StackListItem>
            <StackListItem>React</StackListItem>
            <StackListItem>Vite / Gulp</StackListItem>
            <StackListItem>Figma</StackListItem>
            <StackListItem>Git</StackListItem>
          </StackList>
        </StackBoxInner>
      </StackBox>
      <StackBox>
        <h2 className="title-page">Стек</h2>
      </StackBox>
    </StackInner>
  </>
}

export default Stack