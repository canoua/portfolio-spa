import { ContactInner, ContactBox, Form, Input, Button, ContactTitle } from "../constants/contacts";

function Contact() {
  return <> 
    <ContactInner>
      <ContactBox>
        <Form className="form" action="#">
          <Input type="text" placeholder="Ваше имя" />
          <Input type="text" placeholder="Ваше сообщение" />
          <Input type="text" placeholder="Как с вами связаться?"/>
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