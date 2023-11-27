import { StackInner, StackBox } from "../constants/stack"

function Stack() {
  return <>
    <StackInner>
      <StackBox>
        <h2>Основной стек</h2>
          <div>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Препроцессоры(Pug, Sass)</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>Figma</li>
              <li>Git</li>
              <li>Gulp</li>
            </ul>
          </div>
          <h2 >Также работал с:</h2>
          <div>
            <ul>
              <li>React</li>
              <li>Wordpress</li>
              <li>PHP</li>
            </ul>
            <ul>
              <li>Photoshop</li>
              <li>Webpack/Parcel</li>
            </ul>
          </div>
      </StackBox>
      <StackBox>
        <h2 className="title-page">Стек</h2>
      </StackBox>
    </StackInner>
  </>
}

export default Stack