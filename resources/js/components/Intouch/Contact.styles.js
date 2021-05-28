import styled from 'styled-components';

export const Submit = styled.button`
  font-size: 18px;
  color: #EFFFFA;
  background: #6c8bc7;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 100%;
  transform: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0;
  transition: .3s ease-in-out;
  &:hover {
    transform: none;
    background: #EFFFFA;
    color: #6c8bc7;
  }
`;

export const Container = styled.div`
 /* padding: 2rem calc((100vw - 1300px) / 2 ); */
 margin-left:auto;
 margin-right: auto;
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    background: linear-gradient(to right,#f6f6f6 0%, #f6f6f6 95%, #f6f6f6 99%);
    left: 0;
    top: 0;
    height: 100%;
    z-index: -1;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }
`;
export const Styles = styled.div`
  width: 80%;
  margin-left:auto;
 margin-right: auto;
 @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
  h3 {
    align-self: flex-start;
    color: #6c8bc7;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px auto;
  }
    
    label {
      margin-top: 20px;
      color: #6c8bc7;
      font-weight: bold;
    }

    input[name=message]{
      height: 50px;
    }

    .error {
      color: red;
      font-size: .6em;
    }
  }
`;