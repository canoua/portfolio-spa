import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/stack">Стек</Link>
      </li>
      <li>
        <Link to="/portfolio">Портфолио</Link>
      </li>
      <li>
        <Link to="/contact">Контакты</Link>
      </li>
    </ul>
  )
}

export default Header;