import styled from "styled-components"

const ContactInner = styled.div`
  height: 100vh;
`

function Contact() {
  return <> 
    <ContactInner>
      <span>Контакты</span>
      <form action="#">
        <input type="text" placeholder="ваше имя" />
        <input type="text" placeholder="ваше сообщение" />
        <input type="text" />
        <button type="submit">Отправить</button>
      </form>
    </ContactInner>
  </>
}

export default Contact;