import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  border: 3px solid #000;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(15px);
  
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: .5rem;
  
  
  .question {
    margin-bottom: 1rem;
    font-weight: 600; 
  }
  
  .number {
    margin-bottom: 2rem;
    font-size: 20px;
    font-weight: 600;
  }
`

type ButtonWrapperProps = {
    correct: boolean,
    userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    font-weight: 600;
    background: ${({correct, userClicked}) =>
        correct 
                ? "green"
                : !correct && userClicked 
                ? "red"
                : "white"
                        
    };
  }
`
