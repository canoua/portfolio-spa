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
  height: 100%;
  // чтоб убрать белую полосу внизу...
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Name = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  line-height: 120%;
`

function Home() {
  return <>
    <HomeInner>
      <HomePhoto>
        <Image src={myPhoto.url} alt={myPhoto.name} />
      </HomePhoto>
      <Logo>
        <div className="link">
          <Name>
            <span className="yellow-text">Андрей</span>
            <span>Каряка</span>
          </Name>
          <h2 className="title-prof">Web-разработчик</h2>
        </div>
      </Logo>
    </HomeInner>
  </>
}

export default Home;