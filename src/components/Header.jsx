import { Link } from "react-router-dom";

function Header() {
  return <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <span>header</span>
  </>
}

export default Header;