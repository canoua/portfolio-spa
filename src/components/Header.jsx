import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  border-bottom: 3px solid #F8D568;
  padding-top: 10px;
  padding-bottom: 10px;
  // background-color: #F8D568;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 10px;
`

const HeaderName = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  line-height: 120%;
`

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderInner>
          <HeaderLogo>
            <Link to="/">
              <div className="link">
                <HeaderName>
                  <span className="yellow-text">Андрей</span>
                  <span>Каряка</span>
                </HeaderName>
                <h2 className="title-prof">Web-разработчик</h2>
              </div>
            </Link>
          </HeaderLogo>
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
        
        
      </div>
      
      
    </HeaderWrapper>
  )
}

export default Header;