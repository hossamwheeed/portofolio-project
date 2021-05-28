import React  from 'react';
import { HeaderContainer, HeaderImg, HeaderSection, HeaderWrapper, HeaderContent } from './Header.styles';


function Header({ src, header, paragraph, marginB }) {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <HeaderWrapper>
            <HeaderImg src={src} alt='Header' />
            <HeaderContent>
              <h2>{header}</h2>
              <p>{paragraph}</p>
            </HeaderContent>
          </HeaderWrapper>
        </HeaderContainer>

      </HeaderSection>
    </>
  )
}

export default Header;
