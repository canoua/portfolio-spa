import styled from "styled-components";

const myPhoto = {
  name: 'photo',
  url: '/photo.jpg'
}

const HomeInner = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  // background-color: #F8D568;
`

const HomePhoto = styled.div`
  width: 40%;
`

const Image = styled.img`
  width: 100%;
`


function Home() {
  return <>
    <div className="container">
      <HomeInner>
        <HomePhoto>
          <Image src={myPhoto.url} alt={myPhoto.name} />
        </HomePhoto>
        <span>Главная</span>
      </HomeInner>
    </div>
  </>
}

export default Home;