import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderInner, HeaderList, ListItem } from "./constHeader";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderList>
          <ListItem>
            <Link to="/">
              <span className="link link_active header-link">Главная</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/stack">
              <div className="link header-link">Стек</div>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/portfolio">
              <span className="link header-link">Портфолио</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">
              <span className="link header-link">Контакты</span>
            </Link>
          </ListItem>
        </HeaderList>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header;