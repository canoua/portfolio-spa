import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
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

  .title-page{
    font-size: 50px;
    line-height: 120%;
    font-weight: 700;
  }

  .yellow-text {
    color: #F8D568;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`