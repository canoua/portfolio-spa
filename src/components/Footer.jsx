import styled from "styled-components";

const FooterTag = styled.footer`
  background-color: #F8D568;
`;

const FooterInner = styled.div`
  display: flex;
`;

const FooterList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
`;

function Footer() {
  return (
    <FooterTag>
      <div className="container">
        <FooterInner>
          <FooterList>
            <ListItem>
              <a href="https://dzen.ru/?clid=2320026&from=dist_bookmark&win=435&yredirect=true">tg</a>
            </ListItem>
            <ListItem>
              <a href="#">github</a>
            </ListItem>
            <ListItem>
              <a href="#">codewars</a>
            </ListItem>
          </FooterList>
        </FooterInner>
      </div>
    </FooterTag>
  )
}

export default Footer;