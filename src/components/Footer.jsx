import styled from "styled-components";

const FooterTag = styled.footer`
  background-color: #F8D568;
  padding: 30px 0;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const FooterLink = styled.a`
  color: #000;
  font-weight: 700;
`

function Footer() {
  return (
    <FooterTag>
      <div className="container">
        <FooterInner>
          <FooterList>
            <ListItem>
              <FooterLink href="https://t.me/andrew_karyaka" target="_blank">tg</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="https://github.com/canoua" target="_blank">github</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="https://www.codewars.com/users/canoua" target="_blank">codewars</FooterLink>
            </ListItem>
          </FooterList>
        </FooterInner>
      </div>
    </FooterTag>
  )
}

export default Footer;