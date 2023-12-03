import { PortfolioInner, PortfolioBox } from "../constants/portfolio";

function Portfolio() {
  return <>
    <PortfolioInner>
      <PortfolioBox>
        <h2 className="title-page">Портфолио</h2> 
      </PortfolioBox>
      <section className="projects block">
      {/* <div className="projects__title-wrapper">
        <h2 className="title-2 projects__title">Проекты</h2>
      </div> */}

      <ul className="filter">
        <li className="filter__item">
          <a className="filter__btn active text" href="#" id="all">Все</a>
        </li>
        <li className="filter__item">
          <a className="filter__btn text" href="#" id="filter__html">Верстка</a>
        </li>
        <li className="filter__item">
          <a className="filter__btn text" href="#" id="filter__vue">Vue</a>
        </li>
        <li className="filter__item">
          <a className="filter__btn text" href="#" id="filter__react">React</a>
        </li>
        <li className="filter__item">
          <a className="filter__btn text" href="#" id="filter__js">JavaScript</a>
        </li>
      </ul>
    
      <div className="projects-inner">
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__html"  href="https://akaryaka.github.io/mggroup/">
          <article className="projects__item">
            <picture>
              {/* <img src="images/1.webp" alt="project-1"> */}
            </picture>
          </article>
        </a>
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__html"  href="https://akaryaka.github.io/elvi-nails/">
          <article className="projects__item">
            <picture>
              {/* <img src="images/2.webp" alt="project-2"> */}
            </picture>
          </article>
        </a>
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__html"  href="https://akaryaka.github.io/ujjo/">
          <article className="projects__item">
            <picture>
              {/* <img src="images/3.webp" alt="project-3"> */}
            </picture>
          </article>
        </a>
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__html"  href="https://akaryaka.github.io/digital-flow/">
          <article className="projects__item">
            <picture>
              {/* <img src="images/4.webp" alt="project-4"> */}
            </picture>
          </article>
        </a>
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__vue"  href="https://weather-app-canoua.netlify.app">
          <article className="projects__item">
            <picture>
              {/* <img src="images/5.webp" alt="project-5"> */}
            </picture>
          </article>
        </a>
        <a className="projects__item-wrapper" data-attribute="all" data-filter="filter__react"  href="#">
          <article className="projects__item">
            список дел
          </article>
        </a>
      </div>
    </section>
    </PortfolioInner>
  </>
}

export default Portfolio;