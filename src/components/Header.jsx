import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  border-bottom: 3px solid #F8D568;
  display: flex;
  justify-content: space-between;
`

const HeaderLogo = styled.div`

`;

const HeaderList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <div>Андрей Каряка</div>
        <div>Web-разработчик</div>
      </HeaderLogo>
      <HeaderList>
        <ListItem>
          <Link to="/">Главная</Link>
        </ListItem>
        <ListItem>
          <Link to="/stack">Стек</Link>
        </ListItem>
        <ListItem>
          <Link to="/portfolio">Портфолио</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Контакты</Link>
        </ListItem>
      </HeaderList>
    </HeaderWrapper>
  )
}

export default Header;