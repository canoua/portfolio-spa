import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: #000;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  .link{
    // color: #000;
    color: #fff;
  }

  .header-link:hover{
    color: #F8D568;
  }

  .container {
    max-width: 1190px;
    margin: 0 auto;
  }

  .title-prof {
    font-size: 20px;
    font-weight: 400;
  }

  .yellow-text {
    color: #F8D568;
  }
`