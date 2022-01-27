import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
	  margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }

  input {
    border: none;
    outline: none;
  }

  input:active,
  input:focus {
		border: none;
		outline: none;
	}

  p {
    margin: 0;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  button:active {
    outline: none;
  }
`;

export default GlobalStyle;
