import styled from 'styled-components';

export const LNSection = styled.section`
  height: 100vh;
  @media screen and (max-width: 576px) {
    height: auto;
    margin-bottom: 1rem;
}
  h2 {
    text-align: center;
    color: #6c8bc7;
    padding: 0 2rem;
    font-size: clamp(1.5rem,6vw,1.7rem);
    margin: 2rem 0;
    letter-spacing: 5px;
    word-spacing: 20px;
  }
`;
export const LNContainer = styled.div`
 position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export const LNWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    flex-direction: column;
}
`;
export const NewsBox = styled.div`
  margin:  0 .5rem;
  max-width: 300px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: rgb(108 139 199 /.4);
  }
  div img {
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .projectName {
    width: 100%;
    text-align: left;
    position: absolute;
    bottom: 10%;
    padding-left: 2rem;
    color: #EFFFFA;
    text-transform: uppercase;
    font-size: 1.6rem;
  }
`;