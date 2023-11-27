import styled from "styled-components";

const myPhoto = {
  name: 'photo',
  url: '/photo.jpg'
}

const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`

const HomePhoto = styled.div`
  // чтоб убрать белую полосу внизу...
  overflow: hidden;
  width: 50%;
  height: auto;
`

const Image = styled.img`
  width: 100%;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  // height: 100%;
  // width: 100%;
`;

const Name = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  line-height: 120%;
`

function Home() {
  return <>
    <HomeInner>
      <HomePhoto>
        <Image src={myPhoto.url} alt={myPhoto.name} />
      </HomePhoto>
      <Logo>
        <div className="link name-link">
          <Name>
            <span className="yellow-text first-name">Андрей</span>
            <span>Каряка</span>
          </Name>
          <h2 className="title-prof">Web-разработчик</h2>
        </div>
      </Logo>
    </HomeInner>
  </>
}

export default Home;