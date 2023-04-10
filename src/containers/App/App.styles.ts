import styled, {createGlobalStyle} from "styled-components";
import background from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }

  button {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 8px 24px;
    background-color: #fff;
    filter: drop-shadow(2px 2px 0px #000000);
    
    transition: all 0.1s linear;
  }
  
  button:hover {
    filter: none;
  }
`
export const Wrapper = styled.div`
  background: url(${background}) center no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  
  .score {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .start {
    margin-bottom: 3rem;
  }
`