import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary-color: #8257e5;
    --accent-color: #24ef7f;
  }

  *{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body{
    font: 400 15px 'Poppins';
    background: #8257e5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 16px 'Poppins';
  }

  p {
    font: 400 15px 'Poppins';
  }

  h1 {
    font: 600 24px 'Poppins';
  }

  button{
    cursor: pointer;
  }

  input {
    height: 48px;
  }

  input, textarea {
    border-radius: 8px;
    border: 1px solid #E6E6F0;
    padding: 10px;
    padding-left: 15px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #C1BCCC;
      opacity: 1; /* Firefox */
      font-weight: 300;
    }
  }
`;
