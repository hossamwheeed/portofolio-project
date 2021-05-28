import React  from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from 'styled-components';

const LoaderContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: #EFFFFA;
`;


const Loader = () => {
  return (
    <LoaderContainer>
      <PropagateLoader color={'#6c8bc7'} size={25} />
    </LoaderContainer>
  )
}

export default Loader;
