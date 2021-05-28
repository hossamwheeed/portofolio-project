import styled from 'styled-components';

export const IntouchContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  
  h2,h3 {
    align-self: flex-start;
    color: #6c8bc7;
  }
`;
export const Touch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const TouchBox = styled.div`
  padding: 2rem 0;
  width: 100%;
`;
export const TouchContent = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .5rem 0;
    color: rgb(0 0 0 / .8);
    font-size: 18px;
    font-weight: bold;
    .icon{
      margin-right: .5rem;
    }
    a {
      text-decoration: none;
      color: rgb(0 0 0 / .8);
    }
  }
`;
