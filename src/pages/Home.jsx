import { HomeInner, HomePhoto, Image, Logo, Name, myPhoto } from "./../constants/home";

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