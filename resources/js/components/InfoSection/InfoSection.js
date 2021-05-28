import React  from 'react';
import { Section, ColumnLeft, Container, ColumnRight, BtnWrap } from './Info.styles';
import { Button } from '../Button/Button';

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLable, reverse, image, display }) => {
  return (
    <Section display={display}>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <BtnWrap>
            <Button primary="true" to='/about'>
              {buttonLable}
            </Button>
          </BtnWrap>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default InfoSection;
