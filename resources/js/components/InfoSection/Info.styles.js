import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem
}
`;
export const Container = styled.div`
  /* padding: 2rem calc((100vw - 1300px) / 2 ); */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
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
    grid-template-rows: 90vh;
    
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 0rem 0 1rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    color: #6c8bc7;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem 2rem; */
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
  }
  }
`;
export const BtnWrap = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;