import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .link {
    color: #000;
  }

  .header-link {
    font-weight: 700;
  }

  .name-link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first-name {
    margin-right: 10px;
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