import styled from 'styled-components';

export const ServiceContainer = styled.div`
  width: 90%;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left:auto;
  margin-right: auto;
  margin-bottom: 1rem;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 50%;
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

  img {
    width: 100%;
  }
`;
export const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ColumnLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem .5rem;
  order:1;
  b {
    color: #6c8bc7;
  }
  p {
    margin-bottom: 1rem;
  }
`;
export const ColumnRight = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  /* padding: 1rem 2rem; */
`;