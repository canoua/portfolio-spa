import styled from "styled-components";

export const myPhoto = {
  name: 'photo',
  url: '/photo.jpg'
}

export const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`

export const HomePhoto = styled.div`
  // чтоб убрать белую полосу внизу...
  overflow: hidden;
  width: 50%;
  height: auto;
`

export const Image = styled.img`
  width: 100%;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Name = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
  line-height: 120%;
`
