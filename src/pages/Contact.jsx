

function Contact() {

  return <> 
    <div className="container">
      <span>Контакты</span>
      <form action="#">
        <input type="text" placeholder="ваше имя" />
        <input type="text" placeholder="ваше сообщение" />
        <input type="text" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </>
}

export default Contact;