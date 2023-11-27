import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  background: #F8D568;
  padding: 15px 0;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 10px;
`

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderList>
          <ListItem>
            <Link to="/">
              <span className="link header-link">Главная</span>
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