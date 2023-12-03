import { ContactInner, ContactBox, Form, Input, Button, ContactTitle } from "../constants/contacts";

function Contact() {
  return <> 
    <ContactInner>
      <ContactBox>
        <Form className="form" action="#">
          <Input type="text" placeholder="Как вас зовут?" />
          <Input type="text" placeholder="Ваше сообщение" />
          <Input type="text" placeholder="Ваш номер телефона"/>
          <Button type="submit">Отправить</Button>
        </Form>
      </ContactBox>
      <ContactBox>
        <ContactTitle className="title-page">Контакты</ContactTitle>
      </ContactBox>
    </ContactInner>
  </>
}

export default Contact;