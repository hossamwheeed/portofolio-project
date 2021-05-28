import styled from 'styled-components/macro';


export const HeaderSection = styled.section`
  height: 60vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-bottom: ${({ marginB }) => (marginB ? '0rem' : '4rem')};
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(0 0 0 / .6  );
  }
`;
export const HeaderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
export const HeaderContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  padding-left: 4rem;
  @media screen and (max-width: 576px){
    padding-left: 2rem;
  }
  h2 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: capitalize;
    text-shadow: 0px 0px 20px rgb(0 0 0 /.4);
    text-align: left;
    margin-bottom: .8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgb(0 0 0 /.4);
  }
`;