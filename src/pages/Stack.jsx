import { StackInner, StackBox, StackTitle, StackBoxInner } from "../constants/stack"

function Stack() {
  return <>
    <StackInner>
      <StackBox>
        <StackBoxInner>
          <StackTitle>Верстка</StackTitle>
          <ul>
            <li>HTML (Pug)</li>
            <li>CSS3 (Sass)</li>
            <li>JavaScript</li>
            <li>Vite/Gulp</li>
            <li>Figma</li>
            <li>Git</li>
          </ul>
        </StackBoxInner>
        <StackBoxInner>
          <StackTitle>Базовое знание</StackTitle>
          <ul>
            <li>React</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Photoshop</li>
            <li>Webpack/Parcel</li>
          </ul>
        </StackBoxInner>
        
      </StackBox>
      <StackBox>
        <h2 className="title-page">Стек</h2>
      </StackBox>
    </StackInner>
  </>
}

export default Stack